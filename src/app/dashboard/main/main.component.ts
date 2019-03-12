import { Component, OnInit, Output } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { AmChartsService } from "amcharts3-angular2";

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[MainService,AmChartsService]
})
export class MainComponent implements OnInit {
    public liveFeedData:any = [];
    public appoinment:any=[];
    public weekly:any=[];
    public bookingsData:any=[];
    public today: Date;


  constructor(private AmCharts: AmChartsService,private main:MainService,private router:Router, private storage:LocalStorageService) { 
  this.today =new Date();
}
public chart:any;

  ngOnInit() {
      this.countappoinment();
      this.barchart();
    //   this.today = new Date().toISOString().split('T')[0];
    //   var date = new Date(this.date.transform(date,"yyyy-MM-dd"));
    //   console.log(this.date.transform(date,"yyyy-MM-dd")); //output : 2018-02-13
    
    


    $("body").removeClass("authentication sidebar-collapse");
      $(function() {
        //   initDonutChart();
        //   MorrisArea();
          Jknob();
          initCounters();
          initSparkline();
          menuToggle();
      });

      function initDonutChart() {
          Morris.Donut({
              element: 'donut_chart',
              data: [{
                  label: 'Chrome',
                  value: 37
              }, {
                  label: 'Firefox',
                  value: 30
              }, {
                  label: 'Safari',
                  value: 18
              }, {
                  label: 'Opera',
                  value: 12
              },
                  {
                      label: 'Other',
                      value: 3
                  }
              ],
              colors: ['#93e3ff', '#b0dd91', '#ffe699', '#f8cbad', '#a4a4a4'],
              formatter: function(y) {
                  return y + '%';
              }
          });
      }
      

      function Jknob() {
          $('.knob').knob({
              draw: function() {
                  // 'tron" case
                  if (this.$.data('skin') === 'tron') {

                      const a = this.angle(this.cv) // Angle
                      , r = true;

                      let sa = this.startAngle // Previous start angle
                          ,
                          sat = this.startAngle // Start angle
                          ,
                          ea // Previous end angle
                          , eat = sat + a // End angle
                          ;

                      this.g.lineWidth = this.lineWidth;

                      this.o.cursor &&
                      (sat = eat - 0.3) &&
                      (eat = eat + 0.3);

                      if (this.o.displayPrevious) {
                          ea = this.startAngle + this.angle(this.value);
                          this.o.cursor &&
                          (sa = ea - 0.3) &&
                          (ea = ea + 0.3);
                          this.g.beginPath();
                          this.g.strokeStyle = this.previousColor;
                          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                          this.g.stroke();
                      }

                      this.g.beginPath();
                      this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                      this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                      this.g.stroke();

                      this.g.lineWidth = 2;
                      this.g.beginPath();
                      this.g.strokeStyle = this.o.fgColor;
                      this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                      this.g.stroke();

                      return false;
                  }
              }
          });
      }

      // Counters JS
      function initCounters() {
          $('.count-to').countTo();
      }

      // Sparkline
      function initSparkline() {
          $('.sparkline').each(function() {
              const $this = $(this);
              $this.sparkline('html', $this.data());
          });
      }

      $(window).on('scroll', function() {
          $('.card .sparkline').each(function() {
              const imagePos = $(this).offset().top;

              const topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow + 400) {
                  $(this).addClass('pullUp');
              }
          });
      });

      $('#world-map-markers').vectorMap({
          map: 'world_mill_en',
          normalizeFunction: 'polynomial',
          hoverOpacity: 0.7,
          hoverColor: false,
          backgroundColor: 'transparent',
          regionStyle: {
              initial: {
                  fill: 'rgba(210, 214, 222, 1)',
                  'fill-opacity': 1,
                  stroke: 'none',
                  'stroke-width': 0,
                  'stroke-opacity': 1
              },
              hover: {
                  fill: 'rgba(255, 193, 7, 2)',
                  cursor: 'pointer'
              },
              selected: {
                  fill: 'yellow'
              },
              selectedHover: {}
          },
          markerStyle: {
              initial: {
                  fill: '#fff',
                  stroke: '#FFC107 '
              }
          },
          markers: [{
                  latLng: [37.09, -95.71],
                  name: 'America'
              },
              {
                  latLng: [51.16, 10.45],
                  name: 'Germany'
              },
              {
                  latLng: [-25.27, 133.77],
                  name: 'Australia'
              },
              {
                  latLng: [56.13, -106.34],
                  name: 'Canada'
              },
              {
                  latLng: [20.59, 78.96],
                  name: 'India'
              },
              {
                  latLng: [55.37, -3.43],
                  name: 'United Kingdom'
              },
          ]
      });


      $.each($('.menu .list li.active'), function(i, val) {
          const $activeAnchors = $(val).find('a:eq(0)');

          $activeAnchors.addClass('toggled');
          $activeAnchors.next().show();
      });

      $('.ml-menu li a').on('click', function () {
          $(this).addClass('toggled');
      });

      $('.sidebar .menu .list').slimscroll({
        height: 'calc(100vh - 65px)',
        color: 'rgba(0,0,0,0.2)',
        position: 'left',
        size: '2px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
    });
    
    $('.ls-toggle-btn').on('click', function() {
        $('body').toggleClass('ls-toggle-menu');
    });

    $('.boxs-close').on('click', function(){
        const element = $(this);
        const cards = element.parents('.card');
        cards.addClass('closed').fadeOut();
    });

    function menuToggle() {
      // Collapse or Expand Menu
      $('.menu-toggle').on('click', function(e) {
        const $this = $(this);
        const $content = $this.next();

        if ($($this.parents('ul')[0]).hasClass('list')) {
            const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
            $.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
                if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
        }

            $this.toggleClass('toggled');
            $content.slideToggle(320);
      });
    }
  }



countappoinment(){
    let body={
    "doctor_id":this.storage.retrieve('doctor_id'),
	"business_id":this.storage.retrieve('business_id'),
	"business_date":"2019-03-01"
    }
    console.log(body)
    this.main.countappoinment(body).subscribe((Response:any)=>{
        if(Response.Message_Code=="TCS"){
            this.appoinment=Response.output;
            console.log("appointment bookings cancel checked ",this.appoinment);
        }
    })
}

public yearlyreport:any=[];
// weeklyerport(){
//     let body={
//      "business_id": this.storage.retrieve('business_id'),
// 	 "doctor_id": this.storage.retrieve('doctor_id')
//     }
//     this.main.weeklyreport1(body).subscribe((Response:any)=>{
//         if(Response.Message_Code=="TNS"){
//             this.weekly=Response.ReturnValue;
//                 // Morris.Area({
//                 //     element: 'area_chart',
//                 //     data: this.weekly,
//                 //     lineColors: ['#616161', '#00ced1', '#ff758e'],
//                 //     xkey: 'period',
//                 //     ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //     labels: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //     pointSize: 0,
//                 //     lineWidth: 0,
//                 //     resize: true,
//                 //     fillOpacity: 0.8,
//                 //     behaveLikeLine: true,
//                 //     gridLineColor: '#e0e0e0',
//                 //     hideHover: 'auto'
//                 // });
                
//                 // Morris.Bar ({
//                 //   element: 'bar_chart1',
//                 //   data: this.weekly,
//                 //   xkey: 'period',
//                 //   ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //   labels: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //   barRatio: 0.4,
//                 //   xLabelAngle: 35,
//                 //   hideHover: 'auto',
//                 //   barColors: function (row, series, type) {
//                 //     if(row.label == "s1") return "#AD1D28";
//                 //     else if(row.label == "s2") return "#DEBB27";
//                 //     else if(row.label == "s3") return "#fec04c";
//                 //   }
//                 // });

               


//                 // Morris.Bar ({
//                 //     element: 'bar-chart',
//                 //     data: this.weekly,
//                 //     xkey: 'period',
//                 //     ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //     labels: ['Checked_out', 'booked_count', 'canceled_count'],
//                 //     barRatio: 0.4,
//                 //     xLabelAngle: 35,
//                 //     hideHover: 'auto',
//                 //     barColors: function (row, series, type) {
//                 //       console.log("--> "+row.label, series, type);
//                 //       if(row.label == "s1") return "#AD1D28";
//                 //       else if(row.label == "s2") return "#DEBB27";
//                 //       else if(row.label == "s3") return "#fec04c";
//                 //     }
//                 //   });
//         }
//     })
// }
barchart(){
    let body={
        "business_id": this.storage.retrieve('business_id'),
        "doctor_id": this.storage.retrieve('doctor_id')
       }
    this.main.weeklyreport(body).subscribe((Response:any)=>{
      if(Response.Message_Code =="TNS"){
        this.weekly=Response.ReturnValue;
        console.log("bar chart",this.weekly);
        Morris.Bar({
          element: 'bar_chart',
          data: this.weekly,
          xkey: ['period'],
          ykeys: ['canceled_count','booked_count','Checked_out'],
          labels: ['canceled_count','booked_count','Checked_out'],
          barColors: ['#757575', '#26c6da', '#ffcc80'],
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true
        });
        
      }
    })
  }
}
