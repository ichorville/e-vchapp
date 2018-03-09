import { Injectable } from '@angular/core';
import { 
	CanActivate, 
	ActivatedRouteSnapshot, 
	RouterStateSnapshot, 
	Router 
} from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService implements CanActivate {
	public authToken;
	private isAuthenticated = false; 

	private url = 'http://10.20.10.21/evservice/token';  // URL to web api

	private headers: Headers;
    private options: RequestOptions;

	constructor (
		private http: Http,
		private router: Router
	) { 
		this.url = `https://10.20.10.21/evservice/token`;
		this.headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'	
		});
		this.options = new RequestOptions({headers: this.headers});
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (JSON.parse(localStorage.getItem('isAuthenticated'))) {
			return true;
		} else {
			this.router.navigate(['/sessions/signin']);
			return false;
		}
	}

	login(formData: any): Promise<any> {
		let object = `grant_type=password&username=${formData['username']}&password=${formData['password']}`;
		try {
			return this.http.post(this.url, object, this.options).toPromise().then((response) => {
				return response.status;
			});
		} catch (error) {
			
		}
	}
}