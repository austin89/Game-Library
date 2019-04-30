import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
 	store: service(),
    currentUser:service(),
   	showDel: true,
   	checkUserGames: computed(function(){
			let game = this.get('game');
			let userID = this.currentUser.data.uid;
			let userRecord = this.get('users');
			if(userRecord.find(i => i.id === userID) != null){
				return true;
			}else{ 
				return false;
			}
   	}),
	actions: {
		async addGame(game){
  			let userID = await this.currentUser.data.uid;
  			let userRecord = await this.get('store').findRecord('user', userID);
			userRecord.get('userGames').pushObject(game);
			game.save().then(function(){
				userRecord.save();

			});
			this.set('checkUserGames', true);
  		},

  		async removeGame(game){
  			let confirmation = confirm("Remove " + game.name + "?");
  			if(confirmation){
	  			let userID = await this.currentUser.data.uid;
	  			let userRecord = await this.get('store').findRecord('user', userID);
	  			userRecord.get('userGames').removeObject(game);
				game.save().then(function(){
					userRecord.save();

				});
				this.set('checkUserGames', false);
  			}

  		}

	}
});
