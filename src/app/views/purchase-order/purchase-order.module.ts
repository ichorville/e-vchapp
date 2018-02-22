import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderConfigComponent } from './purchase-order-config/purchase-order-config.component';

import { PurchaseOrderRoutes } from './purchase-order.routing';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(PurchaseOrderRoutes),
	],
	declarations: [ 
		PurchaseOrderListComponent, 
		PurchaseOrderConfigComponent
	]
})
export class PurchaseOrderModule { }
