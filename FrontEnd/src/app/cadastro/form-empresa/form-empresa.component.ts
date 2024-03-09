import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CadastroService} from "../../services/cadastro.service";
import {EmpresaDTOinput} from "../../models/empresa-dtoinput";


@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroService
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cnpj: [null],
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

  onSubmitEmp() {
    console.log(this.form)
    const empresaData: EmpresaDTOinput = this.form.value;
    this.service.saveEmp(empresaData).subscribe(
      response => {
        console.log('Empresa salva com sucesso!', response);
      },
      error => {
        console.error('Erro ao salvar empresa', error);
      }
    );
  }

  consultaCEP() {

    const cep = this.form.get('endereco.cep')?.value;
    console.log(cep);
    if (cep != null && !cep.isEmpty) {
      this.service.consultaCEP(cep)?.subscribe((dados:any) => {
        this.populaDadosform(dados);
      });
    }
  }

  populaDadosform(dados: any) {
    console.log(dados)
    this.form.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }



}
