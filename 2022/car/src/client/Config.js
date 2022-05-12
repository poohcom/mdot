class Config {
    // public static SCREEN_WIDTH:number = 640;
    // public static SCREEN_HEIGHT: number = 1136;
    static get SCREEN_WIDTH() {
        return window.innerWidth;
    }
    static get SCREEN_HEIGHT() {
        return window.innerHeight;
    }
    //var filter = "win16|win32|win64|mac|macintel"; 
    static IsPC() {
        var filter = "win64|mac|macintel";
        if (navigator.userAgent) {
            if (filter.indexOf(navigator.userAgent.toLowerCase()) < 0) {
                //Debug.Log("mobile");
                return false;
            }
            else {
                //Debug.Log("pc");
                return true;
            }
        }
        return false;
    }
    static VIDEO_URL(filename) {
        return document.getElementById(filename + (Config.IsPC() ? "_h" : ""));
    }
}
Config.VIEW_ANGLE = 60;
Config.ASPECT = Config.SCREEN_WIDTH / Config.SCREEN_HEIGHT;
Config.NEAR = 1;
Config.FAR = 2100;
export { Config };
