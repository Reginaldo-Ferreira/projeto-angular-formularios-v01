import { Usuario } from './../../../../p7-rotas/src/app/login/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  usuario: any = {
    nome: null,//'Reginaldo',
    email: null,//'reginaldods.ferreira@gmail.com',
    email2: null,//'reginaldods.ferreira@gmail.com',
    senha: null,//'senha',
    guarda_dados: false//true

  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);

  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'is-valid': campo.valid
    }
  }

}
