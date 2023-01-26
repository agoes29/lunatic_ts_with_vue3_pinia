// Tween Animation
function init() {
  var stage = new createjs.Stage("demoCanvas");
  var circle = new createjs.Shape();
  var circle_magenta = new createjs.Shape();
  var circle_dark = new createjs.Shape();
  var circle_green = new createjs.Shape();
  var circle_blue = new createjs.Shape();
  circle.graphics.beginFill(createjs.Graphics.getRGB(249, 50, 44)).drawCircle(0, 0, 100);
  circle_magenta.graphics.beginFill(createjs.Graphics.getRGB(214, 51, 132)).drawCircle(0, 0, 50);
  circle_dark.graphics.beginFill(createjs.Graphics.getRGB(52, 58, 64)).drawCircle(0, 0, 60);
  circle_green.graphics.beginFill(createjs.Graphics.getRGB(25, 135, 84)).drawCircle(0, 0, 40);
  circle_blue.graphics.beginFill(createjs.Graphics.getRGB(13, 110, 253)).drawCircle(0, 0, 30);
  circle.x = 100;
  circle.y = 150;
  circle_magenta.x = 100;
  circle_magenta.y = 100;
  circle_dark.x = 300;
  circle_dark.y = 350;
  circle_green.x = 300;
  circle_green.y = 400;
  circle_blue.x = 300;
  circle_blue.y = 400;
  stage.addChild(circle);
  stage.addChild(circle_magenta);
  stage.addChild(circle_dark);
  stage.addChild(circle_green);
  stage.addChild(circle_blue);
  createjs.Tween.get(circle, { loop: true })
    .to({ y: 350 }, 1000, createjs.Ease.getPowInOut(2))
    .to({ y: 150 }, 800, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(circle_magenta, { loop: true })
    .to({ x: 450 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 100 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 100 }, 100)
    .to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(circle_dark, { loop: true })
    .to({ y: 200 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 100 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 100 }, 100)
    .to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
    .to({ y: 300 }, 800, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(circle_green, { loop: true })
    .to({ y: 100 }, 1000, createjs.Ease.getPowInOut(2))
    .to({ y: 400 }, 800, createjs.Ease.getPowInOut(2))
    ;
  createjs.Tween.get(circle_blue, { loop: true })
    .to({ x: 150 }, 1000, createjs.Ease.getPowInOut(2))
    .to({ x: 300 }, 800, createjs.Ease.getPowInOut(2))
    ;
  createjs.Ticker.framerate = 60;
  createjs.Ticker.addEventListener("tick", stage);
}
console.log(init())