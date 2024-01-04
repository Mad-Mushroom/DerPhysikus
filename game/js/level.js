function e2m1(){
    E_clear(0x212121);
    E_header();
    let bkgSprite = PIXI.Sprite.from("./res/e2m1_background.png");
    let ltexti = "Wärme ist die Energie, die in Folge von ________________________ übertragen wird.\n\nDies kann innerhalb eines Körpers erfolgen oder zwischen zwei Körpern mit ________________________ Temperatur.";
    E_ltext(ltexti, "Temperaturunterschieden", "unterschiedlicher", "Dichte", "2", 1, 2, 520, 302, 700, 350, () => {
        e2m2();
    });
}

function e2m2(){
    E_clear(0x212121);
    E_header();
    E_reveale("mechanische Arbeit", "Übertragung von Wärme", "Strahlung", "Zuführen von elektrischer Energie", 0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00, () => {
        e2m3();
    });
}

function e2m3(){
    E_clear(0x212121);
    E_header();

    let tmpp = 0;

    let circ  = new PIXI.Graphics(); circ.beginFill(0xffffff);
    circ.drawCircle((window.innerWidth)/2, 650, 100);
    app.stage.addChild(circ);

    eventBtn = new Button("a", 200, 200, ((window.innerWidth)/2)-100, 550, 0xffffff, 0x313131, 20, 0);
    eventBtn.Draw();

    eventBtn.OnClick = () => {
        let tmpTxt = new PIXI.Text("Eₖᵢₙ",{fontFamily : 'Arial', fontSize: 15, fill : 0x1008e0, align : 'center'});
        tmpTxt.x = E_random(((window.innerWidth)/2)-60, ((window.innerWidth)/2)+60);;
        tmpTxt.y = E_random(590, 710);;
        app.stage.addChild(tmpTxt);
        let tmp2Txt = new PIXI.Text("Eₚₒₜ",{fontFamily : 'Arial', fontSize: 15, fill : 0xea8125, align : 'center'});
        tmp2Txt.x = E_random(((window.innerWidth)/2)-60, ((window.innerWidth)/2)+60);
        tmp2Txt.y = E_random(590, 710);
        app.stage.addChild(tmp2Txt);
        if(tmpp == 0){
            let tmp2 = new Button("=>", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = () => {
                e2m4();
            };
        }
        tmpp++;
    }
}

function e2m4(){

}