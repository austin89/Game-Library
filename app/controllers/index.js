// app/controllers/index.js
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { match, not, equal } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  game: '',

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