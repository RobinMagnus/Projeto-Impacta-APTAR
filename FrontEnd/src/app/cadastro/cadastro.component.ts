import { Component } from '@angular/core';
import {CadastroService} from "../services/cadastro.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
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

  onCancel(){
    console.log("onCancel")

  }


}
