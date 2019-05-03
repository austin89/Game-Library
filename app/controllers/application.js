import $ from 'jquery';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  showLogin: false,
  session: service(),
  actions: {
    async invalidateSession() {
      this.session.invalidate();
      window.location.reload();
      this.transitionToRoute('login');
    }
}});
