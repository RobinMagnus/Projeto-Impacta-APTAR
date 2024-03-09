import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CadastroService} from "../services/cadastro.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service: CadastroService) {
    this.form = this.formBuilder.group( {
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    console.log("onCancel")

    /*this.service.save(this.form.value);*/

  }


}
