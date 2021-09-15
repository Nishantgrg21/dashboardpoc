import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-resolution-rate',
  templateUrl: './resolution-rate.component.html',
  styleUrls: ['./resolution-rate.component.css']
})

export class ResolutionRateComponent implements OnInit {

  constructor() { }
 
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  Label: any[] | undefined;
  barChartLabels: any = [ " <25k", " 25-50k", "50-75k" , "75-100k ", ">100k"];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [ 42, 53,38,76,26 ], label: '% Resolution Rate' }
  ];
  ngOnInit(){


  }
 
}
