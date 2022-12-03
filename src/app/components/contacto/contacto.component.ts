import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {


    let body = this._document.body;
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = '../../../assets/js/contacto.js';
    this._renderer2.appendChild(body, script);
  }

}
