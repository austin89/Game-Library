// app/controllers/index.js
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  game: '',


  actions: {

    saveInvitation() {
      //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      //this.set('emailAddress', '');
      var game = this.game;
      var genre = this.genre;
      var company = this.company;
      var released = this.released;
      var platform = this.platform;

      var newInvitation = this.store.createRecord('game', { name: game,  company: company, genre: genre, released: released, platform: platform});
      newInvitation.save();

      this.set('responseMessage', `Thank you! We have just saved your game: ${this.get('game')}`);
      this.set('game', '');
      this.set('genre', '');
      this.set('company', '');
      this.set('platform', '');
      this.set('released', '');
    }
  }

});