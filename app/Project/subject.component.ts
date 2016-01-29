import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS, Headers, RequestOptionsArgs} from 'angular2/http';


import {Subject} from "./subject";


@Component({
    selector: 'my-subject', viewProviders: [HTTP_PROVIDERS],
    template: `
    <h1>Subject page</h1>
    <div class="col-md-6">
        <div class="panel panel-default" *ngFor="#sub of subject"  (click) = "onSelect(sub)">
          <h4>{{sub.Topic.Title}}</h4>
          <h5>{{sub.Topic.Date}}</h5>
          <h5>{{sub.Subject}}</h5>
          <h5>{{sub.Teacher.Surname +" "+ sub.Teacher.Name +" "+ sub.Teacher.Patronomic}}</h5>
        </div>
    </div>
    <div class="col-md-6" *ngIf="subs">
        <h3>{{subs.Topic.Title}}</h3>
      	<div>{{subs.Topic.Description}}</div>
       <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Взять проект</button>
     <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" style ="width:500px">
        <div class="modal-content">
       <div style = "margin:10px">
        <form class="form-signin">
            <h2 class="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input #login type="text" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input #password type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" (click) = "onJoin(login.value,password.value)">Sign in GitHub</button>
          </form>
          <div style="width:100%" *ngIf = 'message'><label>{{message}}</label></div>
        </div>
        </div>
      </div>
    </div>
    </div>    
    `,
    
    directives: [RouterLink]
})
export class SubjectComponent {


	//public subject: Subject;
	public subs:Object;
  public subject: Object[];

  constructor(public http: Http)
  {
      this.GetJson();
  }


	onSelect(subject) 
	{ 
		console.log(this.subs);
    this.subs= subject;
	}

  onJoin(login,password)
  {
    var s = this.subs["Topic"];
    var body = JSON.stringify({ topicId: s["ID"], gitLogin: login, gitPassword: password})
    var head = new Headers();
    head.append('Content-Type', 'application/json');
    head.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
    this.http.post('http://localhost/project/addproject', body, { headers: head })
      .map(tok=> tok.json())
      .subscribe(tok=> {
        console.log(tok["access_token"]);
      },
      err=> {
        console.log(err);
      })
  }

  GetJson()
  {
    var head = new Headers();
    head.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
    this.http.get('http://localhost/topic/gettopics/df1f8eba-ae68-433b-ac6a-77cd5db27c9e', { headers: head })
      .map(tok=> tok.json())
      .subscribe(tok=> {this.subject = tok
      },
      err=> {console.log(err);})
    console.log(localStorage.getItem('id_token'));
  }	
}