/**
 * Created by shir123 on 26/07/2014.
 */
//var myApp = angular.module('myApp', []);
//myApp.controller('MyController', function MyController ($scope){
//    $scope.friends = [
//
//        {
//            "firstName":"John" ,
//            "lastName":"Doe",
//            "info": "this is a nice guy",
//            "imagename":"http://images2.fanpop.com/images/photos/7900000/JOHN-DOE-PICS-john-doe-7968926-350-240.jpg",
//            "events": [
//                {"name":"Shay Bar Metzva",
//                    "date": "22/7/2014"
//                },
//                {"name":"John & Marry Wedding",
//                    "date": "NA"
//                }
//            ]
//
//        },
//
//        {
//            "firstName":"Anna" ,
//            "lastName":"Smith",
//            "info": "this is not a nice guy",
//            "imagename":"http://images6.fanpop.com/image/photos/34600000/anna-nicole-smith-dannielynn-birkhead-34665865-500-600.jpg",
//            "events": [
//                {"name":"Google social event",
//                    "date": "22/5/2015"
//                }
//
//            ]
//
//        },
//
//        {
//            "firstName":"Peter" ,
//            "lastName":"Jones",
//            "info": "this is a small girl",
//            "imagename":"http://i.telegraph.co.uk/multimedia/archive/01114/peter_jones_1114850c.jpg",
//            "events": [
//                {"name":"FedEx customers meeting",
//                    "date": "22/7/2014"
//                }
//
//            ]
//
//
//
//        }
//    ]
//});

var myApp = angular.module('myApp', []);
myApp.controller('MyController', function MyController ($scope, $http){
    $http.get('../../builds/development/js/data.json').success(function(data){
        $scope.friends = data;


    });
});