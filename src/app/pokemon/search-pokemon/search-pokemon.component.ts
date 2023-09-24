//ng generate component pokemon/search-pokemon --inline-template=false
// Prog réactive !!!
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{
  //grâce à subject : stocker les recherches succesives de l'utilisateur {..."a"..."ab"..."abc"..."ab"..."abz"...}
  searchTerms = new Subject<string>();
  //Afficher les résultats des recherches successives
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ){}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      //{..."a"..."ab"..."abc"..."ab"..."abz"...}
      debounceTime(300),
      //élimine les requêtes de moins de 500 ms
      distinctUntilChanged(),
      //attend qu'il y a un changement, si changement
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //renvoie la pokémon pour ce que l'utilisateur entre dans le champs
      //concatMap/mergeMap/switchMap
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
