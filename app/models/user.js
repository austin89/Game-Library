import DS from 'ember-data';

export default DS.Model.extend({
  userID: DS.attr(),
  username: DS.attr(),
	email: DS.attr()

});
