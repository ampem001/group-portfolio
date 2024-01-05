import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DATA_URL } from '../../shared/constants/constants';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'folio-port',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './port.component.html',
  styleUrl: './port.component.scss'
})
export class PortComponent {
  public data$: Observable<any> = new Observable();

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.data$ = this.http.get(DATA_URL + this.activatedRoute.snapshot.params['folio'] + '.json');
  }

  scrollContact() {
    document.querySelector(".contact")?.scrollIntoView({ behavior: "smooth", block: "start"});
  }
}
