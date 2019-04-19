import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	currentUser:service(),
	checkUserFriends: computed( async function(){
		let friend = this.get('friend');
		console.log(friend.id);
		let friendList = this.get('friendList');
		let userID = this.currentUser.data.uid;
		let currentUser = await this.get('store').findRecord('user', userID);
		console.log(currentUser);
		if(currentUser.friend.find(i => i.id === friend.id) != null){
			console.log('true');
			return true;
		}else{
			console.log('false');
			return false;
		} 
	}),
	actions: {
		async addFriend(friend){
			console.log('friend: ' + friend);
			let userID = await this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);
			console.log('current user' + currentUser);
			currentUser.get('friend').pushObject(friend);
			currentUser.save();
			// friend.save().then(function(){
			// 	currentUser.save();
			// });
			this.toggleProperty('checkUserFriends');
		}
	}
});
