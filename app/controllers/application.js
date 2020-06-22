import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BlogPostController extends Controller {
  @service('sendbird') sendbird;

  @action
  connect() {
    this.sendbird.connect('373', 'ac206e78bd73a95f3aef55d85f76b2e795d88ba6', (user, error) => {
      debugger;
    });
  }
}
