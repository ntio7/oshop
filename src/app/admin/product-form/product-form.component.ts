import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productServise: ProductService) {
    this.categories$ = categoryService.gatAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.productServise.get(this.id).take(1).subscribe(p => this.product = p); }
  }
  save(product) {
    if (this.id) {
      this.productServise.update(this.id, product);
    } else {
      this.productServise.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure?')) { return; }

    this.productServise.delete(this.id);
    this.router.navigate(['/admin/products']);

  }
  ngOnInit() {
  }

}
