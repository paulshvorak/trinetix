import { Component, OnInit } from '@angular/core';
import services from '../../../test-data/services.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public services:{img:string, title:string, description:string}[] = services;

  constructor() { }

  ngOnInit(): void {
  }

}
