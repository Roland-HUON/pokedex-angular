// first case if ng serve doesn't work :
// (ng : Impossible de charger le fichier C:\Users\huonr\AppData\Roaming\npm\ng.ps1, car l’exécution de scripts est désactivée sur ce système. Pour plus
// d’informations, consultez about_Execution_Policies à l’adresse https://go.microsoft.com/fwlink/?LinkID=135170.
// Au caractère Ligne:1 : 1
// + ng serve
// + ~~
//     + CategoryInfo          : Erreur de sécurité : (:) [], PSSecurityException
//     + FullyQualifiedErrorId : UnauthorizedAccess)
// Answer : 
//1. set-ExecutionPolicy RemoteSigned -Scope CurrentUser (Enter)
//2. Get-ExecutionPolicy (Enter)
//3. Get-Executionpolicy -List (Enter)     and then you can do the ng serve
// set-ExecutionPolicy RemoteSigned -Scope CurrentUser



// import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon';


// @Component({//@...= décorateur (construction d'un composant web)
//   selector: //donner un nom au composant
//   'app-root', 
//   templateUrl: //création code html 
//   'app.component.html'
// })
// export class AppComponent implements OnInit{
//   pokemonList: Pokemon[] = POKEMONS;
//   pokemonSelected: Pokemon|undefined;
//   ngOnInit() {
//     console.table(this.pokemonList);
//     // this.selectPokemon(this.pokemonList[0]);
//     // console.log(POKEMONS[0]["name"]);
//   }
//   selectPokemon(pokemonId: string){
//     const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
//     // const id = +pokemonId;//+ va transformer la valeur obtenue (qui était en string) en un nombre
//     if(pokemon){
//       console.log(`Vous avez sélectionner le pokémon ${pokemon.name}.`)
//       this.pokemonSelected = pokemon;
//     } else {
//       console.log(`Vous avez sélectionner un pokémon inexistant.`)
//       this.pokemonSelected = pokemon;
//     }
//   }
// }
import { Component } from '@angular/core';

@Component({//@...= décorateur (construction d'un composant web)
  selector: //donner un nom au composant
  'app-root', 
  templateUrl: //création code html 
  'app.component.html'
})
export class AppComponent {}