import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './componentes/header/header.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
{path:'', component: MenuComponent},
{path:'Fotos', component:FotosComponent},
{path:"Cadastro",component:CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
