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
    Config.FONT_TYPE_BOLD = 1;
    Config.FONT_TYPE_NORMAL = 2;
    return Config;
})();
//# sourceMappingURL=Config.js.map