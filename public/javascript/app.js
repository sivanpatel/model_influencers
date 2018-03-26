var app = angular.module('modelInfluencers', [])

app.controller('InfluencerCtrl', function($scope, $http) {

  $scope.suggestedInfluencers = []
  $scope.starredInfluencers = []

  $scope.loadData = function() {
    $http.get('/influencers').then(function(response) {
      console.log(response)
      $scope.suggestedInfluencers = response.data
    })
  }

  $scope.moveToStarred = function($index) {
    influencer = $scope.suggestedInfluencers.splice($index, 1)[0]
    $scope.starredInfluencers.push(influencer)
  }

  $scope.moveToSuggested = function($index) {
    influencer = $scope.starredInfluencers.splice($index, 1)[0]
    $scope.suggestedInfluencers.push(influencer)
  }

  $scope.$watch('sortInfluencers', function(newSort, oldSort) {
    if (newSort == 'a-z') {
      $scope.sortInfluencersAlphabetically()
    }
    if (newSort == 'z-a') {
      $scope.sortInfluencersAlphabetically().reverse()
    }
  })

  $scope.sortInfluencersAlphabetically = function() {
    console.log('asasd')
    $scope.starredInfluencers.sort(function(a,b) {
      return a.full_name - b.full_name
    })
    console.log($scope.starredInfluencers)
  }

  $scope.sortInfluencersByEngagement = function() {
    $scope.starredInfluencers.sort(function(a,b) {
      return a.engagement - b.engagement
    })
  }

  $scope.sortInfluencersByFollowers = function() {
    $scope.starredInfluencers.sort(function(a,b) {
      return a.followers - b.followers
    })
  }
})
