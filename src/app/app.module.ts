import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditInputComponent } from './edit-input/edit-input.component';
import { AutofocusDirective } from './autofocus.directive';
import { FooterComponent } from './footer/footer.component';
import { DegatsPhysiqueComponent } from './degats-physique/degats-physique.component';
import { DegatsCosmicComponent } from './degats-cosmic/degats-cosmic.component';
import { DefensePhysiqueComponent } from './defense-physique/defense-physique.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { DefenseCosmicComponent } from './defense-cosmic/defense-cosmic.component';
import { DegatsToggleComponent } from './degats-toggle/degats-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    EditInputComponent,
    AutofocusDirective,
    FooterComponent,
    DegatsPhysiqueComponent,
    DegatsCosmicComponent,
    DefensePhysiqueComponent,
    YoutubeComponent,
    DefenseCosmicComponent,
    DegatsToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
