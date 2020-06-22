import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BlogPostController extends Controller {
  @service('sendbird') sendbird;

  @action
  connect() {
    this.sendbird.connect('jordan.byron', 'JTB Test', (user, error) => {
      debugger;
    });
  }
}
