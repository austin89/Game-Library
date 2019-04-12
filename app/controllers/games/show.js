import Controller from '@ember/controller';
import { computed, set } from '@ember/object';

export default Controller.extend({

	actions: {
		addComment(game){
			console.log('in addComment')
			console.log('game: ' + game);

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
			let currentGame = this.get('store').peekRecord('game', game.id);

			let newComment = this.get('store').createRecord('comment', {
				game: currentGame, text: comment, createdAt: today
			});
			currentGame.get('comment').pushObject(newComment);
			newComment.save().then(function(){
				currentGame.save();
			});
			this.set('comment', '');
		},

		rateGame(game, rating){
			set(this, 'rating', rating);
			console.log('in rateGame');
			console.log('value: ' + this.model.rating);
			
			let stars = rating;
			console.log('stars: ' + stars);
			let totalRatings = game.numRatings;
			console.log('total: ' + totalRatings);
			this.store.findRecord('game', game.id).then(function(i) {
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
