#!/bin/bash

echo "1" > /proc/sys/net/ipv6/conf/all/disable_ipv6
echo "0" > /proc/sys/net/ipv4/tcp_fastopen
a=1

while read SITE
do
	mkdir $a

	dig +short -4 $SITE > $a/dig.txt
	read -r ip<$a/dig.txt

	s="/"
	http="http://"
	url="$http$ip$s"

	touch $a/$SITE

	echo "0" > /proc/sys/net/ipv4/tcp_fastopen
	
	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w $a/tcp" &
	pid=$!
	sleep 1
	for i in {1..6..1}
	do	
		mkdir $a/$i
		./wget -P $a -e robots=off -4 -H -p -k $url -o $a/$i/tcp_log.txt > $a/$i/tcp_time.txt 2>&1
	done
	sleep 1
	kill -SIGTERM $pid

	echo "0x403" > /proc/sys/net/ipv4/tcp_fastopen

	gnome-terminal -e "tcpdump -i eth0 -s 65535 -w $a/tfo" &
	pid=$!
	sleep 1
	for i in {1..6..1}
	do	
		./wget -P $a -e robots=off -4 -H -p -k $url -o $a/$i/tfo_log.txt > $a/$i/tfo_time.txt 2>&1
	done
	sleep 1
	kill -SIGTERM $pid

	a=`expr $a + 1`

done < tfo.txt

echo "0" > /proc/sys/net/ipv4/tcp_fastopen
