class Particle extends createjs.Bitmap {


    public dx: number = 0;
    public dy: number = 0;
    public dr: number = 0;

    public ddx: number = 0;
    public ddy: number = 0;
    public count: number = 0;
    public max_count: number = 300;

    constructor(imageOrUrl: HTMLImageElement) {
        super(imageOrUrl);
        this.alpha = 0.4;
        this.regX = 15;
        this.regY = 15;
    }

    public init(): void {
        this.alpha = 0.4;
        this.scaleY = this.scaleX = Math.random() *0.5 + 0.5;
        //this.scaleY = Math.random() * 0.5 + 0.5;
        this.dx = 0;
        this.dy = 0;
        this.dr = 0;
        this.ddx = 0;
        this.ddy = 0;
        
        this.count = 0;
        this.max_count = 300;
        this.dr = Math.random() * 3 + 1;
    }

    public setImage(imageOrUrl: HTMLImageElement): void {
        this.image = imageOrUrl;
    }

    public update(): void {
        ++this.count;
        this.dx = this.dx + this.ddx;
        this.dy = this.dy + this.ddy;

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.rotation = this.rotation + this.dr;

    }

    public isActive(): boolean {
        return (this.count < this.max_count);
    }

}

