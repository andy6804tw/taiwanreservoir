
const initProgress = () => {
    var box = document.getElementsByClassName("box");
    for (let key = 0; key < box.length; key++) {
        const element = box[key];
        let cnt = document.getElementById("count" + "_" + key);
        let water = document.getElementById("water" + "_" + key);
        let wave_front = document.getElementById("water_wave_front" + "_" + key);
        let wave_back = document.getElementById("water_wave_back" + "_" + key);
        let percent = cnt.innerText;
        let stopPerVal = element.getAttribute("percent");
        let interval;
        let timer = 25;
        interval = setInterval(function () {
            percent++;
            cnt.innerHTML = percent;
            water.style.transform = "translate(0" + "," + (100 - percent) + "%)";

            switch (percent) {
                case 50:
                    water.style.background = "#1f8af4";
                    wave_front.style.fill = "#1f8af4";
                    wave_back.style.fill = "#a4ccf4";
                    break;
            }

            if (percent == stopPerVal) {
                clearInterval(interval);
            }
        }, timer);
    }
}

const reservoirItem = document.getElementById('reservoirItem');
let reservoirItemHtml = '';
for (let i = 0; i < 21; i++) {
    const percent=Math.floor(Math.random() * 100)+1; 
    reservoirItemHtml += `
    <div class="col-sm-6 col-md-4 col-lg-3 my-4">
                    <h5>新山水庫(基隆)</h5>
                    <div class="box" percent="${percent}">
                        <div class="percent">
                            <div class="percentNum" id="count_${i}">0</div>
                            <div class="percentB">%</div>
                        </div>
                        <div id="water_${i}" class="water">
                            <svg viewBox="0 0 560 20" id="water_wave_back_${i}" class="water_wave water_wave_back">
                                <use xlink:href="#wave"></use>
                            </svg>
                            <svg viewBox="0 0 560 20" id="water_wave_front_${i}" class="water_wave water_wave_front">
                                <use xlink:href="#wave"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="info">
                        <span>有效蓄水量：842.40萬立方公尺</span><br>
                    <span>昨日水量上升：0.67%</span><br>
                    <span>預測剩餘天數：----</span><br>
                    <span>更新時間：2020-07-28(8時)</span>
                    </div>
                </div>
    `
}

reservoirItem.innerHTML = reservoirItemHtml;
initProgress();