import SendBird from 'sendbird';
import Service from '@ember/service';

export default class Sendbird extends Service {
  client;

  constructor() {
    super(...arguments);
    this.client = new SendBird({ appId: '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23' });
  }

  connect(userId, sessionToken, callback) {
    return this.client.connect(userId, sessionToken, callback);
  }
}
