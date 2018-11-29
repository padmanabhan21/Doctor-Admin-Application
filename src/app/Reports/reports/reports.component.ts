import { Component, OnInit } from '@angular/core';
// import * as am4charts from "@amcharts/amcharts4/charts";
import { AmChartsService } from "amcharts3-angular2";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  constructor(private AmCharts: AmChartsService) { }
  // public AmCharts:any= {}
  ngOnInit() {
    let chart = this.AmCharts.makeChart("chartdiv", {
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
  
  }
  
  }
  
  