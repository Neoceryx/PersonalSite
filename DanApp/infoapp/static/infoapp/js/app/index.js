var app = angular.module("App", ['ngRoute','pascalprecht.translate']);

app.config(function ($routeProvider,$translateProvider) {
    
    $routeProvider.when("#!/",{
        templateUrl :"/static/infoapp/js/app/SPA/index.html"
    })

    // English
    $translateProvider.translations("en",{
        TEST:"hello"
    });
    // End English

    $translateProvider.preferredLanguage('en');

});
// End Configuration

// Start Controller
app.controller("AppCTRL", function ($scope, $translate) {

    // Document on ready
    angular.element(document).ready(function () {
        console.log("Hi");
    })
    // Document on ready
    
});
