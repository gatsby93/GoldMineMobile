angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };

    //Feature 1
    $scope.Feature1 = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Feature 1',
            template: 'In Progress'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('OK');
            } else {
                console.log('Cancel');
            }
        });
    };

    //Feature 2
    $scope.Feature2 = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Feature 2',
            template: 'In Progress'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('OK');
            } else {
                console.log('Cancel');
            }
        });
    };

    //Feature 3
    $scope.Feature3 = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Feature 3',
            template: 'In Progress'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('OK');
            } else {
                console.log('Cancel');
            }
        });
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicPopup) {
    $scope.chat = Chats.get($stateParams.chatId);

    $scope.Authentication = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Please Log in or Register for an Account',
            template: 'Testing',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    type: 'button-assertive'
                },
                {
                    text: 'Log In',
                    type: 'button-positive'
                },
                {
                    text: 'Register',
                    type: 'button-balanced'
                }
            ]
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Log In');
            } else {
                console.log('Register');
            }
        });
    };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


