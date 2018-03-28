import { Routes } from '@angular/router';

import { SerialManagementComponent } from './serial-management.component';

export const SerialManagementRoutes: Routes = [
    {
		path: '',
		redirectTo: '/serials/management',
		pathMatch: 'full'
	},
    {
        path: 'management',
        component: SerialManagementComponent,
        data: { title: 'Management', breadcrumb: 'Management' },
    }
];