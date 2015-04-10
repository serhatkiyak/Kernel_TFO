#!/usr/bin/python

import csv

N = 87

## 10 connections

## Connection time
ctime_10 = [0] * N
ctime_20 = [0] * N
ctime_30 = [0] * N
ctime_40 = [0] * N
ctime_50 = [0] * N

## Processing time
dtime_10 = [0] * N
dtime_20 = [0] * N
dtime_30 = [0] * N
dtime_40 = [0] * N
dtime_50 = [0] * N

## Total time
ttime_10 = [0] * N
ttime_20 = [0] * N
ttime_30 = [0] * N
ttime_40 = [0] * N
ttime_50 = [0] * N

## Wait time
wait_10 = [0] * N
wait_20 = [0] * N
wait_30 = [0] * N
wait_40 = [0] * N
wait_50 = [0] * N

for index in range(1, 6):
    for folder in range(1, N+1):
        with open(str(folder) + '/' + str(index*10) + '.txt','rb') as tsvin:
            tsvin = csv.reader(tsvin, delimiter='\t')

            first = 1
	    counter = 0
	    ctime_sum = 0
            dtime_sum = 0
	    ttime_sum = 0
	    wait_sum = 0
            for row in tsvin:
	        if first == 1:
	            first = 0
	        else:
                    ctime_sum += int(row[2])
		    dtime_sum += int(row[3])
		    ttime_sum += int(row[4])
		    wait_sum += int(row[5])
                    counter += 1
	    ctime_mean = float(ctime_sum) / counter
	    dtime_mean = float(dtime_sum) / counter
	    ttime_mean = float(ttime_sum) / counter
	    wait_mean = float(wait_sum) / counter
            if index == 1:
	        ctime_10[folder-1] = ctime_mean
		dtime_10[folder-1] = dtime_mean
		ttime_10[folder-1] = ttime_mean
		wait_10[folder-1] = wait_mean
            elif index == 2:
		ctime_20[folder-1] = ctime_mean
		dtime_20[folder-1] = dtime_mean
		ttime_20[folder-1] = ttime_mean
		wait_20[folder-1] = wait_mean
            elif index == 3:
		ctime_30[folder-1] = ctime_mean
		dtime_30[folder-1] = dtime_mean
		ttime_30[folder-1] = ttime_mean
		wait_30[folder-1] = wait_mean
            elif index == 4:
		ctime_40[folder-1] = ctime_mean
		dtime_40[folder-1] = dtime_mean
		ttime_40[folder-1] = ttime_mean
		wait_40[folder-1] = wait_mean
            elif index == 5:
		ctime_50[folder-1] = ctime_mean
		dtime_50[folder-1] = dtime_mean
		ttime_50[folder-1] = ttime_mean
		wait_50[folder-1] = wait_mean

print ctime_20
