import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

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
          initDonutChart();
          MorrisArea();
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

      function MorrisArea() {
          Morris.Area({
              element: 'area_chart',
              data: [{
                  period: '2011',
                  Project1: 2,
                  Project2: 0,
                  Project3: 0
              }, {
                  period: '2012',
                  Project1: 50,
                  Project2: 15,
                  Project3: 5
              }, {
                  period: '2013',
                  Project1: 15,
                  Project2: 50,
                  Project3: 23
              }, {
                  period: '2014',
                  Project1: 45,
                  Project2: 12,
                  Project3: 7
              }, {
                  period: '2015',
                  Project1: 20,
                  Project2: 32,
                  Project3: 55
              }, {
                  period: '2016',
                  Project1: 39,
                  Project2: 67,
                  Project3: 20
              }, {
                  period: '2017',
                  Project1: 20,
                  Project2: 9,
                  Project3: 5
              }

              ],
              lineColors: ['#616161', '#00ced1', '#ff758e'],
              xkey: 'period',
              ykeys: ['Project1', 'Project2', 'Project3'],
              labels: ['Project1', 'Project2', 'Project3'],
              pointSize: 0,
              lineWidth: 0,
              resize: true,
              fillOpacity: 0.8,
              behaveLikeLine: true,
              gridLineColor: '#e0e0e0',
              hideHover: 'auto'
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

      // Customized line Index page
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

}
