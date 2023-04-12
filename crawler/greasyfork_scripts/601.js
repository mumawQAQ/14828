// ==UserScript==
// @name         DigDig.IO X-Ray
// @namespace    https://tampermonkey.net/
// @version      0.3
// @description  Let's you see more in digdig.io. Requires no ads!
// @author       longkidkoolstar
// @match        *://digdig.io/*
// @icon         https://www.google.com/s2/favicons?domain=digdig.io
// @require      https://cdn.jsdelivr.net/gh/Qwokka/WAIL@9ed21abc43045e19f9b3756de109a6e361fb9292/wail.js
// @license MIT
// ==/UserScript==

// Only works when fow is done client side
// Should or shouldn't work depending on the current live build
// Created on build: 41e6c4662ebb8e04b62e5ac95c03eb1d8f5427d1

const _instantiateStreaming = WebAssembly.instantiateStreaming;

WebAssembly.instantiateStreaming = function () {

	return _instantiateStreaming( new Response() );

}

const _instantiate = WebAssembly.instantiate;

WebAssembly.instantiate = function ( buffer, imports ) {

	const array = new Uint8Array( buffer );

	find( array, [
		OP_END,
		OP_I32_LOAD8_U, - 1, - 1,
		OP_I32_CONST, 1,
		OP_I32_SUB,
		OP_BR_TABLE
	], function ( i, end ) {

		console.log( 'here!!' );

		i ++;

		array[ i ++ ] = OP_BR;
		array[ i ++ ] = 1;
		array[ i ++ ] = OP_NOP;

		i ++;

		array[ i ] = OP_NOP;

	} );

	find( array, [
		OP_F32_CONST, ...Float32ToArray( 2 ),
		OP_SET_LOCAL, - 1
	], function ( start, end ) {

		array.set( Float32ToArray( - 1 ), start + 1 );

	} );

	// changes the shape of the fog to a rectangle

	find( array, [
		OP_F64_CONST, ...Float64ToArray( 1.4142135623730951 )
	], function ( start, end ) {

		array.set( Float64ToArray( 1 ), start + 1 );

	} );

	return _instantiate( buffer, imports );

}

function find( array, search, callback ) {

	main: for ( let i = 0; i < array.length; i ++ ) {

		for ( let j = 0; j < search.length; j ++ ) {

			if ( search[ j ] !== - 1 && array[ i + j ] !== search[ j ] ) {

				continue main;

			}

		}

		callback( i, i + search.length - 1 );

	}

}

function Float32ToArray( x ) {

	return new Uint8Array( new Float32Array( [ x ] ).buffer );

}

function Float64ToArray( x ) {

	return new Uint8Array( new Float64Array( [ x ] ).buffer );

}


