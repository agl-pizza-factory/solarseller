import 'hammerjs'

import { AUTH_PROVIDERS } from 'app/app.auth'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { COMPONENTS } from '../component'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { INITIAL_STATE } from './../state/initial-state'
import { NgModule } from '@angular/core'
import { PAGES } from './'
import { PIPES } from '../pipe'
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router'
import { SERVICES } from '../service'
import { STORES } from '../store'
import { environment } from '../environments/environment'
import { initialize } from 'statex'

initialize(INITIAL_STATE, {
  hotLoad: !environment.production,
  domain: 'agl-plus'
})

@NgModule({
  declarations: [
    AppComponent,
    ...PAGES,
    ...PIPES,
    ...COMPONENTS
  ],
  entryComponents: [
    ...COMPONENTS,
    ...PAGES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [
    ...STORES,
    ...SERVICES,
    ...AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
