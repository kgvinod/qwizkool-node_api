/*!
 * Copyright(c) 2013 Vibrentt
 *
 * Module : QwizPageView
 * The top level page that renders the qwiz.
 *
 */

define([
    "app",
    "text!modules/qwizengine/templates/qwizEngineView.html"
], function (App, Template) {

    // Create a new module
    var QwizPage = new App.module();

    // Top level view for the qwizkool
    QwizPage.View = Backbone.View.extend({

        template: Template,

        initialize: function () {

            if (_.isEmpty(this.options.session)) {
                throw "ERROR: Session object is not provided for the view!!"
            }

            this.session = this.options.session;


        },


        // Default renderer
        render: function () {

            this.$el.html(this.template);

            return this;
        }



    });

    return QwizPage;
});
