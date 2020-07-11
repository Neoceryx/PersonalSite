var app = angular.module("App", ['pascalprecht.translate']);

// Translation Configuration
app.config(function ($translateProvider) {
    
    // English
    $translateProvider.translations("en",{
        TEST:"hello"
    });
    // End English

    $translateProvider.preferredLanguage('en');

});
// End Translation Configuration

// Start Controller
app.controller("AppCTRL", function ($scope, $translate) {

    // Document on ready
    angular.element(document).ready(function () {
        console.log("Hi");
    })
    // Document on ready
    
});
