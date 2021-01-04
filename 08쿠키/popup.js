
function createCookie(name) {
    console.log(name);

    // 1. 쿠키 생명 주기 만들기
    var date = new Date();
    date.setDate(date.getDate()+1); // 1일 설정 

    // 2. 쿠키 형식 설정
    var cookie = "";
    cookie += name + "=true;" // 쿠키이름=값;
    cookie += "expires="+date.toUTCString(); // 시간설정
    document.cookie = cookie;
}

function getCookie(name) {
    var cookies = document.cookie.split("; "); // 공백기준 쿠키 자르기 
    // 쿠키확인
    for( var i in cookies) {
        if(cookies[i].search(name) != -1){ // 찾았다면
            return true;
            // 값이 있다면 true
            // 없다면 false를 반환
        } 
    }
}