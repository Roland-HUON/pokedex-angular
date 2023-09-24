//ng generate component pokemon/edit-pokemon
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h2 class="center">Édition du pokémon : {{ pokemon?.name }}</h2>
  <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture">
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent {
  pokemon:Pokemon | undefined;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
    ){}

  ngOnInit(){
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }
}
