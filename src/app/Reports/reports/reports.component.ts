import { Component, OnInit } from '@angular/core';
// import * as am4charts from "@amcharts/amcharts4/charts";
import { AmChartsService } from "amcharts3-angular2";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ AmChartsService ]
})
export class ReportsComponent implements OnInit {
  constructor(private AmCharts: AmChartsService) { }
  // public AmCharts:any= {}
  public getroomdetails=[];
  public chartDatas=[];
  private chart: any;
  public charts=[];
  public jQuery;
  public 
  ngOnInit() {
    var chart = this.AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }],
      "valueField": "litres",
      "titleField": "country",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true,
        "menu": []
      }
    });
    
    function exportChart() {
      chart["export"].capture({}, function() {
    
        // SAVE TO PNG
        this.toPNG({}, function(base64) {
    
          // We have now a Base64-encoded image data
          // which we can now transfer to server via AJAX
          // i.e. jQuery.post( "saveimage.php", { "data": base64 } )
          console.log(base64);
        });
      });
    }
  

    var chart = this.AmCharts.makeChart( "chartdiv1", {
      "type": "pie",
      "theme": "light",
      "path": "https://www.amcharts.com/lib/3/",
      "dataProvider": [ {
        "country": "Lithuania",
        "value": 260,
        "pulled": true
      }, {
        "country": "Ireland",
        "value": 201,
        "pulled": true
      }, {
        "country": "Germany",
        "value": 65,
        "pulled": true
      }, {
        "country": "Australia",
        "value": 39,
        "pulled": true
      }, {
        "country": "UK",
        "value": 19,
        "pulled": true
      }, {
        "country": "Latvia",
        "value": 10,
        "pulled": true
      } ],
      "valueField": "value",
      "titleField": "country",
      "pulledField": "pulled",
      "outlineAlpha": 0.4,
      "depth3D": 15,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "angle": 30,
      "export": {
        "enabled": true
      }
    } );
    
    

    //third chart
    var chart = this.AmCharts.makeChart("chartdiv2", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }],
      "valueField": "litres",
      "titleField": "country",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true,
        "menu": []
      }
    });
    
   //report chart 4
   var chart = this.AmCharts.makeChart("chartdiv4", {
    "type": "pie",
    "theme": "none",
    "innerRadius": "40%",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
    "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
    }, {
        "country": "Czech Republic",
        "litres": 301.9
    }, {
        "country": "Ireland",
        "litres": 201.1
    }, {
        "country": "Germany",
        "litres": 165.8
    }, {
        "country": "Australia",
        "litres": 139.9
    }, {
        "country": "Austria",
        "litres": 128.3
    }],
    "balloonText": "[[value]]",
    "valueField": "litres",
    "titleField": "country",
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

//chart 7

    
 




/**
 * Create the chart
 */


  }
  
}
  
 
  
  