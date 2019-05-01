import Route from '@ember/routing/route';
//import RSVP from 'rsvp';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
	model(params){
		console.log('in show route');
		return this.store.findRecord('game', params.id, {include: 'comments'});
	}
});
