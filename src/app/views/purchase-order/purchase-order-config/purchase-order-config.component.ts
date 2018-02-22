import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

import { PurchaseOrderService } from '../purchase-order.service';

@Component({
	selector: 'app-purchase-order-config',
	templateUrl: './purchase-order-config.component.html',
	styleUrls: ['./purchase-order-config.component.css']
})
export class PurchaseOrderConfigComponent implements OnInit {

	url: string;
	loadingCompleted: boolean;
	rows: any[];
	columns: any[];

	agents: any[];

	formUpper: FormGroup;
	formLower: FormGroup;

	constructor(
		private _pos: PurchaseOrderService,
		private snackBar: MatSnackBar,
		private loader: AppLoaderService,
		private route: ActivatedRoute
	) {
		this.url = 'purchase-orders'
		this.agents = [];
		this.rows = [];
		this.columns = [
			{ name: 'ID', attr: 'id', type: 'string' },
			{ name: 'Serial', attr: 'name', type: 'string' }
		];
	}

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');
		this._pos.getByID(id).then((agents) => {
			this.agents = agents;
		});

		this.formUpper = new FormGroup({
			serialStart: new FormControl('', [
				Validators.required
			]),
			serialEnd: new FormControl('', [
				Validators.required
			])
		});

		this.formLower = new FormGroup({
			serialStart: new FormControl('', [
				Validators.required
			]),
			qty: new FormControl('', [
				Validators.required
			])
		});
	}

	filterResults(form) {
		if (form.valid) {
			let filterParams = {};

			let keyValues = Object.keys(form.value);
			keyValues.forEach(element => {
				filterParams[element] = form.value[element];
			});

			this._pos.getSerials(filterParams).then((serials) => {
				this.rows = serials;
				this.loadingCompleted = false;
					setTimeout(() => {
						this.openLoader();
						this.updateRows(this.rows);
					}, 200);
			});

		} else {
			this.openSnackBar('Form Fields Incomplete!');
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

	private updateRows(arr) {
		this.rows = [];
		arr.forEach(element => {
			this.rows.push({
				id: element['id'],
				name: element['name']
			});
		});
		this.loadingCompleted = true;
	}

	SubmitPO() {
		if (this.rows.length != 0) {
			this.openSnackBar('Purchase Order Approved!');
		} else {
			this.openSnackBar('No Valid Serials Available!');
		}
	}
}
