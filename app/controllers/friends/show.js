import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal, match } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentUser: service(),
	gameList: computed('pageUser.@each.name', function() {
		if(this.pageUser == undefined){
			window.location.reload(true);
		}	
		let results=this.pageUser.userGames;
      	return results.sortBy('name');
  	}),
  	friendList: computed('pageUser.@each.name', function(){
  		let results = this.pageUser.friend;
  		results = results.filter((item) => !(item.get('id').match(this.currentUser.data.uid)));
  		return results.sortBy('name');
  	})
});
