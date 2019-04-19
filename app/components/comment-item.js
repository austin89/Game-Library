import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	currentUser: service(),
	user: computed(function(){
		let userID = this.currentUser.data.uid;
		return userID;
		// let name = null;
		// let userRecord = await this.get('store').findRecord('user', userID);
		// return userRecord.name
	})

});
