define([
    "app",
    "modules/qwizbook",
    "modules/qwizbookBreadcrumbs",
    "modules/qwizbookDetails",
    "modules/qwizbookComments",
    "modules/commentDetails",
    "modules/addComments",
    "text!templates/qwizbookContent.html"
    
], function (App,QwizBook,Breadcrumb,QwizbookDetails,QwizbookComments,CommentDetails,AddComments,Template) {

    // Create a new module
    var QwizbookContent = App.module();


    QwizbookContent.View = Backbone.View.extend({
		initialize : function() {
		this.qwizbookId = this.options.qwizbookId;
		this.commentList = new AddComments.Collection({qwizbookId:this.qwizbookId});
		this.commentList.QwizbookComments(this.qwizbookId);
		this.breadcrumb = new Breadcrumb.View();
		
		this.qwizbookDetails = new QwizbookDetails.View({qwizbookId:this.qwizbookId});
		this.comments = new QwizbookComments.View({qwizbookId:this.qwizbookId});
		this.commentDetail = new CommentDetails.View();
		
		
			
		},
        template:Template,

        render:function (done) {
        	 this.el.innerHTML = this.template;
        	 $(this.el).find("#home-content-header").append(this.breadcrumb.render().el);
        	 $(this.el).find("#home-content-container").append(this.qwizbookDetails.render().el);
        	 $(this.el).find("#review-content-header").append(this.comments.render().el);
        	 $(this.el).find("#review-content-container").append(this.commentDetail.render().el);
        	 return this;
			
        }
    });

    // Required, return the module for AMD compliance
    return QwizbookContent;

});
