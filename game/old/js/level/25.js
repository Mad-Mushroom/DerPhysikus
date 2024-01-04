let L25_rotSpeed = 0.01;
let L25_ball;
let L25_text;

function e2m5(){
    let background = new PIXI.Graphics();
    background.beginFill(0x212121);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);

    L25_text = new Button("Unten siehst du ein Kugellager (mit nur einer Kugel '-').\nDu musst es nun so schnell drehen, dass es 60°C erreicht.", 600, 100, 10, 100, 0xffffff, 0x212121, 18);
    L25_text.Draw();

    let outerCirc  = new PIXI.Graphics(); outerCirc.beginFill(0xffffff);
    outerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 100);
    app.stage.addChild(outerCirc);
    let outerInnerCirc  = new PIXI.Graphics(); outerInnerCirc.beginFill(0x212121);
    outerInnerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 90);
    app.stage.addChild(outerInnerCirc);

    L25_ball  = new PIXI.Graphics(); L25_ball.beginFill(0xffffff);
    L25_ball.drawCircle(((window.innerWidth)/2)-42, ((window.innerHeight)/2)-42, 32);
    L25_ball.position.set(window.innerWidth/2, window.innerHeight/2);
    L25_ball.pivot.x = window.innerWidth/2;
    L25_ball.pivot.y = window.innerHeight/2;
    app.stage.addChild(L25_ball);

    let innerCirc  = new PIXI.Graphics(); innerCirc.beginFill(0xffffff);
    innerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 30);
    app.stage.addChild(innerCirc);
    let innerInnerCirc  = new PIXI.Graphics(); innerInnerCirc.beginFill(0x212121);
    innerInnerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 20);
    app.stage.addChild(innerInnerCirc);

    eventBtn = new PIXI.Graphics();
    eventBtn.beginFill(0xffffff);
    eventBtn.drawRect(((window.innerWidth)/2)-100, ((window.innerHeight)/2)-100, 200, 200);
    eventBtn.alpha = 0;
    app.stage.addChild(eventBtn);

    eventBtn.on('pointerdown', (e) => {
        L25_rotSpeed += 0.01;
    });
    eventBtn.eventMode = 'static';
    G_LEVEL = 25;
}