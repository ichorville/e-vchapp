import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton, MatSnackBar } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	@ViewChild(MatProgressBar) progressBar: MatProgressBar;
	@ViewChild(MatButton) submitButton: MatButton;

	signinForm: FormGroup;

	constructor(
		private _as: AuthService,
		private router: Router,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			rememberMe: new FormControl(false)
		});
	}

	signin() {
		const signinData = this.signinForm.value;

		this.submitButton.disabled = true;
		this.progressBar.mode = 'indeterminate';

		this._as.validateUser(signinData).then((result) => {
			if (result == true) {
				this.openSnackBar('Login Successful');
				setTimeout(() => {
					this.router.navigateByUrl(`/dashboard`);
				}, 2000);
			} else {
				this.openSnackBar('Incorrect Username and Password');	
				this.signinForm.setValue({ username: '', password: '', rememberMe: false });

				this.submitButton.disabled = false;
				this.progressBar.mode = 'determinate';
			}
		});
	}

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}
}
