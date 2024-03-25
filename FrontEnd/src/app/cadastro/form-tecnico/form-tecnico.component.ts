import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {CadastroService} from "../../services/cadastro.service";
import {TecnicoDtoinput} from "../../models/tecnico-dtoinput";
import {distinctUntilChanged, empty, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-form-tecnico',
  templateUrl: './form-tecnico.component.html',
  styleUrls: ['./form-tecnico.component.css']
})
export class FormTecnicoComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroService
  ) {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, [Validators.required, this.validarCPF.bind(this)]],
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

    this.form.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap((value: any) => console.log('status CEP:', value)),
        switchMap((status: any) => status === 'VALID' ?
          this.service.consultaCEP(this.form.get('endereco.cep')?.value)
          : empty()
        )
      )
      .subscribe((dados: any) => dados ? this.populaDadosform(dados) : {});
  }

  onSubmitTec() {
    console.log(this.form)
    const tecnicoData: TecnicoDtoinput = this.form.value;
    this.service.saveTec(tecnicoData).subscribe(
      response => {
        console.log('Técnico salvo com sucesso!', response);
      },
      error => {
        console.error('Erro ao salvar técnico:', error);
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

  validarCPF(control: AbstractControl): ValidationErrors | null {
    const  cpf = control.value;
    if (cpf == null) {
      return null;
    }
    const cpfValido = this.service.validarCPF(cpf);
    return cpfValido ? null : { 'cpfInvalid': true };
  }

  equalsTo(otherField: string): ValidatorFn {
    return (formControl: AbstractControl) => {
      const field = formControl.root.get(otherField) as AbstractControl;
      if (field && field.value !== formControl.value) {
        return {equalsTo: true};
      }
      return null;
    };

  }
}


