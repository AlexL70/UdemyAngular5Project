import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Server } from './DTO/server';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: Server[]) {
      return this.http.post('https://udemynghttp-5d1fc.firebaseio.com/data.json', servers);
  }
}
