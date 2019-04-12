import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr(),
	password: DS.attr(),
	comment: DS.hasMany('comment', {async: true}),
	friends: DS.hasMany('friend', {async: true}),
	userGames: DS.hasMany('game', {async: true})

});
