import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	currentUser:service(),
	checkUserFriends: computed(function(){
		let friend = this.get('friend');
		let userRecord = this.get('userRecord');
		if(userRecord.friend.find(i => i.id == friend.id) != null){ 
			return true;
		}
		else{ 
			return false;
		}
	}),
	actions: {
		async addFriend(newFriend){
			let self = this;
			let userID = await this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);
			await currentUser.get('friend').pushObject(newFriend);
			await currentUser.save();
			this.toggleProperty('checkUserFriends');
		},
		async deleteFriend(friend){
			let confirmation = confirm("Unfollow " + friend.username + "?");
			if(confirmation){
				let userID = await this.currentUser.data.uid;
				let currentUser = await this.get('store').findRecord('user', userID);
				await currentUser.get('friend').removeObject(friend);
				await currentUser.save();
				this.toggleProperty('checkUserFriends');
			}
		}
	}
});
