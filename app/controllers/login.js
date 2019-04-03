import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    async authenticate(){
      this.session.authenticate('authenticator:firebase', {
        username: this.identification,
        password: this.password
      })
    }
  }
});
