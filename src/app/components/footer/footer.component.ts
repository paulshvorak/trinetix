import { Component, OnInit } from '@angular/core';
import socials from '../../../test-data/socials.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socials:{src:string, alt:string, href:string}[] = socials;

  constructor() { }

  ngOnInit(): void {
  }

}
