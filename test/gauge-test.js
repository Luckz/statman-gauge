/*jslint node: true */
"use strict";

var Gauge = require('../lib/Gauge');
var mocha = require('mocha');
var assert = require('assert');

describe('gauge', function () {
    it('hello', function () {
        assert.equal(1, 1);
    });


// it('gauagename', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     test.equal('metric-name', gauge.name());
//
//                             });
//
// it('initializesTo0', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     test.equal(0, gauge.value());
//
//                             });
//
// it('increment', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     gauge.increment();
//     test.equal(1, gauge.value());
//
//                             });
//
// it('incrementByValue', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     gauge.set(10);
//     gauge.increment(2);
//     test.equal(12, gauge.value());
//
//                             });
//
// it('decrement', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     gauge.decrement();
//     test.equal(-1, gauge.value());
//
//                             });
//
// it('decrementByValue', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     gauge.set(10);
//     gauge.decrement(2);
//     test.equal(8, gauge.value());
//
//                             });
//
// it('set', function ( ) {
//     var gauge = new metrics.Gauge('metric-name');
//     gauge.set(5);
//     test.equal(5, gauge.value());
//
//                             });
//
// function testSetWithInvalidInput(test, input) {
//     var gauge = new metrics.Gauge('metric-name');
//     test.throws(function() {
//         gauge.set('str');
//     }, Error, "`set` should throw exception if passed non-numeric value");
//
// }
//
// it('setNotAllowString', function ( ) {
//     var input = "str";
//     testSetWithInvalidInput(test, input);
//                             });
//
// it('setNotAllowNull', function ( ) {
//     var input = null;
//     testSetWithInvalidInput(test, input);
//                             });
//
// it('setNotAllowUninitialized', function ( ) {
//     var input;
//     testSetWithInvalidInput(test, input);
//                             });
//
// it('allowCustomValueFunction', function ( ) {
//     var customValueFunction = function() {
//         return 5;
//                                 });
//
//     var gauge = new metrics.Gauge('metric-name', customValueFunction);
//     test.equal(5, gauge.value());
//
//                             });
//
// it('disallowNonFunctionForCustomValueFunction', function ( ) {
//     test.throws(function() {
//         var gauge = new metrics.Gauge('metric-name', 5);
//     });
//
//
//                             });
//
// it('twoGauage', function ( ) {
//     var gaugeA = new metrics.Gauge('metric-name');
//     gaugeA.set(5);
//     gaugeA.increment();
//     gaugeA.increment();
//     gaugeA.decrement();
//
//     var gaugeB = new metrics.Gauge('metric-name');
//     gaugeB.set(10);
//     gaugeB.increment();
//     gaugeB.decrement();
//     gaugeB.decrement();
//
//     test.equal(6, gaugeA.value());
//     test.equal(9, gaugeB.value());
//
// });

});
