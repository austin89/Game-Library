import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  company: DS.attr(),
  genre: DS.attr(),
  released: DS.attr(),
  rating: DS.attr({defaultValue: 0}),
  platform: DS.attr()
});
