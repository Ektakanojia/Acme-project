import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductsvcService } from './productsvc.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  buttonName: any = 'HideImage'
  show: boolean = false;
  filterSearch: string = "";
  constructor(private productData: ProductsvcService) {
    //console.log("product list")
  }
  updateProductList(filterSearch:string){
  this.productList=[];
  this.productData.getData().subscribe((d)=>{
    for(let i=0;i<d.length;i++){
      if(d[i].productName.includes(filterSearch)){
        this.productList.push(d[i])
      }
    }
  })
  }
  toggleImage() {
    this.show = !this.show
    if (this.show)
      this.buttonName = "ShowImage"
    else
      this.buttonName = "HideImage"
  }
  ngOnInit(): void {

    this.productData.getData().subscribe((d) => this.productList = d)
  }

}
