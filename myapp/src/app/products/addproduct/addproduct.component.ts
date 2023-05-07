import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newProductName: string;
  newProductDescription: string;
  newProductQuantity: number;
  newProductCost: number;

  @Output()//as it is going out output if coming in Input
  productAdded = new EventEmitter<{
    ProductName: string;
    ProductDescription: string;
    ProductQuantity: number;
    ProductCost: number;
  }>();

  onAddProduct() {
    this.productAdded.emit({
      ProductName: this.newProductName,
      ProductDescription: this.newProductDescription,
      ProductQuantity: this.newProductQuantity,
      ProductCost:this.newProductCost,
    });
  }
  restFiled(){
    this.newProductName='';
    this.newProductDescription='';
    this.newProductQuantity=0;
    this.newProductCost=0;
  }
}
