import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
	selector: 'app-serial-upload',
	templateUrl: './serial-upload.component.html',
	styleUrls: ['./serial-upload.component.css']
})
export class SerialUploadComponent implements OnInit {

	proCodeControl = new FormControl('', [Validators.required]);

	productCodes = [
		{ name: 'GO 50' },
		{ name: 'GO 100' },
		{ name: 'GO 1000'}
	];

	public hasBaseDropZoneOver: boolean = false;
	isSelected = false;
	selectedElement: string;
	uploadElements: any[];

	public uploader: FileUploader = new FileUploader({ 
		url: 'http://10.20.10.21/file/upload'
	});
	
	constructor () {
		this.uploadElements = [];
	}

	ngOnInit() {
		this.productCodes.forEach(element => {
			this.uploadElements.push({
				'code': element['name'],
				'uploader': new FileUploader({ 
					url: 'http://10.20.10.21/file/upload',
					additionalParameter: {
						type: element['name']
					}
				})
			});
		});

		this.uploader.onAfterAddingFile = (file) => {
			this.uploader.queue.forEach(element => {			
				if (element['file']['name'] == file['file']['name']) {
					let arr = [];
					this.uploader.queue.forEach(element => {
						if (element['file']['name'] == file['file']['name']) {
							arr.push(element);
						}
					});
					if (arr.length > 1) {
						this.uploader.removeFromQueue(element);
					}
				}
				if ((element['file']['type'] == 'application/vnd.ms-excel') || (element['file']['type'] == 'text/plain')) {
					
				} else {
					this.uploader.removeFromQueue(element);
				}
			});
		};
	}

	public fileOverBase(e: any): void {
		this.hasBaseDropZoneOver = e;
	}

	onChange(event) {
		try {
			if (event.value == undefined) {
				this.isSelected = false;
			} else {
				this.isSelected = true;
			}
			this.selectedElement = event['value']['name'];
		} catch (e) {
			this.selectedElement = 'undefined';
		}
	}

	dropped(event) {
		this.addToQueue(event);
	}

	selected(event) {
		this.addToQueue(event);
	}

	addToQueue(event) {
		this.uploadElements.forEach(element => {
			if (element['code'] == this.selectedElement) {
				element['uploader'].addToQueue(event);
			}
			element['uploader'].onAfterAddingFile = (file) => { 
				element['uploader'].queue.forEach(element => {
					if (element['file']['name'] == file['file']['name']) {
						let arr = [];
						element['uploader'].queue.forEach(element => {
							if (element['file']['name'] == file['file']['name']) {
								arr.push(element);
							}
						});
						if (arr.length > 1) {
							element['uploader'].removeFromQueue(element);
						}
					}
					if ((element['file']['type'] == 'application/vnd.ms-excel') || (element['file']['type'] == 'text/plain')) {
	
					} else {
						element['uploader'].removeFromQueue(element);
					}
				});
			};
		});
	}
}
