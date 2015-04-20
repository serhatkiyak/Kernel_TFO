#!/usr/bin/python

import csv
import os.path
import matplotlib.pyplot as plt
import pylab

##ALL

N = 87

## 10 connections

## Connection time
ctime_false = [0] * N
ctime_full = [0] * N
ctime_tfo_false = [0] * N
ctime_tfo_full = [0] * N

## Processing time
dtime_false = [0] * N
dtime_full = [0] * N
dtime_tfo_false = [0] * N
dtime_tfo_full = [0] * N

## Total time
ttime_false = [0] * N
ttime_full = [0] * N
ttime_tfo_false = [0] * N
ttime_tfo_full = [0] * N

## Wait time
wait_false = [0] * N
wait_full = [0] * N
wait_tfo_false = [0] * N
wait_tfo_full = [0] * N

for folder in range(1, N+1): 
    file_path = 'all/' + str(folder) + '/false.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_false[folder-1] = ctime_mean
	    dtime_false[folder-1] = dtime_mean
	    ttime_false[folder-1] = ttime_mean
	    wait_false[folder-1] = wait_mean

    file_path = 'all/' + str(folder) + '/full.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_full[folder-1] = ctime_mean
	    dtime_full[folder-1] = dtime_mean
	    ttime_full[folder-1] = ttime_mean
	    wait_full[folder-1] = wait_mean

    file_path = 'all/' + str(folder) + '/tfo_false.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_tfo_false[folder-1] = ctime_mean
	    dtime_tfo_false[folder-1] = dtime_mean
	    ttime_tfo_false[folder-1] = ttime_mean
	    wait_tfo_false[folder-1] = wait_mean

    file_path = 'all/' + str(folder) + '/tfo_full.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_tfo_full[folder-1] = ctime_mean
	    dtime_tfo_full[folder-1] = dtime_mean
	    ttime_tfo_full[folder-1] = ttime_mean
	    wait_tfo_full[folder-1] = wait_mean

nonzeros = 0
for index in range(0, N):
	if ctime_false[index] != 0 and ctime_full[index] != 0 and ctime_tfo_false[index] != 0 and ctime_tfo_full[index] != 0:
		nonzeros = nonzeros + 1

xaxis = [0] * nonzeros
for index in range(1, nonzeros+1):
	xaxis[index-1] = index

new_ctime_false = [0] * nonzeros
new_ctime_full = [0] * nonzeros
new_ctime_tfo_false = [0] * nonzeros
new_ctime_tfo_full = [0] * nonzeros

s_counter = 0
for index in range(0, N):
	if ctime_false[index] != 0 and ctime_full[index] != 0 and ctime_tfo_false[index] != 0 and ctime_tfo_full[index] != 0:
		new_ctime_false[s_counter] = ctime_false[index]
		new_ctime_full[s_counter] = ctime_full[index]
		new_ctime_tfo_false[s_counter] = ctime_tfo_false[index]
		new_ctime_tfo_full[s_counter] = ctime_tfo_full[index]
		s_counter = s_counter + 1

ctime_false = new_ctime_false
ctime_full = new_ctime_full
ctime_tfo_false = new_ctime_tfo_false
ctime_tfo_full = new_ctime_tfo_full

plt.ylabel('Connection time (ms)')
plt.xlabel('Server')
plt.scatter(xaxis, ctime_false, label='TCP + FALSE', color='black')
plt.scatter(xaxis, ctime_full, label='TCP + FULL', color='red')
plt.scatter(xaxis, ctime_tfo_false, label='TFO + FALSE', color='green')
plt.scatter(xaxis, ctime_tfo_full, label='TFO + FULL', color='blue')
##plt.ylim(0, 200)
##plt.xlim(0, 100)
plt.legend(loc = 'upper right')
plt.show()

##ONLY_TLS

N = 1595

## 10 connections

## Connection time
ctime_false = [0] * N
ctime_full = [0] * N

## Processing time
dtime_false = [0] * N
dtime_full = [0] * N

## Total time
ttime_false = [0] * N
ttime_full = [0] * N

## Wait time
wait_false = [0] * N
wait_full = [0] * N

for folder in range(1, N+1): 
    file_path = 'only_tls/' + str(folder) + '/false.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_false[folder-1] = ctime_mean
	    dtime_false[folder-1] = dtime_mean
	    ttime_false[folder-1] = ttime_mean
	    wait_false[folder-1] = wait_mean

    file_path = 'only_tls/' + str(folder) + '/full.txt'
    if os.path.exists(file_path):
        with open(file_path,'rb') as tsvin:
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
	        
	    ctime_full[folder-1] = ctime_mean
	    dtime_full[folder-1] = dtime_mean
	    ttime_full[folder-1] = ttime_mean
	    wait_full[folder-1] = wait_mean

unexpected = [0] * N
unexpected_index = 0

improvement = [0] * N
for index in range(0, N):
	improvement[index] = ctime_full[index] - ctime_false[index]
	if improvement[index] < 0:
		unexpected[unexpected_index] = index
		unexpected_index = unexpected_index + 1

new_unexpected = [0] * unexpected_index
new_unexpected_index = 0
for index in range(0, unexpected_index):
	if unexpected[index] > 0:
		new_unexpected[new_unexpected_index] = unexpected[index] + 1
		new_unexpected_index = new_unexpected_index + 1

print "Unexpected behavior where full handshake has less latency than false start:"
print new_unexpected

nonzeros = 0
for index in range(0, N):
	if ctime_false[index] != 0 and ctime_full[index] != 0:
		nonzeros = nonzeros + 1

xaxis = [0] * nonzeros
for index in range(1, nonzeros+1):
	xaxis[index-1] = index

new_ctime_false = [0] * nonzeros
new_ctime_full = [0] * nonzeros

s_counter = 0
for index in range(0, N):
	if ctime_false[index] != 0 and ctime_full[index] != 0:
		new_ctime_false[s_counter] = ctime_false[index]
		new_ctime_full[s_counter] = ctime_full[index]
		s_counter = s_counter + 1

ctime_false = new_ctime_false
ctime_full = new_ctime_full

plt.ylabel('Connection time (ms)')
plt.xlabel('Server')
plt.scatter(xaxis, ctime_false, label='TCP + FALSE', color='black')
plt.scatter(xaxis, ctime_full, label='TCP + FULL', color='red')
##plt.ylim(0, 200)
##plt.xlim(0, 100)
plt.legend(loc = 'upper right')
plt.show()

improvement = [0] * nonzeros
for index in range(0, nonzeros):
	improvement[index] = ctime_full[index] - ctime_false[index]

plt.ylabel('Connection time improvement (ms)')
plt.xlabel('Server')
plt.scatter(xaxis, improvement, label='IMPROVEMENT', color='green')
plt.plot([-500,2000], [0,0], 'k-', lw=2)
##plt.plot([-500,2000], [50,50], 'k-', lw=2)
##plt.ylim(0, 200)
##plt.xlim(-500, 2000)
plt.legend(loc = 'lower right')
plt.show()

percentage = [0] * nonzeros
for index in range(0, nonzeros):
	percentage[index] = ((ctime_full[index] - ctime_false[index]) / float(ctime_full[index])) * 100

plt.ylabel('Connection time improvement (percentage)')
plt.xlabel('Server')
##plt.scatter(xaxis, false, label='FALSE', color='red')
##plt.scatter(xaxis, full, label='FULL', color='green')
plt.scatter(xaxis, percentage, label='IMPROVEMENT', color='green')
plt.plot([-500,2000], [0,0], 'k-', lw=2)
##plt.plot([-500,2000], [50,50], 'k-', lw=2)
##plt.ylim(0, 200)
##plt.xlim(-500, 2000)
plt.legend(loc = 'lower right')
plt.show()

