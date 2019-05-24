import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientlistService {

  constructor(private http:HttpClient ) { }
// patientlist service
  patientlist(updates){
    return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment',updates	)
  }
  updateappointment(appointment){
    return this.http.post('https://doctorappnew.herokuapp.com/UpdateAppoinment',appointment    )
  }


}
