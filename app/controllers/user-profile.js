import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal, match } from '@ember/object/computed';
import { inject as service } from '@ember/service';


export default Controller.extend({
	currentUser: service(),
	gameList: computed('model.@each.name', function() {
		if(this.model == undefined){
			window.location.reload(true);
		}
		
		let results=this.model.userGames;
		console.dir("controller pageUser: " + this.model);
      	return results.sortBy('name');
  	}),
  	friendList: computed('model.@each.name', function(){

  		let results = this.model.friend;
  		results = results.filter((item) => !(item.get('id').match(this.currentUser.data.uid)));
  		return results.sortBy('name');
  	})

});
