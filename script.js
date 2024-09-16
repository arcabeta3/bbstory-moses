function chooseOption(option) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    if (option === 'enter') {
        storyText.innerHTML = '你決定進入洞穴。洞裡很暗，牆壁上佈滿了苔蘚。你隱約看到角落有幾個古老的罐子。你是想仔細觀察洞穴，還是直接去打開罐子？';
        choices.innerHTML = `
            <button onclick="chooseOption('inspect')">仔細觀察洞穴</button>
            <button onclick="chooseOption('open')">直接打開罐子</button>
        `;
    } else if (option === 'ignore') {
        storyText.innerHTML = '你決定繼續尋找走失的山羊。雖然你找到了羊，但錯過了洞穴中隱藏的巨大秘密。故事結束。';
        choices.innerHTML = '<button onclick="restart()">重新開始</button>';
    } else if (option === 'inspect') {
        storyText.innerHTML = '你仔細觀察了洞穴，發現牆壁上有一些古老的刻痕，似乎記錄著某種秘密。你還發現了一條隱秘的小通道。你想進入這個通道，還是回到罐子旁？';
        choices.innerHTML = `
            <button onclick="chooseOption('enterTunnel')">進入通道</button>
            <button onclick="chooseOption('open')">回去打開罐子</button>
        `;
    } else if (option === 'enterTunnel') {
        storyText.innerHTML = '你進入了隱秘的通道，隨著你越走越深，通道突然塌陷了。你被困在裡面，無法出去。故事結束。';
        choices.innerHTML = '<button onclick="restart()">重新開始</button>';
    } else if (option === 'open') {
        storyText.innerHTML = '你決定打開罐子。罐子裡裝著一些非常古老的卷軸。你不確定這些卷軸的價值。你是想閱讀這些卷軸，還是帶著它們去找專家鑑定？';
        choices.innerHTML = `
            <button onclick="chooseOption('readScroll')">閱讀卷軸</button>
            <button onclick="chooseOption('takeToExpert')">帶給專家鑑定</button>
        `;
    } else if (option === 'readScroll') {
        storyText.innerHTML = '你開始閱讀卷軸，發現這些卷軸是用一種古老的文字寫成，似乎記載了某種宗教教義。但你無法完全理解。你決定是把卷軸帶給專家，還是把它們留在洞穴裡？';
        choices.innerHTML = `
            <button onclick="chooseOption('takeToExpert')">帶給專家</button>
            <button onclick="chooseOption('leaveScroll')">留在洞穴裡</button>
        `;
    } else if (option === 'takeToExpert') {
        storyText.innerHTML = '你把卷軸帶給了專家，專家確認這是死海古卷——一個改變歷史的重要發現！你成為了一個發現者，名留青史！';
        choices.innerHTML = '<button onclick="restart()">重新開始</button>';
    } else if (option === 'leaveScroll') {
        storyText.innerHTML = '你決定把卷軸留在洞穴裡。後來，其他人發現了這些卷軸，並將其命名為死海古卷。但你錯過了這一歷史性的發現。';
        choices.innerHTML = '<button onclick="restart()">重新開始</button>';
    }
}

function restart() {
    document.getElementById('story-text').innerHTML = '1947年，在巴勒斯坦的庫姆蘭，一位牧童穆罕默德正在尋找走失的山羊。他發現了一個神秘的洞穴。你想進去看看嗎？';
    document.getElementById('choices').innerHTML = `
        <button onclick="chooseOption('enter')">進入洞穴</button>
        <button onclick="chooseOption('ignore')">忽略洞穴，繼續找羊</button>
    `;
}
