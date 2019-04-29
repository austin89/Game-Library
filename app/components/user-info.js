import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	currentUser:service(),
	checkUserFriends: computed(function(){
		let friend = this.get('friend');
		let userRecord = this.get('userRecord');
		console.log('user record: ' + userRecord.friend);
		if(userRecord.friend.find(i => i.id == friend.id) != null){ 
			console.log('returning true')
			return true;
		}
		else{ 
			console.log('returning false')
			return false;

		}
	}),
	actions: {
		async addFriend(newFriend){

			let self = this;
			//console.log('friend: ' + newFriend);
			let userID = await this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);
			await currentUser.get('friend').pushObject(newFriend);
			await currentUser.save();
			this.toggleProperty('checkUserFriends');
			console.dir(this.get('userRecord'));
		},
		async deleteFriend(friend){
			let userID = await this.currentUser.data.uid;
			let currentUser = await this.get('store').findRecord('user', userID);
			await currentUser.get('friend').removeObject(friend);
			await currentUser.save();
			this.toggleProperty('checkUserFriends');
		}
	}
});
