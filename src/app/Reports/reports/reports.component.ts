import { Component, OnInit } from '@angular/core';
// import * as am4charts from "@amcharts/amcharts4/charts";
import { AmChartsService } from "amcharts3-angular2";
import { ReportsService } from './reports.service';
import {LocalStorageService} from 'ngx-webstorage'
declare const Morris: any;
declare const $: any;
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ AmChartsService ]
})
export class ReportsComponent implements OnInit {
  constructor(private AmCharts: AmChartsService,private reportservice: ReportsService, private storage:LocalStorageService) { }
  // public AmCharts:any= {}
  public getroomdetails=[];
  public chartDatas=[];
  private chart: any;
  public charts=[];
  public jQuery;
  public dailyreport:any=[]; 
  public illreport:any=[];
  public channel:any=[];
  public location:any=[];
  public yearlyreport:any=[];
  public latlong:any=[];

  ngOnInit() {
    this.dailystatus();
    this.illnessreport();
    this.channelreport();
    this.locationreport();
    this.barchart();
    // this.latlongreport();
    
    function exportChart() {
      // chart["export"].capture({}, function() {
    
        // SAVE TO PNG
        // this.toPNG({}, function(base64) {
    
          // We have now a Base64-encoded image data
          // which we can now transfer to server via AJAX
          // i.e. jQuery.post( "saveimage.php", { "data": base64 } )
          // console.log(base64);
        // });
      // });
    }
  

    
    

    //third chart
    




//chart 6

// var chart = this.AmCharts.makeChart( "chartdiv5", {
//   "type": "serial",
//   "theme": "none",
//   "dataProvider": [ {
//     "country": "USA",
//     "visits": 2025
//   }, {
//     "country": "China",
//     "visits": 1882
//   }, {
//     "country": "Japan",
//     "visits": 1809
//   }, {
//     "country": "Germany",
//     "visits": 1322
//   }, {
//     "country": "UK",
//     "visits": 1122
//   }, {
//     "country": "France",
//     "visits": 1114
//   }, {
//     "country": "India",
//     "visits": 984
//   }, {
//     "country": "Spain",
//     "visits": 711
//   }, {
//     "country": "Netherlands",
//     "visits": 665
//   }, {
//     "country": "Russia",
//     "visits": 580
//   }, {
//     "country": "South Korea",
//     "visits": 443
//   }, {
//     "country": "Canada",
//     "visits": 441
//   }, {
//     "country": "Brazil",
//     "visits": 395
//   } ],
//   "valueAxes": [ {
//     "gridColor": "#FFFFFF",
//     "gridAlpha": 0.2,
//     "dashLength": 0
//   } ],
//   "gridAboveGraphs": true,
//   "startDuration": 1,
//   "graphs": [ {
//     "balloonText": "[[category]]: <b>[[value]]</b>",
//     "fillAlphas": 0.8,
//     "lineAlpha": 0.2,
//     "type": "column",
//     "valueField": "visits"
//   } ],
//   "chartCursor": {
//     "categoryBalloonEnabled": false,
//     "cursorAlpha": 0,
//     "zoomable": false
//   },
//   "categoryField": "country",
//   "categoryAxis": {
//     "gridPosition": "start",
//     "gridAlpha": 0,
//     "tickPosition": "start",
//     "tickLength": 20
//   },
//   "export": {
//     "enabled": true
//   }

// } );


// chat 4
var chart = this.AmCharts.makeChart("chartdiv4", {
  "type": "pie",
  "theme": "none",
  "innerRadius": "50%",
  "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
  "dataProvider": this.channel,
  "balloonText": "[[value]]",
  "valueField": "count",
  "titleField": "channel",
  "balloon": {
      "drop": true,
      "adjustBorderColor": false,
      "color": "#FFFFFF",
      "fontSize": 16
  },
  "export": {
      "enabled": true
  }
  });





//chart 7


 

   // Morris donut chart
   
//chart 6

// Morris bar chart
                              // **************  MAP  **************
//chart 7
// $('#world-map-markers').vectorMap({
//   map: 'in_mill',
//   normalizeFunction: 'polynomial',
//   hoverOpacity: 0.7,
//   hoverColor: false,
//   backgroundColor: 'transparent',
//   regionStyle: {
//       initial: {
//           fill: 'rgba(210, 214, 222, 1)',
//           'fill-opacity': 1,
//           stroke: 'none',
//           'stroke-width': 0,
//           'stroke-opacity': 1
//       },
//       hover: {
//           fill: 'rgba(255, 193, 7, 2)',
//           cursor: 'pointer'
//       },
//       selected: {
//           fill: 'yellow'
//       },
//       selectedHover: {}
//   },
//   markerStyle: {
//       initial: {
//           fill: '#fff',
//           stroke: '#FFC107 '
//       }
//   },
//   markers: [{
//           latLng: [37.09, -95.71],
//           name: 'America'
//       },
      // {
      //     latLng: [51.16, 10.45],
      //     name: 'Germany'
      // },
      // {
      //     latLng: [-25.27, 133.77],
      //     name: 'Australia'
      // },
      // {
      //     latLng: [56.13, -106.34],
      //     name: 'Canada'
      // },
      // {
      //     latLng: [20.59, 78.96],
      //     name: 'India'
      // },
      // {
      //     latLng: [12.95, 80.14],
      //     name: 'Bala'
      // },
//   ]
// });
    
 




/**
 * Create the chart
 */


  }

//1st chart
dailystatus(){
  let daily={
    "doctor_id":this.storage.retrieve('doctor_id'),
    "business_id":this.storage.retrieve('business_id'),
    "business_date":"2019-03-05"
  
}
console.log("daily",daily)
this.reportservice.dailystatus(daily).subscribe((Response: any) => {
  if(Response.Message_Code == "TCS"){
    this.dailyreport = Response.token_count;
    console.log("Today's Token",JSON.stringify(this.dailyreport));
    var chart = this.AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "theme": "light",
      "dataProvider": this.dailyreport,
      "valueField": "count",
      "titleField": "token_status",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true,
        "menu": []
      }
    });

  }
});
}


// chartr 2
illnessreport(){
  let body={
    "business_id": this.storage.retrieve('business_id'),
	  "doctor_id": this.storage.retrieve('doctor_id')
  }
this.reportservice.illnessreport(body).subscribe((Response:any)=>{
if(Response.Message_Code == "ICS"){
  this.illreport=Response.illness_count;


  var chart = this.AmCharts.makeChart( "chartdiv1", {
    "type": "pie",
    "theme": "light",
    "path": "https://www.amcharts.com/lib/3/",
    "dataProvider": this.illreport,
    "valueField": "count",
    "titleField": "reason",
    "pulledField": "pulled",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "export": {
      "enabled": true
    }
  } );
  
}
})
}
  


// chart 3
locationreport(){
  let locat={
    "business_id": this.storage.retrieve('business_id'),
	  "doctor_id": this.storage.retrieve('doctor_id')
  }
  this.reportservice.locationreport(locat).subscribe((Response:any)=>{
    if(Response.Message_Code=="CCS"){
      this.location=Response.ReturnValue;
      var chart = this.AmCharts.makeChart("chartdiv2", {
        "type": "pie",
        "theme": "light",
        "dataProvider": this.location,
        "valueField": "city_count",
        "titleField": "city",
        "balloon": {
          "fixedPosition": true
        },
        "export": {
          "enabled": true,
          "menu": []
        }
      });
      
    }
  })
}
  

// chart 4
channelreport(){
  let body={
    
      "doctor_id":this.storage.retrieve('doctor_id'),
      "business_id":this.storage.retrieve('business_id') 
  }
  this.reportservice.channelreport(body).subscribe((Response:any)=>{
    if(Response.Message_Code == "CCS"){
      this.channel=Response.illness_count;
      console.log("channel",JSON.stringify(this.channel))
      var chart = this.AmCharts.makeChart( "m_donut_chart", {
        "type": "pie",
        "theme": "dark",
        "dataProvider": this.channel,
        "valueField": "count",
        "titleField": "label",
        "startEffect": "elastic",
        "startDuration": 2,
        "labelRadius": 10,
        "innerRadius": "70%",
        "depth3D": 10,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 15,
        "export": {
          "enabled": true
        }
      } );    
}
})
}

// yearlyreport
barchart(){
  
  this.reportservice.barchart().subscribe((Response:any)=>{
    if(Response.Message_Code =="TCS"){
      this.yearlyreport=Response.ReturnValue;
      console.log("bar chart",this.yearlyreport);
      Morris.Bar({
        element: 'm_bar_chart',
        data: this.yearlyreport,
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



// latlongreport(){
//   let body={
//     "business_id": 103,
//     "doctor_id": "janu118"
//   }
//   this.reportservice.latlongreport(body).subscribe((Response:any)=>{
//     if(Response.Message_Code== "LSS"){
//       this.latlong=Response.ReturnValue;
//       console.log("latlong",this.latlong)
//       $('#world-map-markers').vectorMap({
//         map: 'in_mill',
//         normalizeFunction: 'polynomial',
//         hoverOpacity: 0.7,
//         hoverColor: false,
//         backgroundColor: 'transparent',
//         regionStyle: {
//             initial: {
//                 fill: 'rgba(210, 214, 222, 1)',
//                 'fill-opacity': 1,
//                 stroke: 'none',
//                 'stroke-width': 0,
//                 'stroke-opacity': 1
//             },
//             hover: {
//                 fill: 'rgba(255, 193, 7, 2)',
//                 cursor: 'pointer'
//             },
//             selected: {
//                 fill: 'yellow'
//             },
//             selectedHover: {}
//         },
//         markerStyle: {
//             initial: {
//                 fill: '#fff',
//                 stroke: '#FFC107 '
//             }
//         },
//         markers: this.latlong,       
//               latLng: 'lat_Lng',
//               name: 'name'
          
          //  [ {
          //       latLng: [51.16, 10.45],
          //       area: 'Germany'
          //   },
          //   {
          //       latLng: [-25.27, 133.77],
          //       area: 'Australia'
          //   },
          //   {
          //       latLng: [56.13, -106.34],
          //       area: 'Canada'
          //   },
          //   {
          //       latLng: [20.59, 78.96],
          //       area: 'India'
          //   },
          //   {
          //       latLng: [12.95, 80.14],
          //       area: 'Bala'
          //   },
          //   {
          //     latLng: [20.59, 80.96],
          //     area: 'India'
          // },
          // ]
//       });
//     }
//   })
// }
}


