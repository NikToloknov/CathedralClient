//Профиль студента
import {Component} from 'angular2/core';
import {RouteConfig, Router, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers, RequestOptionsArgs} from 'angular2/http';
import {ChartDirective} from '../chart/chart.directive';


@Component({
    selector: 'my-profile',viewProviders:[HTTP_PROVIDERS],
    styles: [`
   .bigfont {
   		font-size:40pt;
		margin-top:0px;
		padding: 0px; 
	}
	.fontstyle {
   		font-size:130%;
		margin-top:0px;
		padding-left: 0px; 
	}
	.centerdiv{
		text-align:center;
 		width: 30px;
	}
	.divfon{
		background:url('../image/png1.png');
		background-size:100% 500px;
		height: 35%;
		width: 100%;
	}
	`
	],
    template: `
    <div >
		<div class="divfon">
		    <div  style="float: right; margin-right:7%; margin-top:2%" class="fontstyle">
				<div style="width:100%;">
					<lable style="width:100%">Фамилия </lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Имя </lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Отчество </lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">e-mail:</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">git:</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Телефон:8 904 185 81 50</lable>
				</div>
				<div style="width:100%;">
					<lable style="width:100%">Группа:</lable>
		  		 </div> 
		   </div>
		 </div>  


<div class="row">
  <div class="col-md-6">
       		  <div >
           			<canvas id="myChart" chart   width="500" height="250"></canvas>
              </div>
  </div>
  <div class="col-md-6" style="padding-top:25px">
        <div class="cell" style="padding-top:10px width:250px"><div >
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
							<div style="width:100%;padding-top:20px">
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
							<div style="width:100%;padding-top:20px">
								<lable style="width:100%;">Рейтинг по группе</lable>
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
							<div style="width:100%;padding-top:20px">
								<lable style="width:100%;">Открытые задачи</lable>
							</div>
							<div style="width:100%;">
								<h1 style="width:100%" class="bigfont">9</h1>
							</div>
						</div>	
					</div>										
 				</div>
 		</div>
    </div>
</div>




    </div>
    		     
    `,
    directives: [RouterLink,ChartDirective]
})
export class Profile { 
public profilInfo: Object[];
  public id=this._routeParams.get('id');
  constructor(public http: Http,
    private _router: Router,
    private _routeParams: RouteParams) {   
     this.profilInfo = null;
     }

 /* ngOnInit(){
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
  

  }*/

}