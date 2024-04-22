import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrl: './custom-pagination.component.css'
})
export class CustomPaginationComponent implements OnInit{
  dataArray: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res:any) => {
      this.dataArray = res;
      this.paginatedData = this.dataArray.slice(0,10);
    }, (error) => {
      console.warn("Error", error.message);
    })

  }

  previousPage(){
    if(this.currentPage > 1) {
      this.currentPage--;
      this.paginatedData = this.dataArray.slice((this.currentPage - 1) * 10, this.currentPage * 10);
    }
  }

  nextPage(){
    if(this.currentPage < this.dataArray.length / 10) {
      this.currentPage++;
      this.paginatedData = this.dataArray.slice((this.currentPage - 1) * 10 , this.currentPage*10);
    }
  }
}
