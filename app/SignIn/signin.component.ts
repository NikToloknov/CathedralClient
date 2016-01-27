import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers, RequestOptionsArgs} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-signin', viewProviders: [HTTP_PROVIDERS],
    template: `
    <div style = "width:30%; margin-left:35%; margin-top:10%">
    <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input #email type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input #password type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" (click)="Log(email.value, password.value)">Sign in</button>
      </form>
      <div style="width:100%" *ngIf = 'message'><label>{{message}}</label></div>
    </div>
    `,
    directives: [RouterLink]
})
export class SignIn {

	message: string;
	constructor(public http: Http, private _router: Router) { }
	Log(email, password) {
		var body = "grant_type=password" + "&username=" + email + "&password=" + password;
		var head = new Headers();
		head.append('Content-Type', 'application/x-www-form-urlencoded');
		this.http.post('http://localhost/Token', body, { headers: head })
            .map(tok=> tok.json())
            .subscribe(tok=> {
				console.log(tok["access_token"]);
				localStorage.setItem('id_token', tok["access_token"]);
				this._router.navigate(["Profile"]);
			},
			err=> {
				console.log(err);
				if (err["status"] != 200) {
					this.message = "Имя пользователя или пароль указаны неправильно.";
					//var except = new CatchException(this._router);
					//except.CatchProcessing(err["status"], err["_body"]);

				}else{
					this._router.navigate(["Profile"]);

				}
			})
		console.log(localStorage.getItem('id_token'));
	}
 }