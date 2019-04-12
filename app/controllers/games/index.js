import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser:service(),
  showDel:true,
  queryParams: ['filter', 'limit', 'letter'],
  filter: '',
  letter: '',
  limit: 'all',

  limitAll: equal('limit', 'all'),

  

  filteredList: computed('model.@each.name', 'filter', function() {
    let results=this.model;
    const query = this.filter;

    if (query) {
        // One of the best regular expression website: http://www.regexr.com/
        // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.ig
        const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
        // i: case insensitive, g: global
        const regex = new RegExp(regexString, 'ig');

        results = results.filter((item) => item.get('name').match(regex));
      }
      return results.sortBy('name');
  }),

  actions: {
  	clearSearch(){
  		this.set('filter', '');
  	},
    async checkUserGames(game){
    // let currentGame = this.store.findRecord('game', game.id);

    let userID = await this.currentUser.data.uid;
    let userRecord = await this.store.findRecord('user', userID);

    //console.log('user Games record: ' + userRecord.userGames.find(i => i.id === game.id) != null);
    if(userRecord.userGames.find(i => i.id === game.id) != null){
      this.showDel = true;
      console.log('game in table');
    }else console.log('game not in table');
      this.showDel = false;
  }

  }

});
