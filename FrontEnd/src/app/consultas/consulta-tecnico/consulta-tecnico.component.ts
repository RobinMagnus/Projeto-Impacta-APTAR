import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import { TecnicoDtoinput } from 'src/app/models/tecnico-dtoinput';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormTecnicoComponent } from 'src/app/cadastro/form-tecnico/form-tecnico.component';

@Component({
  selector: 'app-consulta-tecnico',
  templateUrl: './consulta-tecnico.component.html',
  styleUrls: ['./consulta-tecnico.component.css']
})
export class ConsultaTecnicoComponent {


  
  tecnicoEncontrado?:TecnicoDtoinput ;
  tipoUsuario?: string;


  constructor(private route: ActivatedRoute,
  private authService: AuthService,
  private dialog: MatDialog, 
  private router: Router,

  ) {}

   ngOnInit() {
    
    this.tecnicoEncontrado = this.authService.getTecnicoEncontrado();
    console.log(this.tecnicoEncontrado);
    this.tipoUsuario = history.state.tipoUsuario;

   }
    
    editarTecnico() {
      const dialogRef = this.dialog.open(FormTecnicoComponent, {
      
        data: { tecnico: this.tecnicoEncontrado } 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
        // Adicione aqui qualquer lógica que precise ser executada após fechar o diálogo
      });
  
      this.router.navigate(['consultaTecnico', 'perfil-tecnico', this.tecnicoEncontrado?.id]);
    }
}  





