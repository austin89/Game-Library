import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {hash} from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
	currentUser: service(),
	model(){
		return this.store.findRecord('user', this.currentUser.data.uid);
	}
});
