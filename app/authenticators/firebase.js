import BaseAuthenticator from 'ember-simple-auth/authenticators/base'
import { inject as service } from '@ember/service'

export default BaseAuthenticator.extend({
  firebaseApp: service(),

  async authenticate({email, password}) {
    const payload = await this.firebaseApp
           .auth().signInWithEmailAndPassword(email, password)

    return {
      uid: payload.uid,
      email: payload.email
    }
  },

  async restore(data) {
    return data
  },

  async invalidate(data) {
    return data;
  }
})
