import {Component} from "angular2/core"
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';


@Component({
	selector: 'header-bar',
	template:`<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Cathedral Project</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a [routerLink]="['Profile']">Профиль</a></li>
            <li><a [routerLink]="['AllProject']">Проекты</a></li>
            <li><a href="#contact">Предметы</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Default</a></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li class="active"><a [routerLink]="['SignIn']">Войти<span class="sr-only">(current)</span></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
`,
	directives: [RouterLink]
})

export class Header{

	constructor(private _router: Router) {

	}
	onStepping(str){
		this._router.navigate([str]);
	}
}