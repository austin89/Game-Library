import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal, match } from '@ember/object/computed';

export default Controller.extend({
	gameList: computed('pageUser.@each.name', function() {
		if(this.pageUser == undefined){
			window.location.reload(true);
		}
		
		let results=this.pageUser.userGames;
		console.dir("controller pageUser: " + this.pageUser);
      	return results.sortBy('name');
  	}),
  	friendList: computed('pageUser.@each.name', function(){

  		let results = this.pageUser.friend;
  		return results.sortBy('name');
  	})

});
