import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | friends', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:friends');
    assert.ok(route);
  });
});
