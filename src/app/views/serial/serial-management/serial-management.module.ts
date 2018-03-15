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
	MatProgressBarModule,
	MatButtonModule,
	MatTooltipModule,
	MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { SimpleDatatableModule } from '../../shared/simple-datatable/simple-datatable.module';
import { AppLoaderModule } from '../../../services/app-loader/app-loader.module';

import { SerialManagementComponent } from './serial-management.component';
import { SerialManagementRoutes } from './serial-management.routing';
import { SerialMismatchService } from './serial-management.service';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

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
		MatProgressBarModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		FlexLayoutModule,
		QuillModule,
		SimpleDatatableModule,
		AppLoaderModule,
		RouterModule.forChild(SerialManagementRoutes)
	],
	declarations: [
		SerialManagementComponent
	],
	providers: [
		SerialMismatchService,
		AppLoaderService
	]
})
export class SerialManagementModule { }
