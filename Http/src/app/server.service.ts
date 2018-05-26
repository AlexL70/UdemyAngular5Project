import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Server } from './DTO/server';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: Server[]) {
      const headers = new Headers({
          'Content-Type': 'application/json'
      });
      return this.http.post('https://udemynghttp-5d1fc.firebaseio.com/data.json', servers,
        { headers: headers});
  }
}
