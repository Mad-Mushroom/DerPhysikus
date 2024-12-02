const app = new PIXI.Application({
    background: '#212121',
    resizeTo: window,
});
document.body.appendChild(app.view);
let elapsed = 0.0;

let G_VERSION = "v. 2.8.7";
let G_BUILD = "031524";
let G_LEVEL = 0;
let G_BACKGROUND = 0x0;
let G_DEBUG = false;

let E_VERSION = "v. 3.8.6";
let E_BUILD = "012224";

let G_Points = 1;

function allesok(){
	window.location.replace("https://mad-mushroom.github.io/DerPhysikus/game/js/res/allesok.mp3");
}

function gertrude(){
	console.log("1) Du Gertrude, Heilender Hippie!");
	console.log("2) Herr Hartl: Energie wird vernichtet. Stegreigaufgabe, 19.5/20 Punkten, sinvolle Ziffern??? 20.0?!?!?!");
	console.log("   Herr Engl: HHwwwt Hwwtt. Tk. Tk. Haxn vom Tisch! So nedda leidln. Meister Schwarzrock! Es gibt ja nix dritts, leidln... Typischer Schülerfehler! Japanisches Kulturgut leidln. Bis morgen, zwei Seiten, Thema, Pünktlichkeit, domi. HHwwwt Hwwtt. Tk. Tk. 1.5² * 200 dividiert durch -50 minus 20 * -0.5 und davon 20%; Finger rauf, wers hat. Überschrift der letzen Stunde. Des kann doch ned sei, ihr sads da oansa zwoag. Ich bin stink sauer! Wos wos wos wos?!")
	console.log("   Herr Schwab: Bitcoin kurs muss über 100.000 gehen... Song bei 'allesok()'");
	console.log("   Rützi Mützi: Der War Thunder Grind muss weiter gehen, ganz wichtig leidln, und bummst eine aus dem Tanzkurs :) BTW: SINVOLLE ZIFFERN EXISTIEREN NICHT! (Zitat 00:21 Montag Früh (Montags haben wir Physik (bei Herr Hartl (der Süßi (wollen Sie unserem Discord joinen? bitti bitti))))) Punkt vor Strich bei Spitze minus Fuß.");
	console.log("   Domi: Headset dent.");
	console.log("   Praktikum: Ich arbeite, rando mando armin kommt, wir testen wie viele Tabs verschiedene Browser aushalten. Chrome weniger als Firefox :)");
	console.log("π = e = 3");
	console.log("   ");
	console.log("Wir hatten immernoch nichts besseres um 00:16 zu tun... (Was machen Sie so Morgends um 00:16?)");
	console.log(" ");
	console.log("Update: Wir haben um 00:30 immernoch nichts besseres zu tun.");
	console.log("Weiteres Update: Es ist 2:18, morgens, Montag. Ich habe nichts besseres zu tun, als Bugs hier zu beheben...");
}

function relaunch(){
	console.log("POV: Es ist 00:11 in der Nacht und wir (Ich, Rützi & Timmy) haben nichts besseres zu tuni. So ein Süßi. Und Feini vielleicht auch nochi.");
	console.log("Tipp: Drücki machi bitti 'gertrude()'");
}

function G_show_license(){
    window.location.replace("https://mad-mushroom.github.io/DerPhysikus/license/game.txt");
}

function G_show_info(){
    console.log("%cDer Physikus", "color: dodgerblue; font-size: xxx-large");
    console.log("%c" + G_VERSION + " Build " + G_BUILD, "color: grey; font-size: x-small");
    console.log("%cPhysikus Engine", "color: dodgerblue; font-size: x-large")
    console.log("%c" + E_VERSION + " Build " + E_BUILD, "color: grey; font-size: x-small");
    console.log("%cCopyright (c) 2024 MadMushroom // aka. Benjamin", "color: light-grey; font-size: small");
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cDer Physikus Copyright (C) 2024  Benjamin Braun\nThis program comes with ABSOLUTELY NO WARRANTY;\nThis is free software, and you are welcome to redistribute it\nunder certain conditions; type 'G_show_license()' to show full license.", "font-size: x-small")
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cThis Project is also avaible on GitHub, visit it at: https://github.com/Mad-Mushroom/DerPhysikus", "color: grey; font-size: x-small");
}

function E_show_license(){
    window.location.replace("https://mad-mushroom.github.io/DerPhysikus/license/game.txt");
}

function E_show_info(){
    console.log("%cPhysikus Engine", "color: dodgerblue; font-size: xxx-large");
    console.log("%c" + E_VERSION + " Build " + E_BUILD, "color: grey; font-size: x-small");
    console.log("%cCopyright (c) 2024 MadMushroom // aka. Benjamin", "color: light-grey; font-size: small");
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cPhysikus Engine Copyright (C) 2024  Benjamin Braun\nThis program comes with ABSOLUTELY NO WARRANTY;\nThis is free software, and you are welcome to redistribute it\nunder certain conditions; type 'E_show_license()' to show full license.", "font-size: x-small")
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cThe Documentation is avaible on GitHub, visit it at: https://github.com/Mad-Mushroom/DerPhysikus", "color: grey; font-size: x-small");
}

async function G_cacheAssets(){
    let temp1 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m6_anim.png");
    let temp2 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m8_anim.png");
    let temp3 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m10_anim.png");
    let temp4 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim.png");
    let temp5 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim2.png");
    let temp6 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim.png");
    let temp7 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim2.png");
    let temp8 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m6_anim.png");
    let temp9 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m9_anim.png");
    let temp10 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e2m10_anim.png");
    if(G_DEBUG) console.log("DEBUG: Assets cached.");
}

function E_random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function E_background(link){
    let bkgSprite = PIXI.Sprite.from(link);
    bkgSprite.x = 0;
    bkgSprite.y = 0;
    bkgSprite.width = window.innerWidth;
    bkgSprite.height = window.innerHeight;
    bkgSprite.alpha = 0.5;
    app.stage.addChild(bkgSprite);
}

function E_header(){
    let backgroundRect = new PIXI.Graphics();
    backgroundRect.beginFill(0x313131);
    backgroundRect.drawRect(0, 0, window.innerWidth, 30);
    app.stage.addChild(backgroundRect);
    let nameTxt = new PIXI.Text("Der Physikus",{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    nameTxt.x = 10;
    nameTxt.y = 2.5;
    app.stage.addChild(nameTxt);
    let pointsTxt = new PIXI.Text("Punkte: " + G_Points,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    pointsTxt.x = window.innerWidth - 100;
    pointsTxt.y = 2.5;
    app.stage.addChild(pointsTxt);
}

function E_clear(color){
    let background = new PIXI.Graphics();
    background.beginFill(color);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);
    background.on('pointerdown', (event) => { /*console.log("69");*/ });
    background.eventMode = 'static';
}

function E_mainmenu(){
    E_clear(G_BACKGROUND);
    E_background("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/title.png");
    vText = new PIXI.Text(G_VERSION,{fontFamily : 'Arial', fontSize: 10, fill : 0xffffff, align : 'center'});
    vText.x = 0;
    vText.y = window.innerHeight - 20;
    app.stage.addChild(vText);
    let titleTxt = new PlainText("Der Physikus\n\nwird superschlau\n\n\nEin Lernspiel für die 8. Klasse", 1080, 500, 350, 100, 0xffffff, 0x0, 50);
    titleTxt.Draw();
    let selBtn = new Button("Los gehts!", 300, 150, (window.innerWidth-300)/2, 600, 0xffffff, 0x0, 20);
    selBtn.Draw();
    selBtn.OnClick = () => {
        E_clear(G_BACKGROUND);
        vText = new PIXI.Text(G_VERSION,{fontFamily : 'Arial', fontSize: 10, fill : 0xffffff, align : 'center'});
        vText.x = 0;
        vText.y = window.innerHeight - 20;
        app.stage.addChild(vText);
        let mechanikCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg01_end.png", 400, 400, 50, 50, 0xffffff, 0x0, 20);
        mechanikCastl.Draw();
        mechanikCastl.OnClick = () => {e1m1();};
        let mechanikTxt = new Button("Mechanik", 400, 400, 50, 50, 0xffffff, 0x0, 30, 0);
        mechanikTxt.Draw();
        mechanikTxt.OnClick = () => {e1m1();};
        let wlehreCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg02_end.png", 400, 400, 750, 50, 0xffffff, 0x0, 20);
        wlehreCastl.Draw();
        wlehreCastl.OnClick = () => {e2m1();};
        let wlehreTxt = new Button("Wärmelehre", 170, 80, 865, 210, 0xffffff, 0x0, 30);
        wlehreTxt.Draw();
        wlehreTxt.OnClick = () => {e2m1();};
        let elehreCastl = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/burg03_end.png", 400, 400, 500, 500, 0xffffff, 0x0, 20);
        elehreCastl.Draw();
        elehreCastl.OnClick = () => {e3m1();};
        let elehreTxt = new Button("Elektrizitätslehre", 400, 400, 500, 500, 0xffffff, 0x0, 30, 0);
        elehreTxt.Draw();
        elehreTxt.OnClick = () => {e3m1();};
    }
}

function E_transition(){
    //
}

function E_dialog(text, onclick){
    let dialog = new Button(text, 300, 100, 700, 100, 0xffffff, 0x313131, 20);
    dialog.Draw();
    dialog.OnClick = onclick;
}

function E_quiz(question, answer1, answer2, answer3, answer4, rightAnswer, onclick){
    let questionTxt = new PIXI.Text(question,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    questionTxt.x = 10;
    questionTxt.y = 100;
    app.stage.addChild(questionTxt);

    let answer1Btn = new Button(answer1, 300, 100, 100, 400, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();

    let answer2Btn = new Button(answer2, 300, 100, 100, 550, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();

    let answer3Btn = new Button(answer3, 300, 100, 700, 400, 0xffffff, 0x313131, 20);
    answer3Btn.Draw();

    let answer4Btn = new Button(answer4, 300, 100, 700, 550, 0xffffff, 0x313131, 20);
    answer4Btn.Draw();

    if(rightAnswer == 1) answer1Btn.OnClick = onclick;
    if(rightAnswer == 2) answer2Btn.OnClick = onclick;
    if(rightAnswer == 3) answer3Btn.OnClick = onclick;
    if(rightAnswer == 4) answer4Btn.OnClick = onclick;
}

function E_quiz3(question, answer1, answer2, answer3, rightAnswer, onclick){
    let questionTxt = new PIXI.Text(question,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'left'});
    questionTxt.x = 10;
    questionTxt.y = 200;
    app.stage.addChild(questionTxt);

    let answer1Btn = new Button(answer1, 300, 100, 100, 400, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();

    let answer2Btn = new Button(answer2, 300, 100, 100, 550, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();

    let answer3Btn = new Button(answer3, 300, 100, 700, 400, 0xffffff, 0x313131, 20);
    answer3Btn.Draw();

    if(rightAnswer == 1) answer1Btn.OnClick = onclick;
    if(rightAnswer == 2) answer2Btn.OnClick = onclick;
    if(rightAnswer == 3) answer3Btn.OnClick = onclick;
    if(rightAnswer != 1){
        answer1Btn.OnClick = () => {
            let answer1Btn = new Button(answer1, 300, 100, 100, 400, 0xffffff, 0xff0000, 20);
            answer1Btn.Draw();
            G_Points--;
            E_header();
        }
    }
    if(rightAnswer != 2){
        answer2Btn.OnClick = () => {
            let answer2Btn = new Button(answer2, 300, 100, 100, 550, 0xffffff, 0xff0000, 20);
            answer2Btn.Draw();
            G_Points--;
            E_header();
        }
    }
    if(rightAnswer != 3){
        answer3Btn.OnClick = () => {
            let answer3Btn = new Button(answer3, 300, 100, 700, 400, 0xffffff, 0xff0000, 20);
            answer3Btn.Draw();
            G_Points--;
            E_header();
        }
    }
}

function E_ltext(Text, answer1, answer2, answer3, answer4, rightAnswer1, rightAnswer2, l1X, l1Y, l2X, l2Y, onclick){
    let btn1X = 100;
    let btn1Y = 500;
    let btn2X = 600;
    let btn2Y = 440;
    let btn3X = 200;
    let btn3Y = 650;
    let btn4X = 700;
    let btn4Y = 600;
    let lTextObj = new PIXI.Text(Text,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    lTextObj.x = 10;
    lTextObj.y = 300;
    app.stage.addChild(lTextObj);

    var selectedT = 0;
    var dones = 0;

    let flBtn = new Button("________________________", 250, 20, l1X, l1Y, 0xffffff, G_BACKGROUND, 20, 0);
    flBtn.Draw();

    let slBtn = new Button("________________________", 250, 20, l2X, l2Y, 0xffffff, G_BACKGROUND, 20, 0);
    slBtn.Draw();

    let fTextBtn = new Button(answer1, 300, 100, btn1X, btn1Y, 0xffffff, 0x313131, 20);
    fTextBtn.Draw();

    let dTextBtn = new Button(answer3, 300, 100, btn4X, btn4Y, 0xffffff, 0x313131, 20);
    dTextBtn.Draw();

    let aTextBtn = new Button(answer4, 300, 100, btn3X, btn3Y, 0xffffff, 0x313131, 20);
    aTextBtn.Draw();

    let sTextBtn = new Button(answer2, 300, 100, btn2X, btn2Y, 0xffffff, 0x313131, 20);
    sTextBtn.Draw();

    let checkBtn = new Button("Check", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    checkBtn.Draw();

    fTextBtn.OnClick = () => {
        selectedT = 1;
        if(rightAnswer1 != 1 && rightAnswer2 != 1){
            let tmp = new Button(answer1, 300, 100, btn1X, btn1Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    };
    sTextBtn.OnClick = () => {
        selectedT = 2;
        if(rightAnswer1 != 2 && rightAnswer2 != 2){
            let tmp = new Button(answer2, 300, 100, btn2X, btn2Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    };
    dTextBtn.OnClick = () => {
        selectedT = 4;
        if(rightAnswer1 != 4 && rightAnswer2 != 4){
            let tmp = new Button(answer3, 300, 100, btn4X, btn4Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    };
    aTextBtn.OnClick = () => {
        selectedT = 4;
        if(rightAnswer1 != 3 && rightAnswer2 != 3){
            let tmp = new Button(answer4, 300, 100, btn3X, btn3Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    };
    flBtn.OnClick = () => {
        if(selectedT == rightAnswer1){
            let ranswer;
            let btnnX;
            let btnnY;
            if(rightAnswer1 == 1){
                ranswer = answer1;
                btnnX = btn1X;
                btnnY = btn1Y;
            }
            if(rightAnswer1 == 2){
                ranswer = answer2;
                btnnX = btn2X;
                btnnY = btn2Y;
            }
            if(rightAnswer1 == 3){
                ranswer = answer3;
                btnnX = btn3X;
                btnnY = btn3Y;
            }
            if(rightAnswer1 == 4){
                ranswer = answer4;
                btnnX = btn4X;
                btnnY = btn4Y;
            }
            let tmp = new Button(ranswer, 250, 20, l1X, l1Y, 0xffffff, G_BACKGROUND, 20, 0);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, btnnX, btnnY, G_BACKGROUND, G_BACKGROUND, 20);
            tmp2.Draw();
            dones++;
            G_Points++;
            E_header();
        }
    };
    slBtn.OnClick = () => {
        if(selectedT == rightAnswer2){
            let ranswer;
            let btnnX;
            let btnnY;
            if(rightAnswer2 == 1){
                ranswer = answer1;
                btnnX = btn1X;
                btnnY = btn1Y;
            }
            if(rightAnswer2 == 2){
                ranswer = answer2;
                btnnX = btn2X;
                btnnY = btn2Y;
            }
            if(rightAnswer2 == 3){
                ranswer = answer3;
                btnnX = btn3X;
                btnnY = btn3Y;
            }
            if(rightAnswer2 == 4){
                ranswer = answer4;
                btnnX = btn4X;
                btnnY = btn4Y;
            }
            let tmp = new Button(ranswer, 250, 20, l2X, l2Y, 0xffffff, G_BACKGROUND, 20, 0);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, btnnX, btnnY, G_BACKGROUND, G_BACKGROUND, 20);
            tmp2.Draw();
            dones++;
            G_Points++;
            E_header();
        }
    };
    checkBtn.OnClick = () => {
        if(dones >= 2){
            onclick();
        }
    }
}

function E_reveale(btn1Txt, btn2Txt, btn3Txt, btn4Txt, btn1Color, btn2Color, btn3Color, btn4Color, onclick){
    let dones = 0;
    let btn1 = new Button("Click Me!", 300, 100, 100, 490, 0xffffff, 0x313131, 20);
    btn1.Draw();
    let btn2 = new Button("Click Me!", 300, 100, 100, 640, 0xffffff, 0x313131, 20);
    btn2.Draw();
    let btn3 = new Button("Click Me!", 300, 100, 700, 490, 0xffffff, 0x313131, 20);
    btn3.Draw();
    let btn4 = new Button("Click Me!", 300, 100, 700, 640, 0xffffff, 0x313131, 20);
    btn4.Draw();

    btn1.OnClick = () => {
        let tmp = new Button(btn1Txt, 300, 100, 100, 490, 0xffffff, btn1Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn2.OnClick = () => {
        let tmp = new Button(btn2Txt, 300, 100, 100, 640, 0xffffff, btn2Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn3.OnClick = () => {
        let tmp = new Button(btn3Txt, 300, 100, 700, 490, 0xffffff, btn3Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn4.OnClick = () => {
        let tmp = new Button(btn4Txt, 300, 100, 700, 640, 0xffffff, btn4Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }

}

function E_fiftyfifty(answer1, answer2, rightAnswer, a1X, a1Y, a2X, a2Y, onclick){
    let answer1Btn = new Button(answer1, 300, 100, a1X, a1Y, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();

    let answer2Btn = new Button(answer2, 300, 100, a2X, a2Y, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();

    answer1Btn.OnClick = () => {
        if(rightAnswer == 1){
            G_Points++;
            onclick();
        }else{
            let tmp = new Button(answer1, 300, 100, a1X, a1Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    }
    answer2Btn.OnClick = () => {
        if(rightAnswer == 2){
            G_Points++;
            onclick();
        }else{
            let tmp = new Button(answer2, 300, 100, a2X, a2Y, 0xffffff, 0xff0000, 20);
            tmp.Draw();
            G_Points--;
            E_header();
        }
    }
}

function E_trueFalse4(text1, text2, text3, text5, numberTrue, onclick){
    let a1X = 700;
    let a1Y = 600;
    let a2X = 50;
    let a2Y = 200;
    let a3X = 100;
    let a3Y = 400;
    let a5X = 300;
    let a5Y = 600;

    let dones = 0;

    let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x313131, 15);
    answer1Btn.Draw();
    answer1Btn.OnClick = () => {
        if(numberTrue >= 1){
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x00ff00, 15);
            answer1Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0xff0000, 15);
            answer1Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x313131, 15);
    answer2Btn.Draw();
    answer2Btn.OnClick = () => {
        if(numberTrue >= 2){
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x00ff00, 15);
            answer2Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0xff0000, 15);
            answer2Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x313131, 15);
    answer3Btn.Draw();
    answer3Btn.OnClick = () => {
        if(numberTrue >= 3){
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x00ff00, 15);
            answer3Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0xff0000, 15);
            answer3Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x313131, 15);
    answer5Btn.Draw();
    answer5Btn.OnClick = () => {
        if(numberTrue >= 5){
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x00ff00, 15);
            answer5Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0xff0000, 15);
            answer5Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };
}

function E_trueFalse5(text1, text2, text3, text4, text5, numberTrue, onclick){
    let a1X = 700;
    let a1Y = 600;
    let a2X = 50;
    let a2Y = 200;
    let a3X = 400;
    let a3Y = 400;
    let a4X = 400;
    let a4Y = 200;
    let a5X = 300;
    let a5Y = 600;

    let dones = 0;

    let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x313131, 15);
    answer1Btn.Draw();
    answer1Btn.OnClick = () => {
        if(numberTrue >= 1){
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x00ff00, 15);
            answer1Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0xff0000, 15);
            answer1Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x313131, 15);
    answer2Btn.Draw();
    answer2Btn.OnClick = () => {
        if(numberTrue >= 2){
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x00ff00, 15);
            answer2Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0xff0000, 15);
            answer2Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x313131, 15);
    answer3Btn.Draw();
    answer3Btn.OnClick = () => {
        if(numberTrue >= 3){
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x00ff00, 15);
            answer3Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0xff0000, 15);
            answer3Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x313131, 15);
    answer4Btn.Draw();
    answer4Btn.OnClick = () => {
        if(numberTrue >= 4){
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x00ff00, 15);
            answer4Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0xff0000, 15);
            answer4Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x313131, 15);
    answer5Btn.Draw();
    answer5Btn.OnClick = () => {
        if(numberTrue >= 5){
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x00ff00, 15);
            answer5Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0xff0000, 15);
            answer5Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };
}

function E_trueFalse6(text1, text2, text3, text4, text5, text6, numberTrue, onclick){
    let a1X = 700;
    let a1Y = 600;
    let a2X = 50;
    let a2Y = 200;
    let a3X = 400;
    let a3Y = 400;
    let a4X = 400;
    let a4Y = 200;
    let a5X = 300;
    let a5Y = 600;
    let a6X = 750;
    let a6Y = 200;

    let dones = 0;

    let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();
    answer1Btn.OnClick = () => {
        if(numberTrue >= 1){
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x00ff00, 20);
            answer1Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0xff0000, 20);
            answer1Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();
    answer2Btn.OnClick = () => {
        if(numberTrue >= 2){
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x00ff00, 20);
            answer2Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0xff0000, 20);
            answer2Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x313131, 20);
    answer3Btn.Draw();
    answer3Btn.OnClick = () => {
        if(numberTrue >= 3){
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x00ff00, 20);
            answer3Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0xff0000, 20);
            answer3Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x313131, 20);
    answer4Btn.Draw();
    answer4Btn.OnClick = () => {
        if(numberTrue >= 4){
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x00ff00, 20);
            answer4Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0xff0000, 20);
            answer4Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x313131, 20);
    answer5Btn.Draw();
    answer5Btn.OnClick = () => {
        if(numberTrue >= 5){
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x00ff00, 20);
            answer5Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0xff0000, 20);
            answer5Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0x313131, 20);
    answer6Btn.Draw();
    answer6Btn.OnClick = () => {
        if(numberTrue >= 6){
            let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0x00ff00, 20);
            answer6Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0xff0000, 20);
            answer6Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };
}

function E_trueFalse8(text1, text2, text3, text4, text5, text6, text7, text8, numberTrue, onclick){
    let a1X = 700;
    let a1Y = 600;
    let a2X = 50;
    let a2Y = 200;
    let a3X = 400;
    let a3Y = 400;
    let a4X = 400;
    let a4Y = 200;
    let a5X = 300;
    let a5Y = 600;
    let a6X = 750;
    let a6Y = 200;
    let a7X = 50;
    let a7Y = 400;
    let a8X = 750;
    let a8Y = 400;

    let dones = 0;

    let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x313131, 20);
    answer1Btn.Draw();
    answer1Btn.OnClick = () => {
        if(numberTrue >= 1){
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0x00ff00, 20);
            answer1Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer1Btn = new Button(text1, 300, 100, a1X, a1Y, 0xffffff, 0xff0000, 20);
            answer1Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x313131, 20);
    answer2Btn.Draw();
    answer2Btn.OnClick = () => {
        if(numberTrue >= 2){
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0x00ff00, 20);
            answer2Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer2Btn = new Button(text2, 300, 100, a2X, a2Y, 0xffffff, 0xff0000, 20);
            answer2Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x313131, 20);
    answer3Btn.Draw();
    answer3Btn.OnClick = () => {
        if(numberTrue >= 3){
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0x00ff00, 20);
            answer3Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer3Btn = new Button(text3, 300, 100, a3X, a3Y, 0xffffff, 0xff0000, 20);
            answer3Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x313131, 20);
    answer4Btn.Draw();
    answer4Btn.OnClick = () => {
        if(numberTrue >= 4){
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0x00ff00, 20);
            answer4Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer4Btn = new Button(text4, 300, 100, a4X, a4Y, 0xffffff, 0xff0000, 20);
            answer4Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x313131, 20);
    answer5Btn.Draw();
    answer5Btn.OnClick = () => {
        if(numberTrue >= 5){
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0x00ff00, 20);
            answer5Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer5Btn = new Button(text5, 300, 100, a5X, a5Y, 0xffffff, 0xff0000, 20);
            answer5Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0x313131, 20);
    answer6Btn.Draw();
    answer6Btn.OnClick = () => {
        if(numberTrue >= 6){
            let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0x00ff00, 20);
            answer6Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer6Btn = new Button(text6, 300, 100, a6X, a6Y, 0xffffff, 0xff0000, 20);
            answer6Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer7Btn = new Button(text7, 300, 100, a7X, a7Y, 0xffffff, 0x313131, 20);
    answer7Btn.Draw();
    answer7Btn.OnClick = () => {
        if(numberTrue >= 7){
            let answer7Btn = new Button(text7, 300, 100, a7X, a7Y, 0xffffff, 0x00ff00, 20);
            answer7Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer7Btn = new Button(text7, 300, 100, a7X, a7Y, 0xffffff, 0xff0000, 20);
            answer7Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };

    let answer8Btn = new Button(text8, 300, 100, a8X, a8Y, 0xffffff, 0x313131, 20);
    answer8Btn.Draw();
    answer8Btn.OnClick = () => {
        if(numberTrue >= 8){
            let answer8Btn = new Button(text8, 300, 100, a8X, a8Y, 0xffffff, 0x00ff00, 20);
            answer8Btn.Draw();
            G_Points++;
            E_header();
            dones++;
        }else{
            let answer8Btn = new Button(text8, 300, 100, a8X, a8Y, 0xffffff, 0xff0000, 20);
            answer8Btn.Draw();
            G_Points--;
            E_header();
        }
        if(dones >= numberTrue) E_continue(onclick);
    };
}

function E_continue(onclick){
    let tmp = new Button("→", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    tmp.Draw();
    tmp.OnClick = onclick;
}

function E_topText(text, size = 30){
    let toptxt = new PIXI.Text(text,{fontFamily : 'Arial', fontSize: size, fill : 0xffffff, align : 'center'});
    toptxt.x = (window.innerWidth-toptxt.width)/2;
    toptxt.y = 40;
    app.stage.addChild(toptxt);
}

function E_gameover(){
    E_clear(G_BACKGROUND);
    E_topText("Game Over!\n\nBeim nächsten mal klappts bestimmt :)");
    let backBtn = new Button("Zurück", 200, 100, (window.innerWidth-200)/2, 600, 0xffffff, 0x313131, 20);
    backBtn.Draw();
    backBtn.OnClick = () => {
        window.location.reload();
    }
}

function E_endscreen(){
    E_clear(0x0);
    //E_background('https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/schatz.png');
    let graph = new SpriteButton("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/schatz.png", 500, 400, (window.innerWidth-500)/2, 50, 0xffffff, 0x0, 0);
    graph.Draw();
    E_header();
    let pText = "Punkte: " + G_Points;
    let pointsText = new PIXI.Text(pText,{fontFamily : 'Arial', fontSize: 25, fill : 0xffffff, align : 'center'});
    pointsText.x = (window.innerWidth-pointsText.width)/2;
    pointsText.y = 120;
    app.stage.addChild(pointsText);

    let backBtn = new Button("Zurück", 200, 100, (window.innerWidth-200)/2, 600, 0xffffff, 0x313131, 20);
    backBtn.Draw();
    backBtn.OnClick = () => {
        window.location.reload();
    }

    if(G_LEVEL < 300){
        let continueBtn = new Button("Weiter", 200, 100, (window.innerWidth-200)/2, 450, 0xffffff, 0x313131, 20);
        continueBtn.Draw();
        continueBtn.OnClick = () => {
            if(G_LEVEL == 116) e2m1();
            if(G_LEVEL == 212) e3m1();
        }
    }
}

function E_junk(){
    console.log("JUNK");
    console.log("JUNK");
    console.log("JUNK");
    console.log("JUNK");
    console.log("JUNK");
    console.log("JUNK");
    console.log("JUNK");
}

function G_SETDEBUG(){
    G_DEBUG = true;
    console.log("%cYou entered DEBUG Mode!", "color: red; font-size: xxx-large");
    console.log("%cBe careful!", "color: grey; font-size: x-small");
}

function E_dev(onclick){
    E_clear(G_BACKGROUND);
    E_topText("This level is\n\nUNDER DEVELOPMENT\n\nLevel: " + G_LEVEL);
    E_continue(onclick);
    let tmp = new Button("Enter DEBUG Mode", 200, 50, 400, 750, 0xffffff, 0xff0000, 20);
    tmp.Draw();
    tmp.OnClick = () => {
        G_DEBUG = true;
        console.log("%cYou entered DEBUG Mode!", "color: red; font-size: xxx-large");
        console.log("%cBe careful!", "color: grey; font-size: x-small");
    };
}

function D_setLevel(level){
    if(!G_DEBUG) return "Cannot warp while not being in DEBUG Mode!";
    if(level == 101) e1m1();
    if(level == 102) e1m2();
    if(level == 103) e1m3();
    if(level == 104) e1m4();
    if(level == 105) e1m5();
    if(level == 106) e1m6();
    if(level == 107) e1m7();
    if(level == 108) e1m8();
    if(level == 109) e1m9();
    if(level == 110) e1m10();
    if(level == 111) e1m11();
    if(level == 112) e1m12();
    if(level == 113) e1m13();
    if(level == 114) e1m14();
    if(level == 115) e1m15();
    if(level == 116) e1m16();
    if(level == 201) e2m1();
    if(level == 202) e2m2();
    if(level == 203) e2m3();
    if(level == 204) e2m4();
    if(level == 205) e2m5();
    if(level == 206) e2m6();
    if(level == 207) e2m7();
    if(level == 208) e2m8();
    if(level == 209) e2m9();
    if(level == 210) e2m10();
    if(level == 211) e2m11();
    if(level == 212) e2m12();
    if(level == 301) e3m1();
    if(level == 302) e3m2();
    if(level == 303) e3m3();
    if(level == 304) e3m4();
    if(level == 305) e3m5();
    if(level == 306) e3m6();
    if(level == 307) e3m7();
    if(level == 308) e3m8();
    if(level == 309) e3m9();
    if(level == 310) e3m10();
    if(level == 311) e3m11();
}

function D_getLevel(){
    if(!G_DEBUG) return "Please enter DEBUG Mode first!";
    return G_LEVEL;
}

async function D_cacheAssets(){
    if(!G_DEBUG) return "Please enter DEBUG Mode first!";
    let temp1 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m6_anim.png");
    let temp2 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m8_anim.png");
    let temp3 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m10_anim.png");
    let temp4 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim.png");
    let temp5 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e1m13_anim2.png");
    let temp6 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim.png");
    let temp7 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m3_anim2.png");
    let temp8 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m6_anim.png");
    let temp9 = await PIXI.BaseTexture.from("https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/main/game/js/res/e3m9_anim.png");
}

function main(){
    G_show_info();
    //let startBtn = new Button("Start Game", 300, 200, 390, 305, 0xffffff, 0x000000, 20);
    //startBtn.Draw();
    //startBtn.OnClick = () => {
        //requestFullScreen(document.body);
        E_mainmenu();
    //}
}

function Update(){
    if(G_DEBUG){
        G_BACKGROUND = 0x000000;
    }

    if(G_Points < 0){
        E_gameover();
    }

    if(G_LEVEL == 210){
        L210_ball.rotation += L210_rotSpeed;
        let temp = (L210_rotSpeed * 2 * 20) + 20;
        let temptxt = temp + "°C";
        //document.getElementById("htmltxt").innerHTML = temptxt;
        if(temp >= 60){
            let checkBtn = new Button("→", 100, 50, 900, 550, 0xffffff, 0x313131, 20);
            checkBtn.Draw();
            checkBtn.OnClick = () => {
                G_Points++;
                e2m11();
            }
        }
    }

    if(G_LEVEL == 211){
        if(L211_anim == true){
            if(L211_elapsed >= L211_timeEl && L211_cf == 2){
                L211_frame1();
                L211_elapsed = 0;
                L211_cf = 1;
            }
            if(L211_elapsed >= L211_timeEl && L211_cf == 1){
                L211_frame2();
                L211_elapsed = 0;
                L211_cf = 2;
            }
        }
    }

    if(G_LEVEL == 212){
        if(L212_rect.y > 100) L212_rect.y = 99;
        if(L212_rect.y < 100) L212_rect.y += L212_speed;
        if(L212_speed < 1.5) L212_speed++;
    }
}

main();

app.ticker.add((delta) => {
    elapsed += delta;
    if(G_LEVEL == 211 && L211_anim == true) L211_elapsed += delta;
    Update();
});
