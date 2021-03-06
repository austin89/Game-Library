import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	session: service(),
	currentUser: service(),
	queryParams: ['filter', 'limit', 'letter'],
	filter: '',
	letter: '',
	limit: 'all',

	limitAll: equal('limit', 'all'),

	filteredList: computed('model.@each.username', 'filter', function() {
		let results=this.allUsers;
		const query = this.filter;
		results = results.filter((item) => !(item.get('id').match(this.currentUser.data.uid)));

		if (query) {
	      // One of the best regular expression website: http://www.regexr.com/
	      // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
	      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
	      // i: case insensitive, g: global
	      const regex = new RegExp(regexString, 'ig');

	      results = results.filter((item) => item.get('username').match(regex));

	    }
	    return results.sortBy('username');
	}),	
	actions: {
  	clearSearch(){
  		this.set('filter', '');
  	}

  }
});
