import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar-movil',
  templateUrl: './navbar-movil.component.html',
  styleUrls: ['./navbar-movil.component.css']
})
export class NavbarMovilComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  ngOnInit(): void {
    let body = this._document.body;
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = '../../../assets/js/menu_movil.js';
    this._renderer2.appendChild(body, script);
  }

}
