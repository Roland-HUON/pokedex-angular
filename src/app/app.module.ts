import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// declaration : classe de vues (composants, directives, pipes)
// exports: sous ensemble de classe de vues à exporter
// imports: classe nécessaire au fonctionnement du module
// providers: permet de fournir un service au module
// bootstrap: le composant racine pour le module racine