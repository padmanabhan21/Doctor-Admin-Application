import { Component, OnInit, Renderer2 } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {AppService} from './app.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import * as moment from 'moment';


declare const $: any;
declare const jquery: any;
declare const screenfull: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
    public appdata:any=[];
    public bookingdata:any=[];
    public select:any=[];
    public now:any;

    previousUrl: string;
    myForm: FormGroup;

    constructor(private renderer: Renderer2, private router: Router, private app:AppService, private storage:LocalStorageService) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    const currentUrl = event.url.split('/');
                    const currentUrlSlug = currentUrl[currentUrl.length - 1];
                    if (currentUrlSlug) {
                        this.renderer.addClass(document.body, currentUrlSlug);
                    }
                    this.previousUrl = currentUrlSlug;
                }
            });

    }

    ngOnInit() {
        this.Livefeed();
        this.Booking();
        this.Select_Doc_Profile();
        setInterval(()=>this.Livefeed(),50000);
        setInterval(()=>this.Booking(),50000);
        this.now = moment().format('YYYY-MM-DD');
        console.log("DATEeeee :",this.now);
        
        // ========
        
        $('.theme-light-dark .t-light').on('click', function() {
            $('body').removeClass('menu_dark');
        });

        $('.theme-light-dark .t-dark').on('click', function() {
            $('body').addClass('menu_dark');
        });

        $('.m_img_btn').on('click', function() {
            $('body').toggleClass('menu_img');
        });

        $('.boxs-close').on('click', function(){
            const element = $(this);
            const cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });

    }



      
    Livefeed(){
        let feed={
            "business_id": this.storage.retrieve('business_id'),
            "doctor_id": this.storage.retrieve('doctor_id'),
            "business_date":moment().format('YYYY-MM-DD'),
        }
        this.app.Livefeed(feed).subscribe((Response:any)=>{
            if(Response.Message_Code=="LS"){
                this.appdata= Response.output;
                console.log("livefeedddddddd",this.appdata);
            }
        })
            
    }


    Booking(){
        let book={
            "business_id": this.storage.retrieve('business_id'),
            "doctor_id": this.storage.retrieve('doctor_id')
           }
           this.app.Booking(book).subscribe((Response:any)=>{
            if(Response.Message_Code== "BS"){
                this.bookingdata=Response.output;
            }
           })
    }

    Select_Doc_Profile(){
        let body={
          "business_id": this.storage.retrieve('business_id'),
          "doctor_id": this.storage.retrieve('doctor_id')
        }
        console.log("doctorprofile",body)
        this.app.Select_Doc_Profile(body).subscribe((Response:any)=>{
            console.log("resp",Response)
          if(Response.Message_Code=="RSS"){
            this.select=Response.output;
            console.log("asdf",this.select)
          }
        });
    }     
}
