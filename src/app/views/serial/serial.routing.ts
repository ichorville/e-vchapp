import { Routes } from '@angular/router';

import { SerialUploadComponent } from './serial-upload/serial-upload.component';

export const SerialRoutes: Routes = [
    {
        path: '',
        data: { title: 'Serials' },
        children: [{
            path: 'uploads',
            component: SerialUploadComponent,
            data: { title: 'Upload', breadcrumb: 'Upload' }
        }]
    }
];