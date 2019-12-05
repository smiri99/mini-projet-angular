import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {Size} from '../../model/Size';
import {ProductService} from '../../product.service';
import {MatDialogRef} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ProductForm = new FormGroup({
    id:    new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    label: new FormControl('',[Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    price: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    creationDate : new FormControl(''),
    photo: new FormControl('',[Validators.required]),
    type:  new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    qte:   new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    
  });

  public get idProduct()
 { return this.ProductForm.get('id'); }

 public get labelProduct()
 { return this.ProductForm.get('label'); }

 public get priceProduct()
 { return this.ProductForm.get('price'); }

 public get creationDateProduct()
 { return this.ProductForm.get('creationDate'); }


 public get photoProduct()
 { return this.ProductForm.get('photo'); }

 public get typeProduct()
 { return this.ProductForm.get('type'); }


 public get qteProduct()
 { return this.ProductForm.get('qte'); }


 


  product: Product=new Product();
  size: Size = new Size();
  constructor(private productService: ProductService, private dialgoRef: MatDialogRef<AddComponent>) { }
  addSize() {
    this.size.type=this.ProductForm.value['type'];
    this.size.qte=this.ProductForm.value['qte'];
    this.product.size.push(this.size);
    this.size = new Size();
  }
  add() {
    this.product.id=this.ProductForm.value['id'];
    this.product.label=this.ProductForm.value['label'];
    this.product.price=this.ProductForm.value['price'];
    this.product.photo=this.ProductForm.value['photo'];
    this.product.creationDate=this.ProductForm.value['creationDate'];
    

    this.productService.add(this.product);
    this.dialgoRef.close();
  }
  ngOnInit() {
    this.product = new Product();
    this.product.size = [];
  }

  check(id:number){
   return this.productService.checkProduct(id);
  }

}
