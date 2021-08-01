import { Component, OnInit } from '@angular/core';
import { ROOMS } from 'src/app/shared/database/room.database';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  rooms = ROOMS;

  constructor() { }

  ngOnInit(): void {
  }

}
