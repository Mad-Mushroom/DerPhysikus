function e2m2(){
    G_LEVEL = 22;
    let background = new PIXI.Graphics();
    background.beginFill(0x212121);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);
    let fTextObj = new PIXI.Text("QUEST: Versuche genau 2,250 Joule an (kinetische) Energie zu bekommen.\nZur Auswahl stehen dir folgende Möglichkeiten (Formel: Eₖᵢₙ = ½m * v²):",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    fTextObj.x = 10;
    fTextObj.y = 100;
    app.stage.addChild(fTextObj);

    let fTextBtn = new Button("m = 20g; v = 10cm/s;", 300, 100, 100, 400, 0xffffff, 0x313131, 20);
    fTextBtn.Draw();

    let dTextBtn = new Button("m = 20g; v = 5cm/s;", 300, 100, 100, 550, 0xffffff, 0x313131, 20);
    dTextBtn.Draw();

    let aTextBtn = new Button("m = 20g; v = 20cm/s;", 300, 100, 700, 400, 0xffffff, 0x313131, 20);
    aTextBtn.Draw();

    let sTextBtn = new Button("m = 20g; v = 15cm/s;", 300, 100, 700, 550, 0xffffff, 0x313131, 20);
    sTextBtn.Draw();

    sTextBtn.OnClick = () => {
        e2m3();
    };
}