import { Component } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  loading = false
  id: string

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
    ) {}
  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.productService.getOne(this.id).subscribe(() => {
      this.loading = false
    })
  }

}
