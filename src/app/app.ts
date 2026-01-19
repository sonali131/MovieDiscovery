import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterLink और RouterLinkActive के लिए
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // यहाँ imports में SearchBarComponent और RouterModule का होना ज़रूरी है
  imports: [
    RouterModule,
    SearchBarComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { }
