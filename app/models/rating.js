import DS from 'ember-data';

export default DS.Model.extend({
	value: DS.attr(),
	gameName: DS.attr(),
	user: DS.belongsTo('user', {async: true})

});
