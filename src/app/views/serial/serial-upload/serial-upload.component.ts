import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FileUploader, FileLikeObject, FileUploaderOptions } from 'ng2-file-upload';

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

	uo: FileUploaderOptions = {};

	public uploader: FileUploader = new FileUploader({ 
		url: 'http://10.20.10.21/file/upload'
	});
	
	constructor () {
		this.uploadElements = [];
		this.uo.headers = [{ name: 'x-ms-blob-type', value : 'BlockBlob' } ]
		this.uploader.setOptions(this.uo);
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
			let currentHeader: FileUploaderOptions = {};
			currentHeader.headers = [{ name: element['name'], value: element['name']}];
			this.uploadElements.forEach(uploadElement => {
				if (uploadElement['code'] == element['name']) {
					uploadElement['uploader'].setOptions(currentHeader);
				}
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
		console.log(event);
		event[0].additionalParameter = {
			type: this.selectedElement
		};

		this.uploadElements.forEach(element => {
			console.log(element);
			if (element['code'] == this.selectedElement) {
				element['uploader'].addToQueue(event);
			}
			element['uploader'].onAfterAddingFile = (file) => { 
				console.log(element['formData']);	
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
