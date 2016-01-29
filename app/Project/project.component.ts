//Страница проекта
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import {Stage} from './Stage/stage'
import {StageComponent} from './Stage/stage.component'

@Component({
    selector: 'my-project',
    template: `
<<<<<<< HEAD
    <h1>Project page</h1>  
    <div class="col-md-4">
		<ul class="nav nav-pills nav-stacked">
            <li class="active"><a [routerLink]="['Stage']">Этапы</a></li>
            <li><a href="#description">Описание</a></li>
            <li><a href="#git">Git</a></li>
            <li><a href="#files">Файлы</a></li>
            <li><a href="#comment">Комментарии</a></li>
          </ul>
    </div>
    <div class="col-md-8">
    <my-stage></my-stage>  
    <div class ="Container" style="width:100%">
    	<router-outlet></router-outlet>
    </div>
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
=======
    <h1>Project page</h1>
    
    `,
    directives: [RouterLink]
})
export class Project { 

}
>>>>>>> 7a05e49519ad7c6bd52809f7799a15d87887e16c
