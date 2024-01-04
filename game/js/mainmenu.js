function MainMenu(){
    vText = new PIXI.Text(G_VERSION,{fontFamily : 'Arial', fontSize: 10, fill : 0xffffff, align : 'center'});
    vText.x = 0;
    vText.y = window.innerHeight - 20;
    app.stage.addChild(vText);
    let NewGameBtn = new Button("New Game", 200, 100, (window.innerWidth-200)/2, (window.innerHeight+100)/2, 0xffffff, 0x000000, 20);
    NewGameBtn.Draw();

    NewGameBtn.OnClick = () => {e2m1();};
}