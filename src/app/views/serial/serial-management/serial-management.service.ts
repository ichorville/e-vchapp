import { Injectable } from '@angular/core';

@Injectable()
export class SerialMismatchService {

    uploadSUmmary = [
        {
            name: 'File 001',
            code: 'GO 50',
            status: 'Processed',
            count: '',
            duplicates: '',
            format: ''
        },
        {
            name: 'File 002',
            code: 'GO 100',
            status: 'Ready to Process',
            count: '',
            duplicates: '',
            format: ''
        },
        {
            name: 'File 003',
            code: 'GO 100',
            status: 'Add to System',
            count: '',
            duplicates: '',
            format: ''
        },
        {
            name: 'File 003',
            code: 'GO 100',
            status: 'Add to System',
            count: '',
            duplicates: '',
            format: ''
        },
        {
            name: 'File 003',
            code: 'GO 100',
            status: 'Add to System',
            count: '',
            duplicates: '',
            format: ''
        }
    ];

    historySummary = [
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
            badge: '123',
            user: 'Lala',
            date: '11/02/2018'
        },
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
            badge: '123',
            user: 'Lala',
            date: '11/02/2018'
        },
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
            badge: '123',
            user: 'Lala',
            date: '11/02/2018'
        },
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
            badge: '123',
            user: 'Lala',
            date: '11/02/2018'
        },
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
            badge: '123',
            user: 'Lala',
            date: '11/02/2018'
        }
    ];

    allUploads(): Promise<any[]> {
        return Promise.resolve(this.uploadSUmmary);
    }

    allHistories(): Promise<any[]> {
        return Promise.resolve(this.historySummary);
    }
}