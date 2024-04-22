import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { AppComponent } from './app.component';
import { NgxPaginationComponent } from './ngx-pagination/ngx-pagination.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: AppComponent},
  { path: 'custom-pagination', component: CustomPaginationComponent},
  { path: 'ngx-pagination', component: NgxPaginationComponent},
  {path:'**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
