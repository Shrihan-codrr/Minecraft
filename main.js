// Create the reference variable of the canvas using fabric.Canvas()

var canvas=new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images

block_width=30;
block_height=30;

// Define the starting x and y coordinates for the player

player_x=10;
player_y=10;

// Define a variable named player_object to store object of the player image

var player_object = "";


// Define a variable named block_object to store object of the block image

var block_object = "";

// Add a function named player_update() to add the player image

function player_update(){
     fabric.Image.fromURL("player.png", function(IMG){
         player_object = IMG;
         player_object.scaleToWidth(80);
         player_object.scaleToHeight(100);
         player_object.set({
             top:player_y,
             left: player_x
         });
         canvas.add(player_object);
     });

}

player_update();




// Add a function named block_update() to add the different images as per the specific keys pressed

function block_update(block_img){
    fabric.Image.fromURL(block_img, function(IMG){
        block_object = IMG;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });

}

block_update("roof.jpg");

