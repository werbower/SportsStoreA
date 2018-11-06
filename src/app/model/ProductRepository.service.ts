import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSourceService } from './StaticDataSource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: StaticDataSourceService) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }
  getProducts(category: string = null): Product[] {
    return this.products.filter(
      p => category == null || category === p.category
    );
  }
  getProduct(id: number): Product {
    return this.products.find(p => p.id === id);
  }
  getCategories(): string[] {
    return this.categories;
  }
}
