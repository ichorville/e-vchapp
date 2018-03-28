import { Routes } from '@angular/router';

import { SerialUploadComponent } from './serial-upload.component';

export const SerialUploadRoutes: Routes = [
    {
		path: '',
		redirectTo: '/serials/upload',
		pathMatch: 'full'
	},
    {
        path: 'upload',
        component: SerialUploadComponent,
        data: { title: 'Upload', breadcrumb: 'Upload' },
    }
];