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
      "dataProvider": [
        {
        "status": "Booked",
        "count": 50
      }, {
        "status": "Cancelled",
        "count": 10
      }, {
        "status": "Checkedout",
        "count": 40
      }],
      "valueField": "count",
      "titleField": "status",
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
      "dataProvider": [ 
      {
      "illness": "General",
      "count": 260,
      // "pulled": true
      }, {
        "illness": "Surgery",
        "count": 201,
        // "pulled": true
      }, {
        "illness": "Treatment",
        "count": 65,
        // "pulled": true
      }, {
        "illness": "Dialysis",
        "count": 39,
        // "pulled": true
      } ],
      "valueField": "count",
      "titleField": "illness",
      "pulledField": "pulled",
      "outlineAlpha": 0.4,
      "depth3D": 15,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "angle": 45,
      "export": {
        "enabled": true
      }
    } );
    
    

    //third chart
    var chart = this.AmCharts.makeChart("chartdiv2", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [{
        "location": "chromepet",
        "count": 501
      }, {
        "location": "tambaram",
        "count": 301
      }, {
        "location": "Anna Nagar",
        "count": 201
      }, {
        "location": "Nungabakkam",
        "count": 165
      }, {
        "location": "Pallavaram",
        "count": 139
      }, {
        "location": "Velachery",
        "count": 128
      }, {
        "location": "Medavakkam",
        "count": 99
      }, {
        "location": "Chengalpattu",
        "count": 60
      }, {
        "location": "Guindy",
        "count": 50
      }],
      "valueField": "count",
      "titleField": "location",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true,
        "menu": []
      }
    });
    
   //report chart 4
   // Morris donut chart
   Morris.Donut({
    element: 'm_donut_chart',
    data: [
        {
            label: 'Whatsapp',
            value: 45,

        }, {
            label: 'Medicus4U',
            value: 35
        }, {
            label: 'Direct',
            value: 8
        }, {
            label: 'Call',
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
      day: 'Sun',
      booked: 80,
      cancelled: 56,
      checkedout: 89
  }, {
      day: 'Mon',
      booked: 75,
      cancelled: 65,
      checkedout: 38
  }, {
    day: 'Tue',
    booked: 25,
    cancelled: 15,
    checkedout: 38
  }, {
    day: 'Wed',
    booked: 55,
    cancelled: 6,
    checkedout: 8
  }, {
    day: 'Thur',
    booked: 25,
    cancelled: 45,
    checkedout: 68
  }, {
    day: 'Fri',
    booked: 75,
    cancelled: 65,
    checkedout: 38
  }, {
    day: 'Sat',
    booked: 75,
    cancelled: 65,
    checkedout: 38
  }],
  xkey: 'day',
  ykeys: ['booked', 'cancelled', 'checkedout'],
  labels: ['Book', 'Cancel', 'Checkout'],
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
  
 
  
  
