import { Component, OnInit } from '@angular/core';
import {NotificationService} from './notification.service';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers:[NotificationService]
})


export class NotificationComponent implements OnInit {
  public sms=false;
  public email=false;
  public push=false;
  public Cancel=false;
  public Checkout=false;
  public Booking=false;
  public mymessage:any=[];
  public mytittle:any=[];
  public patientListData:any=[];
  public patient;

  constructor(private notification:NotificationService,private router:Router,private storage:LocalStorageService) { }
  ngOnInit() {
    
  }




patientlist(){
  let patient={
    "doctor_id":this.storage.retrieve('doctor_id'),
    "business_id":this.storage.retrieve('business_id'),
    "business_date":"2019-03-01"
  }
  this.notification.patientlist(patient).subscribe((Response: any) => {
  if(Response.Message_Code == "ASS"){
    this.patientListData = Response.output;
    console.log("patientlist",Response.patientListData)

    for(var i=0;i<this.patientListData.length;i++){
      this.patient = this.patient + this.patientListData[i].user_name + ",";
      alert(this.patient)
      
  }
}
  });
  
}
 
/********************************************************************************************/
test(mymessage,mytittle,booking,cancel,checkout){
    console.log("aggg")
     if(this.mymessage !="" && this.mytittle !="" ){
       console.log("empty",mymessage,mytittle)

/**************************  SMS  *************************************/
       if(this.sms==true){
        // alert("You are selecting SMS notification");
        if(this.Booking==true){
          // alert("You are selecting sms Booking notification");

        let sms={
          "business_id":this.storage.retrieve('business_id'),
          "doctor_id":this.storage.retrieve('doctor_id'),
          "business_date":"2019-03-01",
          "token_status":"Booked",
          "message":mymessage
       }
       
        console.log("this sms")
          this.notification.SMSALL(sms).subscribe((Response: any)=>{
            console.log("sms")
            if(Response.Message_Code=="SSS"){
                // alert(Response.Message);
            }
          })
      }
         
       else if(this.Cancel==true){
          // alert("You are selecting SMS Cancel notification");

          let sms={
            "business_id":this.storage.retrieve('business_id'),
            "doctor_id":this.storage.retrieve('doctor_id'),
            "business_date":"2019-03-01",
            "token_status":"Cancel",
            "message":mymessage
         }
         
          console.log("this sms")
            this.notification.SMSALL(sms).subscribe((Response: any)=>{
              console.log("sms")
              if(Response.Message_Code=="SSS"){
                  // alert(Response.Message);
              }
            })
         }
        else if(this.Checkout==true){
          // alert("You are selecting SMS Checkout notification");

          let sms={
            "business_id":this.storage.retrieve('business_id'),
            "doctor_id":this.storage.retrieve('doctor_id'),
            "business_date":"2019-03-01",
            "token_status":"Checkout",
            "message":mymessage
         }
         
          console.log("this sms")
            this.notification.SMSALL(sms).subscribe((Response: any)=>{
              console.log("sms")
              if(Response.Message_Code=="SSS"){
                  // alert(Response.Message);
                  console.log("smsall",Response.Message);
              }
            })
         } 
        }
       
      

       if(this.email==true){
        // alert("You are selecting Email notification");
        if(this.Booking==true){
          // alert("You are selecting email Booking notification");
                    
       let mailall={
        "doctor_id":this.storage.retrieve('doctor_id'),
        "business_id":this.storage.retrieve('business_id'),    
        "message":
         {
             "name":" mohan",
             "message":mymessage,
             "token_no":"8",
             "token_status":"Booked",
             "wait_time":"30 min(s)",
             "bus_hour": "9 AM to 6 PM ",
             "break_time" : "2 PM to 3 PM",
             "address" : "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
             "hospital":"-by MIOT Hospital"
         },
         "subject":mytittle
    }
  
 
      this.notification.EMAILALL(mailall).subscribe((Response: any)=>{
        if(Response.Message_code=="MSS"){
            // alert(Response.Message);
        }
        
      })
    } 
  
        
        else if(this.Cancel==true){
          // alert("You are selecting email Cancel notification");

          let mailall={
            "doctor_id":this.storage.retrieve('doctor_id'),
            "business_id":this.storage.retrieve('business_id'),    
            "message":
             {
                 "name":" mohan",
                 "message":mymessage,
                 "token_no":"8",
                 "token_status":"Cancel",
                 "wait_time":"30 min(s)",
                 "bus_hour": "9 AM to 6 PM ",
                 "break_time" : "2 PM to 3 PM",
                 "address" : "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
                 "hospital":"-by MIOT Hospital"
             },
             "subject":mytittle
        }
      
     
          this.notification.EMAILALL(mailall).subscribe((Response: any)=>{
            if(Response.Message_code=="MSS"){
                // alert(Response.Message);
            }
            
          })
         }
        else if(this.Checkout==true){
          // alert("You are selecting email Checkout notification");

          let mailall={
            "doctor_id":this.storage.retrieve('doctor_id'),
            "business_id":this.storage.retrieve('business_id'),    
            "message":
             {
                 "name":" mohan",
                 "message":mymessage,
                 "token_no":"8",
                 "token_status":"Checkout",
                 "wait_time":"30 min(s)",
                 "bus_hour": "9 AM to 6 PM ",
                 "break_time" : "2 PM to 3 PM",
                 "address" : "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
                 "hospital":"-by MIOT Hospital"
             },
             "subject":mytittle
        }
      
     
          this.notification.EMAILALL(mailall).subscribe((Response: any)=>{
            if(Response.Message_code=="MSS"){
                // alert(Response.Message);
            }
            
          })
         } 
        } 

      
   
      if(this.push==true){
        // alert("You are selecting Push notification");
        if(this.Booking==true){
          // alert("You are selecting Push Booking notification");
         }
         if(this.Cancel==true){
          // alert("You are selecting Push Cancel notification");
         }
         if(this.Checkout==true){
          // alert("You are selecting Push Checkout notification");
         } 
      }
       
    }  
    
    
  else{
        console.log("elsr")
        // alert("Type a Message and Tittle and check your checkboxes");
      }
    alert("Notfication has been sent to patients");
  }
}