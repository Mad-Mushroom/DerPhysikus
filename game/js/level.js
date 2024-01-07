function e2m1(){
    E_clear(0x212121);
    G_LEVEL = 201;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m1_background.png');
    E_header();
    let ltexti = "Wärme ist die Energie, die in Folge von ________________________ übertragen wird.\n\nDies kann innerhalb eines Körpers erfolgen oder zwischen zwei Körpern mit ________________________ Temperatur.";
    E_ltext(ltexti, "Temperaturunterschieden", "unterschiedlicher", "Dichte", "2", 1, 2, 520, 302, 700, 350, () => {
        e2m2();
    });
}

function e2m2(){
    E_clear(0x212121);
    G_LEVEL = 202;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m2_background.png');
    E_header();
    E_reveale("mechanische Arbeit", "Übertragung von Wärme", "Strahlung", "Zuführen von elektrischer Energie", 0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00, () => {
        e2m3();
    });
}

function e2m3(){
    E_clear(0x212121);
    G_LEVEL = 203;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m3_background.png');
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
    E_clear(0x212121);
    G_LEVEL = 204;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m4_background.png');
    E_header();
    E_fiftyfifty("Eₖᵢₙ = ½m * v²", "Eₖᵢₙ = ½m * v²", 1, 100, 700, 700, 700, () => {
        e2m5();
    })
}

function e2m5(){
    E_clear(0x212121);
    G_LEVEL = 205;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m5_background.png');
    E_header();
    let ltexti = "Potenzielle Energie ist die Fähigkeit eines Körpers, aufgrund seiner ________________________ mechanische\n\n Arbeit zu verrichten, ________________________ abzugeben oder Licht auszusenden.";
    E_ltext(ltexti, "Wärme", "Lage", "Gewicht", "Aggregatszustands", 1, 2, 620, 302, 310, 350, () => {
        e2m6();
    });
}

function e2m6(){
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m6c_background.png');
    G_LEVEL = 206;
    E_header();
    let answer1Btn = new Button("", 200, 200, 100, 300, 0xffffff, 0x313131, 69, 0);
    answer1Btn.Draw();

    let answer2Btn = new Button("", 200, 200, 100, 550, 0xffffff, 0x313131, 69, 0);
    answer2Btn.Draw();

    let answer3Btn = new Button("", 200, 200, 700, 300, 0xffffff, 0x313131, 69, 0);
    answer3Btn.Draw();

    let answer4Btn = new Button("", 200, 200, 700, 550, 0xffffff, 0x313131, 69, 0);
    answer4Btn.Draw();

    let formulaText = new Button("Eₚₒₜ = m * g * h", 200, 200, (window.innerWidth-300)/2, 400, 0xffffff, 0x313131, 20, 0);
    formulaText.Draw();

    answer1Btn.OnClick = () => {
        G_Points--;
        E_header();
        let tmp = new Button('', 200, 200, 100, 300, 0xffffff, 0xff0000);
        tmp.Draw();
    }

    answer2Btn.OnClick = () => {
        G_Points--;
        E_header();
        let tmp = new Button('', 200, 200, 100, 550, 0xffffff, 0xff0000);
        tmp.Draw();
    }

    answer3Btn.OnClick = () => {
        G_Points--;
        E_header();
        let tmp = new Button('', 200, 200, 700, 300, 0xffffff, 0xff0000);
        tmp.Draw();
    }

    answer4Btn.OnClick = () => {
        G_Points++;
        e2m7();
    }
}

function e2m7(){
    E_clear(0x212121);
    G_LEVEL = 207;
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m7_background.png');
    E_header();
    let ltexti = "Die Temperatur ist ein ________________________ für die ________________________ aller Teilchen eines Körpers.";
    E_ltext(ltexti, "Maß", "mittlere kinetische Energie", "Ton", "Wellenlänge", 1, 2, 220, 302, 550, 302, () => {
        e2m8();
    });
}

function e2m8(){
    let dones = 0;
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m8_background.png');
    G_LEVEL = 208;
    E_header();

    let uText = new PIXI.Text("Fahrenheit = 9/5Celcius + 32\nCelcuis = 5/9(Fahrenheit - 32)\nCelcius = Klevin - 273.15\nKelvin = Celcuis + 273.15\n\n\n\n25°C =",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    uText.x = (window.innerWidth-uText.width)/2;
    uText.y = 120;
    app.stage.addChild(uText);

    let fBtn = new Button("?", 50, 150, 120, 400, 0xffffff, 0x313131, 20);
    fBtn.Draw();

    let fText = new PIXI.Text(" °F",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    fText.x = 200;
    fText.y = 475;
    app.stage.addChild(fText);

    let kBtn = new Button("?", 50, 150, 720, 400, 0xffffff, 0x313131, 20);
    kBtn.Draw();

    let kText = new PIXI.Text(" K",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    kText.x = 800;
    kText.y = 475;
    app.stage.addChild(kText);

    fBtn.OnClick = () => {
        let fBtnG = new Button("77", 50, 150, 120, 400, 0xffffff, 0x00ff00, 20);
        fBtnG.Draw();
        dones++;
        if(dones >= 2){
            let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            nextButton.Draw();
            nextButton.OnClick = () => {e2m9();}
        }
    };

    kBtn.OnClick = () => {
        let kBtnG = new Button("298", 50, 150, 720, 400, 0xffffff, 0x00ff00, 20);
        kBtnG.Draw();
        dones++;
        if(dones >= 2){
            let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            nextButton.Draw();
            nextButton.OnClick = () => {e2m9();}
        }
    };
}

function e2m9(){
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m9_background.png');
    G_LEVEL = 209;
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        e2m10();
    }
}

let L210_ball;
let L210_rotSpeed = 0.1;

function e2m10(){
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10a_background.png');
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(0x212121);
        E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10b_background.png');
        E_header();
        
        let outerCirc  = new PIXI.Graphics(); outerCirc.beginFill(0xffffff);
        outerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 100);
        app.stage.addChild(outerCirc);
        let outerInnerCirc  = new PIXI.Graphics(); outerInnerCirc.beginFill(0x212121);
        outerInnerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 90);
        app.stage.addChild(outerInnerCirc);

        L210_ball  = new PIXI.Graphics(); L210_ball.beginFill(0xffffff);
        L210_ball.drawCircle(((window.innerWidth)/2)-42, ((window.innerHeight)/2)-42, 32);
        L210_ball.position.set(window.innerWidth/2, window.innerHeight/2);
        L210_ball.pivot.x = window.innerWidth/2;
        L210_ball.pivot.y = window.innerHeight/2;
        app.stage.addChild(L210_ball);

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

        eventBtn.on('pointerdown', () => {
            L210_rotSpeed += 0.01;
        });
        eventBtn.eventMode = 'static';
        G_LEVEL = 210;
    }
}

function e2m11(){
    G_LEVEL = 0;
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11a_background.png');
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(0x212121);
        E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11b_background.png');
        E_header();
    }
}

function e2m12(){
    E_clear(0x212121);
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m12a_background.png');
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(0x212121);
        E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m12b_background.png');
        E_header();
    }
}

function e2m13(){
    G_LEVEL = 213;
    E_clear(0x212121);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m13a_background.png');
    E_header();
    let pText = "Total Points: " + G_Points;
    let pointsText = new PIXI.Text(pText,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    pointsText.x = (window.innerWidth-pointsText.width)/2;
    pointsText.y = 120;
    app.stage.addChild(pointsText);

    let backBtn = new Button("Back", 200, 100, (window.innerWidth-200)/2, 600, 0xffffff, 0x313131, 20);
    backBtn.Draw();
    backBtn.OnClick = () => {
        window.location.reload();
    }
}