var drag = false;
$(document).on('mousemove', function (e) {
	if(!drag){
		return false;
	}
    var wrapWidth = $(window).outerWidth()
    currentXPosition = e.clientX
    
    var distance = currentXPosition / wrapWidth * 100
    var frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(distance / 100 * frameCount)
    );
    if (distance / 100 >= 0 && distance / 100 < 100) {
        updateImage(frameIndex + 1)
    } else if (distance / 100 < 0) {
        updateImage(0)
    } else {
        updateImage(totalFrame)
    }
    
})

$(document).on("touchmove", function (e) {
//	console.log(e.pageX); 
	
	var wrapWidth = $(window).outerWidth()
    currentXPosition = e.originalEvent.touches[0].pageX;
    
    var distance = currentXPosition / wrapWidth * 100
    var frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(distance / 100 * frameCount)
    );
    if (distance / 100 >= 0 && distance / 100 < 100) {
        updateImage(frameIndex + 1)
    } else if (distance / 100 < 0) {
        updateImage(0)
    } else {
        updateImage(totalFrame)
    }
})

$(document).on('mousedown', function (e) {
	drag = true;
})

$(document).on('mouseup', function (e) {
	drag = false;
})

$(document).ready(function () {
    clipResize();
	preloadImages();
})

$(window).resize(function () {
    clipResize()
    updateImage(0, 'c1')
    distanceX = 0
    disPer = 0
})

function clipResize() {
    var containerW = $('.video_wrap').width()
    var containerH = $('.video_wrap').height()

    $('.video_wrap > div').css('width', containerW)
    $('.video_wrap > div').css('height', containerH)
    canvas.width = containerW;
    canvas.height = containerH;

    /*
     *  Disabling following code, 
     *  because we need to show the images center cropped
    */

    /*
    var hSizeA = containerW / 100 * 56.25
    var wSizeA = containerW

    var hSizeB = containerH
    var wSizeB = containerH / 100 * 177.7778


    if (containerW > containerH) {
        if (containerH > hSizeA) {
            $('.video_wrap > div').css('width', wSizeB)
            $('.video_wrap > div').css('height', hSizeB)
        } else {
            $('.video_wrap > div').css('width', wSizeA)
            $('.video_wrap > div').css('height', hSizeA)
        }
        if (containerH > hSizeA) {
            canvas.width = wSizeB;
            canvas.height = hSizeB;
        } else {
            canvas.width = wSizeA;
            canvas.height = hSizeA;
        }
    } else {
        $('.video_wrap > div').css('width', wSizeB)
        $('.video_wrap > div').css('height', hSizeB)
        canvas.width = wSizeB;
        canvas.height = hSizeB;
    }
    */
}


const html = document.documentElement;
const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");

const totalFrame = 50;
const frameCount = 50;
const Screenleft = 55.5;
const ScreenPlus = 0.1375;
const left360 = 36;
const Plus360 = 0.05;
const gameleft = 14;
const gamePlus = 0.125;

function  icon_location_set(numbering){
	$("#roomObj").show();
	$("#room360").show();
	$("#roomScreen").show();
	var sleft = Screenleft-(numbering*ScreenPlus);
	var tleft = left360-(numbering*Plus360);
	var gleft = gameleft-(numbering*gamePlus);
	$("#room360").attr("style","top:43%;left:"+tleft+"%");
	$("#roomScreen").attr("style","top:22%;left:"+sleft+"%");
	$("#roomObj").attr("style","top:54%;left:"+gleft+"%");
}

function currentFrame(index) {
    var numbering = ('00' + index).slice(-2);
    var roomNum = 6;
	console.log(numbering);
	icon_location_set(numbering);
    return './assets/img/room/room_fun/' + String(numbering) + '.webp'
}
const preloadImages = function () {
    for (var i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
    updateImage(0)
};
const img = new Image()
img.src = currentFrame(1);

img.onload = function () {
    scaleToFill(img)
}

const updateImage = function (index, num) {
    if (index <= totalFrame) {
        img.src = currentFrame(index);
        scaleToFill(img)
    }
}

function scaleToFill(img) {
    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    var ctx = context;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

