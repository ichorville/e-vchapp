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

import { SerialMismatchComponent } from './serial-mismatch.component';

import { SerialMismatchRoutes } from './serial-mismatch.routing';

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
		RouterModule.forChild(SerialMismatchRoutes)
	],
	declarations: [
		SerialMismatchComponent
	]
})
export class SerialMismatchModule { }
