import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsvcService } from '../product-list/productsvc.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productName: string = "";
  productCode: string = ""
  releaseDate: string = ""
  description: string = ""
  price: number = 0
  starRating: number = 0
  imageUrl: string = ""
  
  constructor (private route:ActivatedRoute,private prodcutData:ProductsvcService){

  }

  ngOnInit(): void {
    this.productCode =this.route.snapshot.params['product']
    this.prodcutData.getData().subscribe((d)=>{
      for(let i=0;i<d.length;i++){
        if(d[i].productCode==this.productCode){
          this.productName=d[i].productName
          this.productCode=d[i].productCode
          this.releaseDate=d[i].releaseDate
          this.description=d[i].description
          this.price=d[i].price
          this.starRating=d[i].starRating
          this.imageUrl=d[i].imageUrl
        }
      }
    })
  }

}
