import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr(),
  company: DS.attr(),
  genre: DS.attr(),
  released: DS.attr(),
  rating: DS.attr({defaultValue: 0}),
  platform: DS.attr(),

  isValid: notEmpty('name')
});
