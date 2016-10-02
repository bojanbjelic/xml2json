'use strict';

var assert = require( 'assert' );
var xsltproc = require( 'xsltproc' );
var xml2json = 'xml2json.xsl';

it( "Sample", function ( done ) {

  var xml = 'test/fixture/sample.xml';
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( data ) {
    assert.equal( '{"glossary" : {"title" : "example glossary", "GlossDiv" : {"title" : "S", "GlossList" : {"GlossEntry" : {"ID" : "SGML","SortAs" : "SGML", "GlossTerm" : "Standard Generalized Markup Language", "Acronym" : "SGML", "Abbrev" : "ISO 8879:1986", "GlossDef" : {"para" : "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso" : [{"OtherTerm" : "GML"}, {"OtherTerm" : "XML"}]}, "GlossSee" : {"OtherTerm" : "markup"}}}}}}', data.toString() );
    done();
  } );


} );

it( "One node", function ( done ) {

  var xml = '../xml2json/test/fixture/one_node.xml';
  var xslt = xsltproc.transform( xml2json, xml );

  xslt.stdout.on( 'data', function ( data ) {
    assert.equal( '{"test" : {"a" : "one"}}', data.toString() );
    done();
  } );

} );
