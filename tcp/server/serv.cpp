/* serv.cpp  -  Minimal ssleay server for Unix
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
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#include <netinet/tcp.h>
#include <sys/ioctl.h>
#include <linux/sockios.h>
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
  int listen_sd;
  int sd;
  struct sockaddr_in sa_serv;
  struct sockaddr_in sa_cli;
  socklen_t client_len;
  char receive_buf[1024];
  char*    str;
//  char     buf [4096];

  /* ----------------------------------------------- */
  /* Prepare TCP socket for receiving connections */

  listen_sd = socket (AF_INET, SOCK_STREAM, 0);
  
  memset (&sa_serv, '\0', sizeof(sa_serv));
  sa_serv.sin_family      = AF_INET;
  sa_serv.sin_addr.s_addr = INADDR_ANY;
  sa_serv.sin_port        = htons (1563);          /* Server Port number */
  
  err = bind(listen_sd, (struct sockaddr*) &sa_serv, sizeof (sa_serv));                
	     
  /* Receive a TCP connection. */
	     
//  int qlen = 16;                            // Value to be chosen by application
//  setsockopt(listen_sd, SOL_TCP, TCP_FASTOPEN, &qlen, sizeof(qlen));

  err = listen (listen_sd, 5);            

  client_len = sizeof(sa_cli);

  while(true)
  {
  	sd = accept (listen_sd, (struct sockaddr*) &sa_cli, &client_len);

	  int size = read(sd, receive_buf, 1024);
	  if(size == -1)
	  {
	  	cout<<"Something is wrong with reading!"<<endl;
	  }
	  for(int i = 0 ; i < strlen(receive_buf) ; i++)
	  {
		cout << receive_buf[i];
	  }
	  cout << endl;


//	close (sd);



	send(sd, "server-to-client", 1024, 0);

	size = read(sd, receive_buf, 1024);
	  if(size == -1)
	  {
	  	cout<<"Something is wrong with reading!"<<endl;
	  }
	  for(int i = 0 ; i < strlen(receive_buf) ; i++)
	  {
		cout << receive_buf[i];
	  }
	  cout << endl;

  }

  close (listen_sd);

  printf ("Connection from %lx, port %x\n", sa_cli.sin_addr.s_addr, sa_cli.sin_port);
  
  /* ----------------------------------------------- */
  /* TCP connection is ready. */


  /* DATA EXCHANGE - Receive message. */

//  recv(sd, buf, 4096, 0);
//  printf ("Read %s\n", buf);

  /* Clean up. */

  

  return 0;
}
/* EOF - serv.cpp */
