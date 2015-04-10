#!/usr/bin/python

import matplotlib.pyplot as plt

tcp_false = [71.6827586206897, 72.64195402298851, 72.71455938697318, 75.166091954023, 72.42919540229887]
tfo_false = [40.193103448275856, 39.83850574712645, 39.95325670498085, 40.148563218390784, 39.12781609195402]
tcp_tls = [96.96436781609196, 99.04137931034484, 96.79310344827582, 98.46609195402299, 98.32597701149422]
tfo_tls = [73.51149425287358, 72.01494252873565, 71.62452107279694, 70.83505747126438, 73.8712643678161]


xaxis = [10, 20, 30, 40, 50]

plt.ylabel('Average connection time (ms)')
plt.xlabel('Number of consecutive connections')
plt.plot(xaxis, tcp_false, label='TLS FALSE START')
plt.plot(xaxis, tfo_false, label='TCP FAST OPEN + TLS FALSE START')
plt.plot(xaxis, tcp_tls, label='TCP + TLS')
plt.plot(xaxis, tfo_tls, label='TCP FAST OPEN + TLS')
plt.ylim(0, 100)
##plt.legend(loc = 'lower right')
plt.show()
