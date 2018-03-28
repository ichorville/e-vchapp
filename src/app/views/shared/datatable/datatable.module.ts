import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
	MatIconModule,
	MatButtonModule,
	MatToolbarModule,
	MatSidenavModule,
	MatMenuModule,
	MatInputModule,
	MatDialogModule,
	MatListModule,
	MatCheckboxModule,
	MatTooltipModule,
	MatExpansionModule
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { CommonDirectivesModule } from '../../../directives/common/common-directives.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';

import { AppConfirmModule } from '../../../services/app-confirm/app-confirm.module';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';

import { DatatableComponent } from './datatable.component';
import { DatatableService } from './datatable.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatSidenavModule,
		MatMenuModule,
		MatInputModule,
		MatDialogModule,
		MatListModule,
		MatCheckboxModule,
		MatTooltipModule,	
		MatExpansionModule,
		FlexLayoutModule,
		QuillModule,
		CommonDirectivesModule,
		PaginationModule,
		SearchModule,
		AppConfirmModule
	],
	declarations: [
		DatatableComponent
	],
	providers: [
		DatatableService,
		AppConfirmService
	],
	exports: [
		DatatableComponent
	]
})
export class DatatableModule { }
