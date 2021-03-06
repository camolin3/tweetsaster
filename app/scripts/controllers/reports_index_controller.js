Tweetsaster.ReportsIndexController = Ember.ArrayController.extend(Ember.Evented, {
  sortProperties: ['id'],
  sortAscending: false,
  isLoading: true,
  newFutureReport: null,
  filteredContent: function() {
    return this.get('arrangedContent').filter(function(report) {
      return report.id;
    });
  }.property('model.length', 'newFutureReport')
});