import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdataService {
  userSubject = new Subject<any[]>();

  $competitors = this.userSubject.asObservable();

  constructor() { }

  sendCompetitor(comp: any) {
    this.userSubject.next(comp);
    console.log(comp);
  }

}
