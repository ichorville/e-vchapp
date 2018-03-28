import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { SerialMismatchService } from './serial-management.service';

@Component({
	selector: 'app-serial-mismatch',
	templateUrl: './serial-management.component.html',
	styleUrls: ['./serial-management.component.css']
})
export class SerialManagementComponent implements OnInit {

	// summary table
	summaryColumns: any[];
	summaryRows: any[];
	summaryTitle: string;

	uploadSummary: any[];
	uploadLoadingCompleted: boolean;

	// history table
	historyColumns: any[];
	historyRows: any[];
	historyTitle: string;

	historySummary: any[];
	historyLoadingCompleted: boolean;

	constructor(
		private snackBar: MatSnackBar,
		private loader: AppLoaderService,
		private _sms: SerialMismatchService
	) { 
		this.uploadLoadingCompleted = false;		
		this.summaryTitle = 'Uploaded File';
		this.uploadSummary = [];
		this.summaryColumns = [
			{ name: 'File name', attr: 'name', type: 'string' },
			{ name: 'Product Code', attr: 'code', type: 'string' },
			{ name: 'Status', attr: 'status', type: 'button' },
			{ name: 'Item Count', attr: 'count', type: 'string' },
			{ name: 'Duplicates', attr: 'duplicates', type: 'string' },
			{ name: 'Invalid Format', attr: 'format', type: 'string' },
			{ name: '', attr: 'format', type: 'string' },
			{ name: '', attr: 'format', type: 'string' },
		];
		this.historyLoadingCompleted = false;		
		this.historyTitle = 'History';
		this.historySummary = [];
		this.historyColumns = [
			{ name: 'File name', attr: 'name', type: 'string' },
			{ name: 'Product Code', attr: 'code', type: 'string' },
			{ name: 'Status', attr: 'status', type: 'string' },
			{ name: 'Item Count', attr: 'count', type: 'string' },
			{ name: 'Serial Range', attr: 'range', type: 'string' },
			{ name: 'Batch Id', attr: 'badge', type: 'string' },
			{ name: 'User', attr: 'user', type: 'string' },
			{ name: 'Completed Date', attr: 'date', type: 'string' }
		];
	}

	ngOnInit() {
		this._sms.allUploads().then((uploadSummary) => {
			this.uploadSummary = uploadSummary;
			this.openLoader();
			this.updateSummaryRows();
		});

		this._sms.allHistories().then((historySummary) => {
			this.historySummary = historySummary;
			this.updateHistoryRows();
		});
	}

	private updateSummaryRows() {
		this.summaryRows = [];
		this.uploadSummary.forEach(element => {
			this.summaryRows.push({
				name: element['name'],
				code: element['code'],
				status: element['status'],
				count: element['count'],
				duplicates: element['duplicates'],
				format: element['format'],
				// for delete recognition
				toBeDeleted: element['code']
			});
		});
		this.uploadLoadingCompleted = true;
	}

	private updateHistoryRows() {
		this.historyRows = [];
		this.historySummary.forEach(element => {
			this.historyRows.push({
				name: element['name'],
				code: element['code'],
				status: element['status'],
				count: element['count'],
				range: element['range'],
				badge: element['badge'],
				user: element['user'],
				date: element['date'],
				// for delete recognition
				toBeDeleted: element['code']
			});
		});
		this.historyLoadingCompleted = true;
	}

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}

	openLoader() {
		this.loader.open('Loading');
	}

	closeLoader(event) {
		this.loader.close();
	}
}
