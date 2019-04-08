import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addComment(game){
			console.log('in addComment')
			console.log('game: ' + game);

			var comment = this.comment;
			let currentGame = this.get('store').peekRecord('game', game.id);

			let newComment = this.get('store').createRecord('comment', {
				game: currentGame, text: comment
			});
			newComment.save();
			this.set('comment', '');
		}
	}
});
