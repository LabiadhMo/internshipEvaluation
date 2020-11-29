import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './modules/general/home/home.component';
import { DataComponent } from './modules/general/data/data.component';
import { SettingsComponent } from './modules/general/settings/settings.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VimeModule } from '@vime/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorService } from './modules/Spinner/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    SettingsComponent,
    NotFoundComponent,
  
  ],

  imports: [
    
    HttpClientModule,
    ReactiveFormsModule,
    VimeModule,
    DragDropModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
