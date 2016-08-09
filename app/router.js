import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('featured', { path: '/' });
  this.route('about');
  this.route('featured');
  this.route('videos');
});

export default Router;
