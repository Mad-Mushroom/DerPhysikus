function e2m1(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 201;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m1_background.png');
    E_header();
    let ltexti = "Wärme ist die Energie, die in Folge von ________________________ übertragen wird.\n\nDies kann innerhalb eines Körpers erfolgen oder zwischen zwei Körpern mit ________________________ Temperatur.";
    E_topText("Was ist Wärme?\n\nVervollständige die Definition.");
    E_ltext(ltexti, "Temperaturunterschieden", "unterschiedlicher", "Dichte", "2", 1, 2, 520, 302, 700, 350, () => {
        e2m2();
    });
}

function e2m2(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 202;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m2_background.png');
    E_header();
    E_topText("Wärme ist also ENERGIE\nund Körper haben ohnehin eine innere Energie.\n\nBei Festkörpern und Flüssigkeiten ist es noch nicht möglich\n die innere Energie anzugeben,\nABER die Änderung der inneren Energie können wir angeben.\n\nBeispiele für die Änderung der inneren Energie:");
    E_reveale("mechanische Arbeit", "Übertragung von Wärme", "Strahlung", "Zuführen von elektrischer Energie", 0x00ff00, 0x00ff00, 0x00ff00, 0x00ff00, () => {
        e2m3();
    });
}

function e2m3(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 203;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m3_background.png');
    E_topText("Was ist innere Energie?\n\nEntsprechend dem Teilchenmodell, innere Energie =\nDie Summe der kinetischen und potenziellen Energie aller Teilchen des Körpers.\n\n‚");
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
    E_clear(G_BACKGROUND);
    G_LEVEL = 204;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m4_background.png');
    E_topText("Kinetische Energie ist eine spezielle Form der mechanischen Energie\n und kennzeichnet den Zustand eines sich bewegenden Körpers.\nSomit wird sie auch als Zustandsgröße bezeichnet.\n\nDie kinetische Energie eines Körpers ist abhängig von seiner Masse und der Geschwindigkeit.\n\nWer hat wenn er unten ankommt mehr Joul/Newtonmeter kinetische Energie?", 20);
    E_header();
    E_fiftyfifty("Eₖᵢₙ = ½m * v²", "Eₖᵢₙ = ½m * v²", 1, 100, 700, 700, 700, () => {
        e2m5();
    })
}

function e2m5(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 205;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m5_background.png');
    E_header();
    E_topText("Potenzielle Energie ist eine spezielle Form mechanischer Energie.\nDie potenzielle Energie kennzeichnet den Zustand eines gehobenen oder eines verformten Körpers\nund wird deshalb wie jede Form von Energie auch als Zustandsgröße bezeichnet.\nPotenzielle Energie kann in einem Körper gespeichert sein.\nSie kann auch in andere Energieformen umgewandelt oder von einem Körper auf andere Körper übertragen werden.", 20);
    let ltexti = "Potenzielle Energie ist die Fähigkeit eines Körpers, aufgrund seiner ________________________ mechanische\n\n Arbeit zu verrichten, ________________________ abzugeben oder Licht auszusenden.";
    E_ltext(ltexti, "Wärme", "Lage", "Gewicht", "Aggregatszustands", 1, 2, 620, 302, 310, 350, () => {
        e2m6();
    });
}

function e2m6(){
    E_clear(G_BACKGROUND);
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
    E_clear(G_BACKGROUND);
    G_LEVEL = 207;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m7_background.png');
    E_topText("Das wissen wir:\nWärme ist die Energie, die durch Temperaturunterschiede übertragen wird.\n\nAber was ist Temperatur?");
    E_header();
    let ltexti = "Die Temperatur ist ein ________________________ für die ________________________ aller Teilchen eines Körpers.";
    E_ltext(ltexti, "Maß", "mittlere kinetische Energie", "Ton", "Wellenlänge", 1, 2, 220, 302, 550, 302, () => {
        e2m8();
    });
}

function e2m8(){
    let dones = 0;
    E_clear(G_BACKGROUND);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m8_background.png');
    E_topText("Es gibt auch verschiedene Temperatureinheiten:")
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
    E_clear(G_BACKGROUND);
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
    E_clear(G_BACKGROUND);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10a_background.png');
    E_topText("Wärmeleitung erfolgt stets von Stellen höherer Temperatur\nzu stellen niedrigerer Temperatur.");
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(G_BACKGROUND);
        //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10b_background.png');
        E_topText("Schaffe es durch Reibung insgesamt 60°C zu erreichen.");
        E_header();
        
        let outerCirc  = new PIXI.Graphics(); outerCirc.beginFill(0xffffff);
        outerCirc.drawCircle((window.innerWidth)/2, (window.innerHeight)/2, 100);
        app.stage.addChild(outerCirc);
        let outerInnerCirc  = new PIXI.Graphics(); outerInnerCirc.beginFill(G_BACKGROUND);
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
        let innerInnerCirc  = new PIXI.Graphics(); innerInnerCirc.beginFill(G_BACKGROUND);
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

let L211_anim = false;
let L211_ball01;
let L211_ball02;
let L211_ball03;
let L211_ball04;
let L211_ball05;
let L211_ball06;
let L211_ball07;
let L211_ball08;
let L211_elapsed = 0;
let L211_timeEl = 15;
let L211_cf = 1;

function L211_frame1(){
    L211_ball01.x = -10; L211_ball01.y = -50; // y
    L211_ball02.x = -10; L211_ball02.y = -50; // y
    L211_ball03.x = +50; L211_ball03.y = -10; // x
    L211_ball04.x = +50; L211_ball04.y = -10; // x
    L211_ball05.x = +10; L211_ball05.y = +50; // y
    L211_ball06.x = +10; L211_ball06.y = +50; // y
    L211_ball07.x = -50; L211_ball07.y = +10; // x
    L211_ball08.x = -50; L211_ball08.y = +10; // x
}

function L211_frame2(){
    L211_ball01.x = +0; L211_ball01.y = +0; // y
    L211_ball02.x = +0; L211_ball02.y = +0; // y
    L211_ball03.x = -0; L211_ball03.y = +0; // x
    L211_ball04.x = -0; L211_ball04.y = +0; // x
    L211_ball05.x = -0; L211_ball05.y = -0; // y
    L211_ball06.x = -0; L211_ball06.y = -0; // y
    L211_ball07.x = +0; L211_ball07.y = -0; // x
    L211_ball08.x = +0; L211_ball08.y = -0; // x
}

function e2m11(){
    G_LEVEL = 0;
    E_clear(0x212121);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11a_background.png');
    E_topText("Unter Wärmeströmung (Konvektion) versteht man den Energietransport\nin Verbindung mit Teilchentransport innerhalb Flüssigkeiten oder Gasen");
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(0x212121);
        //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11b_background.png');
        E_header();

        let water = new Button("", 320, 320, 40, 340, 0x0000ff, 0x0000ff, 1, 0.4);
        water.Draw();

        let dones = 0;

        L211_ball01  = new PIXI.Graphics();
        L211_ball01.beginFill(0xffffff);
        L211_ball01.drawCircle(100, 600, 40);
        app.stage.addChild(L211_ball01);
        L211_ball02  = new PIXI.Graphics();
        L211_ball02.beginFill(0xffffff);
        L211_ball02.drawCircle(100, 500, 40);
        app.stage.addChild(L211_ball02);
        L211_ball03  = new PIXI.Graphics();
        L211_ball03.beginFill(0xffffff);
        L211_ball03.drawCircle(100, 400, 40);
        app.stage.addChild(L211_ball03);
        L211_ball04  = new PIXI.Graphics();
        L211_ball04.beginFill(0xffffff);
        L211_ball04.drawCircle(200, 400, 40);
        app.stage.addChild(L211_ball04);
        L211_ball05  = new PIXI.Graphics();
        L211_ball05.beginFill(0xffffff);
        L211_ball05.drawCircle(300, 400, 40);
        app.stage.addChild(L211_ball05);
        L211_ball06  = new PIXI.Graphics();
        L211_ball06.beginFill(0xffffff);
        L211_ball06.drawCircle(300, 500, 40);
        app.stage.addChild(L211_ball06);
        L211_ball07  = new PIXI.Graphics();
        L211_ball07.beginFill(0xffffff);
        L211_ball07.drawCircle(300, 600, 40);
        app.stage.addChild(L211_ball07);
        L211_ball08  = new PIXI.Graphics();
        L211_ball08.beginFill(0xffffff);
        L211_ball08.drawCircle(200, 600, 40);
        app.stage.addChild(L211_ball08);

        let animBtn = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);

        let yellow1Btn = new Button("", 50, 50, 700, 200, 0x000000, 0xffff00, 1);
        yellow1Btn.Draw();
        yellow1Btn.OnClick = () => {
            L211_ball01.tint = 0xffff00; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 700, 200, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let yellow2Btn = new Button("", 50, 50, 800, 200, 0x000000, 0xffff00, 1);
        yellow2Btn.Draw();
        yellow2Btn.OnClick = () => {
            L211_ball02.tint = 0xffff00; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 800, 200, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let red1Btn = new Button("", 50, 50, 700, 300, 0x000000, 0xff0000, 1);
        red1Btn.Draw();
        red1Btn.OnClick = () => {
            L211_ball03.tint = 0xff0000; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 700, 300, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let red2Btn = new Button("", 50, 50, 800, 300, 0x000000, 0xff0000, 1);
        red2Btn.Draw();
        red2Btn.OnClick = () => {
            L211_ball04.tint = 0xff0000; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 800, 300, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let orange1Btn = new Button("", 50, 50, 700, 400, 0x000000, 0xff6e00, 1);
        orange1Btn.Draw();
        orange1Btn.OnClick = () => {
            L211_ball05.tint = 0xff6e00; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 700, 400, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let orange2Btn = new Button("", 50, 50, 800, 400, 0x000000, 0xff6e00, 1);
        orange2Btn.Draw();
        orange2Btn.OnClick = () => {
            L211_ball06.tint = 0xff6e00; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 800, 400, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let blue1Btn = new Button("", 50, 50, 700, 500, 0x000000, 0x0000ff, 1);
        blue1Btn.Draw();
        blue1Btn.OnClick = () => {
            L211_ball07.tint = 0x0000ff; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 700, 500, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
        let blue2Btn = new Button("", 50, 50, 800, 500, 0x000000, 0x0000ff, 1);
        blue2Btn.Draw();
        blue2Btn.OnClick = () => {
            L211_ball08.tint = 0x0000ff; dones++;
            if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
            let tmpBtn = new Button("", 50, 50, 800, 500, 0x000000, G_BACKGROUND, 1);
            tmpBtn.Draw();
        }
    
        animBtn.OnClick = () => {
            
        };

        G_LEVEL = 211;
    }
}

let L212_rect;
let L212_speed = 0;
let L212_count = 0;

function e2m12(){
    E_clear(G_BACKGROUND);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m12a_background.png');
    E_topText("Alle Körper emittieren aufgerund ihrer Temperatur Wärmestrahlung.\nZugleich absobieren sie auftreffende Wärmestrahlung.")
    E_header();
    let nextButton = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(G_BACKGROUND);
        //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m12b_background.png');
        E_header();

        L212_rect = new PIXI.Graphics();
        L212_rect.beginFill(0xff0000);
        L212_rect.drawRect(300, 400, 100, 100);
        app.stage.addChild(L212_rect);

        let eventBtn = new Button("", 100, 200, 300, 300, 0x313131, 0x313131, 20, 0.5);
        eventBtn.Draw();

        eventBtn.OnClick = () => {
            L212_speed = -5;
            L212_count++;
            if(L212_count >= 69) e2m13();
        }

        G_LEVEL = 212;
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