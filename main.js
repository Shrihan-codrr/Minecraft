// Create the reference variable of the canvas using fabric.Canvas()

var canvas=new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images

block_width=40;
block_height=40;

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
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
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

//block_update("roof.jpg");

window.addEventListener("keydown",my_key_down);

function my_key_down(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);


    // Cloud
    if (key_pressed == "67"){

        console.log("C");
        block_update("cloud.jpg");
    }

     //Dark Green
     if (key_pressed == "68"){

        console.log("D");
        block_update("dark_green.png");
    }

     // Ground
     if (key_pressed == "71"){

        console.log("G");
        block_update("ground.png");
    }

     // Light Green
     if (key_pressed == "76"){

        console.log("L");
        block_update("light_green.png");
    }

     // Roof
     if (key_pressed == "82"){

        console.log("R");
        block_update("roof.jpg");
    }

     // Trunk
     if (key_pressed == "84"){

        console.log("T");
        block_update("trunk.jpg");
    }
    
     // Unique
     if (key_pressed == "85"){

        console.log("U");
        block_update("unique.png");
    }

     //Wall
     if (key_pressed == "87"){

        console.log("W");
        block_update("wall.jpg");
    }

     // Yellow Wall
     if (key_pressed == "89"){

        console.log("Y");
        block_update("yellow_wall.png");
    }

    // Shift + M - Decrease the block Size  M - 77 
        
    if(e.shiftKey && key_pressed =="77"){
        console.log("Shift + M");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }



    // Shift + P - Increases the block size  P - 80
   if(e.shiftKey && key_pressed == "80"){
       console.log("shift + P");
       block_width = block_width + 10;
       block_height = block_height + 10;
       
       document.getElementById("current_width").innerHTML=block_width;
     document.getElementById("current_height").innerHTML=block_height;

   }




    // Move Up  Up 38
        if(key_pressed == "38"){
            console.log("up_arrow");
            move_up();
        }

    //Move Down - 40
        if(key_pressed == "40"){
            console.log("down_arrow");
            move_down();
        }

    // Move Left Left -37
        if(key_pressed == "37"){
            console.log("left_arrow");
            move_left();
        }

    // Move Right  Right - 39 
        if(key_pressed == "39"){
            console.log("right_arrow");
            move_right();
        }


}

function move_up(){
    if(player_y >=0){
        player_y = player_y -block_height;
        canvas.remove(player_object);
        player_update();
    }
     
}

function move_down(){
    if(player_y < 450){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
     
}


function move_right(){
      if(player_x < 840){
        player_x = player_x + block_width;
        canvas.remove(player_object); 
        player_update();
    }
}

function move_left(){
    if(player_x >=0){
      player_x = player_x - block_width;
      canvas.remove(player_object); 
      player_update();
  }
}