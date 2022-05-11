import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  get getChampion() {
    return this.characterService.championList;
  }

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  goToDetails() {
    this.router.navigate(['./idCharacter']);
  }

  ngOnInit(): void {
    this.characterService.getChampions();
  }
}
