/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ParticleManager extends createjs.Container {


    private static objectPool: Array<Particle> = new Array<Particle>();

    public static initPool(): void {
        for (var i: number = 0; i < 100; i++) {
            ParticleManager.objectPool.push(new Particle(ParticleManager.getTex("particle") ));
        }
    }

    public static newObject(): Particle {
        if (ParticleManager.objectPool.length > 0) {
            ParticleManager.objectPool[ParticleManager.objectPool.length - 1].init();
            return ParticleManager.objectPool.pop();
        }
        ParticleManager.initPool();
        return ParticleManager.newObject();
    }
    
    public static deleteObject(e: Particle): void {
        ParticleManager.objectPool.push(e);   
    }

    public static getTex(name: string): HTMLImageElement {
        return <HTMLImageElement>SceneManager.instance().queue.getResult(name);
    }

    constructor() {
        super();
    }


    // 트리 랜덤
    public createParticle(): void {
        var particle: Particle = ParticleManager.newObject();

        //particle.setImage(ParticleManager.getTex("particle"));

        switch (this.numChildren % 3) {
            case 0:
                particle.setImage(ParticleManager.getTex("particle1"));
                break;
            case 1:
                particle.setImage(ParticleManager.getTex("particle2"));
                break;
            case 2:
                particle.setImage(ParticleManager.getTex("particle3"));
                break;
        }


        particle.x = 960 + 400 * Math.random() -200 ;
        particle.y = 540 + 400 * Math.random() - 200 ;


        particle.dx =  (Math.random() - 0.5) * 5;
        particle.dy = (Math.random() - 0.5) * 5;

        this.addChild(particle);
    }

    public createXY(mx: number, my: number): void {

        var particle: Particle = ParticleManager.newObject();

        //particle.setImage(ParticleManager.getTex("particle"));

        switch (this.numChildren % 3) {
            case 0:
                particle.setImage(ParticleManager.getTex("particle1"));
                break;
            case 1:
                particle.setImage(ParticleManager.getTex("particle2"));
                break;
            case 2:
                particle.setImage(ParticleManager.getTex("particle3"));
                break;
        }

        particle.x = mx;
        particle.y = my;

        if ((mx - 960) < 0) {
            particle.dx = -2 * Math.random() - 3   ;    
            particle.dy = 4 * Math.random();
        } else {
            particle.dx = 2 * Math.random() + 3;
            particle.dy = 4 * Math.random();
        }

        this.addChild(particle);
    }

    public clear(): void {
        for (var i: number = 0; i < this.numChildren; i++) {
            
            ParticleManager.deleteObject(<Particle>this.getChildAt(i));
        }

        this.removeAllChildren();

    }

    public update(): void {
        for (var i: number = 0; i < this.numChildren; i++) {
            (<Particle>this.getChildAt(i)).update();
        }

        for (var i: number = this.numChildren-1; i >=0; i--) {
            if ((<Particle>this.getChildAt(i)).isActive() == false)
            {
                ParticleManager.deleteObject(<Particle>this.getChildAt(i));
                this.removeChildAt(i);
            }
        }
    }


    public playToRight(tx: number, time: number): void {

        for (var i: number = 0; i < 10; i++) {


            var particle: Particle = ParticleManager.newObject();

            switch (this.numChildren % 3) {
                case 0:
                    particle.setImage(ParticleManager.getTex("particle1"));
                    break;
                case 1:
                    particle.setImage(ParticleManager.getTex("particle2"));
                    break;
                case 2:
                    particle.setImage(ParticleManager.getTex("particle3"));
                    break;
            }

            particle.max_count = 30 * time;

            particle.alpha = Math.random() * 0.7 + 0.3;
            particle.x = 0 - Math.random() * 1500 ;
            particle.y = 540;//+ Math.random() * 100 -50 ;
            particle.dx = Math.random() * 4 + 8 ;
            particle.dy = 2 * Math.random() - 1;

            this.addChild(particle);
        }
    }


    public playToLeft(tx: number, time: number): void {

        for (var i: number = 0; i < 10; i++) {


            var particle: Particle = ParticleManager.newObject();

            switch (this.numChildren % 3) {
                case 0:
                    particle.setImage(ParticleManager.getTex("particle1"));
                    break;
                case 1:
                    particle.setImage(ParticleManager.getTex("particle2"));
                    break;
                case 2:
                    particle.setImage(ParticleManager.getTex("particle3"));
                    break;
            }

            particle.max_count = 30 * time;

            particle.alpha = Math.random() * 0.7 + 0.3;
            particle.x = tx + Math.random() * 1500;
            particle.y = 540;//+ Math.random() * 100 -50 ;
            particle.dx = -Math.random() * 4 - 8;
            particle.dy = 2 * Math.random() - 1;

            this.addChild(particle);
        }
    }

}

