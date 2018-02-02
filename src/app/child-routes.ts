import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent }      from './product-detail/product-detail.component';
import { ProductListComponent }      from './product-list/product-list.component';
export const ChildRecordRoutes: Routes = [
    {
        path: 'product',
        children: [
            {   path: '', 
                component: ProductListComponent},
            {
                path: ':id',
                component: ProductDetailComponent
            }
        ]
    }
];