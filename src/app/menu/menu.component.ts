import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  seasons: any[] = [];
  episodes: any[] = [];

  constructor(private episodeService: EpisodeService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.episodeService.getEpisodes().pipe(takeUntil(this.destroy$)).subscribe((episodes: any[]) => {
      this.episodes = episodes;
      episodes.map(episode => {
        this.seasons.push(episode.seasonNumber);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
