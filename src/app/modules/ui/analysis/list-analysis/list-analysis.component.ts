import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-analysis',
  templateUrl: './list-analysis.component.html',
  styleUrls: ['./list-analysis.component.css']
})
export class ListAnalysisComponent implements OnInit {

  public doughnutChartLabels = ['Продукт Q1', 'Продукт Q2', 'Продукт Q3', 'Продукт Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Категория A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Категория B'}
  ];

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2018'},
    {data: [90, 150, 200, 45], label: '2019'}
  ];
  public radarChartType = 'radar';

  ngOnInit() {
  }

}
