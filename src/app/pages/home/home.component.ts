import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DATA_URL } from '../../shared/constants/constants';
import { Observable } from 'rxjs';


@Component({
  selector: 'folio-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private data$: Observable<any> = new Observable();

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.data$ = this.http.get(DATA_URL);

    this.data$.subscribe((e) => console.log(e));
  }

}
