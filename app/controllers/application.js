import $ from 'jquery';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
	//username: '',
	//password: '',
  showLogin: false,
  session: service(),
  //currentUser: service('current-user'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionToRoute('login');
    }
	
}});
