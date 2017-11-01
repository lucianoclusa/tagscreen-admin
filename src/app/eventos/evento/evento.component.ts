import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Evento } from '../evento.model'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit , OnDestroy{

  @Input()
  hashtagEvento:String;
  evento: Evento;
  private sub: any;
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    //this.hashtagEvento = this.router.snapshot.params['hashtag'];
    this.evento = new Evento('lksflsajl','fiestaClusa', new Date(), 'asdadsad');
    this.sub = this.router.params.subscribe(
      (params: Params)=>{
        this.hashtagEvento = params['hashtag'];
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
