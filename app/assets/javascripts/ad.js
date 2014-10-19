// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
angular.module('receta',['wu.masonry', 'ui.bootstrap', 'ui-rangeSlider'])
  .controller('DemoCtrl', function ($scope, $http, $modal) {
    $scope.priceRange = {
        min: 0,
        max: 100
    };
    $scope.priceRangeFilter = function (brick) {
      return brick.price >= $scope.priceRange.min && brick.price <= $scope.priceRange.max;
    };
    $http.get('/ads/all')
      .success(function(data, status){
        $scope.ads = JSON.stringify(data);
        $scope.bricks = [];
        $scope.priceRange.max = Math.max.apply(Math,data.map(function(o){return o.price;}))
        $scope.priceRange.defaultMax = $scope.priceRange.max;
        console.log($scope.priceRange.defaultMax);
        for(var i = 0; i < 15; i++){
          ad = data[Math.floor(Math.random() * data.length)];
          console.log(ad);
          $scope.bricks.push({
            src: '/assets/' + ad.image + '.jpg?=' + i,
            name: ad.name,
            price:ad.price,
            description: ad.description,
            category_id: ad.category_id || '',
            gender:ad.gender || ''
          });
        }
        return;
          for(var i = 0; i < data.length; i++){
            ad = data[i];
            $scope.bricks.push({
              src: '/assets/' + ad.image + '.jpg?=' + i,
              gender: 'F',
              name: ad.name,
              description: ad.description,
              category_id: ad.category_id,
              gender:ad.gender
            });
          }
      });
      $http.get('categories/all')
        .success(function(data, status){
          $scope.categories = data;
        })

        $scope.open = function (photo) {
            var modalInstance = $modal.open({
              templateUrl: 'myModalContent.html',
              scope: $scope,
              controller: 'ModalInstanceCtrl',
              resolve: {
                items: function () {
                  return photo;
                },
                photo: function(){
                    return photo;
                }
              }
          });
        }
        $scope.openForm = function (photo) {
            var modalInstance = $modal.open({
              templateUrl: 'myModalContent2.html',
              scope: $scope,
              controller: 'ModalInstanceCtrl2',
              resolve: {
                categories: function(){
                  return $scope.categories
                },
                items: function () {
                  return photo;
                },
                photo: function(){
                    return photo;
                }
              }
          });
        }
  })


.controller('ModalInstanceCtrl2', function ($scope, $modalInstance, items, categories) {

  $scope.items = items;
  $scope.categories = $scope.categories
  $scope.selected = {
    item: $scope.items,
  };
  $scope.categories = ["Boarding","Catering","Tutoring","Seminar","Car Rental"]
  console.log(JSON.stringify($scope.categories))

  $scope.ok = function () {
    $modalInstance.close($scope.selected);
  };

   $scope.submit = function() {
     $scope.submitted = true
        console.log('submit');
      };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items
  };
  console.log($scope.photo)

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
