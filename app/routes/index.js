import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import {computed} from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
	session: service(),
	// filteredList: {},
	beforeModel(transition){
		// console.log(this.session.isAuthenticated);
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
		this._super(...arguments);
	},
	model(){
		if(this.session.isAuthenticated){
			return this.store.findAll('game');
		}
			else{
				  window.location.reload();
			}

	}

	// afterModel(){

	// 	let images = this.model;

	// 	let c = images.filter((item) => (item.image != 'http://admin.johnsons.net/janda/files/flipbook-coverpage/nocoverimg.jpg'));
	// 	this.set('filteredList', c)

	// }
});
