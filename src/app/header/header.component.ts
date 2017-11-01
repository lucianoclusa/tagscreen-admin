import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  
  ngOnInit() {
  }

  onLogOut(){
    this.authService.login();
    this.router.navigate(['/eventos/list']);
  }
}
