import DS from 'ember-data';

export default DS.Model.extend({
  	username: DS.attr(),
	email: DS.attr(),
	comment: DS.hasMany('comment', {defaultValue: null}, {async: true}),
	friend: DS.hasMany('user', {defaultValue: null}, {async: true}),
	userGames: DS.hasMany('game', {defaultValue: null}, {async: true}),
	ratings: DS.hasMany('rating', {defaultValue: null}, {async: false})
});
