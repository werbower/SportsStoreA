import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepositoryService } from './ProductRepository.service';
import { StaticDataSourceService } from './StaticDataSource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProductRepositoryService, StaticDataSourceService]
})
export class ModelModule { }
