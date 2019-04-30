import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
   session: service(),
   currentUser:service(),
  
	queryParams:{
		limit: {refreshModel: true},
		letter: {refreshModel: true}
	},
	beforeModel(transition){
		// console.log(this.session.isAuthenticated);
		if(!this.session.isAuthenticated){
			let loginController = this.controllerFor('login');
			loginController.set('previousTransition', transition);
			this.transitionTo('login');
		}
	},

	model(params) {
		console.log("in games route");
		if(params.limit === 'all'){
    		return this.store.findAll('game');
		}

		return this.store.query('game', {
			
	      orderBy: 'name',
	      startAt: params.letter,
	      endAt: params.letter+"\uf8ff"
	    });
  	}
});
