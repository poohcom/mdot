class Config {

    private static _instance: Config = null;

    constructor() {
        if (Config._instance) {
            throw new Error("Error: Config instead of new.");
        }
        Config._instance = this;
    }

    public static BG_SIZE: number = 256;

    public static instance(): Config {
        if (Config._instance === null) {
            Config._instance = new Config();
        }
        return Config._instance;
    }

    public isChrome(): boolean
    {
        return (navigator.userAgent.indexOf('Chrome') > -1);
    }

    public fontName: string = "yoon";
    //public fontName: string = "hanna";


    public static FONT_TYPE_BOLD: number = 1;
    public static FONT_TYPE_NORMAL: number = 2;

}


//class SceneManager {
//    private static _instance: SceneManager = null;
//    public static instance(): SceneManager {
//        if (SceneManager._instance === null) {
//            SceneManager._instance = new SceneManager();
//        }
//        return SceneManager._instance;
//    }
//    constructor() {
//        if (SceneManager._instance) {
//            throw new Error("Error: Config instead of new.");
//        }
//        SceneManager._instance = this;
//    }
