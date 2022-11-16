/*L’utente clicca su un bottone che genererà una griglia, 
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

//richiama elementi html
const contenitore = document.getElementById("container");
const myButton = document.getElementById("button");

//genera griglia
myButton.addEventListener("click",

    function(){

        contenitore.classList.remove("none");
        contenitore.classList.add("active");

    }

);

//genera 100 elementi (div) nella griglia
for (let i = 1; i <= 100; i++) {

    const div = document.createElement("div");
    div.classList.add("box");
    div.append(i);

    //al click aggiungi classe che colora la cella e stampa n° cella in console
    div.addEventListener("click",

        function(){
        div.classList.add("azure");
        console.log(i);
        }

    );

    contenitore.append(div);

} 


