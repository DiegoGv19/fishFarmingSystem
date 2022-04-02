
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rest } from '../../Interfaces/rest.interface';
@Component({
  selector: 'app-restore-password-form',
  templateUrl: './restore-password-form.component.html',
  styleUrls: ['./restore-password-form.component.scss']
})
export class RestorePasswordFormComponent {
 passwordForm : FormGroup | undefined;
 
 passwordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,26}$/;
 constructor( private router : Router, private formBuilder : FormBuilder, private toastr: ToastrService){
   this.restoreForm();
 }
 private restoreForm(){
   this.passwordForm = this.formBuilder.group({
     password: ['',[Validators.required,Validators.pattern(this.passwordPattern)]],
     confirPassword:['',Validators.required]
   })
 }
 onSubmit(formValue: Rest){
   if(formValue.password != formValue.rePassword){
     console.log(formValue.password.toString)
    return this.toastr.warning('Both password must be equal','Alert');
   }
   
   else {
    return this.toastr.warning('Both password are equal','Alert');
   }

  
 }
}