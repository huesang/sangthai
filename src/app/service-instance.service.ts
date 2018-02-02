import { Injectable } from '@angular/core';
import { Observable , Subject, ReplaySubject } from 'rxjs';
@Injectable()
export class ServiceInstanceService{
    eventInstance:Subject<any>=new ReplaySubject(1);
    constructor(){
    }
    setEvent(value:any):void{
        this.eventInstance.next(value)
    }
    receiveEvent():Observable<any>{
        return this.eventInstance;
    }
    reset(){
        this.eventInstance=new ReplaySubject(1);
    }
}