import { Routes } from '@angular/router';

import { SerialMismatchComponent } from './serial-mismatch.component';

export const SerialMismatchRoutes: Routes = [
    {
		path: '',
		redirectTo: '/serials/mismatch',
		pathMatch: 'full'
	},
    {
        path: 'mismatch',
        component: SerialMismatchComponent,
        data: { title: 'Mismatch', breadcrumb: 'Mismatch' },
    }
];