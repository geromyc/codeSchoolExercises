/*global angular*/

(function() {
    var app = angular.module('store', []);
    
    app.controller('RentalController', function(){
        this.products = cars;
    });
    
    app.controller("RentController", function(){
        this.rentedCar = function(cars){
            if(cars.available > cars.rented){
                cars.rented = cars.rented +1;
            }else if (cars.available == cars.rented){
                cars.canRent = false;
            }
        };
    });
    
    var cars = [
    {
        type: "Economy Class",
        model: "compact/sedan",
        price: 35.00,
        description: "A wide variety of vehicles with above-average gas milage. Typically seats 5",
        available: 10,
        rented: 5,
        canRent: true,
        image: "https://media.brstatic.com/2017/03/17181003/slideshows_auto_2015_economy-cars_5-elantra.jpg",
    },
    {
        type: "Midsize Class",
        model: "full sedan/compact SUV",
        price: 40.00,
        description: "This choice of vehicles has extra space to stretch out your legs and extra room in the trunk. Typically seats 5",
        available: 7,
        rented: 5,
        canRent: true,
        image: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/media/638444/volkswagen-passat-photo-640563-s-original.jpg?crop=1xw:1xh;center,center&resize=800:*",
    },
    {
        type: "Full Size",
        model: "full SUV",
        price: 55.00,
        description: "These vehicles come equipped with an extra row of seats. Larger carrying capacity for hauling cargo or friends! Typically seats 8",
        available: 8,
        rented: 2,
        canRent: true,
        image: "https://img.autobytel.com/car-reviews/autobytel/131804-10-best-full-size-suvs-for-2017/2018-Lincoln-Navigator.jpg",
    },
    {
        type: "Luxury",
        model: "sedan",
        price: 125.00,
        description: "Why rent ordinary when you can rent extraordinary?! Pull up in style with one of our lovely choices. Seats 2-5 depending on model",
        available: 0,
        rented: 5,
        canRent: false,
        image: "http://www.gpluxurycarhire.com/images/diapo_hp/s-class-cab2D5.jpg",
    }
    ];
})();