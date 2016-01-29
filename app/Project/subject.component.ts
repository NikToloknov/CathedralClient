import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';

import {Subject} from "./subject";


@Component({
    selector: 'my-subject',
    template: `
    <h1>Subject page</h1>
<div class="col-md-6">
	<ul>
      <li class="panel panel-primary" *ngFor="#sub of subs"  (click) = "onSelect(sub)">
      	<span>Name: </span>{{sub.name}}
		<div><label>lesson: </label>{{sub.lesson}}</div>
      	<div><label>TYT ESCHO DOLJNA BIT DATA NO YA NE ZNAYU KAKOY TIP DANNIH </label>{{sub.date}}</div>
      	<div><label>Teacher: </label>  {{sub.teacher}}</div>
        
      </li>
    </ul>
</div>
    <div class="col-md-6 panel panel-primary" *ngIf=subject>
		
      	<div>{{subject.date}}</div>
      	
    </div>

    
    `,
    
    directives: [RouterLink]
})
export class SubjectComponent {


	public subject: Subject;
	public subs = SUBJECTS;



	onSelect(subject: Subject) 
	{ 
		this.subject = subject;
		console.log(this.subject);
	}
	
}

var SUBJECTS: Subject[] = [
	{ "name": "FIRST", "lesson": "NUMBER 1", "date": 111222, "teacher": "MYTAREV" },
	{ "name": "SECOND", "lesson": "NUMBER 2", "date": 222333, "teacher": "MYTAREV" },
	{ "name": "THIRD", "lesson": "NUMBER 3", "date": 333444, "teacher": "MYTAREV" }
]