function changeColors (){
    let hex_numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" ,
    "A" , "B" , "C" , "D" , "E" , "F"];

    let hexcode = "";

    for (i=0; i<6; i++){
        let random_numbers = Math.floor (Math.random() * hex_numbers.length)

        hexcode += hex_numbers [random_numbers];
    };
    document.getElementById ("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
};