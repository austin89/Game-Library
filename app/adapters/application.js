import FirestoreAdapter from 'emberfire/adapters/firebase';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';

export default FirestoreAdapter.extend({
  authenticator: 'authenticator:firebase'
});