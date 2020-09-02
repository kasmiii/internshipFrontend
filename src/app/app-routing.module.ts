import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { TestComponent } from './test/test.component';
import { AjouterFourniseurComponent } from './ajouter-fourniseur/ajouter-fourniseur.component';
import { AjouterDemandeClientComponent } from './ajouter-demande-client/ajouter-demande-client.component';


const routes: Routes = [

  {
    path:'home',
  component:HomeComponent,
  children : [
    { 
      path: 'listeClients',
      component: ListeClientsComponent
     },
     {
       path:'ajouterClient',
       component:AjouterClientComponent
     },
     {
       path:'test',
       component:TestComponent
     },

     //Espace fournisseur
     {
       path:'ajouterFournisseur',
       component:AjouterFourniseurComponent
     },
     {
       path:'ajouterDemandeClient',
       component:AjouterDemandeClientComponent
     }
  ]
  },
  {
  path:'',redirectTo:'/home/listeClients',
  pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
