import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable,of, from } from 'rxjs';

@Injectable()
export class MyJSON {

  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/menu.json")

  }

}