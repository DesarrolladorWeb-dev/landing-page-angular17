import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  private _route = inject(ActivatedRoute);
  loading:boolean = true;
  private _apiService = inject(ApiService);
  public product? : IProduct;


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProducto(params['id']).subscribe((data:IProduct) => {
          this.product = data
        this.loading = false
      })
    })
  }
}
