import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
	currentUser: service(),
	queryParams:{
		limit: {refreshModel: true},
		letter: {refreshModel: true}
	},

	model(params) {
		let allUsers = null;
		if(params.limit === 'all'){
    		allUsers = this.store.findAll('user');
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
  	},

  	actions:{
  		deleteFriend(user){
  			let confirmation = confirm('Are you sure?');

  			if(confirmation){
  				user.destroyRecord();
  			}
  		}
  	}
});
