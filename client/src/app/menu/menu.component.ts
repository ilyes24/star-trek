import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  episodes : any[] = []
  episodesGroup:FormGroup;
  episodesList : any[] = [];
  season:any;

  constructor(private episodeService: EpisodeService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.episodesGroup = this.fb.group({
      season: [null]
    });
    this.episodeService.getList().subscribe(
      data => {
        this.episodes = data;
      }
    )
  }

  onChange(newValue){
    console.log(newValue);
    this.season = this.episodesGroup.value.season;
    this.episodesList = this.episodes.filter(e => e.seasonNumber == this.episodesGroup.value.season)[0].episodes;
  }

}
