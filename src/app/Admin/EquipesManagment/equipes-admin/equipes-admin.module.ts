import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesAdminRoutingModule } from './equipes-admin-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {EquipesAdminManagmentComponent} from '../equipes-admin-managment/equipes-admin-managment.component';
import {AddEquipeComponent} from '../add-equipe/add-equipe.component';

const routes: Routes = [
  {path:'', component:EquipesAdminManagmentComponent},
  {path:'addEquipe', component:AddEquipeComponent},
//  {path:'forgotpwd', component:ForgotpasswordComponent},
];
@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes),
    CommonModule,
    EquipesAdminRoutingModule
  ],
  exports: [RouterModule]
})

export class EquipesAdminModule { }
