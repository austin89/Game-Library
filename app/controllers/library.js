import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentUser:service(),
	queryParams: ['filter', 'limit', 'letter'],
	filter: '',
	letter: '',
	limit: 'all',

	limitAll: equal('limit', 'all'),



	filteredList: computed('model.@each.name', 'filter', function() {
		let results=this.model;
		const query = this.filter;
		let userID = this.currentUser.data.uid;
		console.log('userID: ' + userID);
		console.log('results:')
		console.log(results);

		if (query) {
			// One of the best regular expression website: http://www.regexr.com/
			// Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.ig
			const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
			// i: case insensitive, g: global
			const regex = new RegExp(regexString, 'ig');
			

			results = results.filter((item) => item.get('name').match(regex));
		}

		// // console.log('length: ' + results.length);

		// // let finalResults = null;

		// // for(var i=0; i<results.length; i++){
		// // 	let currentGame = this.model.findRecord('game', results[i].get('name'));
		// // 	console.log('current game:');
		// // 	console.log(currentGame);
		// // 	if(currentGame.gameUser.find(i => i.id === userID) != null){
		// // 		finalResults += currentGame;
		// // 	}
		// // }
		// return finalResults.sortBy('name');
		return results.sortBy('name');
	}),

	actions: {
		clearSearch(){
			this.set('filter', '');
	}
}
});
