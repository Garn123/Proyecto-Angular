import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';
import { ActivatedRoute } from '@angular/router';
import { Champion } from 'src/app/shared/models/models';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  public champion!: Champion;

  constructor(
    private characterService: CharacterService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSingleChampion();
  }

  getSingleChampion() {
    this.activeRoute.params.subscribe((params) => {
      const { idCharacter } = params;
      this.characterService
        .getSingleChampion(idCharacter)
        .subscribe((data: any) => {
          const dataResult: Champion = data;
          this.champion = dataResult;
        });
    });
  }
}
