import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { NgxPaginationComponent } from './ngx-pagination/ngx-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { CompletedStatusPipe } from './completed-status.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CustomPaginationComponent,
    NgxPaginationComponent,
    CompletedStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
