// 내장기능 : window = 브라우저 전체, 전체영역에서 인수를 받아서 함수를 실행 
(function(window, document){

    'use strict';

    // queraSelectorAll 'toggle'이라는 선택자들을 모두 선택한다. html의 .toggle 선택
    const $toggles = document.querySelectorAll('.toggle');
    // toggle-btn이라는 id를 특정 이 아이디가 해당하는 영역을 담음 / #안써도 됨 id라고 특정이 되져있기 때문
    const $togglebtn = document.getElementById('toggle-btn');

    // 1. 토글버튼 이미지 click 이벤트
    // 마우스 클릭이라는 움직임이 있었을 때 - addEventListener 가 감지를 한다
    $togglebtn.addEventListener('click', function(){
        // 여기서 실행이 됨
        toggleElements()
    })

    // 준비시킨 기능들 / 위의 togglElements() 의 실행문
    function toggleElements(){
        // html의 toggle을 받아오고 on을 통해서 css의 display block을 작동하게함
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on')
        });
    }

    // 2. 토글메뉴들 (좌, 우) 브라우저 크기 변경시 안보이게 하는 이벤트
    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            offElements();
        }
    })

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        })
    }

})(window, document)
