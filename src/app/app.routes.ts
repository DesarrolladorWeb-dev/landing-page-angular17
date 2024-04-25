import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

// el path la url de cada uno  y su  funcion que son las pages que creamos  se ejecutara al llegar a esta  URL 
export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'products', component : ProductsComponent},
    {path: 'products/:id', component : ProductDetailComponent},
    {path: 'contact', component : ContactComponent},
    // Si pones cualquier te redirige a nada (redirectTo : '' ) 
    {path: '**', redirectTo:'',pathMatch: 'full'},
    
];
