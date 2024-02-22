var wW = $(window).outerWidth()

class ResizeManager {
    constructor() {
        this.setSizeNormalScale = (ratio, left, top) => {
            wW = $(window).outerWidth()
            if(wW >= 1200) {
                //$(".resize-wrap")  resize할 객체
                // $(".resize-wrap").css({ "transform": "" });
                $(".resize-wrap").each((i, dom)=>{
                    
                    let transformCss = "scale(" + ratio + ")"

                    if($(dom).hasClass('tr-x-50')){
                        transformCss = "translateX(-50%) scale(" + ratio + ")"                    
                    } else if($(dom).hasClass('tr-xy-50')){
                        transformCss = "translate(-50%, -50%) scale(" + ratio + ")"                    
                    }

                    $(dom).css({ "transform": transformCss });

                })
                // $(".resize-wrap").css({ left: left + "px", top: top + "px" });
            }
        };
        this.onWindowResizeNormalHorizontal = () => {
            wW = $(window).outerWidth()
            if(wW >= 1200) {
                // pc 기준 해상도
                let defaultWidth = 1920;
                let defaultHeight = 1080;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                let top = 0;
                let left = 0;
                let ratio = 1;
                ratio = (windowWidth) / defaultWidth;
                let resultWidth = ratio * defaultWidth;
                let resultHeight = ratio * defaultHeight;
                if (resultHeight > windowHeight) {
                    ratio = (windowHeight) / defaultHeight;
                    resultWidth = ratio * defaultWidth;
                    resultHeight = ratio * defaultHeight;
                }
                left = Math.floor((windowWidth - resultWidth) / 2);
                top = Math.floor((windowHeight - resultHeight) / 2);
                this.setSizeNormalScale(ratio, left, top);
                return { ratio, resultWidth, resultHeight };
            }
        };
        this.onWindowResize = () => {
            return this.onWindowResizeNormalHorizontal();
        };
        window.addEventListener('resize', this.onWindowResize);
        this.onWindowResize();
    }
}
export default ResizeManager;