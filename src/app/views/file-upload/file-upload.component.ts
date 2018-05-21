import { Component, OnInit } from '@angular/core';

import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

	public uploader: FileUploader = new FileUploader({ url: '`https://10.20.10.21/file/upload' });
	public hasBaseDropZoneOver: boolean = false;
	console = console;

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
}
