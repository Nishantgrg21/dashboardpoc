import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-resolution-trends',
  templateUrl: './resolution-trends.component.html',
  styleUrls: ['./resolution-trends.component.css']
})
export class ResolutionTrendsComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }
  lineChartData: ChartDataSets[] = [
    { data: [75,32,48,30,35,15,55,18,40]  },
    { data: [50,80,38,22,22,60,16,18,40] },
  ];

  lineChartLabels= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  lineChartOptions = {
    responsive: true,
    scales: {
      
      yAxes: [{
              display: true,
              ticks: {
                  min:0,
                  max:100,
                  stepSize: 20,
              }
          }]
  },
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: '',
      borderColor:'#38d468',
      borderWidth: 5,
     
    },
      {
        backgroundColor: '',
        borderColor:'#6a05c4',
        borderWidth: 5,
      }
  ];

  

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType =  "line" as any;
  
 
}
