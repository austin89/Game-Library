// app/controllers/index.js
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { match, not, equal } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  game: '',

  queryParams: ['filter', 'limit', 'letter'],
  filter: '',
  letter: '',
  limit: 'all',

  limitAll: equal('limit', 'all'),

  filteredList: computed('model.@each.name', 'filter', function() {
    console.log("in index controller");
    let results=this.model;
    const query = this.filter;

    if (query) {
        // One of the best regular expression website: http://www.regexr.com/
        // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
        const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
        // i: case insensitive, g: global
        const regex = new RegExp(regexString, 'ig');

        results = results.filter((item) => item.get('name').match(regex));
      }
      return results.sortBy('name');
  }),


  actions: {

    saveInvitation() {
      //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      //this.set('emailAddress', '');
      const game = this.game;
      const genre = this.genre;
      const company = this.company;
      const released = this.released;
      const platform = this.platform;
      const image = this.image;

      const newInvitation = this.store.createRecord('game', { name: game,  company: company, genre: genre, released: released, platform: platform, image: image});
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We have just saved your game: ${this.get('game')}`);
        this.set('game', '');
        this.set('genre', '');
        this.set('company', '');
        this.set('platform', '');
        this.set('released', '');
        this.set('image', '');
      });
    }
  }


});