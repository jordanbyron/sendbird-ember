import SendBird from 'sendbird';
import Service from '@ember/service';

export default class Sendbird extends Service {
  client;

  constructor() {
    super(...arguments);
    this.client = new SendBird({ appId: '4395FEED-36C2-4DE6-A131-BAD9A231FD58' });
  }

  connect(userId, sessionToken, callback) {
    return this.client.connect(userId, sessionToken, callback);
  }
}
