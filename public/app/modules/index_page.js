define([
 "app",

  // Libs


  // Modules
  "modules/frontpage",
  "modules/header",
  "modules/user_auth",
  "modules/qwizkool_main",
  "modules/showcase_tutorial",
  "modules/showcase_topics",
  "modules/social_connection",
  "modules/footer",
], 


function(namespace, FrontPage, Header, UserAuth, QwizkoolMain,
ShowcaseTutorial, ShowcaseTopics, SocialConnection, Footer) {

  // Create a new module
  var IndexPage = new namespace.module();

  // Top level view for the qwizkool
  IndexPage.View = Backbone.View.extend({

    initialize : function() {
      this.frontPage = new FrontPage.View();
      this.header = new Header.View();
      this.signIn = new UserAuth.View();
      this.qwizkoolMain = new QwizkoolMain.View();
      this.tutorial = new ShowcaseTutorial.View();
      this.social = new SocialConnection.View();
      this.topics = new ShowcaseTopics.View();
      this.footer = new Footer.View();

      this.signIn.on("login-attempted", this.logInHandler, this);
      this.signIn.on("logout-attempted", this.logOutHandler, this);

    },

    render : function(done) {

      var thisView = this;
      // Attach the tutorial to the DOM
      thisView.frontPage.render(function(el) {
        $("#main").html(el);

        thisView.header.render(function(el) {
          $("#header").html(el);

          thisView.signIn.render(function(el) {
            $("#sign_in_form_loc").html(el);
          });
        });

        thisView.qwizkoolMain.render(function(el) {
          $("#qwizkool_main").html(el);
        });

        thisView.tutorial.render(function(el) {
          $("#showcase_tutorial").html(el);
        });

        thisView.social.render(function(el) {
          $("#social_connection").html(el);
        });

        thisView.topics.render(function(el) {
          $("#showcase_topics").html(el);
        });

        thisView.footer.render(function(el) {
          $("#footer").html(el);
        });
      });
    },

    logInHandler : function() {
      this.signIn.renderLogInStatus(function(el) {
        $("#sign_in_form_loc").html(el);
      });
    },

    logOutHandler : function() {
      var thisView = this;
      thisView.signIn.render(function(el) {
        $("#sign_in_form_loc").html(el);
        thisView.signIn.reattachEvents();
      });
    }
  });

  return IndexPage;
}); 
