import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserserviceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { Chart } from 'chart.js';
import { ChartOptions } from 'chart.js';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild('chartRef') private chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;


  api: any
  user = [
    {
      id: '',
      username: '',
      email: '',
      phone: '',
      enabled: '',
      profile: ''
    }
  ]
  constructor(private _user: UserserviceService) {

  }
  ngOnInit(): void {
    this._user.getallUsers().subscribe(
      (data: any) => {
        this.user = data;
        console.log(data);

// bar chart logic
        const ctx: any = document.getElementById('myChart');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.user.map(item => item.username),
            datasets: [{
              label: 'Contact',
              data: this.user.map(item => item.phone),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
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

        // Chart end
        
      },
      (error) => {
        Swal.fire('error', 'something wrong', 'error')
      })
    this.api = 'http://localhost:8081/user/post/image/';
  }



  deleteUser(id: any) {

    Swal.fire({
      icon: 'info',
      'title': 'Are You sure',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete
        this._user.deleteUser(id).subscribe(
          (data) => {
            // Filter
            this.user = this.user.filter((user: any) => user.id != id);
            Swal.fire('Success', 'User Delete SuccessFully', 'success')
          },
          (error) => {
            Swal.fire('error', "Something is went wrong", 'error')
          })
      }
    })

  }

  
    // Pie
    public pieChartOptions: ChartOptions<'pie'> = {
      responsive: false,
      
    };
    public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
    public pieChartDatasets = [ {
      data: [ 300, 500, 100 ]
    } ];
    public pieChartLegend = true;
    public pieChartPlugins = [];


}

