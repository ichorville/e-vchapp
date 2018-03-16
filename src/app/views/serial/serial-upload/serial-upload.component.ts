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

	public uploader: FileUploader = new FileUploader({ url: 'https://10.20.10.21/file/upload' });
	public hasBaseDropZoneOver: boolean = false;
	console = console;

	isSelected = false;

	constructor () { }

	ngOnInit() {
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
		console.log(event.value);
		if (event.value == undefined) {
			this.isSelected = false;
		} else {
			this.isSelected = true;
		}
	}
}
