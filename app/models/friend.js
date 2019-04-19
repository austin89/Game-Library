import DS from 'ember-data';

export default DS.Model.extend({
	userFriend: DS.belongsTo('user', {async: true}),
	status: DS.attr('boolean', {defaultValue: false})
});
