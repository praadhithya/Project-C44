class Game{
    constructor(){
        
    }
    getState()
{ var gameStateRef = database.ref('gamestate');
 gameStateRef.on("value",function(data)
 { gamestate = data.val();}) 
}

update(state)
{ database.ref('/').update({ gamestate: state }); 
}

async start()
{ if(gamestate === 0)
    { player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
       if(playerCountRef.exists()){
          playercount = playerCountRef.val();
         player.getCount(); 
         console.log(playercount);
        }
    form = new Form();
    form.display();
     }
     ground1 = createSprite(100,100,1000,20);
     ground1.addImage("ground",groundImg);
     ground1.x = ground1.width /2;
     ground1.visible = false;

     ground2 = createSprite(100,500,1000,20);
     ground2.addImage("ground",groundImg);
     ground2.x = ground2.width /2;
     ground2.visible = false;
     

     invisibleGround1 = createSprite(100,110,1000,10);
     invisibleGround1.visible = false;

     invisibleGround2 = createSprite(100,520,1000,10);
     invisibleGround2.visible = false;

     trex1 = createSprite (100,300);
     trex1.addAnimation("running",trexImg)
     trex1.visible = false;
     trex2 = createSprite (100,600);
     trex2.addAnimation("running",trexImg)
     trex2.visible = false;
     trexs = [trex1,trex2]
    }

    play(){ 
        form.hide();
           Player.getPlayerInfo();
       
            if(allPlayers !== undefined){ 
             background(180)
             trex1.visible = true;
             trex2.visible = true;
             ground1.visible = true;
             ground2.visible = true;
             var index = 0;
             var x = 50 ;
             
             var y;
              for(var plr in allPlayers){
               index = index + 1 ; x = x + 270;
                y = displayHeight - allPlayers[plr].distance;
                ground1.velocityX = -(6 + 3*score/100);

                 trexs[index-1].x = x;
                // trexs[index-1].y = y;
                   if (index === player.index){
                            stroke(10)
                            fill("red")
                            //ellipse(x,y,65,65)
                            trexs[index - 1].shapeColor = "red";
                            if(keyDown("space")){
                                trexs[index-1].velocityY = -10
                            }
                            //add gravaty

                            //reset ground

                            
                         // camera.position.x = displayWidth/2;
                         //  camera.position.y = cars[index-1].y;
                          } 
                         }
                        }
       
    //    if(keyIsDown(UP_ARROW) && player.index !== null)
    //    { player.distance +=50;
    //      player.update(); 
    //    }
    //    if (player.distance > 5300){
    //      gameState = 2
    //      gameState = 2 
    //      player.rank += 1
    //      Player.updateRank(player.rank) 
    //      alert( player.name + "reached the finish line successfully!!!! ur rank is :: " + player.rank);
    //    }
       drawSprites()
    }
}