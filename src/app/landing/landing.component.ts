import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  movieName: any = '';
  Title: any = '';
  Year: any = '';
  Plot: any = '';
  Ratings: any = '';
  Poster: any = '';
  result: any = false;
  Released: any = '';
  Actors: any = '';

  movieform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieform = this.fb.group({
      title: ['']
    });
  }

  ngOnInit(): void {}

  searchMovie() {
    this.result = true;
    this.movieName = this.movieform.value.title;

    fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${this.movieName}`).then((data) => data.json()).then((cData) => this.displayData(cData))
  }

  displayData(dataArray: any) {
    this.Title = dataArray.Title;
    this.Year = dataArray.Year;
    this.Plot = dataArray.Plot;
    this.Ratings = dataArray.Ratings;
    this.Poster = dataArray.Poster;
    this.Released = dataArray.Released;
    this.Actors = dataArray.Actors;
  }
}
