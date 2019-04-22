import DS from 'ember-data';

export default DS.Model.extend({
	text: DS.attr(),
	createdAt: DS.attr(),
	game: DS.belongsTo('game', {async: true}),
	user: DS.belongsTo('user', {async: true}),
	name: DS.attr()
});
