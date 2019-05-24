import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }


  Select_Doc_Profile(select){
    return this.http.post("https://doctorappnew.herokuapp.com/selectdoctorprofile ",select)  
  }

  Update_Doc_profile(config){
    return this.http.post("https://doctorappnew.herokuapp.com/update_doctor_profile",config) 
  }

  select_specialization(select){
     return this.http.post("https://doctorappnew.herokuapp.com/Select_Specialization",select)
  }

  select_service(ser){
    return this.http.post("https://doctorappnew.herokuapp.com/Select_Services",ser)
  }
}
