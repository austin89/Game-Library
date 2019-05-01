import $ from 'jquery';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
	//username: '',
	//password: '',
  showLogin: false,
  session: service(),
  //currentUser: service('current-user'),
  actions: {
    async invalidateSession() {
      this.session.invalidate();
      // await this.session.sessionStore.clear();
      window.location.reload();
      this.transitionToRoute('login');
    },
    async fixModel(){
      if(this.model == null){
        window.location.reload();
      }
      await this.model.reload();
      this.transitionToRoute('userProfile', this.model);
    }

}});
