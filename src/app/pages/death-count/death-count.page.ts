import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {

  deaths: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.deaths = this.api.getDeaths();
    }


}
