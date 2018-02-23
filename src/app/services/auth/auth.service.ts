import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
	public authToken;
	private isAuthenticated = false; // Set this value dynamically

	constructor (
		private router: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (JSON.parse(localStorage.getItem('isAuthenticated'))) {
			return true;
		} else {
			this.router.navigate(['/sessions/signin']);
			return false;
		}
	}

	validateUser(formData: any): Promise<boolean> {
		return Promise.resolve(true).then(() => {
			if (formData.username == '123456' && formData.password == '123456') {
				this.isAuthenticated = true;
				localStorage.setItem('isAuthenticated', JSON.stringify(true));
				return true;
			} else {
				return false;
			}
		});
	}
}