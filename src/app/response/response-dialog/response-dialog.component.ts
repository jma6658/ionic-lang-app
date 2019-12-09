import { Component, OnInit } from '@angular/core';
import { ResponseService, Message } from '../response.service';

import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-response-dialog',
  templateUrl: './response-dialog.component.html',
  styleUrls: ['./response-dialog.component.scss'],
})
export class ResponseDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;

  constructor( private response: ResponseService ) { }

  ngOnInit() {
    this.messages = this.response.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    this.response.converse(this.formValue);
    this.formValue = '';
  }
}
