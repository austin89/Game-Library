import Service from '@ember/service'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Service.extend({
  session: service(),

  data: computed('session.data.authenticated.uid', function() {
    return this.session.data.authenticated
  }),

  email: computed('data.email', function() {
    return this.data.email
  })


})
