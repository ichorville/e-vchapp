import { Routes } from '@angular/router';

import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderConfigComponent } from './purchase-order-config/purchase-order-config.component';

export const PurchaseOrderRoutes: Routes = [
    {
		path: '',
		redirectTo: '/purchase-orders/list',
		pathMatch: 'full'
	},
    {
        path: 'list',
        component: PurchaseOrderListComponent,
        data: { title: 'List', breadcrumb: 'List' },
    },
    {
        path: ':id/config',
        component: PurchaseOrderConfigComponent,
        data: { title: 'Configuration', breadcrumb: 'Configuration' },
    }
];