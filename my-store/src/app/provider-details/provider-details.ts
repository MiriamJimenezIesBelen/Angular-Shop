import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { providers } from '../providers';
import { products } from '../products';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider-details.html'
})
export class ProviderDetails {

  private route = inject(ActivatedRoute);

  provider: any;

  providerProducts: any[] = [];

  constructor() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.provider =
      providers.find(p => p.id === id);

    this.providerProducts =
      products.filter(
        p => p.providerId === id
      );
  }
}
