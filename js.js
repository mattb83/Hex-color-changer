function hexColor() {
    let hexColor = '#' +Math.floor(Math.random()*16777215).toString(16);
    console.log(hexColor);

    document.body.style.backgroundColor = hexColor;
}

button.addEventListener("click", hexColor);

hexColor();

//You get 16777215 by doing 16 to the 6th power.
//You get 16 because a-f (6), 0-9 (10) = 16.
//You get 6 because the hex color code is 6 digits long.
//Grab it and write it to the screen.
//Add the button click.
//Lastly, call the function.
