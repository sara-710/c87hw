var canvas = new fabric.Canvas('myCanvas');
block_imgwidth = 30;
block_imgheight = 30;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set()
        canvas.add(player_object)
    })
}

function newImg(getimg) {
    fabric.Image.fromURL(getimg, function(Img) {
        block_img_object = Img
        block_img_object.scaleToWidth(block_imgwidth)
        block_img_object.scaleToHeight(block_imgheight)
        block_img_object.set()
        canvas.add(block_img_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "89") {
        newImg("yellow.jpg");
        console.log("y");
    }
    if (keyPressed == "80") {
        newImg("pink.jpg");
        console.log("p");
    }
    if (keyPressed == "66") {
        newImg("blue.jpg");
        console.log("b");
    }
    if (keyPressed == "71") {
        newImg("green.jpg");
        console.log("g");
    }
    if (keyPressed == "82") {
        newImg("red.jpg");
        console.log("r");
    }
}