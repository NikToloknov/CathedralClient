//Страница всех проектов
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';

@Component({
    selector: 'my-allproject',
    template: `
    <h1>Projectpage</h1>
    `,
	directives: [RouterLink]
})
export class AllProject { }