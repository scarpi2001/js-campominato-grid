/*L’utente clicca su un bottone che genererà una griglia, 
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

//richiama elementi html
const contenitore = document.getElementById("container");
const myButton = document.getElementById("button");
const difficolta = document.getElementById("difficulty");

//genera griglia
myButton.addEventListener("click",

    function(){
        //svuota griglia
        contenitore.innerHTML = "";
        console.clear();

        //DIFFICOLTA' EASY
        if (difficolta.value === "easy") {
            
            //genera 100 elementi (div) nella griglia
            for (let i = 1; i <= 100; i++) {

                const div = document.createElement("div");
                div.classList.add("box");
                div.classList.add("easy");
                div.append(i);
                contenitore.append(div);

                //al click aggiungi classe che colora la cella e stampa n° cella in console
                div.addEventListener("click",

                    function(){
                    div.classList.add("azure");
                    console.log(i);
                    }

                );
            }
        } else if (difficolta.value === "medium") { //DIFFICOLTA' MEDIUM

            //genera 100 elementi (div) nella griglia
            for (let i = 1; i <= 81; i++) {

                const div = document.createElement("div");
                div.classList.add("box");
                div.classList.add("medium");
                div.append(i);
                contenitore.append(div);

                //al click aggiungi classe che colora la cella e stampa n° cella in console
                div.addEventListener("click",

                    function(){
                    div.classList.add("azure");
                    console.log(i);
                    }

                );
            }
        } else { //DIFFICOLTA' HARD

            //genera 100 elementi (div) nella griglia
            for (let i = 1; i <= 49; i++) {

                const div = document.createElement("div");
                div.classList.add("box");
                div.classList.add("hard");
                div.append(i);
                contenitore.append(div);

                //al click aggiungi classe che colora la cella e stampa n° cella in console
                div.addEventListener("click",

                    function(){
                    div.classList.add("azure");
                    console.log(i);
                    }

                );
            }
        }
    }
);

 


