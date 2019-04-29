import Route from '@ember/routing/route';
//import RSVP from 'rsvp';
import Ember from 'ember';

export default Route.extend({
	model(params){
		console.log('in show route');
		return this.store.findRecord('game', params.id, {include: 'comments'});
	}
});
	