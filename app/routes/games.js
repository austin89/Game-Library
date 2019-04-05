import Route from '@ember/routing/route';

export default Route.extend({
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
  		deleteGame(game){
  			let confirmation = confirm('Are you sure?');

  			if(confirmation){
  				game.destroyRecord();
  			}
  		}
  	}
});
