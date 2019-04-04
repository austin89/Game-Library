import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//import { firebase } from 'emberfire/firebase';
const AUTHENTICATOR = 'authenticators:firebase';

export default Controller.extend({
  session: service(),
  currentUser:service(),
  firebaseApp: service(),

  actions: {
    async onSignUp(email, password, username) {
      console.log(this.firebaseApp);
      const app = this.firebaseApp;

      try
      {

        //console.log('password')
        const result = new Promise(app.auth().createUserWithEmailAndPassword(email, password))
        result.then(
          new Promise(this.get('controllers.login').send('authenticate',email, password)
            ).then(this.store.createRecord('user',
                                                  {
                                                    userID: this.currentUser.data.uid,
                                                    username: username,
                                                    email: email
                                                  }
                                                  )
                         .save()
                    )
            )
        //console.log(result)
      }
      catch (e)
      {
        console.log(e)
      }

    }
  }
});
