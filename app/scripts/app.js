'use strict';

/**
 * @ngdoc overview
 * @name bugcenterApp
 * @description
 * # bugcenterApp
 *
 * Main module of the application.
 */
angular
  .module('bugcenterApp', []).controller("jgr",["$scope","$http",function($scope,$http){
     $http({
       url:"http://47.90.20.200:1602/news-img1/",
       method:"get"
     }).then(function(e){
      console.log(e)
       $scope.img1=e.data
     },function(){

     })
     $http({
       url:"http://47.90.20.200:1602/news1/",
       method:"get"
     }).then(function(e){
      console.log(e)
       $scope.title1=e.data
     },function(){

     })
     $http({
       url:"http://47.90.20.200:1602/news-img2/",
       method:"get"
     }).then(function(e){
      console.log(e)
       $scope.img2=e.data
     },function(){

     })
     $http({
       url:"http://47.90.20.200:1602/news2/",
       method:"get"
     }).then(function(e){
      console.log(e)
       $scope.title2=e.data
     },function(){

     })
     $scope.data={"name":"国际","english":"WORLD","title1":"环球视野","title2":"国际人物"}
     $scope.data1={"name":"财经","english":"FINANCE","title1":"股票","title2":"理财"}
  }]).directive("autoplay",function(){
    return {
      restrict:"ECMA",
      template:'<div><div><span>{{data.name}}</span><span>{{data.english}}</span><span>{{data.title1}}</span><span>{{data.title2}}</span></div><ul><li ng-repeat="x in data2">{{x.title | center}}</li></ul><div ng-repeat="a in data1" class="tu"><img src="{{a.img}}"/></div></div>',
      scope:{data1:"=img",data2:"=title",data:"=biao"},
      replace:true,
      link:function(s,e,a){
        e.find(".carousel").carousel({
          interval: 1000
            })
        
      }

    }
  }).filter("center",function(){
    return function(instr){
      if(instr.length>=10){
        return instr.slice(0,10)+"..."
      }
      
    }
  })
