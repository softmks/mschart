function basicLineChart(){
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }
    var chart = new MSCharts(
        document.querySelector("#basic_line_chart"),
        options
    );
    chart.render();
  }
  function brushLineChart(){
    var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
    min: 30,
    max: 90
    })
    var optionsline2 = {
    chart: {
        id: 'chart2',
        type: 'line',
        height: 230,
        toolbar: {
        autoSelected: 'pan',
        show: false
        }
    },
    colors: ['#546E7A'],
    stroke: {
        width: 3
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0
    },
    series: [{
        data: data
    }],
    xaxis: {
        type: 'datetime'
    }
    }

    var chartline2 = new MSCharts(
    document.querySelector("#chart-line2"),
    optionsline2
    );

    chartline2.render();

    var options = {
    chart: {
        id: 'chart1',
        height: 130,
        type: 'area',
        brush:{
        target: 'chart2',
        enabled: true
        },
        selection: {
        enabled: true,
        xaxis: {
            min: new Date('19 Jun 2017').getTime(),
            max: new Date('14 Aug 2017').getTime()
        }
        },       
    },
    colors: ['#008FFB'],
    series: [{
        data: data
    }],
    fill: {
        type: 'gradient',
        gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
        }
    },
    xaxis: {
        type: 'datetime',
        tooltip: {
        enabled: false
        }
    },
    yaxis: {
        tickAmount: 2
    }
    }
    console.log(options);
    var chart = new MSCharts(
    document.querySelector("#chart-line"),
       options
    );

    chart.render();

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
    }
  }
  function dashedLineChart(){
    var options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
        enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ],
    title: {
        text: 'Page Statistics',
        align: 'left'
    },
    legend: {
        tooltipHoverFormatter: function(val, opts) {
        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
    },
    markers: {
        size: 0,

        hover: {
        sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
        ],
    },
    tooltip: {
        y: [{
        title: {
            formatter: function (val) {
            return val + " (mins)"
            }
        }
        }, {
        title: {
            formatter: function (val) {
            return val + " per session"
            }
        }
        }, {
        title: {
            formatter: function (val) {
            return val;
            }
        }
        }]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
    }

    var chart = new MSCharts(
    document.querySelector("#dashed_line_chart"),
    options
    );

    chart.render();
  }
function gradientLineChart() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },
        },
        stroke: {
            width: 7,   
            curve: 'smooth'
        },
        series: [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        },
        title: {
            text: 'Social Media',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,
             
            hover: {
                size: 7,
            }
        },
        yaxis: {
            min: -10,
            max: 40,
            title: {
                text: 'Engagement',
            },                
        }
    }

   var chart = new MSCharts(
        document.querySelector("#gradient_line_chart"),
        options
    );
    
    chart.render();
}
function lineWithAnnotations(){
    var options = {
        annotations: {
          yaxis: [{
            y: 8200,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Support',
            }
          }, {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis range',
            }
          }],
          xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            }
          }, {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'X-axis range',
            }
          }],
          points: [{
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'mscharts-custom-class'
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
  
              text: 'Point Annotation',
            }
          }]
        },
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        series: [{
          data: series.monthDataSeries1.prices
        }],
        title: {
          text: 'Line with Annotations',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
      }
  
      var chart = new MSCharts(
        document.querySelector("#line_with_annotations_chart"),
        options
      );
  
      chart.render();
}
function lineWithDataLabels(){
    var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Low - 2013",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            
            size: 6
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    var chart = new MSCharts(
        document.querySelector("#line_with_data_labels_chart"),
        options
    );

    chart.render();
}
function lineWithImage(){
    var options = {
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        colors: ['#2e93fa'],
        series: [
        //     {
        //     name: 'Dataset 1',
        //     data: [20, 31, 14, 40, 12, 55, 13, 13, 9, 19, 20, 41, 36, 62, 60]
        // }],
        {
            name: 'Dataset 2',
            data: [10, 5, 20, 13, 15, 12, 13, 24, 24, 34, 7, 15, 10, 9, 26]
         }],
        xaxis: {
            categories: ['1990', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005'],
            labels: {
                formatter: function(val) {
                    return val
                }
            }
        },
        title: {
            text: 'Line Chart - Image fill',
            align: 'left',
            style: {
                fontSize: "16px",
            }
        },
        fill: {
          type: 'image',
          image: {
            src: [
                '../../assets/images/abstract.jpg'
                ],
            width: 800, 
            height: 800
          },
        },
        markers: {
            size: 0,
            opacity: 0,
            colors: ['#fff'],
            strokeColor: "#2e93fa",
            strokeWidth: 2,
             
            hover: {
                size: 8,
            }
        },
        yaxis: {
            title: {
                text: '$ (million)',
            },                
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }

    }

   var chart = new MSCharts(
        document.querySelector("#line_with_image_chart"),
        options
    );
    
    chart.render();
}
function lineWithMissingData(){
    var options = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          animations: {
            enabled: false
          }
        },
        stroke: {
          width: [5,5,4],
          curve: 'straight'
        },
        
        series: [{
          name: 'Peter',
          data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
        }, {
          name: 'Johnny',
          data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
        }, {
          name: 'David',
          data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
        }],
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        title: {
          text: 'Missing data (null values)'
        },
        xaxis: {
          
        },
  
      }
  
      var chart = new MSCharts(
        document.querySelector("#line_with_missing_data_chart"),
        options
      );
  
      chart.render();
}
function logarithmicLine(){
    var data = [{
        x: 1994,
        y: 2543763
      },
      {
        x: 1995,
        y: 4486659
      },
      {
        x: 1996,
        y: 7758386
      },
      {
        x: 1997,
        y: 12099221
      },
      {
        x: 1998,
        y: 18850762
      },
      {
        x: 1999,
        y: 28153765
      },
      {
        x: 2000,
        y: 41479495
      },
      {
        x: 2001,
        y: 50229224
      },
      {
        x: 2002,
        y: 66506501
      },
      {
        x: 2003,
        y: 78143598
      },
      {
        x: 2004,
        y: 91332777
      },
      {
        x: 2005,
        y: 103010128
      },
      {
        x: 2006,
        y: 116291681
      },
      {
        x: 2007,
        y: 137322698
      },
      {
        x: 2008,
        y: 157506752
      },
      {
        x: 2009,
        y: 176640381
      },
      {
        x: 2010,
        y: 202320297
      },
      {
        x: 2011,
        y: 223195735
      },
      {
        x: 2012,
        y: 249473624
      },
      {
        x: 2013,
        y: 272842810
      },
      {
        x: 2014,
        y: 295638556
      },
      {
        x: 2015,
        y: 318599615
      },
      {
        x: 2016,
        y: 342497123
      }
    ]

    var labelFormatter = function (value) {
      var val = Math.abs(value)
      if (val >= 1000000) {
        val = (val / 1000000).toFixed(1) + ' M';
      }
      return val;
    }
    var options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      series: [{
        name: "Logarithmic",
        data: data
      }, {
        name: "Linear",
        data: data
      }],

      title: {
        text: 'Logarithmic Scale',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
          min: 1000000,
          max: 500000000,
          tickAmount: 4,
          logarithmic: true,
          seriesName: 'Logarithmic',
          labels: {
            formatter: labelFormatter,
          }
        },
        {
          min: 1000000,
          max: 500000000,
          opposite: true,
          tickAmount: 4,
          seriesName: 'Linear',
          labels: {
            formatter: labelFormatter
          }
        }
      ]
    }

    var chart = new MSCharts(
      document.querySelector("#logarithmic_chart"),
      options
    );

    chart.render();
}
function realtime(){
    var lastDate = 0;
        var data = []
        var TICKINTERVAL = 86400000
        let XAXISRANGE = 777600000
        function getDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                data.push({
                    x, y
                });
                lastDate = baseval
                baseval += TICKINTERVAL;
                i++;
            }
        }

        getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 90
        })

        function getNewSeries(baseval, yrange) {
            var newDate = baseval + TICKINTERVAL;
            lastDate = newDate

            for(var i = 0; i< data.length - 10; i++) {
                // IMPORTANT
                // we reset the x and y of the data which is out of drawing area
                // to prevent memory leaks
                data[i].x = newDate - XAXISRANGE - TICKINTERVAL
                data[i].y = 0
            }
            
            data.push({
                x: newDate,
                y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
            })
           
        }

        function resetData(){
            // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
            data = data.slice(data.length - 10, data.length);
        }

        var options = {
            chart: {
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                data: data
            }],
            title: {
                text: 'Dynamic Updating Chart',
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
            },
            yaxis: {
                max: 100
            },
            legend: {
                show: false
            },
        }

        var chart = new MSCharts(
            document.querySelector("#realtime_chart"),
            options
        );

        chart.render();

        window.setInterval(function () {
            getNewSeries(lastDate, {
                min: 10,
                max: 90
            })
            chart.updateSeries([{
                data: data
            }])
        }, 1000)
}
function stepline(){
    var ts2 = 1484418600000;
    var data = [];
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 30; i++) {
      ts2 = ts2 + 86400000;
      var innerArr = [ts2, dataSeries[1][i].value];
      data.push(innerArr)
    }

    var options = {
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
      }],
      title: {
        text: 'Stepline Chart',
        align: 'left'
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      },
    
    }

    var chart = new MSCharts(
      document.querySelector("#stepline_chart"),
      options
    );

    chart.render();
}
function synchingCharts(){
    MS = {
        chart: {
          height: 100,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        toolbar: {
          tools: {
            selection: false
          }
        },
        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        tooltip: {
          followCursor: false,
          theme: 'dark',
          x: {
            show: false
          },
          marker: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return ''
              }
            }
          }
        },
        grid: {
          clipMarkers: false
        },
        yaxis: {
          tickAmount: 2
        },
        xaxis: {
          type: 'datetime'
        },
      }
  
      var optionsLine1 = {
        chart: {
          id: 'fb',
          group: 'social',
          type: 'line',
        },
        colors: ['#008FFB'],
        series: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        yaxis: {
          labels: {
            minWidth: 40
          }
        }
      }
  
      var chartLine1 = new MSCharts(
        document.querySelector("#synch_chart-line"),
        optionsLine1
      );
  
      chartLine1.render();
  
      var optionsline2 = {
        chart: {
          id: 'tw',
          group: 'social',
          type: 'line',
        },
        colors: ['#546E7A'],
        series: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
          })
        }],
        yaxis: {
          labels: {
            minWidth: 40
          }
        }
      }
  
      var chartline2 = new MSCharts(
        document.querySelector("#synch_chart-line2"),
        optionsline2
      );
  
      chartline2.render();
  
  
      var optionsArea = {
        chart: {
          id: 'yt',
          group: 'social',
          type: 'area'        
        },
        colors: ['#00E396'],
        series: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        yaxis: {
          labels: {
            minWidth: 40
          }
        }
      }
  
      var chartArea = new MSCharts(
        document.querySelector("#synch_chart-area"),
        optionsArea
      );
  
      chartArea.render();
  
      /*
        // this function will generate output in this format
        // data = [
            [timestamp, 23],
            [timestamp, 33],
            [timestamp, 12]
            ...
        ]
      */
      function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
          series.push([x, y]);
          baseval += 86400000;
          i++;
        }
        return series;
      }
}
function zoomableTimeSeries(){
    var ts2 = 1484418600000;
    var dates = [];
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      var innerArr = [ts2, dataSeries[1][i].value];
      dates.push(innerArr)
    }

    var options = {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'XYZ MOTORS',
        data: dates
      }],
      markers: {
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },

      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
    }

    var chart = new MSCharts(
      document.querySelector("#zoomable_time_series_chart"),
      options
    );

    chart.render();
}