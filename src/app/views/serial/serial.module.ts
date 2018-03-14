import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

import { SerialUploadComponent } from './serial-upload/serial-upload.component';

import { SerialUploadModule } from './serial-upload/serial-upload.module';
import { SerialMismatchModule } from './serial-mismatch/serial-mismatch.module';

@NgModule({
	imports: [
        CommonModule,
        SerialUploadModule,
        SerialMismatchModule
    ],
    declarations: [
        
    ]
})
export class SerialModule {}