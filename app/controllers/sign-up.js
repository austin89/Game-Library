import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//import { firebase } from 'emberfire/firebase';
const AUTHENTICATOR = 'authenticators:firebase';

export default Controller.extend({
  session: service(),
  firebaseApp: service(),

  actions: {
    async onSignUp(email, password, username) {
      console.log(this.firebaseApp);
      const app = this.firebaseApp;

      try {

        console.log('password')
        const result = app.auth().createUserWithEmailAndPassword(email, password)
        console.log(result)
      } catch (e) {
        console.log(e)
      }

    }
  }
});
