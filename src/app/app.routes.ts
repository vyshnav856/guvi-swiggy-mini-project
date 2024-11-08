import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
	{path: "", component: HomepageComponent},
	{path: "favorites", component: FavoritesComponent},
	{path: "search", component: SearchComponent},
	{path: "cart", component: CartComponent},
	{path: "restaurant/:id", component: RestaurantComponent},
	{path: "login", component: LoginComponent}
];
