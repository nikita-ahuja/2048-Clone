function Game() {
  this.boardStart = ([2, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 2, 0, 2, 0,]);
  // _.shuffle
  this.newBoard = [this.boardStart.slice(0,4), this.boardStart.slice(4,8), this.boardStart.slice(8,12), this.boardStart.slice(12,16)];
};

Game.prototype.render = function() {
  $(".cell").each(function(i) {
    $(this).text(game.boardStart[i])
  });
};

Game.prototype.changeColor = function() {
  $(".cell").each(function(i) {
    if ($(this).text() == "0") {
        $(this).css("background", "#fadadd")
      } else if ($(this).text() == "2") {
        $(this).css("background", "#eea2ad")
      } else if ($(this).text() == "4") {
        $(this).css("background", "#cd8c95")
      } else {
        $(this).css("background", " #8b5f65")
      };
    });
  };

Game.prototype.moveLeft = function(){
    $(".cell").each(function(i) {
    var id = parseInt(this.id)
    var cellLeft = $(this).parent().children()[id-1]
    var cellRight = $(this).parent().children()[id+1]
    var cellText = $(this).text()
    var cell = $(this)

     if (($(this).text() != "0") && !(this.classList.contains("leftmost")) && (cellLeft.innerText == cellText || cellLeft.innerText == 0)) {
      if (cellLeft.innerText === "0") {
        cellLeft.innerText = cellText
        cell.text("0")
      } else if (cellLeft.innerText === cellText) {
        cellLeft.innerText = parseInt(cellText) * 2
        cell.text("0")
      };
    };
  });
};


Game.prototype.moveRight = function(){
    $(".cell").each(function(i) {
    var id = parseInt(this.id)
    var cellLeft = $(this).parent().children()[id-1]
    var cellRight = $(this).parent().children()[id+1]
    var cellText = $(this).text()
    var cell = $(this)

     if (($(this).text() != "0") && !(this.classList.contains("rightmost")) && (cellRight.innerText == cellText || cellRight.innerText == 0)) {
      if (cellRight.innerText === "0") {
        cellRight.innerText = cellText
        cell.text("0")
      } else if (cellRight.innerText === cellText) {
        cellRight.innerText = parseInt(cellText) * 2
        cell.text("0")
      };
    };
  });
};

Game.prototype.moveUp = function() {
  $(".cell").each(function(i) {
    var id = parseInt(this.id)
    var cellAbove = $(this).parent().children()[id-4]
    var cellBelow = $(this).parent().children()[id+4]
    var cellText = $(this).text()
    var cell = $(this)

    if (($(this).text() != "0") && !(this.classList.contains("row1")) && (cellAbove.innerText == cellText || cellAbove.innerText == 0)) {
      if (cellAbove.innerText === "0") {
        cellAbove.innerText = cellText
        cell.text("0")
      } else if (cellAbove.innerText === cellText) {
        cellAbove.innerText = parseInt(cellText) * 2
        cell.text("0")
      };
    };
  });
};

Game.prototype.moveDown = function() {
  $($(".cell").get().reverse()).each(function(i) {
    var id = parseInt(this.id)
    var cellAbove = $(this).parent().children()[id-4]
    var cellBelow = $(this).parent().children()[id+4]
    var cellText = $(this).text()
    var cell = $(this)
    // debugger

    if (($(this).text() != "0") && !(this.classList.contains("row4")) && (cellBelow.innerText == cellText || cellBelow.innerText == 0)) {
      if (cellBelow.innerText === "0") {
        cellBelow.innerText = cellText
        cell.text("0")
      } else if (cellBelow.innerText === cellText) {
        cellBelow.innerText = parseInt(cellText) * 2
        cell.text("0")
      };
    };
  });
};


Mousetrap.bind('up', function() {
  game.moveUp()
  game.changeColor()
});

Mousetrap.bind('down', function() {
  game.moveDown()
  game.changeColor()
});

Mousetrap.bind('left', function() {
  game.moveLeft()
  game.changeColor()
});

Mousetrap.bind('right', function() {
  game.moveRight()
  game.changeColor()
});
