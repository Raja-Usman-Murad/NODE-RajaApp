function myfun() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  height = height * 12;
  height = height * 0.025;

  let finalvalue = weight / (height * height);
  finalvalue = Math.round(finalvalue);
  let bmivalue = (document.getElementById("bmivalue").value = finalvalue);
}
