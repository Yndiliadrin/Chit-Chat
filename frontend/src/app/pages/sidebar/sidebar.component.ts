import { ROOMS } from './../../shared/database/room.database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  rooms = ROOMS;

  constructor() { }

  ngOnInit(): void {
  }

}
