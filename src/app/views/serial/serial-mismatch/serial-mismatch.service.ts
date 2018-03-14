import { Injectable } from '@angular/core';

@Injectable()
export class SerialMismatchService {

    uploadSUmmary = [
        {
            name: 'File 001',
            code: 'GO 50',
            status: 'Processed',
            count: '5000',
            duplicates: '10 in file',
            format: '5'
        },
        {
            name: 'File 002',
            code: 'GO 100',
            status: 'Ready to Process',
            count: '1000',
            duplicates: '0',
            format: '0'
        },
        {
            name: 'File 003',
            code: 'GO 100',
            status: 'Add t o System',
            count: '3000',
            duplicates: '0',
            format: '0'
        }
    ];

    historySummary = [
        {
            name: 'File 004',
            code: 'GO 1000',
            status: 'Completed',
            count: '3000',
            range: '000001-003000',
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