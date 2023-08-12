import answers, { positiveAnswers, negativeAnswers } from "./ballAnswers.mjs";
import "../styles/styles.css";
import ballImg from "../images/magic8ball.png";

document.querySelector("img").src = ballImg;

const shakeBall = ({ target }) => {
  target.disabled = true;
  const ball = document.querySelector(".ball-area");
  let vibroForceInPx = 350;

  const intervalId = setInterval(() => {
    vibroForceInPx = -vibroForceInPx;
    ball.style.transform = `translateY(${vibroForceInPx}px)`;
  }, 200);

  setTimeout(() => {
    clearInterval(intervalId);
    ball.style.transform = `translate(${0}px,${0}px)`;
    target.disabled = false;
  }, 2000);

  getAnswer(answers);
};

const getAnswer = (answersArr) => {
  const text = document.querySelector(".text-js");
  const answer = answersArr[getRandomRangedNum(answersArr.length)];

  text.classList.add("hidden");
  text.textContent = " ";
  text.style.color = getOmenColor(answer);

  setTimeout(() => {
    text.textContent = answer;
    text.classList.remove("hidden");
  }, 2500);
};

const getOmenColor = (answer) => {
  return positiveAnswers.includes(answer)
    ? "#51d44d"
    : negativeAnswers.includes(answer)
    ? "#e61414"
    : "#fff";
};

const getRandomRangedNum = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

document.querySelector(".prediction-btn").addEventListener("click", shakeBall);
