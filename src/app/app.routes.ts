import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const rootRouterConfig: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'sessions',
				loadChildren: './views/sessions/sessions.module#SessionsModule',
				data: { title: 'Session' }
			}
		]
	},
	{
		path: '',
		component: AdminLayoutComponent,
		canActivate: [AuthService],
		children: [
			{
				path: 'purchase-orders',
				loadChildren: './views/purchase-order/purchase-order.module#PurchaseOrderModule',
				data: { title: 'Purchase Orders', breadcrumb: 'Purchase Orders' }
			},
			{
				path: 'dashboard',
				loadChildren: './views/others/others.module#OthersModule',
				data: { title: 'Dashboard Blank', breadcrumb: 'DASHBOARD' }
			},
			{
				path: 'products',
				loadChildren: './views/product/product.module#ProductModule',
				data: { title: 'Products', breadcrumb: 'Product' }
			},
			{
				path: 'distributors',
				loadChildren: './views/distributor/distributor.module#DistributorModule',
				data: { title: 'Distributors', breadcrumb: 'Distributor' }
			},
			{
				path: 'configuration/prices',
				loadChildren: './views/configuration/price-list/price-list.module#PriceListModule',
				data: { title: 'Prices', breadcrumb: 'Prices' }
			},
			{
				path: 'file-uploads',
				loadChildren: './views/file-upload/file-upload.module#FileUploadModule',
				data: { title: 'File Uploads', breadcrumb: 'File Uploads' }
			}
		]
	},
	{
		path: '**',
		redirectTo: 'sessions/404'
	}
];