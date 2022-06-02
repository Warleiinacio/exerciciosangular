import { MangaComponent } from './component/sobre/manga/manga.component';
import { ImagensComponent } from './component/sobre/imagens/imagens.component';
import { HistoriaComponent } from './component/sobre/historia/historia.component';

import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sobre/historia', component: HistoriaComponent},
  {path: 'sobre/imagens', component: ImagensComponent},
  {path: 'sobre/manga', component: MangaComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
