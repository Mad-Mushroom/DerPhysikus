function e2m1(){
    G_LEVEL = 21;
    let Text = "Wärme ist die Energie, die in Folge von ________________________ übertragen wird.\n\nDies kann innerhalb eines Körpers erfolgen oder zwischen zwei Körpern mit ________________________ Temperatur.";
    let background = new PIXI.Graphics();
    background.beginFill(0x212121);
    background.drawRect(0, 0, window.innerWidth, window.innerHeight);
    app.stage.addChild(background);
    let lTextObj = new PIXI.Text(Text,{fontFamily : 'Arial', fontSize: 20, fill : 0xffffff, align : 'center'});
    lTextObj.x = 10;
    lTextObj.y = 300;
    app.stage.addChild(lTextObj);

    var selectedT = 0;
    var dones = 0;

    let flBtn = new Button("________________________", 250, 20, 520, 302, 0xffffff, 0x212121, 20);
    flBtn.Draw();

    let slBtn = new Button("________________________", 250, 20, 700, 326, 0xffffff, 0x212121, 20);
    slBtn.Draw();

    let fTextBtn = new Button("Temperaturunterschieden", 300, 100, 100, 500, 0xffffff, 0x313131, 20);
    fTextBtn.Draw();

    let dTextBtn = new Button("Dichte", 300, 100, 200, 650, 0xffffff, 0x313131, 20);
    dTextBtn.Draw();

    let aTextBtn = new Button("2", 300, 100, 700, 700, 0xffffff, 0x313131, 20);
    aTextBtn.Draw();

    let sTextBtn = new Button("unterschiedlicher", 300, 100, 700, 500, 0xffffff, 0x313131, 20);
    sTextBtn.Draw();

    let checkBtn = new Button("Check", 100, 50, 900, 750, 0xffffff, 0x313131, 20);
    checkBtn.Draw();

    fTextBtn.OnClick = () => {
        selectedT = 1;
    };
    sTextBtn.OnClick = () => {
        selectedT = 2;
    };
    flBtn.OnClick = () => {
        if(selectedT == 1){
            let tmp = new Button("Temperaturunterschieden", 250, 20, 520, 202, 0xffffff, 0x212121, 20);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, 100, 500, 0x212121, 0x212121, 20);
            tmp2.Draw();
            dones++;
        }
    };
    slBtn.OnClick = () => {
        if(selectedT == 2){
            let tmp = new Button("unterschiedlicher", 250, 20, 700, 326, 0xffffff, 0x212121, 20);
            tmp.Draw();
            selectedT = 0;
            let tmp2 = new Button("a", 300, 100, 700, 600, 0x212121, 0x212121, 20);
            tmp2.Draw();
            dones++;
        }
    };
    checkBtn.OnClick = () => {
        if(dones >= 2){
            e2m2();
        }
    }
}