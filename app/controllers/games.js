import Controller from '@ember/controller';

export default Controller.extend({
		actions:{
		searchGame() {
			console.log("here");
			var query = this.search;

			return this.store.query('game', {
				filter: {
					name: query
				}
			})
		}
	}
	
});
