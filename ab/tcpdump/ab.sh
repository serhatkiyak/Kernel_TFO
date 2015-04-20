#!/bin/bash

echo "1" > /proc/sys/net/ipv6/conf/all/disable_ipv6
echo "0" > /proc/sys/net/ipv4/tcp_fastopen
a=1
mkdir only_tls

while read SITE
do
	mkdir only_tls/$a

	dig +short -4 $SITE > only_tls/$a/dig.txt
	read -r ip<only_tls/$a/dig.txt

	s="/"
	http="https://"
	url="$http$ip$s"

	touch only_tls/$a/$SITE
	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w only_tls/$a/false" &
	pid=$!
	sleep 1
	./ab -n 10 -c 1 -g only_tls/$a/false.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid
	
	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w only_tls/$a/full" &
	pid=$!
	sleep 1
	ab -n 10 -c 1 -g only_tls/$a/full.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid

	a=`expr $a + 1`

done < tls.txt

a=1
mkdir all

while read SITE
do
	mkdir all/$a

	dig +short -4 $SITE > all/$a/dig.txt
	read -r ip<all/$a/dig.txt

	s="/"
	http="https://"
	url="$http$ip$s"

	touch all/$a/$SITE

	echo "0" > /proc/sys/net/ipv4/tcp_fastopen

	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w all/$a/false" &
	pid=$!
	sleep 1
	./ab -n 10 -c 1 -g all/$a/false.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid
	
	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w all/$a/full" &
	pid=$!
	sleep 1
	ab -n 10 -c 1 -g all/$a/full.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid

	echo "0x403" > /proc/sys/net/ipv4/tcp_fastopen

	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w all/$a/tfo_false" &
	pid=$!
	sleep 1
	./ab -n 10 -c 1 -g all/$a/tfo_false.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid

	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w all/$a/tfo_full" &
	pid=$!
	sleep 1
	ab -n 10 -c 1 -g all/$a/tfo_full.txt -f TLS1 $url
	sleep 1
	kill -SIGTERM $pid

	a=`expr $a + 1`

done < tfo.txt

echo "0" > /proc/sys/net/ipv4/tcp_fastopen
