import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'folio-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() name: any;

  links: any = [
    {
      label: 'About me',
      target: '.about_me'
    },
    {
      label: 'Skills',
      target: '.skills'
    },
    {
      label: 'Experience',
      target: '.experience'
    },
    {
      label: 'Contact',
      target: '.contact'
    }
  ]

  scrollInto(target: string) {
    console.log('target', target);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start"});
  }
}
