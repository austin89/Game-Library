import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {computed } from '@ember/object';

export default Route.extend({
   session: service(),
   currentUser:service(),


	queryParams:{
		limit: {refreshModel: true},
		letter: {refreshModel: true}
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
  	},

  	actions:{

  	}
});
