const app = new PIXI.Application({
    background: '#212121',
    resizeTo: window,
});
document.body.appendChild(app.view);
let elapsed = 0.0;

let G_VERSION = "v. P1 Alpha 1.4";
let G_BUILD = "010324";
let G_LEVEL = 0;

function show_license(){
    window.location.replace("https://mad-mushroom.github.io/DerPhysikus/license/game.txt");
}

function show_info(){
    console.log("%cDer Physikus", "color: dodgerblue; font-size: xx-large");
    console.log("%c" + G_VERSION + " Build " + G_BUILD, "color: grey; font-size: x-small");
    console.log("%cCopyright (c) 2024 MadMushroom // aka. Benjamin", "color: light-grey; font-size: small");
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cDer Physikus Copyright (C) 2024  Benjamin Braun\nThis program comes with ABSOLUTELY NO WARRANTY;\nThis is free software, and you are welcome to redistribute it\nunder certain conditions; type 'show_license()' to show full license.", "font-size: x-small")
    console.log("%c", "color: grey; font-size: 2px");
    console.log("%cThis Project is also avaible on GitHub, visit it at: https://github.com/Mad-Mushroom/DerPhysikus", "color: grey; font-size: x-small");
}

function main(){
    show_info();
    MainMenu();
    //LoadLevel(26);
}

function Update(){
    if(G_LEVEL == 25){
        L25_ball.rotation += L25_rotSpeed;
        let temp = (L25_rotSpeed * 2 * 20) + 20;
        let temptxt = temp + "°C";
        document.getElementById("htmltxt").innerHTML = temptxt;
        if(temp >= 60){
            let checkBtn = new Button("->", 100, 50, 900, 550, 0xffffff, 0x313131, 20);
            checkBtn.Draw();
            checkBtn.OnClick = () => {
                e2m6();
            }
        }
    }else{
        document.getElementById("htmltxt").innerHTML = "";
    }
}

main();

app.ticker.add((delta) => {
    elapsed += delta;
    Update();
});