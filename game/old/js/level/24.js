function e2m4(){
    G_LEVEL = 24;
    let background = new PIXI.Graphics();
    background.beginFill(0x212121);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);
    let fTextObj = new PIXI.Text("QUEST: Versuche genau 1,962 Joule an (innerer) Energie zu bekommen.\nZur Auswahl stehen dir folgende Möglichkeiten (Formel: Eᵢₙₙ = m * g * h):",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    fTextObj.x = 10;
    fTextObj.y = 100;
    app.stage.addChild(fTextObj);

    let fTextBtn = new Button("m = 20g; g = 9.81N/kg; h = 10cm;", 300, 100, 100, 400, 0xffffff, 0x313131, 18);
    fTextBtn.Draw();

    let dTextBtn = new Button("m = 50g; g = 9.81N/kg; h = 20cm;", 300, 100, 100, 550, 0xffffff, 0x313131, 18);
    dTextBtn.Draw();

    let aTextBtn = new Button("m = 10g; g = 9.81N/kg; h = 45cm;", 300, 100, 700, 400, 0xffffff, 0x313131, 18);
    aTextBtn.Draw();

    let sTextBtn = new Button("m = 150g; g = 9.81N/kg; h = 5cm;", 300, 100, 700, 550, 0xffffff, 0x313131, 18);
    sTextBtn.Draw();

    fTextBtn.OnClick = () => {
        e2m5();
    };
}