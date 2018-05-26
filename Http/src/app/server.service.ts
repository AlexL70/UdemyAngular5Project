import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Server } from './DTO/server';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: Server[]): Observable<Response> {
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
    //   return this.http.post('https://udemynghttp-5d1fc.firebaseio.com/data.json', servers,
    //     { headers: headers});
    return this.http.put('https://udemynghttp-5d1fc.firebaseio.com/data.json', servers,
    { headers: headers});
}

  getServers(): Observable<Server[]> {
      return this.http.get('https://udemynghttp-5d1fc.firebaseio.com/data')
        .map(
            (response: Response) => {
                const data = response.json();
                //  This transformation is not really necessary. It's been done just
                //  for a demo purposes
                // for (const server of data) {
                //     server.name = `FETCHED_${server.name}`;
                // }
                return data;
            }
        ).catch(
            (error: Response) => {
                console.log('Error getting servers.');
                return Observable.throw(error);
            }
        );
  }
}
