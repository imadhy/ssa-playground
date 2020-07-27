import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faDiscord = faDiscord;
  faTwitter = faTwitter;
  constructor() {}

  ngOnInit(): void {}
}
