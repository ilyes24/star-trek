import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  id: any;
  episode: any;
  episodeSubject = new Subject<any>();
  episode$ = this.episodeSubject.asObservable();

  constructor(private route: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.episodeService.getList().subscribe(
      data => {
        let seasons = data;
        seasons.forEach(season => {
          let episode = season.episodes.filter(e => e.episodeUid == this.id);
          if (episode.length > 0){
            this.episode = episode[0];
            console.log(this.episode);
            this.episodeSubject.next(this.episode);
          }
        });
      }
    )
  }

}
