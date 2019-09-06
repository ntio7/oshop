import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'src/app/models/product';
import { DataTable } from 'ng-angular8-datatable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProduct: any[];
  subscription: Subscription;
  dataTable: DataTable;

  constructor(private protectService: ProductService) {
    this.subscription = this.protectService.getAll().subscribe(products => this.filteredProduct = this.products = products);
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    console.log(query);
    this.filteredProduct = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

  }

}
