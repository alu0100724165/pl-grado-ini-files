 var assert = chai.assert;

 suite('Funcionamiento lexer', function() {

	test('Comprobar comentarios', function() {
		
		var input = ";comentario";

		var output = lexer(input);

		assert.equal( output[0].type, 'comments');

		var input = "#comentario";

		var output = lexer(input);

		assert.equal( output[0].type, 'comments');
	});
	
	test('Comprobar header', function() {

		var input = "[input]";

		var output = lexer(input);

		assert.equal( output[0].type, 'header');
	});

	test('Comprobar error', function (){

		var input = "qW1562*y";

		var output = lexer(input);

		assert.equal( output[0].type, 'error');

	});
 });
 
 suite('Funcionamiento tokens', function(){
 	test('Funcionamiento tokensToString', function() {

		var input = ["input"];

		var output = tokensToString(input);

		assert.equal( output, '<ol>\n<li> <span class = ""> "input" </span>\n</ol>');
	});
 	
 });
 
 suite('Pruebas Unitarias para localStorage', function() {
	test('Soporte de localStorage', function() {
		if(window.localStorage){
			localStorage.test = "test";
			assert.equal(localStorage.test, "test");
			localStorage.removeItem("test");
		}
	});
});
    
    
    
    