import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Server } from './DTO/server';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: Server[]): Observable<Response> {
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
      return this.http.post('https://udemynghttp-5d1fc.firebaseio.com/data.json', servers,
        { headers: headers});
  }

  getServers(): Observable<Response> {
      return this.http.get('https://udemynghttp-5d1fc.firebaseio.com/data.json');
  }
}
