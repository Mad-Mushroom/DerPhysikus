const app = new PIXI.Application({
    background: '#212121',
    resizeTo: window,
});
document.body.appendChild(app.view);
let elapsed = 0.0;

let G_VERSION = "v. Alpha 1.4";
let G_BUILD = "010424";
let G_LEVEL = 0;

let E_VERSION = "v. Alpha 1.1";
let E_BUILD = "010424";

let G_Points = 1;

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
    console.log("%cPhysikus Engine", "color: dodgerblue; font-size: xxx-large")
    console.log("%c" + E_VERSION + " Build " + E_BUILD, "color: grey; font-size: x-small");
    console.log("%cCopyright (c) 2024 MadMushroom // aka. Benjamin", "color: light-grey; font-size: small");
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cPhysikus Engine Copyright (C) 2024  Benjamin Braun\nThis program comes with ABSOLUTELY NO WARRANTY;\nThis is free software, and you are welcome to redistribute it\nunder certain conditions; type 'E_show_license()' to show full license.", "font-size: x-small")
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cThe Documentation is avaible on GitHub, visit it at: https://github.com/Mad-Mushroom/DerPhysikus", "color: grey; font-size: x-small");
}

function E_random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
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
    let pointsTxt = new PIXI.Text("Points: " + G_Points,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    pointsTxt.x = window.innerWidth - 100;
    pointsTxt.y = 2.5;
    app.stage.addChild(pointsTxt);
}

function E_clear(color){
    let background = new PIXI.Graphics();
    background.beginFill(color);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);
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

    let flBtn = new Button("________________________", 250, 20, l1X, l1Y, 0xffffff, 0x212121, 20, 0);
    flBtn.Draw();

    let slBtn = new Button("________________________", 250, 20, l2X, l2Y, 0xffffff, 0x212121, 20, 0);
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
            let tmp = new Button(ranswer, 250, 20, l1X, l1Y, 0xffffff, 0x212121, 20, 0);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, btnnX, btnnY, 0x212121, 0x212121, 20);
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
            let tmp = new Button(ranswer, 250, 20, l2X, l2Y, 0xffffff, 0x212121, 20, 0);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, btnnX, btnnY, 0x212121, 0x212121, 20);
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
            let tmp2 = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn2.OnClick = () => {
        let tmp = new Button(btn2Txt, 300, 100, 100, 640, 0xffffff, btn2Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn3.OnClick = () => {
        let tmp = new Button(btn3Txt, 300, 100, 700, 490, 0xffffff, btn3Color, 20);
        tmp.Draw();
        dones++;
        if(dones >= 4){
            let tmp2 = new Button("=>", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }
    btn4.OnClick = () => {
        let tmp = new Button(btn4Txt, 300, 100, 700, 640, 0xffffff, btn4Color, 20);
        tmp.Draw();
        dones++;
        console.log(dones);
        if(dones >= 4){
            let tmp2 = new Button("->", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
            tmp2.Draw();
            tmp2.OnClick = onclick;
        }
    }

}

function main(){
    G_show_info();
    MainMenu();
}

function Update(){
    if(G_Points < 0){
        E_clear(0xff00ff);
    }
}

main();

app.ticker.add((delta) => {
    elapsed += delta;
    Update();
});