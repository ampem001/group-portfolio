import { Component, Input } from '@angular/core';

@Component({
  selector: 'folio-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() data: any;

}
