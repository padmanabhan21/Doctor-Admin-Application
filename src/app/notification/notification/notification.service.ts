import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

// SMS(notify){
//     return this.http.post("https://doctorappnew.herokuapp.com/seneSMSALL",notify)
//   }

EMAILALL(mail){
  return this.http.post("https://doctorappnew.herokuapp.com/SendEmailAll",mail)
}

SMSALL(smsall){
  return this.http.post("https://doctorappnew.herokuapp.com/SendSMS",smsall)
}

push(notify){
  return this.http.get("https://doctorappnew.herokuapp.com/",notify)
}
patientlist(updates){
  return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment',updates	)
}
}

