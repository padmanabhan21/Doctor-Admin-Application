import { Component, OnInit } from '@angular/core';
import { PatientlistService } from './patientlist.service';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import * as moment from 'moment';

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
  public ischecked:boolean = false;
  public now:any;
  
  
  constructor(private patientlistdata:PatientlistService, private router:Router, private storage:LocalStorageService)  { }
  

  ngOnInit() {
    this.patientlist();
    this.now = moment().format('YYYY-MM-DD');
    console.log("DATEeeee :",this.now);
  }

//Patient List 
patientlist(){
  let patient={
    "doctor_id":this.storage.retrieve('doctor_id'),
    "business_id":this.storage.retrieve('business_id'),
    "business_date":moment().format('YYYY-MM-DD')
  }
  console.log("data to server****",patient);
  this.patientlistdata.patientlist(patient)
  .subscribe((Response: any) => {
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
closeModal(){
  this.ischecked = false;
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
      this.ischecked = true;
      alert(Response.Message)
    }
  });
}

// else{
//   alert("check your button and Reason ")
// }
}
}
