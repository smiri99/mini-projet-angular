import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../model/Product';
import {Size} from '../../model/Size';
import {ProductService} from '../../product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  product: Product;
  size: Size = new Size();
  constructor(private productService: ProductService, private dialgoRef: MatDialogRef<ModifyComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }
  addSize() {
    this.product.size.push(this.size);
    this.size = new Size();
  }
  modify() {
    this.productService.modify(this.data.id, this.product);
    this.dialgoRef.close();
  }
  ngOnInit() {
    this.product = this.productService.getProductById(this.data.id);
  }

  remove(index) {
    console.log(index);
    this.product.size.splice(index , 1  );
  }
}
