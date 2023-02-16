function calorieCalculator() {
  let calc = document.querySelector("#calc");
  let age = document.querySelector("#age");
  let height = document.querySelector("#height");
  let weight = document.querySelector("#weight");
  let activityLevel = document.querySelector("#activity_level");
  let goal = document.querySelectorAll(".goal_btn");
  let result = document.querySelector(".result");
  let active = "";
  let minWeight = 30;
  let minheight = "";
  let minage = 15;

  goal.forEach((e) => {
    e.onclick = function () {
      goal.forEach((e) => {
        e.classList.remove("active");
      });
      e.classList.add("active");
      active = document.querySelector(".active").dataset.goal;
    };
  });
  function error(e) {
    let text = e.getAttribute("name");
    let input_parent = e.parentElement;
    let error_meg = input_parent.querySelector(".input-alert");
    e.setCustomValidity(`plase Enter ${text}`);
    e.classList.add("error");
    error_meg.classList.add("error_text");
    error_meg.innerHTML = `plase Enter ${text}`;
    e.placeholder = `Enter ${text}`;
  }
  function validated(e) {
    let input_parent = e.parentElement;
    let error_meg = input_parent.querySelector(".input-alert");
    error_meg.innerHTML = ``;
    e.classList.remove("error");
  }
  function validation(input) {
    if (
      input.value.length <= 0 ||
      !Number.isInteger(parseFloat(input.value)) ||
      input.value.length < input.minLength
    ) {
      error(input);
    } else {
      if (input === age && age.value < minage) {
        error(input);
      } else if (input === weight && weight.value < minWeight) {
        error(input);
      } else {
        validated(input);
      }
    }
  }
  calc.onclick = function () {
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let numGender = gender === "male" ? 5 : -161;

    let theResult = `${Math.floor(
      Math.floor(
        10 * weight.value + 6.25 * height.value - 5 * age.value + numGender
      ) *
        activityLevel.value +
        Math.floor(active)
    )} Calories/day`;
    if (
      theResult === "NaN Calories/day" ||
      weight.value < minWeight ||
      height.value.length < height.maxLength ||
      age.value < minage
    ) {
      result.style.display = "none";
      result.innerHTML = "";
    } else {
      result.style.display = "block";
      result.innerHTML = theResult;
    }

    validation(age);
    validation(height);
    validation(weight);
  };
}
calorieCalculator();

/* calc age */

var today = Date.now();
let birthday = new Date(2019, 12, 8);
/* console.log("birthday: ", new Date(2005, 6, 5).getDay());
 */ let years = (today - birthday) / 1000 / 60 / 60 / 24 / 365.5;
console.log("years: ", years);
let month = (((today - birthday) / 1000 / 60 / 60 / 24) % 365.5) / 30;
console.log("month: ", Math.floor(month));
let day = (((today - birthday) / 1000 / 60 / 60 / 24) % 365.5) % 30;
console.log("day: ", Math.floor(day));
