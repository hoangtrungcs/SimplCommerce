﻿/*global angular*/
(function () {
    'use strict';

    angular
        .module('simplAdmin.reviews', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('reviews', {
                        url: '/reviews',
                        templateUrl: 'reviews/admin/review/review-list.html',
                        controller: 'ReviewListCtrl as vm'
                    })
                ;
            }
        ]);
})();