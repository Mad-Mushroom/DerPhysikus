function e2m6(){
    G_LEVEL = 26;
    let background = new PIXI.Graphics();
    background.beginFill(0x212121);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);

    water = new PIXI.Graphics();
    water.beginFill(0x0000ff);
    water.drawRect(((window.innerWidth-400)/2), ((window.innerHeight-200)/2), 400, 200);
    water.alpha = 0.4;
    app.stage.addChild(water);
}