import { Routes } from '@angular/router';

import { FileUploadComponent } from './file-upload.component';

export const FileUploadRoutes: Routes = [
    {
		path: '',
		redirectTo: '/file-uploads',
		pathMatch: 'full'
	},
    {
        path: '',
        component: FileUploadComponent,
        data: { title: 'File-Uploads', breadcrumb: 'File-Uploads' },
    }
];