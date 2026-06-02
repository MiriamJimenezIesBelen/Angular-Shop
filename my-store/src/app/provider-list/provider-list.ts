import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { providers } from '../providers';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './provider-list.html',
  styleUrls: ['./provider-list.css']
})
export class ProviderList {

  providers = providers;

}
