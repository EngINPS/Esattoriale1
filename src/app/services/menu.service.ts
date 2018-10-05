import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class MenuService {
   constructor(private http: HttpClient) {}

    public menuMock() {
      var getJSON = new Observable<any>(
        (observer) => {
          getJSON.subscribe();
              observer.next('MyJSON'); 
              //observer.complete();            
          });
        return getJSON;
    }
  }
