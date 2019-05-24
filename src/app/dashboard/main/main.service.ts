import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class MainService {

  constructor(private http:HttpClient) { }

  countappoinment(count){
    return this.http.post("https://doctorappnew.herokuapp.com/CountAppoinment",count)
  }

  weeklyreport(week){
    return this.http.post("https://doctorappnew.herokuapp.com/Weeklyreport",week)
  }



 GetTime(DateTime) {
  var month = (DateTime.getMonth() < 10) ? "0" + (DateTime.getMonth() + 1) : (DateTime.getMonth() + 1);
  var day = (DateTime.getDate() < 10) ? "0" + DateTime.getMonth() : DateTime.getMonth();
  var hour = (DateTime.getHours() < 10) ? "0" + DateTime.getHours() : DateTime.getHours();
  var minute = (DateTime.getMinutes() < 10) ? "0" + DateTime.getMinutes() : DateTime.getMinutes();
  var second = (DateTime.getSeconds() < 10) ? "0" + DateTime.getSeconds() : DateTime.getSeconds();
  return DateTime.getDate() + "." + month + "." + DateTime.getFullYear() + " " + hour + ":" + minute + ":" + second;
}
}
