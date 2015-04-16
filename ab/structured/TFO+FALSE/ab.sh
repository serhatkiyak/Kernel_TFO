#!/bin/bash

a=1

while read SITE
do
	mkdir $a

	s="/"
	http="https://"
	url="$http$SITE$s"

	./ab -n 1 -c 1 -g $a/$SITE -f TLS1 $url

	for i in {10..50..10}
	do	
		./ab -n $i -c 1 -g $a/$i.txt -f TLS1 $url  
	done
	
	echo $a
	a=`expr $a + 1`

done < tfo.txt
