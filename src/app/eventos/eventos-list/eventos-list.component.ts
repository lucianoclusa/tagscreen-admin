import { Component, OnInit } from '@angular/core';
import {Evento} from '../evento.model';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  eventos:Evento[] = [
    new Evento("fiestaClusa", "Fiesta en lo de Lucho", new Date(), "http://is5.mzstatic.com/image/thumb/Purple128/v4/da/2e/63/da2e639b-6f61-2361-4367-492fe5b34c46/source/175x175bb.jpg")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
