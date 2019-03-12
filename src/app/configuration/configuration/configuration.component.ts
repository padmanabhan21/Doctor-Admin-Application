import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import * as moment from 'moment';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers:[ConfigurationService]  
})
export class ConfigurationComponent implements OnInit {
  // public today:any=new Date().getDay();
  public now:any;
  public select:any=[];
  public time:any=[];
  public sttime:any="";
  public edtime:any="";
  public avgtime:any="";
  // public day:any=new Date().getDay();
  public specialization:any=[];
  public Specialization:any=[];
  public Service:any=[];
  public spec:string="";
  public service:any=[];
  public ser:string="";
  public sntime:any=[];
  public entime:any=[];
  public day:any;
  public days;
  public timing:any=[];
  public start_time:string;
  public end_time:string;
  
  public srvc:any=[];
  public listdata:any=[];
  public spec_id;
  public servi_id;
  public doc_profile_id;
  

  constructor( private router:Router,private config:ConfigurationService, private storage:LocalStorageService) {
    
    // setInterval(() => {
    //   this.now = new Date();
    //   this.now
    //   console.log("time",this.now);
    // }, 1000);

   
  }
  ngOnInit() {
    this.Select_Doc_Profile();
    // this.update(param1,param2);
   this.select_specialization();
   this. select_service();
   
   this.now = moment().format("ddd").toLowerCase();

   console.log("DATE :",this.now);
  //  this.storage.store("doctor_id",this.doc_profile_id);
  //  this.now= this.{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}
  // this.
  }


  Select_Doc_Profile(){

    let body={
      "business_id":this.storage.retrieve('business_id'),
      "doctor_id": this.storage.retrieve('doctor_id')
    }
    this.config.Select_Doc_Profile(body).subscribe((Response:any)=>{
      if(Response.Message_Code=="RSS"){
        this.select=Response.output[0];
        console.log("selectdocprofile",this.select);
        this.doc_profile_id = this.select.doctor_profile_id;
        
      
        console.log("docprofileiddddddd",this.doc_profile_id);
        
        
        console.log("Timings",this.select.timing[0].day);
        for(var i=0;i<this.select.timing.length;i++){
          if(this.select.timing[i].day == this.now){
            this.start_time = this.select.timing[i].start_timing;
            this.end_time = this.select.timing[i].end_timing;
          }
        }
        console.log("start_time",this.start_time);
        console.log("end_time",this.end_time);

        // this.days = this.select.timing[0].day;
        // alert(this.days);
       

        
        console.log("select doc profile ",this.select);
        this.specialization = Response.output[0].specialization;


      for(var i=0;i<this.specialization.length;i++){
        this.spec = this.spec + this.specialization[i].specialization_name + ",";
      }

      console.log("Specialization for View",this.spec);
      console.log("select",this.select);
      console.log("specilizationnnnnnnn",JSON.stringify(this.specialization));
      
      this.service = Response.output[0].services;

      for(var i=0;i<this.service.length;i++){
        this.ser = this.ser + this.service[i].service_name + ",";
      }

      this.time=Response.output[0].timing;
      
      for(var i=0;i<this.time.length;i++){
        // if(this.day==this.today){
           this.day = this.day + this.time[i].day
        
        this.sttime = this.sttime + this.time[i].start_timing + ",";
          this.edtime = this.edtime + this.time[i].end_timing + ",";
        // }
      } 
    }
    })
  }

  public dd;
  public mm;
  public terst=[]

  select_specialization(){
    let body={
      
    }
    this.config.select_specialization(body).subscribe((Response:any)=>{
      if(Response.Message_Code=="RSS"){
        this.terst=Response.output;
        console.log("specializations",this.terst)
        this.spec_id = this.terst[0].specialization_id;
        console.log("spic_idddddd",this.spec_id)
      }
    })
  }

  update(weekdaystarttime,weekdayendtime,weekendstarttime,weekendendtime,specialization,service,awt){

      let body={  
        "business_id":this.storage.retrieve('business_id'),
        "doctor_profile_id":this.storage.retrieve('doctor_id'),
        // "doctor_name":"jani",  
        // "qualification":"mbbs",
        // "consultationfees":400,
        // "mobile":"8678942414",
        "Specialization":[specialization],
         "services":[service],
        // "specialist":"General",
        // "doctor_id":this.storage.retrieve('doctor_id'),
        // "country":"India",
        "average_waiting_time":awt,
        // "doc_likes":0,
        // "doc_votes":0,
        "days":[
               {
                "start_timing":weekdaystarttime,
                   "end_timing":weekdayendtime,
                   "day":"mon",
                   "session":"morning"
               },
               {
                "start_timing":weekdaystarttime,
                   "end_timing":weekdayendtime,
                  "day":"tue",
                   "session":"morning"
               },
               {
                "start_timing":weekdaystarttime,
                   "end_timing":weekdayendtime,
                   "day":"wed",
                   "session":"morning"
               },
               {
                "start_timing":weekdaystarttime,
                   "end_timing":weekdayendtime,
                   "day":"thu",
                   "session":"morning"
               },
               {
                "start_timing":weekdaystarttime,
                   "end_timing":weekdayendtime,
                   "day":"fri",
                   "session":"morning"
               },
               {
                "start_timing":weekendstarttime,
                   "end_timing":weekendendtime,
                   "day":"sat",
                   "session":"morning"
               },
               {
                "start_timing":weekendstarttime,
                   "end_timing":weekendendtime,
                   "day":"sun",
                   "session":"morning"
               }
              ]
    }
   
    console.log("updareeeeeeeeee",JSON.stringify(body));

       this.config.Update_Doc_profile(body).subscribe((Response:any)=>{
         console.log("service")
          if(Response.Message_Code=="RUS"){
          alert(Response.Message)
          console.log("resoponse",Response.Message_Code);

        }
        else{
          alert(Response.Message)
        }
        // else if(Response.Message_Code =="RUUS"){
          
        //   alert(Response.Message)
        // }
          
        
       });


       
  
}


  

  select_service(){
    let body={

    }
    this.config.select_service(body).subscribe((Response:any)=>{
      if(Response.Message_Code=="RSS"){
        this.srvc=Response.output;
        this.servi_id = this.srvc[0].service_id;

        console.log("services",this.srvc)
      }
    })
  }
}
