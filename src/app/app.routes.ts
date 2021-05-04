import {RouterModule,Routes} from '@angular/router';
import {
	TopbarComponent,
	TestappComponent,
	FooterComponent,
	OrdersComponent,
	CalendarComponent


	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:OrdersComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'orders',component:FooterComponent},
	{path:'footer',component:OrdersComponent},
	{path:'calendar',component:CalendarComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

