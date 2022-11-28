import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productImage=""
  title=""
  description=""
  rate=""
  sellerName=""


  readValues=()=>
  {
    let data:any={
      "productImage":this.productImage,
      "title":this.title,
      "description":this.description,
      "rate":this.rate,
      "sellerName":this.sellerName

    }
    console.log(data)
  }

}
