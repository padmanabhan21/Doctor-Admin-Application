import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SingInService {

  constructor(private http: HttpClient) { }



insert_doctor(login){
  return this.http.post("https://doctorappnew.herokuapp.com/insert_doctor_login",login)
}
}