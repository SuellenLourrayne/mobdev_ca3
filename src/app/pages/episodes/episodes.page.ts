import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.episodes = this.api.getEpisodes();
  }
  openDetails(episode) {
    let episodeId = episode.episode_id;
    this.router.navigateByUrl(`/tabs/episode/${episodeId}`);
  }
}
