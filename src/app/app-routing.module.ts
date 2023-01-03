import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstAppWithHtmlTemplateComponent } from './first-app-with-html-template/first-app-with-html-template.component';
import { FirstAppComponent } from './first-app/first-app.component';

const routes: Routes = [
  { 
    path: 'html', 
    component: FirstAppComponent,
    title: 'Home'
  },
  {
    path: '',
    component: FirstAppWithHtmlTemplateComponent,
    title: 'Home With Materials'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
