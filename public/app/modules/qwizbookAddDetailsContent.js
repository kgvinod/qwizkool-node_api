/*!
 * Copyright(c) 2013 Vibrentt
 *
 * Module : QwizbookAuthoringContent
 *
 *
 */
define([
    "app",
    "modules/qwizbook",
    "modules/editQwizbook",
    "text!templates/qwizbookAddDetailsContent.html"

], function (App, QwizBook, EditQwizbook , Template) {

    var QwizbookAddDetailsContent = App.module();

    QwizbookAddDetailsContent.View = Backbone.View.extend({

        initialize: function () {
			this.session = this.options.session;
            
            if (_.isEmpty(this.options.session)) {
                throw "ERROR: Session object is not provided for the view!!"
            		}
           
            this.qwizbookId = this.options.qwizbookId;
            this.qwizbookModel = new QwizBook.Model({_id:this.qwizbookId, session:this.session});
            this.qwizbookModel.retreive();
            this.qwizbookModel.on("retreive-qwizbook-success-event", this.updateView, this);
			this.editQwizbook = new EditQwizbook.View({model: this.qwizbookModel, qwizbookId: this.qwizbookId, session:this.session});

        },
         updateView : function()
        {
        	$(this.el).find("#qwizbook-create-form").append(this.editQwizbook.render().el);
        },

       events: {
            "click #icon-author-content": "showAuthorForm",
            // Show image, audio & video Div for Question
            "click #icon-image-question": "showQuestionImageDiv",
            "click #icon-audio-question": "showQuestionAudioDiv",
            "click #icon-video-question": "showQuestionVideoDiv",
            // Show image, audio & video Div for Option A
            "click #icon-image-Option-A": "showOptionAImageDiv",
            "click #icon-audio-Option-A": "showOptionAAudioDiv",
            "click #icon-video-Option-A": "showOptionAVideoDiv",
            // Show image, audio & video Div for Option B
            "click #icon-image-Option-B": "showOptionBImageDiv",
            "click #icon-audio-Option-B": "showOptionBAudioDiv",
            "click #icon-video-Option-B": "showOptionBVideoDiv",
            // Show image, audio & video Div for Option C
            "click #icon-image-Option-C": "showOptionCImageDiv",
            "click #icon-audio-Option-C": "showOptionCAudioDiv",
            "click #icon-video-Option-C": "showOptionCVideoDiv",
            // Show image, audio & video Div for Option D
            "click #icon-image-Option-D": "showOptionDImageDiv",
            "click #icon-audio-Option-D": "showOptionDAudioDiv",
            "click #icon-video-Option-D": "showOptionDVideoDiv",
            //Show reference container
            "click #add-more-references": "showReferenceContainer",
            //Submit Form
            "click #btn-qwizbook-author-submit": "submitAuthorForm",
            //Cancel Form
            "click #btn-qwizbook-author-cancel": "cancelAuthorForm",
            
            //edit qwizbook
            "click #btn-save-qwizbook" : "editBook"

        },
        
        editBook :function ()
        {
        	var new_title = $('#qwizbook-title').val();
        	var new_description =  $('#qwizbook-description').val();
        	var view = this;
        	var qwizbook = view.qwizbookModel;
        	qwizbook.create(new_title, new_description);
        },

        showAuthorForm: function (e) {

            $('#qwizbook-questionnare-content').show();

        },
        
        showQuestionImageDiv: function (e) {

            $('#image-question-container').show();

        },
        
        showQuestionAudioDiv: function (e) {

            $('#audio-question-container').show();

        },
        
        showQuestionVideoDiv: function (e) {

            $('#video-question-container').show();

        },
        
        showOptionAImageDiv: function (e) {

            $('#image-optionA-container').show();

        },
        
        showOptionAAudioDiv: function (e) {

            $('#audio-optionA-container').show();

        },
        
        showOptionAVideoDiv: function (e) {

            $('#video-optionA-container').show();

        },



		showOptionBImageDiv: function (e) {

            $('#image-optionB-container').show();

        },
        
        showOptionBAudioDiv: function (e) {

            $('#audio-optionB-container').show();

        },
        
        showOptionBVideoDiv: function (e) {

            $('#video-optionB-container').show();

        },
        
        showOptionCImageDiv: function (e) {

            $('#image-optionC-container').show();

        },
        
        showOptionCAudioDiv: function (e) {

            $('#audio-optionC-container').show();

        },
        
        showOptionCVideoDiv: function (e) {

            $('#video-optionC-container').show();

        },
        
        showOptionDImageDiv: function (e) {

            $('#image-optionD-container').show();

        },
        
        showOptionDAudioDiv: function (e) {

            $('#audio-optionD-container').show();

        },
        
        showOptionDVideoDiv: function (e) {

            $('#video-optionD-container').show();

        },
        
        showReferenceContainer: function (e) {
        	var html = "<tr><td align='right' style='border: 1px solid #EEEEEE;padding:10px;' class='span3'>Description </td><td align='left' style='border: 1px solid #EEEEEE;padding:10px;' class='span9'><textarea class='span5' id='reference-description' name='reference-description' class='input-block-level'></textarea></td><tr><td align='right' style='border: 1px solid #EEEEEE;padding:10px;' class='span3'>Link </td><td align='left' style='border: 1px solid #EEEEEE;padding:10px;' class='span9'><input type='text' id='reference-link' name='reference-link' class='input-block-level'></td></tr><tr><td align='right' style='border: 1px solid #EEEEEE;padding:10px;' class='span3'>Image </td><td align='left' style='border: 1px solid #EEEEEE;padding:10px;' class='span9'><input type='text' id='reference-image' name='reference-image' class='input-block-level'></td></tr><tr><td align='right' style='border: 1px solid #EEEEEE;padding:10px;' class='span3'>Audio </td><td align='left' style='border: 1px solid #EEEEEE;padding:10px;' class='span9'><input type='text' id='reference-audio' name='reference-audio' class='input-block-level'></td></tr><tr><td align='right' style='border: 1px solid #EEEEEE;padding:10px;' class='span3'>Video </td><td align='left' style='border: 1px solid #EEEEEE;padding:10px;' class='span9'><input type='text' id='reference-video' name='reference-video' class='input-block-level'></td></tr>";
												
			$(html).insertBefore($((e.target.parentNode).parentNode).closest('tr'));
        },
        
        submitAuthorForm: function (e) {
            $('#qwizbook-questionnare-content').hide();
        },

        cancelAuthorForm: function (e) {

            $('#qwizbook-questionnare-content').hide();

        },

        template: Template,

        render: function () {

            this.el.innerHTML = this.template;
            //$(this.el).find("#qwizbook-create-form").append(this.editQwizbook.render().el);
            return this;
        }
    });

    return QwizbookAddDetailsContent;

});