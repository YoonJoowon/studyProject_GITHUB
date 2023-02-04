// 내장기능 : window = 브라우저 전체, 전체영역에서 인수를 받아서 함수를 실행 
(function(window, document){

'use strict';

// queraSelectorAll 'toggle'이라는 선택자들을 모두 선택한다. html의 toggle
const $toggles = document.querySelectorAll('.toggle');
// toggle-btn이라는..
const $togglebtn = document.getElementById('toggle-btn');

// 마우스 클릭이라는 움직임이 있었을 때 - addEventListener 가 감지를 한다
$togglebtn.addEventListener('click', function(){
    // 여기서 실행이 됨
    toggleElements()
})

// 준비시킨 기능들
function toggleElements(){
    // html의 toggle을 받아오고 on을 통해서 css의 display block을 작동하게함
    [].forEach.call($toggles, function(toggle){
        toggle.classList.toggle('on')
    });
}


})(window, document)
