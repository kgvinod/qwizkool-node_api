/*!
 * Configuration parameters
 * Copyright(c) 2013 Vibrentt
 */

var merge = require("../utils/utils").merge;

var defaults = {
    // Server's name
    server_name : 'QwizKool Web Server',
    
    // Public pages are served on this port 
    web_server_port : 3000,

    // application base url
    base_url : 'http://localhost:3000',
    
    // mongodb server url
    mongodb_url : 'mongodb://localhost:27017/qwizkool',
    
    // Logger log level
    log_level : 'verbose',
    
    // Logger log level
    log_file : 'server.log',

    // Gmail smtp
    smtp : {
        username : "qzauthmail@gmail.com",
        password : "qzmail@123"
    },

    // user account activation expiration
    token_expiration : 86400000
}
 
var production = {
    env : "production",
    mongodb_url : 'mongodb://localhost:27017/qwizkool'
};

var test = {
    env : "test",
    mongodb_url : 'mongodb://localhost:27017/qwizkool_test',
    token_expiration : 60000 // one minute expiration
}

var development = {
    env : "test",
    mongodb_url : 'mongodb://localhost:27017/qwizkool_dev'
}

function getConfig(env){
    switch(env){
        case "production":
            return production;
            break;
        case "development":
            return test;
            break;
        case "test":
            return development;
            break;
    }
}

var config = merge(defaults, getConfig(process.env.NODE_ENV));
/**
  * Exports.
  */
module.exports  = exports = config;
    
