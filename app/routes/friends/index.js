import Route from '@ember/routing/route';

export default Route.extend({
	queryParams:{
		limit: {refreshModel: true},
		letter: {refreshModel: true}
	},

	model(params) {
		console.log("in friends route");
		if(params.limit === 'all'){
    		return this.store.findAll('user');
		}

		return this.store.query('user', {
			
	      orderBy: 'username',
	      startAt: params.letter,
	      endAt: params.letter+"\uf8ff"
	    });
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
