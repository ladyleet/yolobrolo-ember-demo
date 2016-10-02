import Ember from 'ember';

export default Ember.Controller.extend({
  newVideo: Ember.computed.alias('model'),

  actions: {
    saveVideo() {
      this.get('newVideo').save();
      this.transitionToRoute('videos');
    }
  }
});
