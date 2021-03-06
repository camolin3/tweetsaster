Tweetsaster.SearchRoute = Ember.Route.extend({
  queryParams: {
    q: {refreshModel: true, replace: true}
  },
  model: function(params) {
    if (params.q) {
      this.controllerFor('search').set('searchText', params.q);
      return this.store.find('report', params);
    }
  },
  afterModel: function(results) {
    this.controllerFor('search').set('showSpinner', false);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      controller.set('q', null);
    }
  }
});

