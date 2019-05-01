import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,
	{
	currentUser: service(),
	session: service(),

	model(){
		// window.location.reload(!this.session.isAuthenticated);
		if(this.session.isAuthenticated){
			return this.store.findRecord('user', this.currentUser.data.uid,{ reload: true });
		}

	},

			actions:{
				async fixModel(){
					// if(this.model == null){
					// 	window.location.reload();
					// }
				await this.refresh();
				this.transitionTo('userProfile',this.model);
				}

			}

});
