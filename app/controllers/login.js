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
      let previousTransition = this.previousTransition;
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }
      console.log(this.currentUser.data.uid);
    }
  }
});
