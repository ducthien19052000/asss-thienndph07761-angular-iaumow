import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  products :Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProduct()
  }
  getProduct(){
    this.productService.getProducts().subscribe(data=>{this.products=data});
  }
}