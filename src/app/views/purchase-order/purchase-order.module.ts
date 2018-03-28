import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
	MatInputModule,
	MatDatepickerModule, 
	MatNativeDateModule,
	MatCardModule,
	MatSelectModule, 
	MatListModule,
	MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { AppLoaderModule } from '../../services/app-loader/app-loader.module';
import { AppLoaderService } from '../../services/app-loader/app-loader.service';

import { SimpleDatatableModule } from '../../views/shared/simple-datatable/simple-datatable.module';

import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderConfigComponent } from './purchase-order-config/purchase-order-config.component';

import { PurchaseOrderRoutes } from './purchase-order.routing';
import { PurchaseOrderService } from './purchase-order.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		MatInputModule,
		MatDatepickerModule, 
		MatNativeDateModule,
		MatCardModule,
		MatSelectModule,
		MatListModule,
		MatButtonModule,
		FlexLayoutModule,
		QuillModule,
		RouterModule.forChild(PurchaseOrderRoutes),
		SimpleDatatableModule,
		AppLoaderModule
	],
	declarations: [ 
		PurchaseOrderListComponent, 
		PurchaseOrderConfigComponent
	],
	providers: [
		PurchaseOrderService,
		AppLoaderService
	]
})
export class PurchaseOrderModule { }
