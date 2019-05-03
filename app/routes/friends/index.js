import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
	session: service(),
	currentUser: service(),
	queryParams:{
		limit: {refreshModel: true},
		letter: {refreshModel: true}
	},
	beforeModel(transition){
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
		this._super(...arguments);
	},

	model(params) {
		let allUsers = null;
		if(params.limit === 'all'){
    		allUsers = this.store.query('user', {});
		}else{

			allUsers = this.store.query('user', {

		      orderBy: 'username',
		      startAt: params.letter,
		      endAt: params.letter+"\uf8ff"
		    });
		}

	    return hash({
	    	allUsers: allUsers,
	    	userRecord: this.store.findRecord('user', this.currentUser.data.uid)
	    })
  	},

  	setupController(controller, model){
  		controller.set('allUsers', model.allUsers);
  		controller.set('userRecord', model.userRecord);
  	}
});
