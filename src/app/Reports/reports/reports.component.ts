import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
declare const Morris: any;
declare const $: any;
import { ReportsService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [AmChartsService]
})
export class ReportsComponent implements OnInit {
  constructor(private AmCharts: AmChartsService, private reportservice: ReportsService) { }

  public getroomdetails = [];
  public chartDatas = [];
  public charts = [];
  public jQuery;
  public dailyreport: any = [];
  public illreport: any = [];
  public channel: any = [];
  public location: any = [];
  public yearlyreport: any = [];

  ngOnInit() {
    this.dailystatus();
    this.illnessreport();
    this.channelreport();
    this.locationreport();
    this.barchart();

    // function exportChart() {
    //   chart["export"].capture({}, function () {

    //     // SAVE TO PNG
    //     this.toPNG({}, function (base64) {

    //       // We have now a Base64-encoded image data
    //       // which we can now transfer to server via AJAX
    //       // i.e. jQuery.post( "saveimage.php", { "data": base64 } )
    //       console.log(base64);
    //     });
    //   });
    // }

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
  }

  //1st chart
  dailystatus() {
    let daily = {
      "doctor_id": "nare83",
      "business_id": 68,
      "business_date": "2019-01-09"
    }

    this.reportservice.dailystatus(daily).subscribe((Response: any) => {
      if (Response.Message_Code == "TCS") {
        this.dailyreport = Response.token_status;
        console.log("Today's Token", JSON.stringify(this.dailyreport));
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

  //2nd chart
  illnessreport() {
    let body = {
      "business_id": 103,
      "doctor_id": "janu118"
    }
    this.reportservice.illnessreport(body).subscribe((Response: any) => {
      if (Response.Message_Code == "ICS") {
        this.illreport = Response.illness_count;
        var chart = this.AmCharts.makeChart("chartdiv1", {
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
        });
      }
    })
  }

  // chart 3
  locationreport() {
    let locat = {
      "business_id": 103,
      "doctor_id": "janu118"
    }
    this.reportservice.locationreport(locat).subscribe((Response: any) => {
      if (Response.Message_Code == "CCS") {
        this.location = Response.ReturnValue;
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
  channelreport() {
    let body = {

      "doctor_id": "nare83",
      "business_id": 68
    }
    this.reportservice.channelreport(body).subscribe((Response: any) => {
      if (Response.Message_Code == "CCS") {
        this.channel = Response.illness_count;
        console.log("channel", JSON.stringify(this.channel))
      }
    })
  }

  barchart() {

    this.reportservice.barchart().subscribe((Response: any) => {
      if (Response.Message_Code == "TCS") {
        this.yearlyreport = Response.ReturnValue;
        // alert(JSON.stringify(this.yearlyreport));
        console.log("bar chart", this.yearlyreport);
        Morris.Bar({
          element: 'm_bar_chart',
          data: this.yearlyreport,
          xkey: ['period'],
          ykeys: ['canceled_count', 'booked_count', 'Checked_out'],
          labels: ['canceled_count', 'booked_count', 'Checked_out'],
          barColors: ['#757575', '#26c6da', '#ffcc80'],
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true
        });

      }
    })
  }
}




