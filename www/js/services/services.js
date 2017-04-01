/*global define */

define(['app', 'mainServices', 'signDataServices', 'mapServices','localStrogeServices','authorizeServices'],
    function (app) {
        'use strict';
        var services = angular.module('app.services', []);
        services.factory('$mainServices', require('mainServices'));
        services.factory('$signDataServices', require('signDataServices'));
        services.factory("$mapServices", require("mapServices"));
        services.factory("$localStrogeServices", require("localStrogeServices"));
        services.factory("$authorizeServices", require("authorizeServices"));
        // services.factory('$mapServices', require('mapServices'));
        // services.service('$indexServices', require('indexServices'));
        // services.service('$moreServices', require('moreServices'));
        // services.factory('$backButtonServices', require('backButtonServices'));
    return services;
});