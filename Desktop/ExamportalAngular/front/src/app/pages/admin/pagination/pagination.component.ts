import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PaginationService } from 'src/app/service/pagination.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {


  items = [
    
    {
      quesId:'',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    }
  
];
totalItems = 0;
pageSize = 10;
pageSizeOptions = [5, 10, 25, 100];

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;

constructor(private _post:PaginationService){}

  ngOnInit():void{
this.loadItems();
  }

loadItems(event?: { pageIndex: any; pageSize: any; } | undefined) {
  const pageIndex = event ? event.pageIndex : 0;
  const pageSize = event ? event.pageSize : this.pageSize;
  this._post.getItems(pageIndex, pageSize).subscribe((res: any) => {
    this.items = res.content;
    this.totalItems = res.totalElements;
    this.pageSize = pageSize;
  });
}

}
