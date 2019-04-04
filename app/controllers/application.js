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
    },
    async authenticate(){
      this.session.authenticate('authenticator:firebase', {
        email: this.identification,
        password: this.password
      })
    },
    createProfile(){
			const username = this.username;
			const 
	
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
	//
	//actions: {
		
	//	},
	//
	//	login(){
	//		const username = this.username;
	//		const pass = this.password;
	//
	//		const query = this.store.query('user', {
	//			filter: {
	//				username: username,
	//				password: pass
	//			}
	//		}).then(function(users){
	//			//This is where we stopped
	//			return users.get("firstObject");
	//		});
	//
	//		if(query == null){
	//			alert("Incorrect info");
	//		}
	//
	//	}
	//}
});
