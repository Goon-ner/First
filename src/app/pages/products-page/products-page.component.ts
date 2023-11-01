import { Component } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  title = 'First Angular App';
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
      public productService: ProductService,
      public modalService: ModalService
  ) {
  }
  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
