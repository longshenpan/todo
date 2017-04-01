/*global define */

define(['app', "mapDirectives"],
    function (app) {
        'use strict';
        var directives = angular.module('app.directives', []);
        directives.directive('budaimap', require('mapDirectives'));
    return directives;
});