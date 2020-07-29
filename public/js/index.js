
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
// 疫情統計
axios.get(`https://www.taiwanstat.com/waters/latest`)
    .then((response) => {
        var dataObject = response.data;
        const reservoirList=['新山水庫','翡翠水庫','石門水庫','永和山水庫','寶山水庫','寶山第二水庫','明德水庫','鯉魚潭水庫'
        ,'德基水庫','石岡壩','日月潭水庫','霧社水庫','湖山水庫','仁義潭水庫','蘭潭水庫'
        ,'白河水庫','曾文水庫','烏山頭水庫','南化水庫','阿公店水庫','牡丹水庫']
        console.log(Object.keys(dataObject[0]).length)
        // render DOM
        for (let i = 0; i < Object.keys(dataObject[0]).length; i++) {
            const percent = Math.floor(Math.random() * 100) + 1;
            const name=reservoirList[i];
            const percentage=Math.floor(dataObject[0][reservoirList[i]].percentage);
            const volumn=dataObject[0][reservoirList[i]].volumn;
            const daliyInflow= dataObject[0][reservoirList[i]].daliyInflow;
            const updateAt=dataObject[0][reservoirList[i]].updateAt;


            if(reservoirList[i]==='新山水庫')
                reservoirItemHtml+='<h3 class="region text-left col-12" id="north">北部</h3>';
            else if(reservoirList[i]==='永和山水庫')
                reservoirItemHtml+='<h3 class="region text-left col-12" id="central">中部</h3>';
            else if(reservoirList[i]==='仁義潭水庫')
            reservoirItemHtml+='<h3 class="region text-left col-12" id="south">南部</h3>';
            reservoirItemHtml += `
            <div class="col-sm-6 col-md-4 col-lg-3 my-4">
                            <h5>${name}</h5>
                            <div class="box" percent="${percentage}">
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
                                <span>有效蓄水量：${volumn}萬立方公尺</span><br>
                            <span>今日進水量：${daliyInflow}萬立方公尺</span><br>
                            <span>更新時間：${updateAt}</span>
                            </div>
                        </div>
            `
        }
        reservoirItem.innerHTML = reservoirItemHtml;
        initProgress();
    },
        (error) => {
            var message = error.response.data.message;
        }
    );


