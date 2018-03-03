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
import { FileUploadModule } from 'ng2-file-upload';

import { FileUploadComponent } from './file-upload.component';

import { FileUploadRoutes } from './file-upload.routing';

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
		FileUploadModule,
		RouterModule.forChild(FileUploadRoutes)
	],
	declarations: [
		FileUploadComponent
	]
})
export class FileUploaderModule { }
