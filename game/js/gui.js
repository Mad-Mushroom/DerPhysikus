class Button {
    constructor(Text, SizeX, SizeY, PosX, PosY, ForeColor, BackColor, FontSize, Alpha = 1) {
        this.Text = Text;
        this.PosX = PosX;
        this.PosY = PosY;
        this.SizeX = SizeX;
        this.SizeY = SizeY;
        this.ForeColor = ForeColor;
        this.BackColor = BackColor;
        this.FontSize = FontSize;
        this.Alpha = Alpha;
    }

    Draw(){
        this.obj = new PIXI.Graphics();
        this.obj.beginFill(this.BackColor);
        this.obj.drawRect(this.PosX, this.PosY, this.SizeX, this.SizeY);
        app.stage.addChild(this.obj);
        this.textObj = new PIXI.Text(this.Text,{fontFamily : 'Arial', fontSize: this.FontSize, fill : this.ForeColor, align : 'center'});
        this.textObj.x = this.PosX + (this.SizeX-this.textObj.width)/2;
        this.textObj.y = this.PosY + (this.SizeY-this.textObj.height)/2;
        this.obj.alpha = this.Alpha;
        app.stage.addChild(this.textObj);
        this.obj.on('pointerdown', (event) => { this.OnClick() });
        this.obj.eventMode = 'static';
        this.obj.on('mousedown', (event) => { this.OnMouseDown() });
        this.obj.eventMode = 'static';
    }

    Update(){
        this.obj = new PIXI.Graphics();
        this.obj.beginFill(this.BackColor);
        this.obj.drawRect(this.PosX, this.PosY, this.SizeX, this.SizeY);
        this.textObj.Text = this.Text;
        this.textObj.x = this.PosX + (this.SizeX-this.textObj.width)/2;
        this.textObj.y = this.PosY + (this.SizeY-this.textObj.height)/2;
        this.obj.alpha = this.Alpha;
    }

    OnClick(){}
    OnMouseDown(){}
}

class SpriteButton {
    constructor(Texture, SizeX, SizeY, PosX, PosY, ForeColor, BackColor, FontSize, Alpha = 1) {
        this.Texture = Texture;
        this.PosX = PosX;
        this.PosY = PosY;
        this.SizeX = SizeX;
        this.SizeY = SizeY;
        this.ForeColor = ForeColor;
        this.BackColor = BackColor;
        this.FontSize = FontSize;
        this.Alpha = Alpha;
    }

    Draw(){
        this.sprite = PIXI.Sprite.from(this.Texture);
        this.sprite.x = this.PosX;
        this.sprite.y = this.PosY;
        this.sprite.width = this.SizeX;
        this.sprite.height = this.SizeY;
        app.stage.addChild(this.sprite);
        this.sprite.on('pointerdown', (event) => { this.OnClick() });
        this.sprite.eventMode = 'static';
    }

    Update(){
        this.obj = new PIXI.Graphics();
        this.obj.beginFill(this.BackColor);
        this.obj.drawRect(this.PosX, this.PosY, this.SizeX, this.SizeY);
        this.sprite.x = this.PosX;
        this.sprite.y = this.PosY;
        this.sprite.width = this.SizeX;
        this.sprite.height = this.SizeY;
        this.obj.alpha = this.Alpha;
    }

    OnClick(){}
}
