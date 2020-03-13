import { Component, OnInit } from '@angular/core';
import services from '../../../test-data/services.json';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services:{src:string, title:string, description:string}[] = services;

  constructor() { }

  ngOnInit(): void {
  }

}
