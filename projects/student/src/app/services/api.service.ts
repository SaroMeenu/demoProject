import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {
  private clientSource$ = new BehaviorSubject<string>('');
  client = this.clientSource$.asObservable();

  constructor() { }

  setUser(client:any):void {
    this.clientSource$.next(client);
  }

}