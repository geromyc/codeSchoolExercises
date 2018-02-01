/*global angular*/

(function() {
    var app = angular.module('store', []);
    
    app.controller('RentalController', function(){
        this.products = cars;
    });
    
    var cars = [
    {
        type: "Economy Class",
        price: 35.00,
        description: "...",
        images: [
            {
                
            }],
    },
    {
        type: "Midsize Class",
        price: 40.00,
        description: "...",
        images: [
            {
                
            }],
    },
    {
        type: "Full Size",
        price: 55.00,
        description: "...",
        images: [
            {
                
            }],
    }
    ];
})();