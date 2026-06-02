import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './top-bar/top-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBar, TopBar],
  templateUrl: './app.html'
})
export class App {}
