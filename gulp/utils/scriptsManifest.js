/* ==========================================================================
   Provides utilities for writing out a manifest of per-page JS files
   for consumption by a dynamic script loader.
   ========================================================================== */

'use strict';

var fs = require( 'fs' );
var mkdirp = require( 'mkdirp' );

var _sourcePathCache = {};

/**
 * Traverse a directory and return an object with keys
 * and values equal to the files in the directory tree.
 * @param {string} dir Directory to traverse.
 * @param {Object} list An object that is used to compile the list of files.
 *   Should start empty.
 * @param {string} baseDir The base directory the traversal started from.
 * @returns {Object}
 *   Hash with keys and values equal to the files in the directory tree.
 */
function _traverseDirectory( dir, list, baseDir ) {
  if ( !baseDir ) { baseDir = dir; }
  var stats = fs.lstatSync( dir ); // eslint-disable-line no-sync, no-inline-comments, max-len
  if ( stats.isDirectory() ) {
    fs.readdirSync( dir ).map( function( child ) { // eslint-disable-line no-sync, no-inline-comments, max-len
      return _traverseDirectory( dir + '/' + child, list, baseDir );
    } );
  } else if ( !_isHidden( dir ) ) {
    var relativePath = dir.substring( baseDir.length + 1 );
    list[relativePath] = './' + relativePath;
  }

  return list;
}

/**
 * Checks whether a file path contains a hidden file or a folder.
 * @param {string} path Filepath to check.
 * @returns {boolean} true if the source is hidden, otherwise false.
 */
function _isHidden( path ) {
  return ( /(^|\/)\.[^\/\.]/g ).test( path );
}

/**
 * Retrieve a directory tree hash map from cache
 *   or traverse the given directory and create and return a new cache.
 * @param {string} dir Directory to traverse.
 * @returns {Object}
 *   Hash with keys and values equal to the files in the directory tree.
 */
function getDirectoryMap( dir ) {
  var cache = _sourcePathCache[dir];
  if ( !_sourcePathCache[dir] ) {
    var directoryMap = _traverseDirectory( dir, {} );
    _sourcePathCache[dir] = directoryMap;
    cache = directoryMap;
  }
  return cache;
}

/**
 * Write a JavaScripts route manifest file to disk.
 * @param {string} filePath Path to the manifest file.
 * @param {string} filename The manifest file name.
 * @param {string} dir Path of the scripts directory to traverse and write.
 */
function writeScriptsManifest( filePath, filename, dir ) {
  mkdirp( filePath, function( err ) {
    if ( err ) { throw err; }
    fs.writeFileSync( filePath + '/' + filename, JSON.stringify( getDirectoryMap( dir ) ) ); // eslint-disable-line no-sync, no-inline-comments, max-len
  } );
}

module.exports = {
  getDirectoryMap:      getDirectoryMap,
  writeScriptsManifest: writeScriptsManifest
};
