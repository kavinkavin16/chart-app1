import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,  // Add this import
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register all required components including BarController
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,  // Add this registration
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
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