define([
  "app"

  // Libs

  // Modules

  // Plugins
],

function(namespace) {

  // Create a new module
  var AboutUs = namespace.module();

  // AboutUs extendings
  AboutUs.Model = Backbone.Model.extend({ /* ... */ });
  AboutUs.Collection = Backbone.Collection.extend({ /* ... */ });
  AboutUs.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  AboutUs.View = Backbone.View.extend({
    template: "app/templates/about_us.html",

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      namespace.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        // If a done function is passed, call it with the element
        if (_.isFunction(done)) {
          done(view.el);
        }
      });
    }
  });

  // Required, return the module for AMD compliance
  return AboutUs;

});
