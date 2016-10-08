'use strict';

var assert = require( 'assert' );
var xsltproc = require( 'xsltproc' );
var fs = require('fs');
var xml2json = 'xml2json.xsl';

it( "One node", function ( done ) {

  var xml = 'test/fixture/one_node.xml';
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( data ) {
    assert.equal( '{"test" : {"a" : "one"}}', data.toString() );
    done();
  } );

} );

/* Examples from http://json.org/example.html */

it( "json.org glossary example", function ( done ) {

  var xml = 'test/fixture/glossary.xml';
  var json = 'test/fixture/glossary.json'; /* amended with OtherTerm to reflect XML, it's an arbitrary element appended in the json.org example */
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( transformedXml ) {
    fs.readFile(json, function (err, jsonData) {
      if (err) {
        throw err;
      }
      assert.equal(
        JSON.stringify(JSON.parse(jsonData.toString())),
        JSON.stringify(JSON.parse(transformedXml.toString()))
        );
      done();
    } );
  } );

} );

it( "json.org menu example", function ( done ) {

  var xml = 'test/fixture/menu.xml';
  var json = 'test/fixture/menu.json';
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( transformedXml ) {
    fs.readFile(json, function (err, jsonData) {
      if (err) {
        throw err;
      }
      assert.equal(
        JSON.stringify(JSON.parse(jsonData.toString())),
        JSON.stringify(JSON.parse(transformedXml.toString()))
        );
      done();
    } );
  } );

} );


it( "json.org widget example", function ( done ) {

  var xml = 'test/fixture/widget.xml';
  var json = 'test/fixture/widget.json'; /* amended numbers with quotes, the XSLT doesn't do types */
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( transformedXml ) {
    fs.readFile(json, function (err, jsonData) {
      if (err) {
        throw err;
      }
      assert.equal(
        JSON.stringify(JSON.parse(jsonData.toString())),
        JSON.stringify(JSON.parse(transformedXml.toString()))
        );
      done();
    } );
  } );

} );

/*
( "json.org menu, second example", function ( done ) {

  var xml = 'test/fixture/menu2.xml';
  var json = 'test/fixture/menu2.json';
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( transformedXml ) {
    fs.readFile(json, function (err, jsonData) {
      if (err) {
        throw err;
      }
      assert.equal(
        JSON.stringify(JSON.parse(jsonData.toString())),
        JSON.stringify(JSON.parse(transformedXml.toString()))
        );
      done();
    } );
  } );

} );
*/

// ( "json.org web-app example", function ( done ) {
//
//   var xml = 'test/fixture/web-app.xml';
//   var json = 'test/fixture/web-app.json'; /* amended numbers and booleans with quotes, the XSLT doesn't do types */
//   var xslt = xsltproc.transform( xml2json, xml );
//
//   xslt.stdout.on( 'data', function ( transformedXml ) {
//     //console.log(transformedXml.toString());
//     done();
//     fs.readFile(json, function (err, jsonData) {
//       if (err) {
//         throw err;
//       }
//       console.log(jsonData.toString());
//       assert.equal(
//         JSON.stringify(JSON.parse(jsonData.toString())),
//         JSON.stringify(JSON.parse(transformedXml.toString()))
//         );
//       done();
//     } );
//   } );
//
// } );


/*
it ("load file", function (done) {
  fs.readFile('test/fixture/glossary.json', function (err, data) {
    if (err) {
      throw err;
    }
    assert(data);
    done();
  });
});

it ("parse JSON", function (done) {
  assert(JSON.parse('{"glossary": { "title": "example glossary", "GlossDiv": { "title": "S" }}}'));
  done();
});

it ("remove whitespace", function (done) {
  fs.readFile('test/fixture/simple.json', function (err, data) {
    if (err) {
      throw err;
    }
    assert.equal(
      '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S"}}}',
      JSON.stringify(JSON.parse(data.toString()))
    );
    done();
  });
});
*/
