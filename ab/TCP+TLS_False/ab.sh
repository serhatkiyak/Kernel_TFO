#!/bin/bash

while read SITE
do
	mkdir $SITE

	s="/"
	http="https://"
	url="$http$SITE$s"

	for i in {10..50..10}
	do	
		./ab -n $i -c 1 -f TLS1 $url &> $SITE/$i.txt 
	done

done < tfo.txt
