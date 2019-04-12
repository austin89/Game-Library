import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
export default Route.extend({
	session: service(),
	beforeModel(transition){
		// console.log(this.session.isAuthenticated);
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
	}
});
