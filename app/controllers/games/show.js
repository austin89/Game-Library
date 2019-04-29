import Controller from '@ember/controller';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { equal, match } from '@ember/object/computed';

export default Controller.extend({
	currentUser: service(),
	store: service(),
	userRating: computed('gameRatings.@each.gameName', function(){
		// let rating = this.gameRatings.query('rating', {
		// 	filter:{
		// 		user: this.currentUser.data.uid
		// 	}
		// });
		let rating = this.gameRatings;
	
		let results = rating.filter((item) => (item.get('user').match(this.currentUser.data.uid)));
		console.log('computed rating: ');
		console.log(results);
		set(this, 'rating', rating);
		return rating;
	}),
	actions: {
		async addComment(game){
			console.log('in addComment')
			console.log('game: ' + game);

			let userID = this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);

			let now = new Date();

			let options = {  
			    weekday: 'long',
			    year: 'numeric',
			    month: 'short',
			    day: 'numeric',
			    hour: '2-digit',
			    minute: '2-digit'
			}; 

			let today = now.toLocaleString('en-us', options);

			var comment = this.comment;
			let currentGame = await this.get('store').peekRecord('game', game.id);

			await console.log('name:' + currentUser.username);

			let newComment = await this.get('store').createRecord('comment', {
				game: currentGame, 
				text: comment, 
				createdAt: today, 
				user: currentUser, 
				name: currentUser.username
			});

			await console.log('comment name: ' + newComment.name);

			await currentGame.get('comment').pushObject(newComment);
			await currentUser.get('comment').pushObject(newComment);
			await newComment.save().then(function(){
				currentUser.save()
			}).then(function(){
				currentGame.save();
			});
			this.set('comment', '');
		},

		async rateGame(game, rating){
			set(this, 'rating', rating);
			let stars = rating;
			console.log('in rateGame');
			console.log('game: ');
			console.log(game);
			//console.log('value: ' + this.gameRecord.rating);

			
			let self = this;
			let userRecord = await this.store.findRecord('user', this.currentUser.data.uid);
			let gameRatings = userRecord.get('ratings');
			let thisGameRating = gameRatings.find((item) => item.gameName === game.id);
			if(thisGameRating != null){

				thisGameRating.set('value', rating);
				thisGameRating.save().then(function(){
					userRecord.save();
				});


			}else{
				console.log('first time');
				let userRating = this.store.createRecord('rating');
				// userRating.save();
				userRating.set('user', userRecord);
				userRating.set('gameName', game.id);
				userRating.set('value', stars);
				await userRating.save();
				await userRecord.get('ratings').pushObject(userRating);
				console.log("inside saving user record");
				await userRecord.save();
			}
			
			
			console.log('stars: ' + stars);
			let totalRatings = game.numRatings;
			console.log('total: ' + totalRatings);
			this.store.findRecord('game', game.id).then(function(i) {
				console.log('rating: ' + i.rating);
				let totalRatings = i.get('numRatings');
				if(totalRatings>0){
					let currentRating = i.get('rating');
					let almostNewRating = currentRating*totalRatings;
					let newRating = (almostNewRating + stars) / (totalRatings + 1);
					i.set('rating', newRating);
					i.incrementProperty('numRatings');
					i.save();
				}else{
					i.set('rating', stars);
					i.incrementProperty('numRatings');
					i.save();
				}
  				

			});

		}
	}
});