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

final_ctime_sum = [0] * 5
final_dtime_sum = [0] * 5
final_ttime_sum = [0] * 5
final_wait_sum = [0] * 5

final_ctime_sum_10 = 0
final_ctime_sum_20 = 0
final_ctime_sum_30 = 0
final_ctime_sum_40 = 0
final_ctime_sum_50 = 0

final_dtime_sum_10 = 0
final_dtime_sum_20 = 0
final_dtime_sum_30 = 0
final_dtime_sum_40 = 0
final_dtime_sum_50 = 0

final_ttime_sum_10 = 0
final_ttime_sum_20 = 0
final_ttime_sum_30 = 0
final_ttime_sum_40 = 0
final_ttime_sum_50 = 0

final_wait_sum_10 = 0
final_wait_sum_20 = 0
final_wait_sum_30 = 0
final_wait_sum_40 = 0
final_wait_sum_50 = 0

final_counter = 0
for x in range(0, N):
    final_ctime_sum_10 += ctime_10[x]
    final_ctime_sum_20 += ctime_20[x]
    final_ctime_sum_30 += ctime_30[x]
    final_ctime_sum_40 += ctime_40[x]
    final_ctime_sum_50 += ctime_50[x]

    final_dtime_sum_10 += dtime_10[x]
    final_dtime_sum_20 += dtime_20[x]
    final_dtime_sum_30 += dtime_30[x]
    final_dtime_sum_40 += dtime_40[x]
    final_dtime_sum_50 += dtime_50[x]

    final_ttime_sum_10 += ttime_10[x]
    final_ttime_sum_20 += ttime_20[x]
    final_ttime_sum_30 += ttime_30[x]
    final_ttime_sum_40 += ttime_40[x]
    final_ttime_sum_50 += ttime_50[x]

    final_wait_sum_10 += wait_10[x]
    final_wait_sum_20 += wait_20[x]
    final_wait_sum_30 += wait_30[x]
    final_wait_sum_40 += wait_40[x]
    final_wait_sum_50 += wait_50[x]

    final_counter += 1
final_ctime_sum[0] = float(final_ctime_sum_10) / final_counter
final_ctime_sum[1] = float(final_ctime_sum_20) / final_counter
final_ctime_sum[2] = float(final_ctime_sum_30) / final_counter
final_ctime_sum[3] = float(final_ctime_sum_40) / final_counter
final_ctime_sum[4] = float(final_ctime_sum_50) / final_counter

final_dtime_sum[0] = float(final_dtime_sum_10) / final_counter
final_dtime_sum[1] = float(final_dtime_sum_20) / final_counter
final_dtime_sum[2] = float(final_dtime_sum_30) / final_counter
final_dtime_sum[3] = float(final_dtime_sum_40) / final_counter
final_dtime_sum[4] = float(final_dtime_sum_50) / final_counter

final_ttime_sum[0] = float(final_ttime_sum_10) / final_counter
final_ttime_sum[1] = float(final_ttime_sum_20) / final_counter
final_ttime_sum[2] = float(final_ttime_sum_30) / final_counter
final_ttime_sum[3] = float(final_ttime_sum_40) / final_counter
final_ttime_sum[4] = float(final_ttime_sum_50) / final_counter

final_wait_sum[0] = float(final_wait_sum_10) / final_counter
final_wait_sum[1] = float(final_wait_sum_20) / final_counter
final_wait_sum[2] = float(final_wait_sum_30) / final_counter
final_wait_sum[3] = float(final_wait_sum_40) / final_counter
final_wait_sum[4] = float(final_wait_sum_50) / final_counter
    
print 'Connection time'    
print final_ctime_sum 
print 'Processing time'
print final_dtime_sum
print 'Total time'
print final_ttime_sum
print 'Waiting time'
print final_wait_sum

## 10 connections

TCP_sum = 0
TCP_counter = 0
for x in range(0, N):
    TCP_sum += ctime_10[x]
    TCP_counter += 1
TCP_ctime_10 = float(TCP_sum) / TCP_counter
##print TCP_ctime_10
##print ctime_10

## 20 connections

TCP_sum = 0
TCP_counter = 0
for x in range(0, N):
    TCP_sum += ctime_20[x]
    TCP_counter += 1
TCP_ctime_20 = float(TCP_sum) / TCP_counter
##print TCP_ctime_20
##print ctime_20

## 30 connections

TCP_sum = 0
TCP_counter = 0
for x in range(0, N):
    TCP_sum += ctime_30[x]
    TCP_counter += 1
TCP_ctime_30 = float(TCP_sum) / TCP_counter
##print TCP_ctime_30
##print ctime_30

## 40 connections

TCP_sum = 0
TCP_counter = 0
for x in range(0, N):
    TCP_sum += ctime_40[x]
    TCP_counter += 1
TCP_ctime_40 = float(TCP_sum) / TCP_counter
##print TCP_ctime_40
##print ctime_40

## 50 connections

TCP_sum = 0
TCP_counter = 0
for x in range(0, N):
    TCP_sum += ctime_50[x]
    TCP_counter += 1
TCP_ctime_50 = float(TCP_sum) / TCP_counter
##print TCP_ctime_50
##print ctime_50

