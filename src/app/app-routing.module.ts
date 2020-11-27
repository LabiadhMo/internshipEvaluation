import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './modules/general/data/data.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { SettingsComponent } from './modules/general/settings/settings.component';

const routes: Routes = [ { path: '', component: HomeComponent, },
{ path: 'data', component: DataComponent },
{ path: 'settings', component: SettingsComponent },
{ path: '**', component: NotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
