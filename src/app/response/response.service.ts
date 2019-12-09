import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string, public timestamp: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  
  readonly token = environment.dialogflow.languageBot;
  readonly client = new ApiAiClient({ accessToken: this.token })

  conversation = new BehaviorSubject<Message[]>([]);

  time = new Date();

  constructor() { }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user', this.time.getHours()+":"+this.time.getMinutes());
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then( res => {
        console.log(res);
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot', this.time.getHours()+":"+this.time.getMinutes());
        this.update(botMessage);
      })
  }

  
}
