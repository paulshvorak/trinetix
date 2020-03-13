import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.scss']
})
export class ServicesItemComponent implements OnInit {

  @Input() servicesItem: object;

  constructor() { }

  ngOnInit(): void {
  }

}
