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

const totalFrame = 40;
const frameCount = 40;

const leftScreen = 24;
const plusScreen = 0.75;
const leftgame = 23;
const plusgame = 0.5;
const left360 = 70.9;
const plus360 = 0.225;

function  icon_location_set(numbering){
	$("#roomObj").show();
	$("#room360").show();
	$("#roomScreen").show();
	
	
	var gleft = leftgame-(numbering*plusgame);
	var tleft = left360-(numbering*plus360);
	
	if(numbering >= 0 && numbering <= 15){
		var sleft = 23+(numbering*0.8);
		$("#roomScreen").attr("style","top:32%;left:"+sleft+"%");	
	}else if(numbering >= 15 && numbering <= 33){
		var sleft = 21+((numbering)*1);
		$("#roomScreen").attr("style","top:32%;left:"+sleft+"%");	
	}else{
		var sleft = 23+(numbering);
		$("#roomScreen").attr("style","top:32%;left:54.6%");	
	}
	
	if(numbering >= 0 && numbering <= 17){
		$("#room360").attr("style","top:36%;left:"+tleft+"%");
	}else{
		var tleft = 82-(numbering*0.1);		
	}
	
	if(numbering >= 0 && numbering <= 22){
		$("#roomObj").attr("style","top:62.2%;left:"+gleft+"%");
	}else{
		gleft = 12-((numbering-22)*0.2);
		$("#roomObj").attr("style","top:62.2%;left:"+gleft+"%");
	}
	
}
function currentFrame(index) {
    var numbering = ('00' + index).slice(-2);
    var roomNum = 3;
	console.log(numbering);
	icon_location_set(numbering);
    return './assets/img/room/room_03/' + String(numbering) + '.webp'
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

