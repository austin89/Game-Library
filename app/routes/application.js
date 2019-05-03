import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
	currentUser: service(),
	session: service(),

	model(){
		if(this.session.isAuthenticated){
			return this.store.findRecord('user', this.currentUser.data.uid,{ reload: true });
		}
	},
	actions:{
		async fixModel(){
		await this.refresh();
		this.transitionTo('userProfile',this.model);
		}

	}
});
