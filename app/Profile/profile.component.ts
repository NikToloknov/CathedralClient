//Профиль студента
import {Component, ngOnInit} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers, RequestOptionsArgs} from 'angular2/http';

@Component({
    selector: 'my-profile',viewProviders:[HTTP_PROVIDERS],
    styles: [`
   .bigfont {
   		font-size:40pt;
		margin-top:0px;
		padding: 0px; 
	}
	.centerdiv{
		text-align:center;
 		width: 30px;
	}
	`
	],
    template: `
    <div *ngIf="profilInfo">
	    <div style="width:100%;display:table; padding-top:20px">
		    <div style="display:table-cell">
				<div style="width:100%;display:table">
					<div style="display:table-cell;" class="centerdiv">
						<div>
							<div style="width:100%;">
								<lable style="width:100%">Проектов всего</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%;" class="bigfont">9</h1>
							</div>
						</div>
						<div>
							<div style="width:100%;">
								<lable style="width:100%">Средняя оценка</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
						</div>
					</div>
					<div style="display:table-cell" class="centerdiv">
						<div>	
							<div style="width:100%;">
								<lable style="width:100%">Проектов закончено</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
							<div style="width:100%;">
								<lable style="width:100%">Рейтинг по группе</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
						</div>	
					</div>
					<div style="display:table-cell" class="centerdiv">
						<div>
							<div style="width:100%;">
								<lable style="width:100%">Комментариев</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
							<div style="width:100%;">
								<lable style="width:100%">Открытые задачи</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
						</div>	
					</div>										
 				</div>
		    </div>
		    <div style="display:table-cell; width:200px">
				<div style="width:100%;">
					<lable style="width:100%">Фамилия </lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Имя {{profilInfo.Name}}</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Отчество {{profilInfo.Patronomic}}</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">e-mail:{{profilInfo.Email}}</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">git:{{profilInfo.Github}}</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Телефон:8 904 185 81 50r</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Группа:{{profilInfo.GroupId}}</lable>
		  		 </div> 
		   </div>
		    <div style="display:table-cell">
			<div style="width:200px; height:400px;margin-left:0px; width:135px; height:141px; display:table-cell; background:#C78AB4"></div>
			<a>Редактировать</a>
		    </div>

	    </div>
    </div>
    `,
    directives: [RouterLink]
})
export class Profile implements ngOnInit { 
public profilInfo: Object[];
  public id=this._routeParams.get('id');
  constructor(public http: Http,
    private _router: Router,
    private _routeParams: RouteParams) {   
     this.profilInfo = null;
     }

  ngOnInit(){
     let id = this._routeParams.get('id');
     this.GetJson(id);
    }

  GetJson(str: string) {
    var head = new Headers();
    head.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));

    this.http.get('http://localhost/student/profile/' + str, { headers: head })
      .map(res => res.json())
    .subscribe(res => { this.profilInfo = res; console.log(this.profilInfo); },
    err=> {
      console.log(err);
    })
  

  }

}