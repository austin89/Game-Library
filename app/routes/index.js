import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import {computed} from '@ember/object';
export default Route.extend({
	session: service(),
	// filteredList: {},
	beforeModel(transition){
		// console.log(this.session.isAuthenticated);
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
	},
	model(){
		return this.store.findAll('game');
	}
	// afterModel(){
		
	// 	let images = this.model;
	
	// 	let c = images.filter((item) => (item.image != 'http://admin.johnsons.net/janda/files/flipbook-coverpage/nocoverimg.jpg'));
	// 	this.set('filteredList', c)
	
	// }
});
