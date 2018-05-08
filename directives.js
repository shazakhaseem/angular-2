var app = angular.module('ajaxApp');

app.directive('shazaIsCool', function () {
    return {
        //vad som händer här visas i custom directive 
        template: '<div><p>Shaza is the best person in the world</p></div>',
        restrict: 'E',
        link: function (scope, element, attrs) {
            //här körs logiken bakom din directive
            console.log('directive is active');
        }
    };

});