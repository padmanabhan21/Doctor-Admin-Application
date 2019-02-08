import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  dailystatus(param) {
    return this.http.post('http://doctorappnew.herokuapp.com/dailystatusreport', param);
  }

  illnessreport(param) {
    return this.http.post('https://doctorappnew.herokuapp.com/illnessbasedreport', param)
  }

  channelreport(param) {
    return this.http.post('https://doctorappnew.herokuapp.com/channelbasedreport', param)
  }

  locationreport(param) {
    return this.http.post('https://doctorappnew.herokuapp.com/Locationreport', param)
  }

  //business id and doctor id have to come from login session
  barchart() {
    let body = {
      "business_id": 103,
      "doctor_id": "janu118"
    }
    return this.http.post('https://doctorappnew.herokuapp.com/Weekdayreport', body)
  }
}
