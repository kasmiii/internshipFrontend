import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';


const routes: Routes = [

  {
    path:'home',
  component:HomeComponent,
  children : [
    { 
      path: 'listeClients',
      component: ListeClientsComponent
     }
  ]
  },
  {
  path:'',redirectTo:'/home',
  pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
