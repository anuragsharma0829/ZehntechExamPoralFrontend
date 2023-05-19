import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  categories=[
    {
      cid:'',
      title:'',
      description:''
    }
  ]
   
  

  constructor(private _category:CategoryService ){}

  ngOnInit(): void{
   this._category.category().subscribe((data:any)=>{
    // CSS
    this.categories=data;
    console.log(this.categories);
   },
   (error)=>{
    // 
    console.log(error);
    Swal.fire('Error !!', 'Error in Loading data', 'error')
    
   }
   )
  }

  deleteCategory(cid:any){
     Swal.fire({
      icon:'info',
      'title':'Are You sure',
      confirmButtonText:'Delete',
      showCancelButton:true
     }) .then((result)=>{
      if(result.isConfirmed){
        // Delete
        this._category.deleteCategory(cid).subscribe(
          (data)=>{
            // Filter
            this.categories=this.categories.filter((category:any)=>category.cid !=cid);
            Swal.fire('success',"Category Delete SuccesFull",'success');
          },
          (error)=>{
            Swal.fire('Error','Somethimg is went Wrong','error')
          }
        )
      }
     })
  }


  
}
