import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private cerrar:KeycloakService) { }

  ngOnInit(): void {
  }
  logout(){
    this.cerrar.logout();
  }
}
