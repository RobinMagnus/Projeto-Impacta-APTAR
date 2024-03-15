import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
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
      nome: [null, Validators.required],
      cnpj: [null, [Validators.required,  this.validarCNPJ.bind(this)]],
      telefone: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, CadastroService.cepValidator]],
        logradouro: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      confirmarSenha: [null, [Validators.required, this.equalsTo('senha')]]
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
      this.service.consultaCEP(cep)?.subscribe((dados: any) => {
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

  validarCNPJ(control: AbstractControl): ValidationErrors | null {
    const cnpjValue = control.value;
    if (cnpjValue == null) {
      return null;
    }
    const cnpjValido = this.service.validarCNPJ(cnpjValue);
    return cnpjValido ? null : { 'cnpjInvalido': true };
  }


  equalsTo(otherField: string): ValidatorFn {
    return (formControl: AbstractControl) => {
      const field = formControl.root.get(otherField) as AbstractControl;
      if (field && field.value !== formControl.value) {
        return {equalsTo: true};
      }
      return null;
    }
  }

}
