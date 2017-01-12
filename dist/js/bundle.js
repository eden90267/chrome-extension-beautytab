(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var count = 100;
var REQUEST_URL = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/' + count + '/1';
var data = '';

var showData = function showData() {
	var index = Math.floor(Math.random() * count);
	var str = '\n\t  <a href="' + data[index].url + '" class="thumbnail show-img-area" id="show-img-area" target="_blank">\n\t    <img src="' + data[index].url + '">\n\t  </a>\n\t';
	document.querySelector('#show-img-box').innerHTML = str;
};

(function () {
	fetch(REQUEST_URL).then(function (response) {
		return response.json();
	}).then(function (json) {
		data = json.results;
		showData();
		var dislikeBtn = document.querySelector('#dislike-btn');
		dislikeBtn.addEventListener('click', showData);
	});
})();

},{}]},{},[1]);
