function changeBackgroundColor() {
  // ここに背景色を変える処理を書く。
  if (check.checked) {
    document.getElementById("text").style.backgroundColor = "red";
  } else {
    document.getElementById("text").style.backgroundColor = "";
  }
}
