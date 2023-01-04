import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'user-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    this.mychart();
    this.mychart2();
    this.mychart3();
  }

  mychart() :any{

   new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            barThickness: 5,
            
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
           
                         
          }]
      },
      options: {
          scales: {
           
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  } 


  mychart2() :any{

    new Chart('pieChart', {
       type: 'pie',
       data: {
           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
           datasets: [{
               label: '# of Votes',
               data: [12, 19, 3, 5, 2, 3],
               backgroundColor:[
                'red','blue','yellow','green','purple','orange'
              ],
              borderColor:[
                'red','blue','yellow','green','purple','orange'
              ]
              
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });
   } 

   mychart3() :any{

    new Chart('lineChart', {
       type: 'line',
       data: {
           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
           datasets: [{
               label: '# of Votes',
               data: [12, 19, 3, 5, 2, 3],
               backgroundColor:[
                'red','blue','yellow','green','purple','orange'
              ],
            
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });
   } 
 

}
