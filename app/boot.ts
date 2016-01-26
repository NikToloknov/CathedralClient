import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {Header} from './Header/header.component';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, Route, RouterOutlet, LocationStrategy, APP_BASE_HREF, HashLocationStrategy} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);