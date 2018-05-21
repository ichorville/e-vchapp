import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

import { PurchaseOrderService } from '../purchase-order.service';

@Component({
	selector: 'app-purchase-order-list',
	templateUrl: './purchase-order-list.component.html',
	styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent implements OnInit {
	
	url: string;
	loadingCompleted: boolean;
	rows: any[];
	columns: any[];

	agents: any[];

	form: FormGroup;

	constructor(
		private _pos: PurchaseOrderService,
		private snackBar: MatSnackBar,
		private loader: AppLoaderService
	) {
		this.url = 'purchase-orders'
		this.agents = [];
		this.rows = [];
		this.columns = [
			{ name: 'ID', attr: 'id', type: 'string' },
			{ name: 'Item', attr: 'item', type: 'string' },
			{ name: 'Quantity', attr: 'qty', type: 'string' },
		];
	}

	ngOnInit() {
		this._pos.allAgents().then((agents) => {
			this.agents = agents;
		});

		this.form = new FormGroup({
			date: new FormControl('', [
				Validators.required
			]),
			agent: new FormControl('', [
				Validators.required
			])
		});

		// listen to form value changes
		this.form.valueChanges.subscribe(data => this.onValueChanged(data));
	}

	filterList(event) {
		if (this.form.valid) {
			let filterObject = {
				date: this.convert(this.form.value['date']),
				agent: this.form.value['agent']
			};
			this._pos.getOrders(filterObject).then((orders) => {
				this.rows = orders;
				this.loadingCompleted = false;
					setTimeout(() => {
						this.openLoader();
						this.updateRows(this.rows);
					}, 200);
			});
		} else {
			// date picker might be empty in this scenario
			this.openSnackBar('Please Fill Date Field');
		}
	}

	onValueChanged(data?: any) {
		if (!this.form.valid) {
			this.loadingCompleted = false;
			this.openSnackBar('Form Fields Empty');
		} 
	}

	filterResults() {
		if (this.form.valid) {
			this.filterList(event);
		} else {
			this.openSnackBar('Form Fields Empty');
		}
	}

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}

	// simple-datatable loader configuration
	openLoader() {
		this.loader.open('Loading');
	}

	closeLoader(event) {
		this.loader.close();
	}

	convert(str) {
		var date = new Date(str),
			mnth = ("0" + (date.getMonth()+1)).slice(-2),
			day  = ("0" + date.getDate()).slice(-2);
		return [ day, mnth, date.getFullYear() ].join("/");
	}

	private updateRows(arr) {
		this.rows = [];
		arr.forEach(element => {
			this.rows.push({
				id: element['id'],
				item: element['item'],
				qty: element['qty']
			});
		});
		this.loadingCompleted = true;
	}
}
