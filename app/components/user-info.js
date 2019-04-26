import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	currentUser:service(),
	checkUserFriends: computed(function(){
		let friend = this.get('friend');
		let userRecord = this.get('userRecord');
		console.log('user record: ' + userRecord);
		if(userRecord.friend.find(i => i.id === friend.id) != null) return true;
		else return false;
	}),
	actions: {
		async addFriend(friend){
			let userID = await this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);
			currentUser.get('friend').pushObject(friend);
			currentUser.save();
			this.toggleProperty('checkUserFriends');
		}
	}
});
