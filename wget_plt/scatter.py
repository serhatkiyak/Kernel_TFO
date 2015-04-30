#!/usr/bin/python

import csv
import os.path
import matplotlib.pyplot as plt
import pylab
import numpy as np

N = 121

ctime_tcp = [0] * N
ctime_tfo = [0] * N

for folder in range(1, N+1): 
    tcp_total = 0
    tfo_total = 0
    tcp_counter = 0
    tfo_counter = 0
    for iteration in range(1, 7): 
        tcp_file_path = str(folder) + '/' + str(iteration) + '/tcp_time.txt'
	tfo_file_path = str(folder) + '/' + str(iteration) + '/tfo_time.txt'
        if os.path.exists(tcp_file_path):
            with open(tcp_file_path,'rb') as tsvin:
                tsvin = csv.reader(tsvin, delimiter='\t')
		for row in tsvin:
		    if row == []:
			continue
		    tcp_string = row[1]
		    start = tcp_string.find('m')
		    end = tcp_string.find('s')
		    tcp_total += float(tcp_string[start+1:end])
		    tcp_counter = tcp_counter + 1
		    break
        if os.path.exists(tfo_file_path):
            with open(tfo_file_path,'rb') as tsvin:
                tsvin = csv.reader(tsvin, delimiter='\t')
		for row in tsvin:
		    if row == []:
			continue
		    tfo_string = row[1]
		    start = tfo_string.find('m')
		    end = tfo_string.find('s')
		    tfo_total += float(tfo_string[start+1:end])
		    tfo_counter = tfo_counter + 1
		    break
    if tcp_counter != 0:
        ctime_tcp[folder-1] = tcp_total / tcp_counter
    if tfo_counter != 0:
        ctime_tfo[folder-1] = tfo_total / tfo_counter	

xaxis = [0] * N
for index in range(1, N+1):
	xaxis[index-1] = index

plt.ylabel('Page load time (s)')
plt.xlabel('Server')
##plt.scatter(xaxis, false, label='FALSE', color='red')
##plt.scatter(xaxis, full, label='FULL', color='green')
plt.scatter(xaxis, ctime_tcp, label='TCP', color='green')
plt.scatter(xaxis, ctime_tfo, label='TFO', color='red')
##plt.plot([-500,2000], [0,0], 'k-', lw=2)
##plt.plot([-500,2000], [50,50], 'k-', lw=2)
plt.ylim(0, 0.5)
##plt.xlim(-500, 2000)
plt.legend(loc = 'upper left')
plt.show()

percentage = [0] * N
for index in range(0, N):
	percentage[index] = ((ctime_tcp[index] - ctime_tfo[index]) / float(ctime_tcp[index])) * 100

plt.ylabel('Page load time improvement (percentage)')
plt.xlabel('Server')
##plt.scatter(xaxis, false, label='FALSE', color='red')
##plt.scatter(xaxis, full, label='FULL', color='green')
plt.scatter(xaxis, percentage, label='IMPROVEMENT', color='green')
plt.plot([0,142], [0,0], 'k-', lw=2)
##plt.plot([-500,2000], [50,50], 'k-', lw=2)
##plt.ylim(0, 200)
##plt.xlim(-500, 2000)
plt.legend(loc = 'lower right')
plt.show()

data = percentage
num_bins = 100
counts, bin_edges = np.histogram(data, bins=num_bins, normed=True)
cdf = np.cumsum(counts)
scale = 1.0/cdf[-1]
ncdf = scale * cdf
plt.xlabel('Page load time improvement (percentage)')
plt.plot(bin_edges[1:], ncdf)
plt.show()
