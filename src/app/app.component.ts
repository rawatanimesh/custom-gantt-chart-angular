import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  siries = [];
  constructor() { }

  ngOnInit(){
    this.siries = [
          {
            name: 'Work Order',
            type: 'gantt',
            states: { hover: { enabled: false } },
            // point: { events: { click: this.updateSelectedElement } },
            data: [
              {
                id: 's1',
                name: 'Shipment Group',
                start: Date.UTC(2020, 9, 10),
                end: Date.UTC(2020, 9, 18),
                // completed: {
                //   amount: 1,
                //   fill: "#FFF4D2"
                // },
                // accessibility:{
                //   description: 'Progress'
                // },
                collapsed: false,
                custom:{
                  taskStatus: "progress",
                  taskLabel: "Progress",
                  taskLabelColor: '#7D6E00'
                },
                // description: 'Progress',
                // drilldown: 'Progress',
                // marker: {
                //   color: 'red',
                //   fillColor : 'red',
                //   lineColor: 'red',
                //   height: 2,
                //   radius:2
                // }
              }, {
                id: 'a',
                name: 'Shipment to Site',
                start: Date.UTC(2020, 9, 10),
                end: Date.UTC(2020, 9, 14),
                custom:{
                  taskStatus: "completed",
                  taskLabel: "Completed",
                  taskLabelColor: "#047205"
                },
                // dependency: 's',
                parent: 's1'
              }, {
                id: 'b',
                name: 'Assign to FE',
                start: Date.UTC(2020, 9, 12),
                end: Date.UTC(2020, 9, 16),
                custom:{
                  taskStatus: "yetToStart",
                  taskLabel: "Yet to Start",
                  taskLabelColor: "#006497"
                },
                dependency: {
                  to: 'a',
                  lineColor:"#006497",
                  marker:{
                    color: "#006497",
                  }
                },
                parent: 's1',
              }, {
                id: 'c',
                name: 'Material verification by subcon',
                start: Date.UTC(2020, 9, 15),
                end: Date.UTC(2020, 9, 18),
                custom:{
                  taskStatus: "onHold",
                  taskLabel: "On Hold",
                  taskLabelColor: "#DF0101"
                },
                parent: 's1',
                
              },
              // {
              //   name: 'Test prototype',
              //   start: Date.UTC(2014, 10, 24),
              //   end: Date.UTC(2014, 10, 29),
              //   dependency: ['a', 'b']
              // }
            ],
            dataLabels: [{
            enabled: true,
            format: '<div style="color:{point.custom.taskLabelColor}">' +
                '<span>{point.custom.taskLabel}</span>' +
                '</div>',
            useHTML: true,
            align: 'center'
            }]
          },
          {
            name: 'Work Order',
            type: 'gantt',
            states: { hover: { enabled: false } },
            // point: { events: { click: this.updateSelectedElement } },
            data: [
              {
                id: 's2',
                name: 'Picture Verification',
                start: Date.UTC(2020, 9, 10),
                end: Date.UTC(2020, 9, 24),
                custom:{
                  taskStatus: "progress",
                  taskLabel: "Progress",
                  taskLabelColor: '#7D6E00'
                },
              }, {
                id: 'a2',
                name: 'Material verification',
                start: Date.UTC(2020, 9, 20),
                end: Date.UTC(2020, 9, 24),
                custom:{
                  taskStatus: "yetToStart",
                  taskLabel: "Yet to Start",
                  taskLabelColor: "#006497"
                },
                // dependency: 's',
                parent: 's2'
              }, {
                id: 'b2',
                name: 'Start of construction',
                start: Date.UTC(2020, 9, 12),
                end: Date.UTC(2020, 9, 16),
                custom:{
                  taskStatus: "onHold",
                  taskLabel: "On Hold",
                  taskLabelColor: "#DF0101"
                },
                parent: 's2'
              }, {
                id: 'c2',
                name: 'Picture verification before construction',
                start: Date.UTC(2020, 9, 17),
                end: Date.UTC(2020, 9, 21),
                custom:{
                  taskStatus: "completed",
                  taskLabel: "Completed",
                  taskLabelColor: "#047205"
                },
                dependency: {
                  to: 'b2',
                  lineColor:"#047205",
                  marker:{
                    color: "#047205"
                  }
                },
                parent: 's2'
              },
              {
                id: 'd2',
                name: 'Picture verification during construction',
                start: Date.UTC(2020, 9, 14),
                end: Date.UTC(2020, 9, 18),
                custom:{
                  taskStatus: "progress",
                  taskLabel: "Progress",
                  taskLabelColor: '#7D6E00'
                },
                dependency: {
                  to: 'c2',
                  lineColor:"#7D6E00",
                  marker:{
                    color: "#7D6E00"
                  }
                },
                parent: 's2'
              },
              {
                id: 'e2',
                name: 'Picture verification after construction',
                start: Date.UTC(2020, 9, 19),
                end: Date.UTC(2020, 9, 23),
                custom:{
                  taskStatus: "yetToStart",
                  taskLabel: "Yet to Start",
                  taskLabelColor: "#006497"
                },
                parent: 's2'
              }
            ],
            dataLabels: [{
            enabled: true,
            format: '<div style="color:{point.custom.taskLabelColor}">' +
                '<span>{point.custom.taskLabel}</span>' +
                '</div>',
            useHTML: true,
            align: 'center'
            }]
          },
          ]
  }
  }

  
  
  