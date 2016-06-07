

var quotes = [
  	{ text: "El café es un bálsamo para el corazón y el espíritu.", author: "Giuseppe Verdi"},
	{ text: "Una buena taza de su negro licor, bien preparado, contiene tantos problemas y tantos poemas como una botella de tinta.", author: "Rubén Darío"},
	{ text: "Claro que el café es un veneno lento; hace cuarenta años que lo bebo.", author: "Voltaire"},
	{ text: "La amistad es como el café, una vez frío nunca vuelve a su sabor original, aún si es recalentado.", author: "Kant"},
	{ text: "Ni amigo reconciliado, ni café recalentado.", author: "Refrán popular"},
	{ text: "No hay nada como una taza de café para estimular las células del cerebro.", author: "Sherlock Holmes"},
	{ text: "Detrás de cada mujer exitosa hay una cantidad substancial de café.", author: "Stephanie Piro"},
	{ text: "Si no hay café para todos, no habrá para nadie.", author: "Che Guevara"},
	{ text: "El café debe ser negro como el infierno, fuerte como la muerte y dulce como el amor.", author: "Proverbio turco"},
	{ text: "Se cambia mas fácilmente de religión que de café.", author: "Georges Courteline"}
];


$(document).ready(function () {
	
	// quote
	var dom = $(".jumbotron .lead");
	var quote = quotes[Math.floor(Math.random() * (quotes.length))];
	console.log(quote);
	dom.children(".quote-text").text('"' + quote.text + '"');
	dom.children(".quote-author").text(quote.author);
	setTimeout(function(){ dom.slideDown(); }, 1000);	
});

