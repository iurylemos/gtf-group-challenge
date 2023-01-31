import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedServiceInterface } from '../interfaces/SharedService';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  // Observable string sources
  private emitChangeSource = new Subject<SharedServiceInterface>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: SharedServiceInterface) {
    this.emitChangeSource.next(change);
  }
}
