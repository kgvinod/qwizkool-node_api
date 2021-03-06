define([
    // Application.
    "app",

    // Modules
    "modules/user",
    "modules/indexPage",
    "modules/userMainPage"
], function (App, User, IndexPage, UserMainPage) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({

        routes:{
            '':'index',
            'main':'userMain'

        },

        initialize:function () {
        },

        index:function (hash) {

            var currentUser = new User.Model();

            if (currentUser.isUserAuthenticated() === true) {
                Backbone.history.navigate("main", true);
                return;
            }

            var indexPage = new IndexPage.View();
            indexPage.show();



        },

        userMain:function (hash) {

            var currentUser = new User.Model();


            if (currentUser.isUserAuthenticated() === false) {
                Backbone.history.navigate("", true);
                return;
            }

            var userMainPage = new UserMainPage.View();
            userMainPage.show();


        }

    });

    return Router;

});