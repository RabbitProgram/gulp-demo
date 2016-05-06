/**
 * Created by admin on 2016/4/28.
 */


var gulpDemo;
(function (gulpDemo) {
    'use strict';
    //控制器
    gulpDemo.ControllerModule=angular.module('app.controllers',[]);
    //服务
    gulpDemo.ServiceModule=angular.module('app.services',[]);

    gulpDemo.AppModule=angular.module('app',['app.controllers','app.services'])
})(gulpDemo||(gulpDemo={}));
