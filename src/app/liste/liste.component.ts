import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../model/Product';
import {MatDialog} from '@angular/material';
import {AddComponent} from './add/add.component';
import {ModifyComponent} from './modify/modify.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  products: Product[];
  search: any = '';
  constructor(private productService: ProductService, private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
    });
  }
  openDialogModif(id): void {
    const dialogRef = this.dialog.open(ModifyComponent, {
      width: '500px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  delete(id) {
    if ( confirm('confirmation of delete')) {
      this.productService.delete(id);
      this.ngOnInit();
    }
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
