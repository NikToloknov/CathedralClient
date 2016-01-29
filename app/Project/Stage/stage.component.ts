import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';

import {Stage} from "./stage";


@Component({
    selector: 'my-stage',
    template: `
    <h1>Stages component</h1>
	<div class="col-md-6">
		<ul *ngFor="#st of stgs">
	      <li class="panel panel-primary"  *ngIf="st.complete===false" >
	      	<div >	
		      	<span>ID: </span>{{st.id}}
				<div><label>Name: </label>{{st.name}}</div>
		      	<button (click) = "onSelect(st)"><label>delete</label></button>		      	
	        </div>
	      </li>
	    </ul>
	</div>
	<div class="col-md-6">
		<input #value type="text" />
		<button (click) = "onClick(value.value)"></button>
	</div>
    `,
    directives: [RouterLink]
})
export class StageComponent {


	public stages: Stage;
	public stgs = STAGES;



	onSelect(stage: Stage) {
		if(stage.complete==false)
		stage.complete = true;
		console.log(stage);
	}

	onClick(str: string)
	{
		this.stgs.push({
			id: STAGES.length + 1,
			name: str,
			complete:false
		})
		console.log(this.stgs);
	}

}

var STAGES: Stage[] = [
	{ "id": 1, "name": "FIRST", "complete": false },
	{ "id": 2, "name": "SECOND", "complete": false },
	{ "id": 3, "name": "THIRD", "complete": false }
]