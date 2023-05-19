import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {

  categories=[
    {
      cid:'',
      title:'',
      description:''
    }
  ]
   

  constructor(private _cat:CategoryService){

  }

  ngOnInit():void{
    this._cat.category().subscribe(
      (data:any)=>{
        this.categories=data;
      }
    )
  }
  cheak(cid:any){
// alert(cid)
  }
}
