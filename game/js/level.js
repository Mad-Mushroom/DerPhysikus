function e1m1(){
    G_cacheAssets();
    E_clear(G_BACKGROUND);
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg01_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    G_LEVEL = 101;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Die Mechanik\n\n\nHier gibts 4 Themenbereiche der Mechanik:")
    E_reveale("Mechanische Arbeit", "Mechanische Energie E", "Mechanische Leistung P", "Wirkungsgrad η", 0x313131, 0x313131, 0x313131, 0x313131, () => {
        e1m2();
    })
}

function e1m2(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 102;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Mechanische Arbeit W\n\n\nDer Betrag von verrichteter Arbeit W ist auch der Betrag,\num den sich Energie eines Systems bei einem Vorgang ändert.\n\nTypen der Arbeit sind z.B.:");
    E_reveale("Hubarbeit → pot. Energie", "Beschleunigungsarbeit\n→ kin. Energie", "Spannarbeit → Spannenergie", "Reibungsarbeit → innere Energie", 0x313131, 0x313131, 0x313131, 0x313131, () => {
        e1m3();
    });
}

function e1m3(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 103;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Hubarbeit\n\n\nWʜᴜʙ = Hubarbeit =\n\ndie potenzielle Energie des Körpers nach dem Hubvorgang\nminus potenzielle Energie des Körpers vor dem Hubvorgang,\nes gilt auch die Kraft Fɢ zum Anheben (m*g)\nmultipliziert mit der Strecke h, die der Körper zurücklegt.\n\nEᴘᴏᴛ nach - Eᴘᴏᴛ vor = F(m*g) * h");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 600, 300, 50, 480, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_continue(() => {
        e1m4();
    });
}

function e1m4(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 104;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Physikus will eine Kiste von 85kg Masse vom Boden auf einen Tisch\n\nvon 80cm Höhe heben.");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 550, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_quiz3("1) Welche mechanische Arbeit verrichtet Physikus?", "Hub", "Reib", "Beschleunigungs", 1, () => {
        G_Points++;
        E_clear(G_BACKGROUND);
        let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 550, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
        E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
        E_header();
        E_topText("Physikus will eine Kiste von 85kg Masse vom Boden auf einen Tisch\n\nvon 80cm Höhe heben.");
        E_quiz3("2) Um die verrichtete Arbeit zu berechnen,\nmusst du zuvor die Gewichtskraft Fɢ kennen: Fɢ = Masse * Ortsfaktor", "833.85kN", "8.3kN", "0.83kN", 3, () => {
            G_Points++;
            E_clear(G_BACKGROUND);
            let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 550, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
            E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
            E_header();
            E_topText("Physikus will eine Kiste von 85kg Masse vom Boden auf einen Tisch\n\nvon 80cm Höhe heben.");
            E_quiz3("3) Berechne die verrichtete Arbeit W:", "Wʜᴜʙ = 0.66kJ", "Wʜᴜʙ = 6.66kJ", "Wʜᴜʙ = 66kJ", 1, () => {
                e1m5();
            })
        })
    })
}

function e1m5(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 105;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Beschleunigungsarbeit\n\nist die Differenz der kinetischer Energie des Körpers\nnach dem Beschleunigungsvorgangs mit der am Anfang.\n\nEkin nach - Ekin vor\noder bei konstanter Kraft Fs * s (zurückgelegte Strecke)\n\nWann kannst du Fs * s nutzen?");
    E_quiz3("", "Physikus bewegt sich reibungsfrei,\n bei konstanter Geschwindigkeit\nauf der Skatebahn waagerecht.", "Physikus wird immer schneller\nals er reibungsfrei\ndie schräge Skatebahn hinabfährt", "Physikus fährt die Halfpipe mit\nReibung rauf und runter", 1, () => {
        G_Points++;
        e1m6();
    })
}

function e1m6(){
    G_LEVEL = 106;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Spannarbeit\n\nist die Differenz von Esᴘᴀɴɴ nach - Esᴘᴀɴɴ vor, doch ACHTUNG:\nder Betrag der Kraft F während des Spannens ändert sich längs des Wegs,\ndann berechnet man die Fläche unter der Weg-Kraft-Kurve (Dreiecksfläche).\n\n\nBeispiel Gummiband:");
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m6_anim.png", 200, 300, 440, 400, 200, 300, 0.1);
    anim.Draw();
    E_continue(() => {e1m7();});
}

function e1m7(){
    G_LEVEL = 107;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 650, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_topText("Spanne das Gummiband auf 16J\n\nindem du darauf klickst.");
    let jText = new PIXI.Text("16 Joule",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'left'});
    jText.x = 480;
    jText.y = 280;
    let clicks = 0;
    let feder = new PIXI.Graphics();
    feder.beginFill(0xffffff);
    feder.drawRect((1080-20)/2, (810-200)/2, 30, 200);
    app.stage.addChild(feder);
    feder.on('pointerdown', (event) => {
        feder.width--;
        feder.height++;
        feder.x += 15;
        clicks++;
        if(clicks >= 10){
            app.stage.addChild(jText);
            E_continue(() => {e1m8();});
        }
    });
    feder.eventMode = 'static';
}

function e1m8(){
    G_LEVEL = 108;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Reibungsarbeit\n= Eᴘᴏᴛ nach - Eᴘᴏᴛ vor\n\nFällt Physikus mit konstanter Geschwindigkeit,\nso ist Fɢ = Freibung\n\nBeispiel Fallschirm:");
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m8_anim.png", 200, 200, 440, 400, 200, 200, 0.5);
    anim.Draw();
    E_continue(() => {e1m9();});
}

function e1m9(){
    G_LEVEL = 109;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 550, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_quiz3("Wie viel Reibungsarbeit hat Physikus verrichtet,\nwenn er auf einer ebenen Fläche (μ = 0.090) 300m gezogen wurde?", "405kJ", "40.5kJ", "4.05J", 2, () => {
        G_Points++;
        e1m10();
    })
}

function e1m10(){
    G_LEVEL = 110;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Energie E\n\nist gespeicherte Arbeit.\nWird also an einem Körper Arbeit verrichtet,\ndann wird Energie übertragen.\n\nBeispiel:");
    let txt1 = new PlainText("max. potenzielle Energie", 100, 50, 650, 450, 0xffffff, 0x0, 20); txt1.Draw();
    let txt2 = new PlainText("potenzielle & kinetische Energie", 100, 50, 650, 550, 0xffffff, 0x0, 20); txt2.Draw();
    let txt3 = new PlainText("Spannenergie", 100, 50, 650, 650, 0xffffff, 0x0, 20); txt3.Draw();
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m10_anim.png", 200, 300, 440, 400, 240, 360, 0.1);
    anim.Draw();
    E_continue(() => {e1m11();});
}

function e1m11(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    G_LEVEL = 111;
    E_header();
    E_topText("Ordne den verschiedenen mechanischen Energieformen Beispiele zu:");

    let selection = 0;
    let dones = 0;

    let e1Btn = new Button("kinetische Energie", 300, 50, 50, 200, 0xffffff, 0x212121, 20);
    e1Btn.Draw();
    e1Btn.OnClick = () => {selection = 1;};
    let e2Btn = new Button("Spannenergie", 300, 50, 50, 300, 0xffffff, 0x212121, 20);
    e2Btn.Draw();
    e2Btn.OnClick = () => {selection = 2;};
    let e3Btn = new Button("innere Energie", 300, 50, 50, 400, 0xffffff, 0x212121, 20);
    e3Btn.Draw();
    e3Btn.OnClick = () => {selection = 3;};
    let e4Btn = new Button("elektrische Energie", 300, 50, 50, 500, 0xffffff, 0x212121, 20);
    e4Btn.Draw();
    e4Btn.OnClick = () => {selection = 4;};
    let e5Btn = new Button("potenzielle Energie", 300, 50, 50, 600, 0xffffff, 0x212121, 20);
    e5Btn.Draw();
    e5Btn.OnClick = () => {selection = 5;};
    let e6Btn = new Button("chemische Energie", 300, 50, 50, 700, 0xffffff, 0x212121, 20);
    e6Btn.Draw();
    e6Btn.OnClick = () => {selection = 6;};

    let eg1Btn = new Button("heißes Wasser", 300, 50, 600, 200, 0xffffff, 0x212121, 20);
    eg1Btn.Draw();
    eg1Btn.OnClick = () => {
        if(selection == 3){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,400);
            line.lineTo(700,200);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
    let eg2Btn = new Button("Schinken-Mayo-Sandwich", 300, 50, 600, 300, 0xffffff, 0x212121, 20);
    eg2Btn.Draw();
    eg2Btn.OnClick = () => {
        if(selection == 6){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,700);
            line.lineTo(700,300);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
    let eg3Btn = new Button("fallender Radiergummi", 300, 50, 600, 400, 0xffffff, 0x212121, 20);
    eg3Btn.Draw();
    eg3Btn.OnClick = () => {
        if(selection == 1){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,200);
            line.lineTo(700,400);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
    let eg4Btn = new Button("Kirsche hängt am Baum", 300, 50, 600, 500, 0xffffff, 0x212121, 20);
    eg4Btn.Draw();
    eg4Btn.OnClick = () => {
        if(selection == 5){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,600);
            line.lineTo(700,500);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
    let eg5Btn = new Button("Blitz", 300, 50, 600, 600, 0xffffff, 0x212121, 20);
    eg5Btn.Draw();
    eg5Btn.OnClick = () => {
        if(selection == 4){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,500);
            line.lineTo(700,600);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
    let eg6Btn = new Button("gedehntes Gummiband", 300, 50, 600, 700, 0xffffff, 0x212121, 20);
    eg6Btn.Draw();
    eg6Btn.OnClick = () => {
        if(selection == 2){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(200,300);
            line.lineTo(700,700);
            app.stage.addChild(line);
        }
        if(dones >= 6) E_continue(() => {e1m12();});
    };
}

function e1m12(){
    G_LEVEL = 112;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Der Energieerhaltungssatz");
    let lTextObj = new PIXI.Text("Energie kann ________________________ werden, sie wird von einer Energieform ________________________\nEnergieformen ________________________.",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    lTextObj.x = 10;
    lTextObj.y = 300;
    app.stage.addChild(lTextObj);

    var selectedT = 0;
    var dones = 0;

    let flBtn = new Button("________________________", 250, 20, 140, 302, 0xffffff, 0xff0000, 20, 0);
    flBtn.Draw();
    flBtn.OnClick = () => {if(selectedT == 1){G_Points++;E_header();let flBtn = new Button("weder erzeugt noch vernichtet", 250, 20, 140, 302, 0xffffff, G_BACKGROUND, 20, 0);flBtn.Draw();dones++;}}

    let slBtn = new Button("________________________", 250, 20, 780, 302, 0xffffff, 0xff0000, 20, 0);
    slBtn.Draw();
    slBtn.OnClick = () => {if(selectedT == 2){G_Points++;E_header();let slBtn = new Button("in andere", 250, 20, 780, 302, 0xffffff, G_BACKGROUND, 20, 0);slBtn.Draw();dones++;}}

    let tlBtn = new Button("________________________", 250, 20, 445, 326, 0xffffff, 0xff0000, 20, 0);
    tlBtn.Draw();
    tlBtn.OnClick = () => {if(selectedT == 6){G_Points++;E_header();let tlBtn = new Button("umgewandelt", 250, 20, 445, 326, 0xffffff, G_BACKGROUND, 20, 0);tlBtn.Draw();dones++;}}

    let fTextBtn = new Button("weder erzeugt noch vernichtet", 300, 100, 25, 450, 0xffffff, 0x313131, 20); // 1
    fTextBtn.Draw();
    fTextBtn.OnClick = () => {selectedT = 1;};

    let dTextBtn = new Button("in andere", 300, 100, 350, 450, 0xffffff, 0x313131, 20); // 2
    dTextBtn.Draw();
    dTextBtn.OnClick = () => {selectedT = 2;};

    let aTextBtn = new Button("erhalten", 300, 100, 675, 450, 0xffffff, 0x313131, 20);
    aTextBtn.Draw();
    aTextBtn.OnClick = () => {selectedT = 3;G_Points--;E_header();let aTextBtn = new Button("erhalten", 300, 100, 675, 450, 0xffffff, 0xff0000, 20);aTextBtn.Draw();};

    let sTextBtn = new Button("erzeugt und vernichtet", 300, 100, 25, 600, 0xffffff, 0x313131, 20); 
    sTextBtn.Draw();
    sTextBtn.OnClick = () => {selectedT = 4;G_Points--;E_header();let sTextBtn = new Button("erzeugt und vernichtet", 300, 100, 25, 600, 0xffffff, 0xff0000, 20);sTextBtn.Draw();};

    let fffTextBtn = new Button("in die selbe", 300, 100, 350, 600, 0xffffff, 0x313131, 20); 
    fffTextBtn.Draw();
    fffTextBtn.OnClick = () => {selectedT = 5;G_Points--;E_header();let fffTextBtn = new Button("in die selbe", 300, 100, 350, 600, 0xffffff, 0xff0000, 20);fffTextBtn.Draw();};

    let gddTextBtn = new Button("umgewandelt", 300, 100, 675, 600, 0xffffff, 0x313131, 20); // 3
    gddTextBtn.Draw();
    gddTextBtn.OnClick = () => {selectedT = 6;};

    let checkBtn = new Button("Check", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    checkBtn.Draw();
    fTextBtn.OnClick = () => {selectedT = 1;};

    
    checkBtn.OnClick = () => {
        if(dones >= 3){
            e1m13();
        }
    }
}

function e1m13(){
    G_LEVEL = 113;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Leistung P\n\nist der Quotient aus verrichteter Arbeit W und der dafür benötigten Zeit t.\nP = W/t [P] = 1 W (Watt)\n\nACHTUNG: W für Arbeit und W für Watt ist nicht das Gleiche!");
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim.png", 200, 300, 240, 400, 200, 300, 0.1);
    anim.Draw();
    let anim2 = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim2.png", 200, 300, 640, 400, 200, 300, 0.1);
    anim2.Draw();
    E_continue(() => {e1m14();});
}

function e1m14(){
    G_LEVEL = 114;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    E_topText("Physikus trägt seine Schultasche in den 1. Stock und\nverrichtet somit eine Arbeit von 80J in 60 Sekunden.\n\nEin Schüler behauptet, wenn er seine gleich schwere Schultasche\nin 1.5 Minuten raufträgt, leistet er mehr Arbeit?");
    E_fiftyfifty("Ja", "Nein", 2, 200, 500, 600, 500, () => {
        G_Points++;
        E_clear(G_BACKGROUND);
        E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
        E_header();
        E_topText("Physikus trägt seine Schultasche in den 1. Stock und\nverrichtet somit eine Arbeit von 80J in 60 Sekunden.\n\nEin Schüler behauptet, wenn er seine gleich schwere Schultasche\nin 1.5 Minuten raufträgt, leistet er mehr Arbeit?\n\nVerringert sich die Leistung P des Schülers im Vergleich zu Physikus?");
        E_fiftyfifty("Ja", "Nein", 1, 200, 500, 600, 500, () => {
            G_Points++;
            e1m15();
        })
    });
}

function e1m15(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/castl_background1.png", 300, 150, 550, 560, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    G_LEVEL = 115;
    E_topText("Wirkungsgrad\n\ngibt an, welcher Anteil der zugeführten Energie\nin nutzbare Energie umgewandelt wird.\nDabei kann der Wirkungsgrad nicht größer als 1 sein,\nder maximale Wirkungsgrad wäre 100% = 1η\n\nη = Enutz/Ezu (Energie)\nes gilt auch η = Wnutz/Wzu (Arbeit) = Pnutz/Pzu (Leistung)");
    E_continue(() => {
        e1m16();
    })
}

function e1m16(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur.png");
    E_header();
    G_LEVEL = 116;
    E_topText("Physikus sitzt vor seinem PC und zockt,\ndabei gibt der PC bei einem Wirkungsgrad von 55%\neine Leistung von 900W ab.\n\nWie viel elektrische Leistung wird zugeführt?");
    let answer1Btn = new Button("Formelumstellung:\n\nPnutz = η * Pzu\n\n900W * 0.55 = \n495W", 300, 200, 100, 500, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();

    let answer2Btn = new Button("Formelumstellung:\n\nPzu = Pnutz/η\n\n900W/0.55 = 1636W", 300, 200, 700, 500, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();

    answer1Btn.OnClick = () => {
        let answer1Btn = new Button("Formelumstellung:\n\nPnutz = η * Pzu\n\n900W * 0.55 = \n495W", 300, 200, 100, 500, 0xffffff, 0xff0000, 20);
        answer1Btn.Draw();
        G_Points--;
        E_header();
    }

    answer2Btn.OnClick = () => {
        G_Points++;
        E_endscreen();
    }
}

function e2m1(){
    G_cacheAssets();
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
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
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    G_LEVEL = 202;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m2_background.png');
    E_header();
    E_topText("Wärme ist also ENERGIE\nund Körper haben ohnehin eine innere Energie.\n\nBei Festkörpern und Flüssigkeiten ist es noch nicht möglich\n die innere Energie anzugeben,\nABER die Änderung der inneren Energie können wir angeben.\n\nBeispiele für die Änderung der inneren Energie:");
    E_reveale("mechanische Arbeit", "Übertragung von Wärme", "Strahlung", "Zuführen von elektrischer Energie", 0x313131, 0x313131, 0x313131, 0x313131, () => {
        e2m3();
    });
}

function e2m3(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 1000, 550, 200, 280, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    G_LEVEL = 203;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m3_background.png');
    E_topText("Was ist innere Energie?\n\nEntsprechend dem Teilchenmodell: innere Energie =\nDie Summe der kinetischen und potenziellen Energien aller Teilchen des Körpers.");
    E_header();

    let tmpp = 0;

    let circ  = new PIXI.Graphics(); circ.beginFill(0x0);
    circ.drawCircle((window.innerWidth)/2, 650, 100);
    app.stage.addChild(circ);

    eventBtn = new Button("", 200, 200, ((window.innerWidth)/2)-100, 550, 0xffffff, 0x313131, 20, 0);
    eventBtn.Draw();

    eventBtn.OnClick = () => {
        let tmpTxt = new PIXI.Text("Eₖᵢₙ",{fontFamily : 'Arial', fontSize: 15, fill : 0xaaaaaa, align : 'center'});
        tmpTxt.x = E_random(((window.innerWidth)/2)-60, ((window.innerWidth)/2)+60);;
        tmpTxt.y = E_random(590, 710);;
        app.stage.addChild(tmpTxt);
        let tmp2Txt = new PIXI.Text("Eₚₒₜ",{fontFamily : 'Arial', fontSize: 15, fill : 0xea8125, align : 'center'});
        tmp2Txt.x = E_random(((window.innerWidth)/2)-60, ((window.innerWidth)/2)+60);
        tmp2Txt.y = E_random(590, 710);
        app.stage.addChild(tmp2Txt);
        if(tmpp == 0){
            let tmp2 = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
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
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    G_LEVEL = 204;
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m4_background.png');
    E_topText("Kinetische Energie ist eine spezielle Form der mechanischen Energie\n und kennzeichnet den Zustand eines sich bewegenden Körpers.\nSomit wird sie auch als Zustandsgröße bezeichnet.\n\nDie kinetische Energie eines Körpers ist abhängig von seiner Masse und der Geschwindigkeit.\n\nWer hat, wenn er unten ankommt, mehr Joul/Newtonmeter kinetische Energie?", 20);
    E_header();
    let graph = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m4_graph.png", 1080, 600, 0, 210, 0xffffff, 0x313131, 0);
    graph.Draw();
    E_fiftyfifty("Eₖᵢₙ = ½m * v²", "Eₖᵢₙ = ½m * v²", 1, 100, 700, 700, 700, () => {
        e2m5();
    })
}

function e2m5(){
    E_clear(G_BACKGROUND);
    G_LEVEL = 205;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
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
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m6_background.png");
    E_topText("Angaben: Burg: m = 50T; Leiter: h = 5m")
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m6c_background.png');
    G_LEVEL = 206;
    E_header();
    let answer1Btn = new Button("g = 8.87 N/kg", 200, 200, 100, 300, 0xffffff, 0x313131, 20, 0);
    answer1Btn.Draw();

    let answer2Btn = new Button("g = 9.81 N/kg", 200, 200, 100, 550, 0xffffff, 0x313131, 20, 0);
    answer2Btn.Draw();

    let answer3Btn = new Button("g = 3.71 N/kg", 200, 200, 700, 300, 0xffffff, 0x313131, 20, 0);
    answer3Btn.Draw();

    let answer4Btn = new Button("g = 24.79 N/kg", 200, 200, 700, 550, 0xffffff, 0x313131, 20, 0);
    answer4Btn.Draw();

    let formulaText = new Button("Eₚₒₜ = m * g * h\n\nWo ist die potenzielle Energie am höchsten?", 200, 200, (window.innerWidth-300)/2, 400, 0xffffff, 0x313131, 20, 0);
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
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
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
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m8_background.png');
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 250, 250, 350, 380, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_topText("Es gibt auch verschiedene Temperatureinheiten:")
    G_LEVEL = 208;
    E_header();

    let uText = new PIXI.Text("Fahrenheit = 9/5Celcius + 32\nCelcuis = 5/9(Fahrenheit - 32)\nCelcius = Kelvin - 273.15\nKelvin = Celcuis + 273.15\n\n\n\n25°C =",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
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
            let nextButton = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            nextButton.Draw();
            nextButton.OnClick = () => {e2m9();}
        }
    };

    kBtn.OnClick = () => {
        let kBtnG = new Button("298", 50, 150, 720, 400, 0xffffff, 0x00ff00, 20);
        kBtnG.Draw();
        dones++;
        if(dones >= 2){
            let nextButton = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            nextButton.Draw();
            nextButton.OnClick = () => {e2m9();}
        }
    };
}

function e2m9(){
    E_clear(G_BACKGROUND);
    let clicks = 0;
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m9_background.png');
    G_LEVEL = 209;
    E_header();
    E_topText("Energie                    Temperaturunterschiede");
    let nextButton = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        clicks++;
        if(clicks == 1) E_topText("\n\n\nWÄRME");
        if(clicks == 2) E_topText("\n\n\n\n\nModell Wärmetransport");
        if(clicks == 3) E_topText("\n\n\n\n\n\n\n\n\nWärmeleitung         Wärmeströmung          Wärmestrahlung");
        if(clicks == 4) e2m10();
    }
}

let L210_ball;
let L210_rotSpeed = 0.1;

function e2m10(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    //let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 250, 250, 350, 380, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10_anim.png", 400, 400, 450, 200, 400, 400, 0.05);
    anim.Draw();
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10a_background.png');
    E_topText("Wärmeleitung erfolgt stets von Stellen höherer Temperatur\nzu Stellen niedrigerer Temperatur.");
    E_header();
    let nextButton = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    nextButton.Draw();
    nextButton.OnClick = () => {
        E_clear(G_BACKGROUND);
        E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
        //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10b_background.png');
        E_topText("Schaffe es durch Reibung insgesamt 60°C zu erreichen.\n\nBitte auf die Kreise klicken :)");
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
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11b_background.png');
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur2.png");
    E_header();
    E_topText("Unter Wärmeströmung (Konvektion) versteht man den Energietransport\nin Verbindung mit Teilchentransport innerhalb Flüssigkeiten oder Gasen\n\nDieses Wassergefäß wird von unten erhitzt.\n\nOrdne die Farben nach Temperatur den Teilchen zu.\n\n\nOrange = am heißesten\nblau = am kältesten");
    let water = new Button("", 320, 320, 40, 340, 0x0000ff, 0x0000ff, 1, 0.4);
    water.Draw();
    let fire = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m11_graph.png", 200, 200, 0, 660, 0xffffff, 0x313131, 0, 1);
    fire.Draw();
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
    let animBtn = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    let yellow1Btn = new Button("", 50, 50, 600, 400, 0x000000, 0xf99602, 1);
    yellow1Btn.Draw();
    yellow1Btn.OnClick = () => {
        L211_ball01.tint = 0xf99602; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 600, 400, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let yellow2Btn = new Button("", 50, 50, 700, 400, 0x000000, 0xf99602, 1);
    yellow2Btn.Draw();
    yellow2Btn.OnClick = () => {
        L211_ball02.tint = 0xf99602; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 700, 400, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let red1Btn = new Button("", 50, 50, 600, 500, 0x000000, 0xff0000, 1);
    red1Btn.Draw();
    red1Btn.OnClick = () => {
        L211_ball03.tint = 0xff0000; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 600, 500, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let red2Btn = new Button("", 50, 50, 700, 500, 0x000000, 0xff0000, 1);
    red2Btn.Draw();
    red2Btn.OnClick = () => {
        L211_ball04.tint = 0xff0000; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 700, 500, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let orange1Btn = new Button("", 50, 50, 600, 600, 0x000000, 0xa539db, 1);
    orange1Btn.Draw();
    orange1Btn.OnClick = () => {
        L211_ball05.tint = 0xa539db; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 600, 600, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let orange2Btn = new Button("", 50, 50, 700, 600, 0x000000, 0xa539db, 1);
    orange2Btn.Draw();
    orange2Btn.OnClick = () => {
        L211_ball06.tint = 0xa539db; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 700, 600, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let blue1Btn = new Button("", 50, 50, 600, 700, 0x000000, 0x0000ff, 1);
    blue1Btn.Draw();
    blue1Btn.OnClick = () => {
        L211_ball07.tint = 0x0000ff; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 600, 700, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }
    let blue2Btn = new Button("", 50, 50, 700, 700, 0x000000, 0x0000ff, 1);
    blue2Btn.Draw();
    blue2Btn.OnClick = () => {
        L211_ball08.tint = 0x0000ff; dones++;
        if(dones >= 8){ animBtn.Draw(); L211_anim = true; }
        let tmpBtn = new Button("", 50, 50, 700, 700, 0x000000, G_BACKGROUND, 1);
        tmpBtn.Draw();
    }

    animBtn.OnClick = () => {
        e2m12();
    };
    G_LEVEL = 211;
}

let L212_rect;
let L212_speed = 0;
let L212_count = 0;

function e2m12(){
    E_clear(G_BACKGROUND);
    E_topText("Alle Körper emittieren aufgrund ihrer Temperatur Wärmestrahlung.\nZugleich absobieren sie auftreffende Wärmestrahlung.\n\n\nHalte den Block in der Mitte, indem du auf ihn klickst.")
    E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m12_background.png');
    E_header();
    L212_rect = new PIXI.Graphics();
    L212_rect.beginFill(0xff0000);
    L212_rect.drawRect(250, 600, 100, 100);
    app.stage.addChild(L212_rect);
    let eventBtn = new Button("", 100, 200, 250, 500, 0x313131, 0x313131, 20, 0.5);
    eventBtn.Draw();
    eventBtn.OnClick = () => {
        L212_speed = -5;
        L212_count++;
        if(L212_count >= 69) E_endscreen();
    }
    G_LEVEL = 212;
}

function e3m1(){
    G_cacheAssets();
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg03_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    G_LEVEL = 301;
    E_header();
    E_topText("Elektrizitätslehre\n\n\nhandelt von Grundlagen und Erscheinungen elektrischer...");
    E_trueFalse8("Ladungen", "Felder", "Wellen", "Ströme", "Schwingungen", "Punkte", "Räume", "Abbildungen", 5, () => {
        e3m2();
    });
}

function e3m2(){
    G_LEVEL = 302;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Ordne zu:");

    let selection = 0;
    let dones = 0;

    let e1Btn = new Button("neutrales Atom", 200, 150, 50, 200, 0xffffff, 0x212121, 20);
    e1Btn.Draw();
    e1Btn.OnClick = () => {selection = 1;};
    let e2Btn = new Button("Elektronenmangel", 200, 150, 50, 300, 0xffffff, 0x212121, 20);
    e2Btn.Draw();
    e2Btn.OnClick = () => {selection = 2;};
    let e3Btn = new Button("Elekronenüberschuss", 200, 200, 50, 500, 0xffffff, 0x212121, 20);
    e3Btn.Draw();
    e3Btn.OnClick = () => {selection = 3;};

    let eg1Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m2_graph2.png", 200, 200, 600, 100, 0xffffff, 0x212121, 20);
    eg1Btn.Draw();
    eg1Btn.OnClick = () => {
        if(selection == 3){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(250,600);
            line.lineTo(700,200);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m3();});
    };
    let eg2Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m2_graph.png", 200, 200, 600, 350, 0xffffff, 0x212121, 20);
    eg2Btn.Draw();
    eg2Btn.OnClick = () => {
        if(selection == 1){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,300);
            line.lineTo(700,400);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m3();});
    };
    let eg3Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m2_graph3.png", 200, 200, 600, 600, 0xffffff, 0x212121, 20);
    eg3Btn.Draw();
    eg3Btn.OnClick = () => {
        if(selection == 2){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,350);
            line.lineTo(700,700);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m3();});
    };
}

function e3m3(){
    G_LEVEL = 303;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Was ist richtig?");
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim.png", 200, 200, 200, 200, 200, 200, 0.05);
    anim.Draw();
    let anim2 = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim2.png", 200, 200, 600, 200, 200, 200, 0.1);
    anim2.Draw();

    let answer1Btn = new Button("↑", 200, 100, 200, 500, 0xffffff, 0x313131, 30);
    answer1Btn.Draw();
    answer1Btn.OnClick = () => {e3m4();}
    let answer2Btn = new Button("↑", 200, 100, 600, 500, 0xffffff, 0x313131, 30);
    answer2Btn.Draw();
    answer2Btn.OnClick = () => {let tmp = new Button("↑", 200, 100, 600, 500, 0xffffff, 0xff0000, 30);tmp.Draw();G_Points--;E_header();}
}

function e3m4(){
    G_LEVEL = 304;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Elektrisches Feld\n\nist der Raum um einen elektrischen Körper, indem Kräfte auf andere Ladungen wirken.\nEs wird dargestellt durch Feldlinien.\nWas sind die Eigenschaften von Feldlinien?", 25);
    E_trueFalse6("Schneiden sich nie", "Reibung von + → -", "je stärker das Feld,\ndesto enger liegen die Linien\nbeisammen", "schneiden sich", "Richtung von - → +", "je stärker das Feld,\ndesto weiter die Linien\nauseinander", 3, () => {
        e3m5();
    })
}

function e3m5(){
    G_LEVEL = 305;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Ordne zu:");

    let selection = 0;
    let dones = 0;

    let e1Btn = new Button("Punktladung", 200, 150, 50, 200, 0xffffff, 0x212121, 20);
    e1Btn.Draw();
    e1Btn.OnClick = () => {selection = 1;};
    let e2Btn = new Button("Homogenes\nelektrisches\nFeld", 200, 150, 50, 300, 0xffffff, 0x212121, 20);
    e2Btn.Draw();
    e2Btn.OnClick = () => {selection = 2;};
    let e3Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m5_graph3.png", 200, 200, 50, 500, 0xffffff, 0x212121, 20);
    e3Btn.Draw();
    e3Btn.OnClick = () => {selection = 3;};

    let eg1Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m5_graph4.png", 200, 200, 600, 100, 0xffffff, 0x212121, 20);
    eg1Btn.Draw();
    eg1Btn.OnClick = () => {
        if(selection == 3){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(250,600);
            line.lineTo(700,200);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m6();});
    };
    let eg2Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m5_graph.png", 200, 200, 600, 350, 0xffffff, 0x212121, 20);
    eg2Btn.Draw();
    eg2Btn.OnClick = () => {
        if(selection == 1){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,300);
            line.lineTo(700,400);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m6();});
    };
    let eg3Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m5_graph2.png", 200, 200, 600, 600, 0xffffff, 0x212121, 20);
    eg3Btn.Draw();
    eg3Btn.OnClick = () => {
        if(selection == 2){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,350);
            line.lineTo(700,700);
            app.stage.addChild(line);
        }
        if(dones >= 3) E_continue(() => {e3m6();});
    };
}

function e3m6(){
    G_LEVEL = 306;
    E_clear(G_BACKGROUND);
    E_header();
    E_topText("Elektrischer Strom\n\nanhand der Modellvorstellung von elektrischen Leitern");
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg03_end.png", 250, 250, 250, 480, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    let iT = "In metallischen Leitern gibt es\nfreie Elektronen (Leitungselektronen)\ndie sich inmitten positiv\ngeladener Atomrümpfen (Gitterionen)\nregellos bewegen.";
    let infoText = new PlainText(iT, 300, 500, 100, 200, 0xffffff, 0x000000, 25);
    infoText.Draw();
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m6_anim.png", 300, 200, 600, 200, 300, 200, 0.3);
    anim.Draw();
    E_continue(() => {e3m7();});
}

function e3m7(){
    G_LEVEL = 307;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Was passiert, wenn sich ein metallischer Leiter\nin einem elektrischen Feld einer Batterie befindet?\n\nKlicke auf das richtige Bild");
    let pic1 = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m7_graph.png", 200, 200, 50, 300, 0xffffff, 0x212121, 20);
    pic1.Draw();
    pic1.OnClick = () => {e3m8();};
    let pic2 = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m7_graph2.png", 200, 200, 400, 300, 0xffffff, 0x212121, 20);
    pic2.Draw();
    pic2.OnClick = () => {let tmp = new Button("", 200, 200, 400, 300, 0xffffff, 0xff0000, 20);tmp.Draw();G_Points--;E_header();};
    let pic3 = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m7_graph3.png", 200, 200, 750, 300, 0xffffff, 0x212121, 20);
    pic3.Draw();
    pic3.OnClick = () => {let tmp = new Button("", 200, 200, 750, 300, 0xffffff, 0xff0000, 20);tmp.Draw();G_Points--;E_header();};
}

function e3m8(){
    G_LEVEL = 308;
    E_clear(G_BACKGROUND);
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg03_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Warum wird Physikus' Schreibtischlampe relativ schnell heiß?");
    E_trueFalse5("Die frei beweglichen Elektronen\nstoßen bei ihrer Bewegung hin zum\nPluspol mit den ortsfesten\nAtomrümpfen zusammen.", "Durch die Wechselwirkung zwischen\nden Elektronen und Gitterionen wird\nkinetische Energie abgegeben", "Übertragung von kinetischer Energie\nerhöht die Temperatur des Leiters,\nsomit erwärmt sich die Lampe", "Die Gitterionen fangen an\nsich in Richtung Minuspol zu bewegen", "Durch die kinetische Energie, aufgrund\nder Bewegung der Gitterionen,\nerwärmt sich die Lampe", 3, () => {
        e3m9();
    })
}

function e3m9(){
    G_LEVEL = 309;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Elektrizitätsleitung in Flüssigkeiten\n\n\n\n\n\n\n\n\n\n\n\n\n\nLeuchtet die Lampe?");
    let anim = new AnimationButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m9_anim.png", 400, 200, 340, 200, 400, 200, 0.1);
    anim.Draw();
    let txt1 = new PlainText("Lampe\n\n\n\n\nAnode", 50, 200, 750, 220, 0xffffff, 0x0, 20);
    txt1.Draw();
    let txt2 = new PlainText("Kathode", 50, 200, 255, 285, 0xffffff, 0x0, 20);
    txt2.Draw();
    E_fiftyfifty("Ja", "Nein", 2, 200, 600, 600, 600, () => {
        E_clear(G_BACKGROUND);
        E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
        E_header();
        E_topText("Wie wird die Lampe doch leuchten?");
        E_trueFalse5("benötigt werden freie Ladungsträger", "Zugabe von Leitungsfähigen Stoffen\nz.B. Kupferchlorid", "Menge des Wassers ändern", "Wasser erwärmen", "es werden mehr Gitterionen benötigt", 2, () => {
            e3m10();
        });
    })
}

function e3m10(){
    G_LEVEL = 310;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Elektrizitätsleitung in Gasen\n\nWas wird passieren und warum?");
    let anim = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m10_graph.png", 200, 200, 440, 200, 0xffffff, 0x212121, 20);
    E_trueFalse4("Funken und kleine Blitze\nentstehen", "Gase werden durch Wärmezufuhr ionisiert,\nda (+) und (-) Ionen entstehen\nund es somit leitet.", "Nichts, weil Luft keine Elektrizität leitet", "Aufgrund der Wärme leiten die Metallnadeln\nbesser und überwinden die Distanz", 2, () => {
        e3m11();
    })
    anim.Draw();
}

function e3m11(){
    G_LEVEL = 311;
    E_clear(G_BACKGROUND);
    let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg03_end.png", 150, 150, 50, 80, 0xffffff, 0x0, 20);mechanikCastl.Draw();
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Ordne zu:");

    let selection = 0;
    let dones = 0;

    let e1Btn = new Button("Gleichstrom", 200, 150, 50, 200, 0xffffff, 0x212121, 20);
    e1Btn.Draw();
    e1Btn.OnClick = () => {selection = 1;};
    let e2Btn = new Button("Wechselstrom", 200, 150, 50, 300, 0xffffff, 0x212121, 20);
    e2Btn.Draw();
    e2Btn.OnClick = () => {selection = 2;};
    /*let e3Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/Archive/main/Apocalypse/res/game/text/placeholder.png", 200, 200, 50, 500, 0xffffff, 0x212121, 20);
    e3Btn.Draw();
    e3Btn.OnClick = () => {selection = 3;};*/

    let eg1Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m11_graph.png", 200, 200, 600, 100, 0xffffff, 0x212121, 20);
    eg1Btn.Draw();
    eg1Btn.OnClick = () => {
        if(selection == 3){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(250,600);
            line.lineTo(700,200);
            app.stage.addChild(line);
        }
        if(dones >= 2) E_continue(() => {e3m12();});
    };
    let eg2Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m11_graph2.png", 200, 200, 600, 350, 0xffffff, 0x212121, 20);
    eg2Btn.Draw();
    eg2Btn.OnClick = () => {
        if(selection == 1){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,300);
            line.lineTo(700,400);
            app.stage.addChild(line);
        }
        if(dones >= 2) E_continue(() => {e3m12();});
    };
    let eg3Btn = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m11_graph3.png", 200, 200, 600, 600, 0xffffff, 0x212121, 20);
    eg3Btn.Draw();
    eg3Btn.OnClick = () => {
        if(selection == 2){
            dones++;
            G_Points++; E_header();
            let line = new PIXI.Graphics();
            line.lineStyle(2,0xffffff,1);
            line.moveTo(150,350);
            line.lineTo(700,700);
            app.stage.addChild(line);
        }
        if(dones >= 2) E_continue(() => {e3m12();});
    };
}

function e3m12(){
    G_LEVEL = 312;
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
    E_header();
    E_topText("Stromstärke\n\nist der Quotient aus der transportierten Ladungsmenge und Zeit\n\nI = Q(mAh) / t(h)\n[I] = 1A (Ampere)\n\nWie lange braucht das Ladegerät mit einem Ladestrom von 2.0 A\num Physikus' Smartphone wieder voll aufzuladen, wenn noch\n4,100mAh fehlen?");
    E_quiz3("", "Formelumstellung:\n\nI = Q/t ; 10^4mA = 1A", "Formelumstellung:\n\nt = Q/I ; 10^3mA = 1A", "Formelumstellung:\n\nQ = I*t ; 10^2mA = 1A ;", 2, () => {
        E_clear(G_BACKGROUND);
        E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/background_blur3.png");
        E_header();
        E_topText("Stromstärke\n\nist der Quotient aus der transportierten Ladungsmenge und Zeit\n\nI = Q(mAh) / t(h)\n[I] = 1A (Ampere)\n\nWie lange braucht das Ladegerät mit einem Ladestrom von 2.0 A\num PWS's Smartphone wieder voll aufzuladen, wenn noch\n4,100mAh fehlen?");
        E_quiz3("", "Ergebnis:\n\n2.05h", "Ergebnis:\n\n0.205h", "Ergebnis:\n\n20.50h", 1, () => {
            E_endscreen();
        })
    })
}