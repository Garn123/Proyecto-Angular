import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterService } from 'src/app/service/character.service';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  exports: [
    CharactersComponent
  ],
  providers: [
    CharacterService
  ]
})
export class CharactersModule { }
