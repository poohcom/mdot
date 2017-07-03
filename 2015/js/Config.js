var Config = (function () {
    function Config() {
        this.fontName = "yoon";
        if (Config._instance) {
            throw new Error("Error: Config instead of new.");
        }
        Config._instance = this;
    }
    Config.instance = function () {
        if (Config._instance === null) {
            Config._instance = new Config();
        }
        return Config._instance;
    };
    Config.prototype.isChrome = function () {
        return (navigator.userAgent.indexOf('Chrome') > -1);
    };
    Config._instance = null;
    Config.BG_SIZE = 256;
    return Config;
})();
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
//# sourceMappingURL=Config.js.map