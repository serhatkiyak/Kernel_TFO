/* cli.cpp  -  Minimal ssleay client for Unix
   30.9.1996, Sampo Kellomaki <sampo@iki.fi> */

/* mangled to work with SSLeay-0.9.0b and OpenSSL 0.9.2b
   Simplified to be even more minimal
   12/98 - 4/99 Wade Scholine <wades@mail.cybg.com> */

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <memory.h>
#include <errno.h>
#include <sys/types.h>
#include <sys/syscall.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#include <netinet/tcp.h>
#include <sys/ioctl.h>
#include <linux/sockios.h>
#include <linux/kernel.h>
#include <sys/mman.h>
#include <string.h>


#ifndef WIN32
#include <cstdlib>
#include <netdb.h>
#else
#include <winsock2.h>
#include <ws2tcpip.h>
#endif
#include <fstream>
#include <iostream>
#include <cstring>
#include <errno.h>
#include <arpa/inet.h>
#include <sstream>

using namespace std;

int main ()
{
  int err;
  int sd;
  struct sockaddr_in sa;
  char*    str;
  char     buf [1024];
  
  /* ----------------------------------------------- */
  /* Create a socket and connect to server using normal socket calls. */

  sd = socket (AF_INET, SOCK_STREAM, 0);    

  memset (&sa, '\0', sizeof(sa));
  sa.sin_family      = AF_INET;
  sa.sin_addr.s_addr = inet_addr ("10.0.0.29");   /* Server IP */
  sa.sin_port        = htons     (1564);          /* Server Port number */

//  sendto(sd, "client-to-server-1", 1024, MSG_FASTOPEN, (struct sockaddr *) &sa, sizeof(sa));
  err = syscall(322, sd, (struct sockaddr*) &sa, sizeof(sa));   
//  err = connect(sd, (struct sockaddr*) &sa, sizeof(sa)); 
  printf("connect err code: %d\n", err);


  /* ----------------------------------------------- */
  /* Now we have TCP conncetion. */
  
  
  /* --------------------------------------------------- */
  /* DATA EXCHANGE - Send a message. */

 //   err = send(sd, "client-to-server-1", 1024, 0);
    err = syscall(323, sd, "client-to-server-1", 1024, 0);
    printf("send err code: %d\n", err);

    int size = read(sd, buf, 1024);
    if(size == -1)
    {
    	cout<<"Something is wrong with reading!"<<endl;
    }
    for(int i=0; i<strlen(buf); i++)
    {
    	cout<<buf[i];
    }
    cout<<endl;

 //   err = send(sd, "client-to-server-2", 1024, 0);
    err = syscall(323, sd, "client-to-server-2", 1024, 0);
    printf("send err code: %d\n", err);
//    syscall(323, sd, "client-to-server-1", 1024, 0);
//  sendto(sd, "client-to-server-1", 1024, MSG_FASTOPEN, (struct sockaddr *) &sa, sizeof(sa));


  /* Clean up. */

  close (sd);

  return 0;
}
/* EOF - cli.cpp */
