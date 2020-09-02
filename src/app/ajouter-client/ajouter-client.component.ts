import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { JsonPipe } from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  

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

  typeClient='';
  nomVille='Rabat';
  particulier='particulier';

  clientForm = this.fb.group({
    nom_client: ['',[Validators.required,Validators.minLength(4)]],//Validators.required,Validators.minLength(4)
    type_client: [''],
    cin_client:[{value:'',disabled:true}],//disabled: this.typeClient===this.particulier?true:false-------{value:'',disable:true}
    adresse_client:[''],
    ville_id:[''],
    code_postal_client:['',],
    email_client:['',],
    telephone_client:['',],
    obs_client:['',],
    cnss_client:['',],
    if_client:['',],
    ice_client:['',],
    rc_client:['',],
    rs_client:['',],
    siteweb_client:['',],
    
  });
  //matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

    this.clientForm.get('type_client').valueChanges
    .subscribe(newValue=>{
        if(newValue==='particulier'){
          this.clientForm.get('cin_client').enable();
          this.clientForm.get('cnss_client').disable();
          this.clientForm.get('if_client').disable();
          this.clientForm.get('ice_client').disable();
          this.clientForm.get('rc_client').disable();
          this.clientForm.get('rs_client').disable();
          this.clientForm.get('siteweb_client').disable();
        }
        else{
          this.clientForm.get('cin_client').disable();
          this.clientForm.get('cnss_client').enable();
          this.clientForm.get('if_client').enable();
          this.clientForm.get('ice_client').enable();
          this.clientForm.get('rc_client').enable();
          this.clientForm.get('rs_client').enable();
          this.clientForm.get('siteweb_client').enable();
        }
    });
  }

  get email_client(){
    return this.clientForm.get('email_client');
  }

  
   get nom_client() {
    return this.clientForm.get('nom_client');
  }
  
  onSubmit(){
    //code with httpClient... 
  }
}
