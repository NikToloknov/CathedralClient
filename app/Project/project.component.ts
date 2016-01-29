//Страница проекта
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import {Stage} from './Stage/stage'
import {StageComponent} from './Stage/stage.component'

@Component({
    selector: 'my-project',
    template: `
    <h1>Project page</h1>  
    <my-stage></my-stage>  
    <div class ="Container" style="padding-top:250px;width:100%">
    	<router-outlet></router-outlet>
    </div>
    `,    
    directives: [ROUTER_DIRECTIVES]
})

	@RouteConfig([

		{
			path: '/stage',
			name: 'Stage',
			component: StageComponent,
			useAsDefault: true
		}
	])


export class Project { }