import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-portfolio-distribution',
  templateUrl: './portfolio-distribution.component.html',
  styleUrls: ['./portfolio-distribution.component.css']
})
export class PortfolioDistributionComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  barChartData: ChartDataSets[] = [
    { data: [0,3.2]},
    { data: [4.2]}
  ];
  barChartColors: Color[] = [
    {
      backgroundColor: '#6a4bd5',
      borderColor:'#6a4bd5',
      borderWidth: 5,
     
    },
      {
        backgroundColor: '#e55c68',
        borderColor:'#e55c68',
        borderWidth: 5,
      }
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      
      yAxes: [{
              ticks: {
                beginAtZero : true,
                  min:0,
                  max:5,
                  stepSize: 1,
              }
             
                
          }],
          
  },
  };
  barChartLabels: Label[] = ['', '',];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  

}
