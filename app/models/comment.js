import DS from 'ember-data';

export default DS.Model.extend({
	text: DS.attr(),
	createdAt: DS.attr('date', {defaultValue(){return new Date();}}),
	game: DS.belongsTo('game', {async: true})

});
