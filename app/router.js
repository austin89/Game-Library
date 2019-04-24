import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('games', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('friends', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('info');
  this.route('login');
  this.route('sign-up');
});

export default Router;
