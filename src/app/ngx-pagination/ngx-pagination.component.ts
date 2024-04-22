import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ngx-pagination',
  templateUrl: './ngx-pagination.component.html',
  styleUrl: './ngx-pagination.component.css'
})
export class NgxPaginationComponent implements OnInit {
  
  paginatedData: any;
  p: number = 1;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((res:any) => {
      this.paginatedData = res;
    }, (error) => {
      console.warn("Error", error.message);
    })

  }
  
}
