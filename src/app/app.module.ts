import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonComponent } from './components/person.component';
import { JobComponent } from './models/IJob';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonComponent,
    JobComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
