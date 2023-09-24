// mettre ça dans le cmd : ng new ng-pokemon-app --minimal --style=css (ng new = création nouveau fichier | ng-pokemon-app = nom du fichier 
// minimal = (config) que les fichiers nécessaire | style=css = (config)avoir un fichier css et non un autre fichier pour l'app)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path: '**', component: PageNotFundComponent}
  // ** = toute url possible ( à mettre tout en bas au risque d'avoir des problèmes)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
