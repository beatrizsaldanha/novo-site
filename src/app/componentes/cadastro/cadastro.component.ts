import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],

})
export class CadastroComponent {
  Titulo: string = "Cadastro de usuários";

  Salvar():void{
    alert("teste");
  }
}


