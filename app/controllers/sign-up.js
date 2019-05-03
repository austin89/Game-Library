import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
const AUTHENTICATOR = 'authenticators:firebase';

export default Controller.extend({
  session: service(),
  currentUser:service(),
  firebaseApp: service(),

  actions: {
    async onSignUp(email, password, username) {
      const app = this.firebaseApp;
      const e = email;
      const pass = password;
      const uname=username;

      try
      {
        const self=this;
        await app.auth().createUserWithEmailAndPassword(e, pass);
        await self.session.authenticate('authenticator:firebase', {
          email: e,
          password: pass
        });

        const userID= this.currentUser.data.uid;
        const username = uname;
        const email= e;
        self.store.createRecord('user', {
          id: userID,
          username: uname,
          email: e
        }).save();
        this.set('username', "");
        this.set('password', "");
        this.set('email', "");

        this.transitionToRoute('index');
      
      }
      catch (e)
      {
        console.log(e)
      }

    }
  }
});
