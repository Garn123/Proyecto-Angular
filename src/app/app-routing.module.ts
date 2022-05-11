import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersModule } from './pages/characters/characters.module';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
