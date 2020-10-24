canvas = new fabric.Canvas("myCanvas");
playerX = 10;
playerY = 10;
block_width = 30;
block_height = 30;
var player_width = 150;
var player_height = 150;
var player_object = "";
var block_object = "";

 function playerUpdate(){
     fabric.Image.fromURL("player.png", function(Img){
     player_object = Img;
     player_object.scaleToWidth(player_height);
     player_object.scaleToHeight(player_width);
     player_object.set({
     top: playerY,
     left: playerX
     });
     canvas.add(player_object);
     });
 }
 function block(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        random_Y = Math.floor(Math.random()*canvas.width);
        random_X = Math.floor(Math.random()*canvas.height);
        block_object.set({
        top: random_Y,
        left: random_X
        });
        canvas.add(block_object);
        });  
 }

 window.addEventListener("keydown", userKeyDown);

 function userKeyDown(e){
     console.log(e.keyCode)
    if (e.keyCode == "84"){
        block("trunk.jpg");
        console.log("User clicked on the \"T\" key.")
    }
    else if (e.shiftKey == true && e.keyCode == "107"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }
    else if (e.shiftKey == true && e.keyCode == "109"){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("block_width: ".concat(block_width));
        console.log("block_height: ".concat(block_height));
    }
    else if (e.keyCode == "68"){
        block("dark_green.png");
        console.log("User clicked on the \"D\" key.")
    }
    else if (e.keyCode == "73"){
        block("light_green.png");
        console.log("User clicked on the \"I\" key.")
    }
    else if (e.keyCode == "71"){
        block("ground.png");
        console.log("User clicked on the \"G\" key.")
    }
    else if (e.keyCode == "87"){
        block("wall.jpg");
        console.log("User clicked on the \"W\" key.")
    }
    else if (e.keyCode == "89"){
        block("yellow_wall.png");
        console.log("User clicked on the \"Y\" key.")
    }
    else if (e.keyCode == "85"){
        block("unique.png");
        console.log("User clicked on the \"U\" key.")
    }
    else if (e.keyCode == "82"){
        block("roof.jpg");
        console.log("User clicked on the \"R\" key.")
    }
    else if (e.keyCode == "67"){
        block("cloud.jpg");
        console.log("User clicked on the \"C\" key.")
    }
    else if (e.keyCode == "37"){
        left();
        console.log("User clicked on the \"left\" arrow.");
    }
    else if (e.keyCode == "38"){
        up();
        console.log("User clicked on the \"up\" arrow.");
    }
    else if (e.keyCode == "39"){
        right();
        console.log("User clicked on the \"right\" arrow.");
    }
    else if (e.keyCode == "40"){
        down();
        console.log("User clicked on the \"down\" arrow.");
    }
    else if (e.shiftKey == true && e.keyCode == "80"){
        player_width = player_width + 10;
        player_height = player_height + 10;
        console.log("player_width: " + player_width + " player_height: " + player_height);
    }
    else if (e.shiftKey == true && e.keyCode == "76"){
        player_width = player_width - 10;
        player_height = player_height - 10;
        console.log("player_width: " + player_width + " player_height: " + player_height);
    }
 }
 function up(){
     playerUpdate();
     if (playerY >= 0){
         playerY = playerY - 10;
         console.log("playerX: ".concat(playerX) + "playerY: " + playerY)
     }
     canvas.remove(player_object); 
     
 }
 function down(){
    playerUpdate();
    if (playerY <= (canvas.height - player_height)){
        playerY = playerY + 10;
        console.log("playerX: ".concat(playerX) + "playerY: " + playerY)
    }
    canvas.remove(player_object);
}
function right(){
    playerUpdate();
    if (playerX <= (canvas.width - player_width)){
        playerX = playerX + 10;
        console.log("playerX: ".concat(playerX) + "playerY: " + playerY)
    }
    canvas.remove(player_object);
}
function left(){
    playerUpdate();
    if (playerX >= 0){
        playerX = playerX - 10;
        console.log("playerX: ".concat(playerX) + "playerY: " + playerY)
    }
    canvas.remove(player_object);
}