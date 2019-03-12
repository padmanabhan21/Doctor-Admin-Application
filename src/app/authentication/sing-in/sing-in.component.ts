import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SingInService} from "./sing-in.service";
import{Router}from "@angular/router";
import {LocalStorageService} from 'ngx-webstorage';
declare const $: any;

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[SingInService]
})
export class SingInComponent implements OnInit {

  public insert:any=[];

  year = (new Date()).getFullYear();

  constructor(private router:Router,private signin:SingInService,private storage:LocalStorageService) { }

  ngOnInit() {

    $("body").addClass("authentication sidebar-collapse");
    $(".navbar-toggler").on('click',function() {
      $("html").toggleClass("nav-open");
    });

    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
  
  
  }





  check(myname,mypassword){
    if( myname !="" && mypassword !=""){

    
    let body={
        "doctor_id":myname,
        "business_id":mypassword,
        "login_status":"logout"
         }
         console.log("test",body)
    this.signin.insert_doctor(body).subscribe((Response:any)=>{
      console.log("rspns",Response)
      // if(myname == Response.doctor_id && mypassword == Response.business_id){     

           if(Response.Message_Code=="RUS"){      
            this.storage.store("doctor_id",myname) 
            this.storage.store("business_id",mypassword) 
            this.router.navigate(['/', 'dashboard']);
           }
      // }
      else{
        alert("Invalid User Data")
      } 
    });
    }
 
 
  }
  }

