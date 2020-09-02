import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouter-demande-client',
  templateUrl: './ajouter-demande-client.component.html',
  styleUrls: ['./ajouter-demande-client.component.scss']
})
export class AjouterDemandeClientComponent implements OnInit {

  type_demande_id='';
  responsable_id='';
  demandes=[
    {id:1,name:'demande1'},
    {id:2,name:'demande2'},
    {id:3,name:'demande2'},
    {id:4,name:'demande4'},
    {id:5,name:'demande5'},
    {id:6,name:'demande6'},
    {id:7,name:'demande7'},
    {id:8,name:'demande8'}
  ];

  responsables=[
    {id:1,name:'responsable1'},
    {id:2,name:'responsable2'},
    {id:3,name:'responsable2'},
    {id:4,name:'responsable4'},
    {id:5,name:'responsable5'},
    {id:6,name:'responsable6'},
    {id:7,name:'responsable7'},
    {id:8,name:'responsable8'}
  ];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  demandeClientForm = this.fb.group({
    objet_demande:[''],
    type_demande:[''],
    responsable:[''],
    date_demande:[''],
    observation:['']
  });

  
  onAddDemandeClient(){
    console.log("la date choisie : "+this.demandeClientForm.get('date_demande').value);
  }
}
