import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'death-count',
    loadChildren: () => import('./pages/death-count/death-count.module').then( m => m.DeathCountPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./pages/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'characters-details',
    loadChildren: () => import('./pages/character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'episodes-details',
    loadChildren: () => import('./pages/episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
