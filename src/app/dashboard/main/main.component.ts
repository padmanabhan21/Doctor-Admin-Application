import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("body").removeClass("authentication sidebar-collapse");
      $(function() {
          MorrisArea();
      });

      function MorrisArea() {
          Morris.Area({
              element: 'area_chart',
              data: [{
                  period: '2019-01-21',
                  Booked: 10,
                  Cancelled: 3,
                  Checkedout: 7
              }, {
                  period: '2019-01-22',
                  Booked: 50,
                  Cancelled: 15,
                  Checkedout: 5
              }, {
                  period: '2019-01-23',
                  Booked: 15,
                  Cancelled: 50,
                  Checkedout: 23
              }, {
                  period: '2019-01-24',
                  Booked: 45,
                  Cancelled: 12,
                  Checkedout: 7
              }, {
                  period: '2019-01-25',
                  Booked: 20,
                  Cancelled: 32,
                  Checkedout: 55
              }, {
                  period: '2019-01-26',
                  Booked: 39,
                  Cancelled: 67,
                  Checkedout: 20
              }, {
                  period: '2019-01-27',
                  Booked: 70,
                  Cancelled: 20,
                  Checkedout: 50
              }

              ],
              lineColors: ['#616161', '#00ced1', '#ff758e'],
              xkey: 'period',
              ykeys: ['Booked', 'Cancelled', 'Checkedout'],
              labels: ['Booked', 'Cancelled', 'Checkedout'],
              pointSize: 0,
              lineWidth: 0,
              resize: true,
              fillOpacity: 0.8,
              behaveLikeLine: true,
              gridLineColor: '#e0e0e0',
              hideHover: 'auto'
          });
      }

      // Customized line Index page for Booking, Cancel, Modification
      
      $('#linecustom1').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#e5d1e4',
              fillColor: '#f3e8f2',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#e2a8df',
              spotRadius: 1
          });
      $('#linecustom2').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#c9e3f4',
              fillColor: '#dfeefa',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#8dbfe0',
              spotRadius: 1
          });
      $('#linecustom3').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#efded3',
              fillColor: '#f8f0ea',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#e0b89d',
              spotRadius: 1
          });

      // Keep active
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

  }
//live feed data
  public liveFeedData = [
    {"token_number":1,"token_status":"Completed","token_time":"6:00 PM"},
    {"token_number":2,"token_status":"Cancelled","token_time":"7:00 PM"},
    {"token_number":3,"token_status":"Completed","token_time":"8:00 PM"},
    {"token_number":2,"token_status":"Cancelled","token_time":"7:00 PM"},
    {"token_number":2,"token_status":"Cancelled","token_time":"7:00 PM"},

    ]

    public bookingsData = [
        {"customer_name":"Bala","customer_token":1,"customer_time":"6:00 PM"},
        {"customer_name":"Venkat","customer_token":2,"customer_time":"7:00 PM"},
        {"customer_name":"Santha","customer_token":3,"customer_time":"8:00 PM"},
        {"customer_name":"Venkat","customer_token":2,"customer_time":"7:00 PM"},
        {"customer_name":"Venkat","customer_token":2,"customer_time":"7:00 PM"},        
        ]

}
