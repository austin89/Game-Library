import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {hash} from 'rsvp';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
	currentUser: service(),

	model(params){
		return hash({
			pageUser: this.store.findRecord('user', params.id, {include: 'userGames, friend'}),
			userRecord: this.store.findRecord('user', this.currentUser.data.uid)
		})

	},
  	setupController(controller, model){
  		this._super(controller, model);
		controller.set('pageUser', model.pageUser);
		console.dir('pageUser: ' + model.pageUser);
		controller.set('userRecord', model.userRecord);
		console.dir('userRecord model: ' + model.userRecord);
  	}
});
