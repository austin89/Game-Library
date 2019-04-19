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
		let userID = this.currentUser.data.uid;
		let returnModel = null;
		if(params.limit === 'all'){
			return this.store.query('game', {
				filter:{
					gameUser: userID === true
				}
			});
		}

		return this.store.query('game', {
			
		  orderBy: 'name',
		  startAt: params.letter,
		  endAt: params.letter+"\uf8ff"
		});
	},
	actions: {
		deleteGame(game){

		}
	}
});
