/*!
 * Copyright(c) 2013 Vibrentt
 *
 * Module : QwizBookFSM
 * Represents the state machine data of a qwizbook.
 * 
 * Valid Events:
 * - open : open a qwizbook
 * - getHint : get a hint for a question
 * - close : close a qwizbook
 * 
 */

/* ---------- CommonJS wrapper ---------- */
define(function(require, exports, module) {
/* -------------------------------------- */


/**
 * Module dependencies.
 */
var Scion = require('scion');


/**
 * Qwizbook FSM constructor.
 *
 * @api public
 * @return {Function} Constructor for FSM type.
 */

var QwizBookFSM = function(scxml) {

    this.id = null;
    this.scXml = scxml; //'<scxml xmlns="http://www.w3.org/2005/07/scxml" version="1.0" profile="ecmascript"></scxml>';
    this.qwizbookId = null;
    this.interpreter = null;
};



/**
 * Register event handlers.
 *
 * @api public
 * @return {Function} Constructor for FSM type.
 */

QwizBookFSM.prototype.registerEventListener = function(listener) {

    this.eventListenerCb = listener;

};


/**
 * Start FSM.
 *
 * @api public
 * @return {Function} Constructor for FSM type.
 */
QwizBookFSM.prototype.start = function() {

    var self = this;

    //Convert to scion model
    Scion.documentStringToModel(this.scXml, function(err, scModel) {

        if (err) throw err;

        //Instantiate the interpreter
        self.interpreter = new Scion.SCXML(scModel);
        
        //Register the handlers before starting
        self.interpreter.registerListener({
        
            onEntry: function(stateId) {
               //$("#page_body").append("Entering state :" + stateId + "<br/>");
               this.eventListenerCb(stateId);
            },
            
            onExit: function(stateId) {
               // $("#page_body").append("Exiting state :" + stateId + "<br/>");
            },
            
            onTransition: function(sourceStateId, targetStateIds) {
               // $("#page_body").append("Transitioning from state :" + sourceStateId + "<br/>");
            }
            
        });

        //start the interpreter
        self.interpreter.start();

        //send the init event
        self.interpreter.gen({
            name: "init",
            data: self.qwizbookId
        });

    });

};

/**
 * Send event to FSM .
 *
 * @api public
 * @return {Function} Constructor for FSM type.
 */

QwizBookFSM.prototype.sendEvent = function(event) {

    this.interpreter.gen({
        name: event,
        data: this.qwizbookId
    });
};





/**
 * Exports.
 * Return the singleton instance
 */

module.exports = exports = QwizBookFSM;

/* ---------- CommonJS wrapper ---------- */
});
/* -------------------------------------- */

