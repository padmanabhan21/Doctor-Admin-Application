import { Component, OnInit } from '@angular/core';
// import * as am4charts from "@amcharts/amcharts4/charts";
import { AmChartsService } from "amcharts3-angular2";
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

    
 

   // Morris donut chart
   Morris.Donut({
    element: 'm_donut_chart',
    data: [
        {
            label: 'Online Sales',
            value: 45,

        }, {
            label: 'Store Sales',
            value: 35
        }, {
            label: 'Email Sales',
            value: 8
        }, {
            label: 'Agent Sales',
            value: 12
        }],

    resize: true,
    colors: ['#ffd97f', '#fab2c0', '#80dad8', '#a1abb8']
});
//chart 6

// Morris bar chart
Morris.Bar({
  element: 'm_bar_chart',
  data: [{
      y: '2011',
      a: 80,
      b: 56,
      c: 89
  }, {
      y: '2012',
      a: 75,
      b: 65,
      c: 38
  }, {
      y: '2013',
      a: 59,
      b: 30,
      c: 37
  }, {
      y: '2014',
      a: 75,
      b: 65,
      c: 40
  }, {
      y: '2015',
      a: 55,
      b: 40,
      c: 45
  }, {
      y: '2016',
      a: 75,
      b: 65,
      c: 40
  }, {
      y: '2017',
      a: 87,
      b: 88,
      c: 36
  }],
  xkey: 'y',
  ykeys: ['a', 'b', 'c'],
  labels: ['A', 'B', 'C'],
  barColors: ['#757575', '#26c6da', '#ffcc80'],
  hideHover: 'auto',
  gridLineColor: '#eef0f2',
  resize: true
});

//chart 7
$('#world-map-markers').vectorMap({
  map: 'in_mill',
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
          latLng: [12.95, 80.14],
          name: 'Bala'
      },
  ]
});
    
 




/**
 * Create the chart
 */


  }
  
}
  
 
  
  
