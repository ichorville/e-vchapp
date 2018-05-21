import { Routes } from '@angular/router';

import { FileUploadComponent } from './file-upload.component';

export const FileUploadRoutes: Routes = [
    {
		path: '',
		redirectTo: '/serials/upload',
		pathMatch: 'full'
	},
    {
        path: 'upload',
        component: FileUploadComponent,
        data: { title: 'Serial-Upload', breadcrumb: 'Serial-Upload' },
    }
];