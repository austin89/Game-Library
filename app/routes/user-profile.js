import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {hash} from 'rsvp';

export default Route.extend({
	currentUser: service(),
	model(){
		return this.store.findRecord('user', this.currentUser.data.uid);
	}
});
