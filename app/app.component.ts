import {Component} from 'angular2/core';
import {Header} from './Header/header.component';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';

//import all pages
import {AllProject} from "./AllProject/allproject.component";
import {Profile} from "./Profile/profile.component";
import {Project} from "./Project/project.component";
import {SignIn} from "./SignIn/signin.component";
import {SubjectComponent} from "./Project/subject.component";

import {Subject} from "./Project/subject";
import {SubjectComponent} from "./Project/subject.component";

 
@Component({
    selector: 'my-app',
    template: `
    <header-bar></header-bar>
    <div class ="Container" style="padding-top:50px;width:100%">
    	<router-outlet></router-outlet>
    </div>
    `,
    directives:[Header, ROUTER_DIRECTIVES]
})

	@RouteConfig([

		{
			path: '/profile',
			name: 'Profile',
			component: Profile,
			useAsDefault: true
		},
		{ path: '/signin', name: 'SignIn', component: SignIn, useAsDefault: false },
		{ path: '/allproject', name: 'AllProject', component: AllProject, useAsDefault: false },
<<<<<<< HEAD
		{ path: '...', name: 'Project', component: Project, useAsDefault: false },
=======
		{ path: '/project/:id', name: 'Project', component: Project, useAsDefault: false },
>>>>>>> 7a05e49519ad7c6bd52809f7799a15d87887e16c
		{ path: '/subject', name: 'Subject', component: SubjectComponent, useAsDefault: false }
])


export class AppComponent {
	
	

}

