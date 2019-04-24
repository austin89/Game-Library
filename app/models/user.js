import DS from 'ember-data';

export default DS.Model.extend({
  	username: DS.attr(),
	email: DS.attr(),
	comment: DS.hasMany('comment', {async: true}),
	friend: DS.hasMany('user', {async: true}),
	userGames: DS.hasMany('game', {async: true}),
	ratings: DS.hasMany('rating', {async: false})
});
