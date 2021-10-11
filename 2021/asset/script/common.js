
$(function(){
    var currentDirection = ''; // 현재의 방향을 나타내는 변수
    var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
    $(window).scroll( $.throttle( 100, function(e) {
        var currentPos = $(this).scrollTop();
        if (currentPos > lastScrollTop){
            // 아래로 스크롤 중
            if(currentDirection != 'down') { // 마지막 방향 확인
                currentDirection = 'down';
                $("header").removeClass("up").addClass("down");
            }

        } else {
            // 위로 스크롤 중
            if(currentDirection != 'up') { // 마지막 방향 확인
                currentDirection = 'up';
                $("header").removeClass("down").addClass("up");
            }
        }
        lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장

        if(lastScrollTop == 0){
            $("header").removeClass("down").removeClass("up");
        }

        if($(document).height() - 150 < $(window).scrollTop() + $(window).height()) {
            $(".fixed-item-wrap").removeClass("on");
        }else{
            $(".fixed-item-wrap").addClass("on");
        }
    }));

    $("body").on("click", ".dance-create-wrap .item-select-list li a", function(){
        $(".dance-create-wrap .item-select-list li a").removeClass("on");
        $(this).addClass("on");
    });
    $("body").on("click", ".native-select-list ul li a", function(){
        $(".native-select-list ul li a").removeClass("on");
        $(this).addClass("on");
    });
    $("body").on("click", ".play-result-wrap ul li a", function(){
        $(".play-result-wrap ul li a").removeClass("on");
        $(this).addClass("on");
    });
    $("body").on("click", ".paint-upload-wrap .file-group-wrap .file-item-wrap button", function(){
        $(this).prev(".hidden").trigger("click");
    });


});

common = {
    popOpen:function(o){
        $(o).addClass("ing");
        setTimeout(function(){
            $(o).addClass("on");
        },200);
    },
    popClose:function(o){
        $(o).removeClass("on");
        setTimeout(function(){
            $(o).removeClass("ing");
        },500)
    }
}
