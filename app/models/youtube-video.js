import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  people: DS.attr('string'),
  videoLink: DS.attr('string')
});
