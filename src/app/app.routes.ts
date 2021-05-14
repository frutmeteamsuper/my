import {RouterModule,Routes} from '@angular/router';
import {
	TopbarComponent,
	TestappComponent,
	FooterComponent,
	OrdersComponent,
	CalendarComponent,
	QuotesComponent,
	AppointmentsComponent,
	AccountComponent


	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:AccountComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'orders',component:OrdersComponent},
	{path:'footer',component:FooterComponent},
	{path:'calendar',component:CalendarComponent},
	{path:'account',component:AccountComponent},
	{path:'quotes',component:QuotesComponent},
	{path:'appointments',component:AppointmentsComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

