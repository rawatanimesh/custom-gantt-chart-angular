import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts-gantt';

@Component({
  selector: 'gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {

  @ViewChild('divRef', { static: false }) divReference: ElementRef;
  @Input() siries : any = [];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createGanttOptionData(this.siries);
  }

  createGanttOptionData(siries){
    console.log(siries);
    siries.forEach(elem =>{
      elem.point = { events: { click: this.updateSelectedElement } }
    });
    this.highchartclick();
  }

  highchartclick() {
    
    let day = 1000 * 60 * 60 * 24;
  //   var customPointFormatter = function() {
  //   var point = this,
  //   	series = point.series,
  //     xAxis = series.xAxis,
  //     tooltip = series.chart.tooltip,
  //     start = point.start,
  //     end = point.end,
  //     assignedTo = point.assignedTo || '',
  //     range = end ? end - start : 0,
  //     dateFormat = tooltip.getDateFormat(
  //       range,
  //       point.start,
  //       xAxis.options.startOfWeek,
  //       xAxis.options.dateTimeLabelFormats
  //     )
  //   return [
  //     '<b>' + point.taskName + '</b>',
  //     '<span style="font-size: 0.8em">Start: ' + Highcharts.dateFormat(dateFormat, start) + '</span>',
  //     '<span style="font-size: 0.8em">End: ' + Highcharts.dateFormat(dateFormat, end) + '</span>',
  //     '<span style="font-size: 0.8em">Assigned To: ' + assignedTo + '</span>'
  //   ].join('<br/>')
  // }
      Highcharts.ganttChart(this.divReference.nativeElement as HTMLElement, {
        // title: {
        //   text: 'Simple Gantt Chart'
        // },
        chart: { renderTo: this.divReference.nativeElement as HTMLElement,
        events: {
        load: function() {
          Highcharts.each(
            this.series, (elem) =>{
              // console.log(elem);
              if(elem.name != 'Navigator 1'){
                // console.log(elem.points)
                elem.points.forEach((taskElem)=>{
                  // console.log(taskElem)
                  switch(taskElem.custom.taskStatus){
                    case "progress":
                    taskElem.update({color: "#FFF4D2"});
                    break;
                    case "completed":
                    taskElem.update({color: "#EBF7EC"});
                    break;
                    case "yetToStart":
                    taskElem.update({color: "#EBF7FE"});
                    break;
                    case "onHold":
                    taskElem.update({color: "#FFF0F0"});
                    break;

                  }
                })
              }
            }
          //   this.series[0].points, function(p) {
          //   console.log(p);
          //   if(p.custom.taskStatus == 'progress'){
          //     p.update({ color: "#FFF4D2" });
          //   }
          //   // p.update({ color: "red" });
          // }
          );
          //Fully selected timeline
          this.xAxis[0].setExtremes();
        }
      } 
      },
        tooltip: {
          enabled: false
        //   pointFormatter: customPointFormatter
        //   style:{
        //     opacity:1
        //   }
        // },
        // xAxis: {
        //   min: Date.UTC(2014, 10, 17),
        //   max: Date.UTC(2014, 10, 30)
        },
        scrollbar: {
          enabled: true
        },
        // colors:['red','blue','green'],
        navigator: {
          enabled: true,
          series: {
              type: 'gantt',
              pointPadding: 0.25,
          },
          yAxis: {
              min: 0,
              max: 3,
              reversed: true,
          }
        },
        xAxis: [{
          tickInterval: day, //day * 7 for week
          labels:{
            format:''
          },
          
        }],
        // rangeSelector: {
        //   enabled: true,
        //   // selected: 0,
        //   // inputEnabled: false
        //   inputPosition:{
        //     align: "left",
        //     x: 0,
        //     y: 0
        //   },
        //   buttonPosition: {
        //     align: "right",
        //     x: 0,
        //     y: 0
        //   },
        // },
        series: this.siries
      });
    }

    updateSelectedElement(){
      console.log(this)
    }

}