import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  tackerVideo = 'RS53F-EqNx0';
  youtubeIframe: any;

  constructor() {}

  ngOnInit(): void {}
}
