import { Component } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TecnicoDTOinput } from '../models/TecnicoDTOinput';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroService
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        logradouro: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      email: [null],
      senha: [null],
      confirmarsenha: [null],



    });
  }

  onSubmit() {
    console.log(this.form)
    const tecnicoData: TecnicoDTOinput = this.form.value;
    this.service.save(tecnicoData).subscribe(
      response => {
        console.log('Técnico salvo com sucesso!', response);
      },
      error => {
        console.error('Erro ao salvar técnico:', error);
      }
    );
  }
}
