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
    },
    async authenticate(){
      this.session.authenticate('authenticator:firebase', {
        email: this.identification,
        password: this.password
      })
    },
    createProfile(){
			const username = this.username;
			const newUser = this.store.createRecord('user', {username: username, email: email, userID:userID});
			newUser.save().then(response => {
				const form = document.getElementById("loginForm");
				const welcome = document.getElementById("welcome");
				form.hidden = true;
				welcome.style.color = "white";
				welcome.innerHTML = "Welcome, " + this.username + "!";
				welcome.hidden = false;

			})
  }
	
}});
