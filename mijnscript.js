function hoi(){
    alert();
}

function eenfunctie(){
    document.getElementById("mijndiv").innerHTML = "iets anders";
    hoi();
}

function tweede(){
    console.log("hij doet het");
    var vara = 3;
    var varb = "Woensdag";
    let varc = 5;
    // strongly typed	weakly typed
    /*console.log(varc);
    // operators
    let waar = true;
    console.log(!waar);
    let uitkomst = vara+varc;
    console.log(uitkomst);
    console.log(vara == varc);
    */
    console.log(varb.startsWith("W"));
    console.log(varb.startsWith("w"));
    console.log(varb.startsWith("Woe"));

    const tempArray = varb.split("s");
    console.log(tempArray[0]);
    console.log(tempArray[1]);

    console.log(varb.toLocaleLowerCase());
    /*
    | pipe
    ~ tilde
    } accolade
    ] square bracket
    ) haakje
    < kleiner dan
    ^ totdemacht/circonflex/dakje
    ` backtick/apostroph
    ' aanhalingsteken
    / forward slash
    \ back slash
    : dubbele punt
    ; punt komma
    */
}