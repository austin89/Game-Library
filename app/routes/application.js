import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
	currentUser: service(),
	session: service(),
	beforeModel(transition){
		// console.log(this.session.isAuthenticated);
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
	},
	model(){
		// window.location.reload(!this.session.isAuthenticated);
		if(this.session.isAuthenticated){
			return this.store.findRecord('user', this.currentUser.data.uid,{ reload: true });
		}

	}
});
