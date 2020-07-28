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
  interval = setInterval(function() {
    percent++;
    cnt.innerHTML = percent;
    water.style.transform = "translate(0" + "," + (100 - percent) + "%)";

    switch (percent) {
      case 0:
        water.style.background = "#f41f1f";
        wave_front.style.fill = "#f41f1f";
        wave_back.style.fill = "#f44542";
        break;
      case 25:
        water.style.background = "#f4981f";
        wave_front.style.fill = "#f4981f";
        wave_back.style.fill = "#f4c689";
        break;
      case 50:
        water.style.background = "#eaf41f";
        wave_front.style.fill = "#eaf41f";
        wave_back.style.fill = "#f3f7a0";
        break;
      case 75:
        water.style.background = "#1ff4cd";
        wave_front.style.fill = "#1ff4cd";
        wave_back.style.fill = "#adf7e9";
        break;
      case 100:
        water.style.background = "#1f8af4";
        wave_front.style.fill = "#1f8af4";
        wave_back.style.fill = "#a4ccf4";
        break;
    }

    if (percent == stopPerVal) {
      clearInterval(interval);
    }
  }, 60);
}
