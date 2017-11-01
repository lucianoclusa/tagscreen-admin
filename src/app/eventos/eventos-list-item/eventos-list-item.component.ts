import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../evento.model'
@Component({
  selector: 'app-eventos-list-item',
  templateUrl: './eventos-list-item.component.html',
  styleUrls: ['./eventos-list-item.component.css']
})
export class EventosListItemComponent implements OnInit {

  @Input()
  evento: Evento;

  constructor(private router:Router) { }

  ngOnInit() {
  }
}
