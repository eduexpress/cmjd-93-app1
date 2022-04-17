import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Output() nameEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  keyUp(value: string): void {
    this.nameEmitter.emit(value);
  }

  ngOnInit(): void {

  }

}
