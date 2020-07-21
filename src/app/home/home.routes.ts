import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/Products/products.component';

const routes: Routes = [
    { path: 'home', component: ProductsComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);