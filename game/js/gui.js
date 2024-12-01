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

class AnimationButton {
    constructor(imagePaths, SizeX, SizeY, PosX, PosY, FrameX, FrameY, animSpeed = 0.1) {
        this.imagePaths = imagePaths;
        this.PosX = PosX;
        this.PosY = PosY;
        this.SizeX = SizeX;
        this.SizeY = SizeY;
        this.FrameX = FrameX;
        this.FrameY = FrameY;
        this.animSpeed = animSpeed;
    }

    async Draw(){
        this.textures = [];

        this.baseTexture = await PIXI.BaseTexture.from(this.imagePaths);

        let width = this.FrameX;
        let height = this.FrameY;

        this.rows = Math.floor(this.baseTexture.height / height);
        this.cols = Math.floor(this.baseTexture.width / width);
        this.numFrames = this.rows * this.cols;

        for (let i = 0; i < this.numFrames; i++) {
            let row = Math.floor(i / this.cols);
            let col = i % this.cols;
            let rectangle = new PIXI.Rectangle(col * width, row * height, width, height);
            let texture = new PIXI.Texture(this.baseTexture, rectangle);
            this.textures.push(texture);
        }

        this.animatedSprite = new PIXI.AnimatedSprite(this.textures);

        this.animatedSprite.animationSpeed = this.animSpeed;
        this.animatedSprite.play();

        this.animatedSprite.width = this.SizeX;
        this.animatedSprite.height = this.SizeY;

        this.animatedSprite.x = this.PosX;
        this.animatedSprite.y = this.PosY;

        app.stage.addChild(this.animatedSprite);
    }

    Update(){
        
    }

    OnClick(){}
}

class PlainText {
    constructor(Text, SizeX, SizeY, PosX, PosY, ForeColor, BackColor, FontSize, Alpha = 1) {
        this.Text = Text;
        this.PosX = PosX;
        this.PosY = PosY;
        this.SizeX = SizeX;
        this.SizeY = SizeY;
        this.ForeColor = ForeColor;
        this.FontSize = FontSize;
        this.Alpha = Alpha;
    }

    Draw(){
        this.textObj = new PIXI.Text(this.Text,{fontFamily : 'Arial', fontSize: this.FontSize, fill : this.ForeColor, align : 'center'});
        this.textObj.x = this.PosX;
        this.textObj.y = this.PosY;
        app.stage.addChild(this.textObj);
    }
}