angular.module('starter.controllers', [])

.controller('RidesCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, UserProfile) {
    var me = UserProfile.me();

    $scope.profile = me;

    $scope.updateProfile = function() {
        UserProfile.update({
            user_id: me.user.id,
            age: me.age,
            gender: me.gender,
            category_road: me.category_road,
            category_mtb: me.category_mtb,
            category_cx: me.category_cx,
            category_track: me.category_track,
            privacy_setting: me.privacy_setting,
            ride_matching: me.ride_matching
        });
    }
})

.controller('ProfileEditCtrl', function($scope, UserProfile, User) {
    var me = UserProfile.me();

    $scope.profile = me;
})
;

