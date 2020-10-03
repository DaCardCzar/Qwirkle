var w = document.getElementById('tileBoard'),
    board = w.getContext('2d'),
    x = document.getElementById('gameBoard'),
    gameBoard = x.getContext('2d'),
    y = document.getElementById('p1Hand'),
    p1Hand = y.getContext('2d'),
    z = document.getElementById('p2Hand'),
    p2Hand = z.getContext('2d'),
    b1 = document.getElementById('drawTileP1'),
    b2 = document.getElementById('drawTileP2'),
    boardElemLeft = x.offsetLeft,
    boardElemTop = x.offsetTop,
    elemLeft = z.offsetLeft,
    elemTop = z.offsetTop,
    dataURL,
    pickedTile = [],
    occupiedTiles = [],
    setOfTiles = [],
    bagOfTiles = [],
    p1HandTiles = [],
    p2HandTiles = [];

function doFirst(){
  //New Images.
  var box = new Image(),
      redSquare = new Image(),
      blueSquare = new Image(),
      greenSquare = new Image(),
      orangeSquare = new Image(),
      purpleSquare = new Image(),
      blueFourStar = new Image();
  setOfTiles = [redSquare, blueSquare, greenSquare, orangeSquare, purpleSquare, blueFourStar];
  //Add 3 of each Tile to Bag
  bagOfTiles = bagOfTiles.concat(setOfTiles);
  bagOfTiles = bagOfTiles.concat(setOfTiles);
  bagOfTiles = bagOfTiles.concat(setOfTiles);
  p1HandTiles.push(box, box, box, box, box, box);
  p2HandTiles.push(box, box, box, box, box, box);
  pickedTile.push(box);
  //Shuffle Bag.
  var currentIndex = bagOfTiles.length, temporaryValue, RandomIndex;
  while ( 0!== currentIndex){
    //pick random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    //swap with current element
    temporaryValue = bagOfTiles[currentIndex];
    bagOfTiles[currentIndex] = bagOfTiles[randomIndex];
    bagOfTiles[randomIndex] = temporaryValue;
  }
  //Add Sources for images of tiles.
  box.src="https://i.ibb.co/kJzXnhG/Box.png";
  redSquare.src="https://i.ibb.co/qRRZb0C/Red-Square.png";
  blueSquare.src='https://i.ibb.co/BGPFLWD/Blue-Square.png';
  greenSquare.src='https://i.ibb.co/J7HsVft/Green-Square.png';
  orangeSquare.src='https://i.ibb.co/c2hZ24x/Orange-Square.png';
  purpleSquare.src='https://i.ibb.co/X7KYng9/Purple-Square.png';
  blueFourStar.src='https://i.ibb.co/WvyfKP0/Blue-Four-Star.png';
  /* bagOfTiles.push(redSquare, blueSquare, greenSquare, orangeSquare, purpleSquare, blueFourStar);*/
  p1HandTiles.push(box, redSquare);
  // When Box loads make board of boxes. + hand of boxes.
  box.addEventListener("load", function(){
    //scale board size + tile size. if changed need to change
    //matching canvas widths too.
    board.scale(1.6, 1.6);
    gameBoard.scale(1.6, 1.6);
    //draw board tiles
    for(i = 0; i<14; i++){
      for(j = 0; j<14; j++){
        board.drawImage(box, i*15, j*15);
      }
    }
    //Hand scaling.
    p1Hand.scale(2, 2);
    p2Hand.scale(2, 2);
    //Draw Hand blank tiles.
    for(i = 0; i<6; i++){
      p1Hand.drawImage(box, i*15, 0);
      p2Hand.drawImage(box, i*15, 0);
    }
  }, false);
  //On gameBoard click. 
  x.addEventListener('click', function(){
    var boardXVal = event.pageX - boardElemLeft - 7,
        boardYVal = event.pageY - boardElemTop - 7;
    if(pickedTile[0] !== box && !occupiedTiles.includes((Math.floor(boardXVal/24) * 15).toString()+(Math.floor(boardYVal/24)*15).toString())){
      console.log((Math.floor(boardXVal/24) * 15)* (Math.floor(boardYVal/24)*15));
      gameBoard.drawImage(pickedTile[0], Math.floor(boardXVal/24) * 15, Math.floor(boardYVal/24)*15);
      occupiedTiles.push((Math.floor(boardXVal/24) * 15).toString()+(Math.floor(boardYVal/24)*15).toString());
      pickedTile[0] = box;
      console.log(occupiedTiles)
    }
    // do same as z.event with x and y values. 
  }, false);
  //On p2Hand click. 
  z.addEventListener('click', function(event){
    var xVal = event.pageX - elemLeft - 7,
        yVal = event.pageY- elemTop - 7;
    //console.log(xVal,  event.pageX, elemLeft, yVal);
    if(xVal <= 30){
      console.log(p2HandTiles[0], xVal, yVal);
      //If tile is empty pick up tile and replace with empty.
      if(p2HandTiles[0] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[0];
        p2HandTiles[0] = box;
      }
      p2Hand.drawImage(p2HandTiles[0],  0, 0);
    }else if(xVal>31 && xVal<=60){
      console.log(p2HandTiles[1], xVal, yVal);
      if(p2HandTiles[1] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[1];
        p2HandTiles[1] = box;
      }
      p2Hand.drawImage(p2HandTiles[1],  15, 0)
    }else if(xVal>=61 && xVal<=90){
      if(p2HandTiles[2] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[2];
        p2HandTiles[2] = box;
      }
      p2Hand.drawImage(p2HandTiles[2],  30, 0)
    }else if(xVal>=91 && xVal<120){
      if(p2HandTiles[3] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[3];
        p2HandTiles[3] = box;
      }
      p2Hand.drawImage(p2HandTiles[3],  45, 0)
    }else if(xVal>=121 && xVal<150){
      if(p2HandTiles[4] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[4];
        p2HandTiles[4] = box;
      }
      p2Hand.drawImage(p2HandTiles[4],  60, 0)
    }else if(xVal>=151){
      if(p2HandTiles[5] !== box && pickedTile[0] == box){
        pickedTile[0] = p2HandTiles[5];
        p2HandTiles[5] = box;
      }
      p2Hand.drawImage(p2HandTiles[5],  75, 0)
    }
  }, false);
  //Draw Tile Button pressed p2
  b2.addEventListener('click', function(){
    for (i = 0; i<6; i++){
      if(p2HandTiles[i] == box){
        var tempTile = bagOfTiles.shift();
        p2HandTiles[i] = tempTile;
      }
    }
  }, false);
  //On p1HandClick
  y.addEventListener('click', function(event){
    var xVal = event.pageX - elemLeft - 7,
        yVal = event.pageY- elemTop - 7;
    //console.log(xVal,  event.pageX, elemLeft, yVal);
    if(xVal <= 30){
      console.log(p1HandTiles[0], xVal, yVal);
      //If tile is empty pick up tile and replace with empty.
      if(p1HandTiles[0] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[0];
        p1HandTiles[0] = box;
      }
      p1Hand.drawImage(p1HandTiles[0],  0, 0);
    }else if(xVal>31 && xVal<=60){
      console.log(p1HandTiles[1], xVal, yVal);
      if(p1HandTiles[1] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[1];
        p1HandTiles[1] = box;
      }
      p1Hand.drawImage(p1HandTiles[1],  15, 0)
    }else if(xVal>=61 && xVal<=90){
      if(p1HandTiles[2] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[2];
        p1HandTiles[2] = box;
      }
      p1Hand.drawImage(p1HandTiles[2],  30, 0)
    }else if(xVal>=91 && xVal<120){
      if(p1HandTiles[3] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[3];
        p1HandTiles[3] = box;
      }
      p1Hand.drawImage(p1HandTiles[3],  45, 0)
    }else if(xVal>=121 && xVal<150){
      if(p1HandTiles[4] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[4];
        p1HandTiles[4] = box;
      }
      p1Hand.drawImage(p1HandTiles[4],  60, 0)
    }else if(xVal>=151){
      if(p1HandTiles[5] !== box && pickedTile[0] == box){
        pickedTile[0] = p1HandTiles[5];
        p1HandTiles[5] = box;
      }
      p1Hand.drawImage(p1HandTiles[5],  75, 0)
    }
  }, false);
  //Draw Tile Button pressed p1
  b1.addEventListener('click', function(){
    for (i = 0; i<6; i++){
      if(p1HandTiles[i] == box){
        var tempTile = bagOfTiles.shift();
        p1HandTiles[i] = tempTile;
      }
    }
  }, false);
  
// Fill Hand With Tiles from bagOfTiles.
  for (i = 0; i<6; i++){
    if(p2HandTiles[i] == box){
      var tempTile = bagOfTiles.shift();
      p2HandTiles[i] = tempTile;
    }
    if(p1HandTiles[i] == box){
      var tempTile = bagOfTiles.shift();
      p1HandTiles[i] = tempTile;
    }
  }
  //Update Screen on mouse movement.
  window.addEventListener('mousemove', function(){
    // Draw initial hands on screen.
    for (i = 0; i < 6; i++){
      if(setOfTiles.includes(p1HandTiles[i])){
        p1Hand.drawImage(p1HandTiles[i],  i*15, 0);
      }
      if(setOfTiles.includes(p2HandTiles[i])){
        p2Hand.drawImage(p2HandTiles[i],  i*15, 0);
      }
      //console.log(p2HandTiles[0]);
    }
  }, false);
}
window.addEventListener("load", doFirst, false);