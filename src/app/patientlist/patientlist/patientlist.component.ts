import { Component, OnInit } from '@angular/core';
import { PatientlistService } from './patientlist.service';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css'],
  providers:[PatientlistService]
})


export class PatientlistComponent implements OnInit {
  public patientListData:any = [];
  public today=Date.now();
  public param:boolean;
  
  
  constructor(private patientlistdata:PatientlistService, private router:Router, private storage:LocalStorageService)  { }
  

  ngOnInit() {
    this.patientlist();
  }

//Patient List 
patientlist(){
  let patient={
    "doctor_id":this.storage.retrieve('doctor_id'),
    "business_id":this.storage.retrieve('business_id'),
    "business_date":"2019-03-01"
  }
  this.patientlistdata.patientlist(patient).subscribe((Response: any) => {
  if(Response.Message_Code == "ASS"){
    this.patientListData = Response.output;
    console.log("Today's Token",JSON.stringify(this.patientListData));
  }
});
  
}
 public app_id;
 public cancel=false;
 public checkout=false;
 


public username:string;
public appointmentid:string;
public select;
public reason:any;

toggle(param){
    this.username = param.user_name;
    this.appointmentid = param.app_id;
  

}

update(select,reason){
  if(reason!=""){

  let appointment={
 
      "token_status":select,
      "appointment_id": this.appointmentid,
      "reason":reason 
  }
  this.patientlistdata.updateappointment(appointment).subscribe((Response:any)=>{
    if(Response.Message_Code == "RUS"){
      alert(Response.Message)
    }
  });
}

// else{
//   alert("check your button and Reason ")
// }
}
}
