import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }



  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---====' + res);
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }

dailystatus(rep){
  return this.http.post('https://doctorappnew.herokuapp.com/dailystatusreport',rep)
}

illnessreport(ill){
  return this.http.post('https://doctorappnew.herokuapp.com/illnessbasedreport',ill)
}

channelreport(report){
  return this.http.post('https://doctorappnew.herokuapp.com/channelbasedreport',report)
}

locationreport(locat){
  return this.http.post('https://doctorappnew.herokuapp.com/Locationreport',locat)
}

barchart(){
  let body={
    "business_id": 103,
    "doctor_id": "janu118"
  }
  return this.http.post('https://doctorappnew.herokuapp.com/Weekdayreport',body)
}

// latlongreport(latlong){
//   console.log("asdf")
//   return this.http.post('https://doctorappnew.herokuapp.com/latlongreport',latlong)
// }
}
