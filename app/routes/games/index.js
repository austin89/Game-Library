import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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
  		async addGame(game){
  			let addedGame =  await this.store.findRecord('game', game.id);
  			console.log("added game: "+ addedGame);
  			let userID = await this.currentUser.data.uid;
  			let userRecord = await this.store.findRecord('user', userID);
			userRecord.get('userGames').pushObject(addedGame);
			addedGame.save().then(function(){
				userRecord.save();
			});
  		},
  		deleteGame(game){
  			let confirmation = confirm('Are you sure?');

  			if(confirmation){
  				game.destroyRecord();
  			}
  		}
  	}
});
