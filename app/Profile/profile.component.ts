//Профиль студента
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';


@Component({
    selector: 'my-profile',
    template: `
    <h1>Profile Page</h1>
    `,
    directives: [RouterLink]
})
export class Profile { }