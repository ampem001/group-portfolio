import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DATA_URL } from '../../shared/constants/constants';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from '../../shared/profile-card/profile-card.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'folio-home',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent,
    RouterModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public data$: Observable<any> = new Observable();

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.data$ = this.http.get(DATA_URL + 'data.json');
  }

}
