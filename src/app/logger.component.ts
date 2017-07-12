
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logs: any[] = [];

  info(msg: any) {
    this.logs.push(msg);
    console.log(msg);
  }

  error(msg: any) {
    this.logs.push(msg);
    console.error(msg);
  }

  warn(msg: any) {
    this.logs.push(msg);
    console.warn(msg);
  }

}
