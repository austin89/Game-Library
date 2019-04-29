import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
	currentUser: service(),
	session: service(),
	model(){
		if(this.session.isAuthenticated){
			return this.store.findRecord('user', this.currentUser.data.uid);
		}
		
	}
});
