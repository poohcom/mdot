import { Debug } from "./Debug";
class Config {

      // public static SCREEN_WIDTH:number = 640;
      // public static SCREEN_HEIGHT: number = 1136;


      public static get SCREEN_WIDTH(): number {
            return window.innerWidth;
      }

      public static get SCREEN_HEIGHT(): number {
            return window.innerHeight;
      }


      public static VIEW_ANGLE = 60;
      public static ASPECT = Config.SCREEN_WIDTH / Config.SCREEN_HEIGHT;
      public static NEAR = 1;
      public static FAR = 2100;


      //var filter = "win16|win32|win64|mac|macintel"; 
      public static IsPC(): boolean {
            var filter = "win64|mac|macintel";

            if (navigator.userAgent) {
                  if (filter.indexOf(navigator.userAgent.toLowerCase()) < 0) {
                        //Debug.Log("mobile");
                        return false;
                  } else {
                        //Debug.Log("pc");
                        return true;
                  }
            }
            return false;

      }

      public static VIDEO_URL(filename: string): HTMLVideoElement {
            return document.getElementById(filename + ( Config.IsPC() ? "_h" : "") ) as HTMLVideoElement;

      }

      

    // function isSafari() {

    //     return !! navigator.userAgent.match( /Safari/i ) && ! navigator.userAgent.match( /Chrome/i );

    // }

}

export { Config }
