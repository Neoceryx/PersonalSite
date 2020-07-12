var app = angular.module("App", ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    
    // English
    $translateProvider.translations("en",{
        ABOUT:"I am a software developer with 3 years of experience, throughout my career I have been able to help solve different problems by creating digital tools to facilitate work processes and saving costs, mainly focused on the manufacturing sector. through the areas of Production lines, Warehouses, Human Resources, Sales "
    });
    // End English

    // Spanish
    $translateProvider.translations("es",{
        ABOUT:"Soy un desarrollador de software con 3 años de experiencia, a lo largo de mi carrera, he podido ayudar a resolver diferentes problemas principalmente enfocado al sector de manufactura, mediante la creación de herramientas digitales, para facilitar procesos de trabajo y ahorro de costos. Atreves de las áreas de Líneas de producción, Almacenes, RH y área de ventas"
    });
    // End Spanish

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
        JQUERY: 90,
        ANGULARJS:80,
        VUEJS:60,
        REACT:50, 
        REACTNATIVE:50,  
        PYTHON:50,  
        AMWS: 80   
    }
    
    $scope.ChangeLanguage = function (languaje) {        
        $translate.use(languaje);
    }

});
