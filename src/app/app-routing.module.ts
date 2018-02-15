import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CadastrarProdutoComponent} from "./cadastrar-produto/cadastrar-produto.component";
import {ListarProdutoComponent} from "./listar-produto/listar-produto.component";
import {BacklogComponent} from "./backlog/backlog.component";
import {RotasGuard} from "./rotas.guard";



const routes: Routes = [
  {path: 'https://a-virtual-servidor.herokuapp.com/', redirectTo: 'app', pathMatch: 'full'},
  {path: 'https://a-virtual-servidor.herokuapp.com/home', component: HomeComponent, canActivate: [RotasGuard]},
  {path: 'https://a-virtual-servidor.herokuapp.com/customer', component: CustomersComponent, canActivate: [RotasGuard]},
  {path: 'https://a-virtual-servidor.herokuapp.com/add', component: CreateCustomerComponent, canActivate: [RotasGuard]},
  //{path: 'login', component: LoginComponent},
  {path: 'https://a-virtual-servidor.herokuapp.com/cadastrarP', component: CadastrarProdutoComponent, canActivate: [RotasGuard]},


  {path: 'https://a-virtual-servidor.herokuapp.com/findbylastname', component: SearchCustomersComponent, canActivate: [RotasGuard]},
  {path: 'https://a-virtual-servidor.herokuapp.com/SistemaAtividade', component: BacklogComponent, canActivate: [RotasGuard]},
  {path: 'https://a-virtual-servidor.herokuapp.com/listarProduto', component: ListarProdutoComponent, canActivate: [RotasGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
