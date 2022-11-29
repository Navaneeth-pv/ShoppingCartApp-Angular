import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {
  
  constructor(private api: ApiService){
    api.fetchProducts().subscribe(

      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]
  

}
