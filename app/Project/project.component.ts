//Страница проекта
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';

@Component({
    selector: 'my-project',
    template: `
    <h1>Project page</h1>    
    `,    
    directives: [RouterLink]
})
export class Project { }