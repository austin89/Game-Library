import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
	currentUser: service(),
	session: service(),

	model(){
		// window.location.reload(!this.session.isAuthenticated);
		if(this.session.isAuthenticated){
			return this.store.findRecord('user', this.currentUser.data.uid,{ reload: true });
		}

	}
});
