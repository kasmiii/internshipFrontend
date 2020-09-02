import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-fourniseur',
  templateUrl: './ajouter-fourniseur.component.html',
  styleUrls: ['./ajouter-fourniseur.component.scss']
})
export class AjouterFourniseurComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }


  fournisseurForm = this.formBuilder.group({
    nom_fournisseur: [''],//Validators.required,Validators.minLength(4)
    email_fournisseur: [''],
    tel_fournisseur:[''],//disabled: this.typeClient===this.particulier?true:false-------{value:'',disable:true}
    fax_fournisseur:[''],
    address_fournisseur:[''],
    ville_id:['',],
    code_postal_fournisseur:['',],
    rs_fournisseur:['',],
    siteweb_fournisseur:['',],
    cnss_fournisseur:['',],
    if_fournisseur:['',],
    ice_fournisseur:['',],
    rc_fournisseur:['',],
    observation:['',]
    
  });

  nomVille='';
  cities=[
    {id:1,name:'Rabat'},
    {id:2,name:'Fes'},
    {id:3,name:'Marrakech'},
    {id:4,name:'Sale'},
    {id:5,name:'Nador'},
    {id:6,name:'Oujda'},
    {id:7,name:'Tetouan'},
    {id:8,name:'tanger'}
  ];

  ngOnInit(): void {
  }

  onAddFournisseur(){
    const ville=this.fournisseurForm.get('ville_id').value;
    const nom_fournisseur=this.fournisseurForm.get('nom_fournisseur').value;
    console.log("city is:"+ville+"and nom de fournisseur is:"+nom_fournisseur);
    
  }

}
