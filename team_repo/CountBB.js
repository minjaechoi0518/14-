let crandom = [];

while (crandom.length < 3) {
    let bbrandom = Math.floor(Math.random() * 10);
    if (!crandom.includes(bbrandom)) {
        crandom.push(bbrandom);
    }
}

function bb() {
    let user = document.getElementById("user-input").value;
    if (user.length !== 3) {
        alert("숫자 3개를 입력하세요");
        return;
    }

    let b = 0;
    let s = 0;

    for (let i = 0; i < 3; i++) {
        let random = crandom[i];
        let bb = Number(user[i]);

        if (random === bb) {
            s++;
        } else if (crandom.includes(bb)) {
            b++;
        }
    }
    tries = 0
    tries++
    let temp_html = `<li>
                    <p>${tries}시도</p>
                    <p>${b}B${s}S</p>
                  </li>`;
    $("#try-list").append(temp_html);

    if (s === 3) {
        alert("3 스트라이크 아웃! 게임을 종료합니다!");
        return;
    }


}
