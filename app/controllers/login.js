import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  currentUser:service(),
  actions: {
    async authenticate(){
      await this.session.authenticate('authenticator:firebase', {
        email: this.identification,
        password: this.password
      })
      console.log(this.currentUser.data.uid);
    }
  }
});
