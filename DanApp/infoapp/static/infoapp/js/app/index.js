var app = angular.module("App", ['ngRoute','pascalprecht.translate']);

app.config(function ($routeProvider,$translateProvider) {
    
    // English
    $translateProvider.translations("en",{
        TEST:"I am a software developer with 3 years of experience, throughout my career I have been able to help solve different problems by creating digital tools to facilitate work processes and saving costs, mainly focused on the manufacturing sector. through the areas of Production lines, Warehouses, Human Resources, Sales "
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

    $scope.SKILL={
        NET:80,
        SQL:70,
        PHP: 70,
        HTML:90,
        CSS:75,
        ANGULARJS:80,
        VUEJS:60,
        REACT:50,        
    }
    
});
