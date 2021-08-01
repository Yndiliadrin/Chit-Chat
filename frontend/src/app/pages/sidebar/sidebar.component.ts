import { ROOMS } from './../../shared/database/room.database';
import { Component, OnInit } from '@angular/core';
import { Emoji } from 'src/app/shared/database/emoji.database';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  rooms = ROOMS;
  emo = Emoji;

  constructor() { }

  ngOnInit(): void {
  }

}
