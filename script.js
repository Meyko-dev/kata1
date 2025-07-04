const form = document.getElementById("citationsForm");
const citationsList = document.getElementById("citationsList");

form.addEventListener("submit", function(event) {
    event.preventDefault(); })

    const text = document.getElementById("text").value;
    const author = document.getElementById("author").value

      console.log('Texte:', text);
      console.log('Auteur:', author)
      console.log('Données du formulaire:', {
        text: text,
        author: author
    })

    function addQuote(quote, author){
        
    }