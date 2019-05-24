import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  
  
  Livefeed(live){
    console.log("live",live)
    return this.http.post("https://doctorappnew.herokuapp.com/livefeed",live)
  }

  Booking(book){
    return this.http.post("https://doctorappnew.herokuapp.com/bookings",book) 
  }

  Select_Doc_Profile(select){
    return this.http.post("https://doctorappnew.herokuapp.com/selectdoctorprofile ",select)  
  }
}
