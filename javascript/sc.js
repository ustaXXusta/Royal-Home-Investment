const abs = document.getElementById("abs");
const abs1 = document.getElementById("abs1");
const abs2 = document.getElementById("abs2");
const abs3 = document.getElementById("abs3");
const xIcon = document.getElementById("xIcon");
const xIcon1 = document.getElementById("xIcon1");
const xIcon2 = document.getElementById("xIcon2");
const xIcon3 = document.getElementById("xIcon3");
const open = document.getElementById("open");
const open1 = document.getElementById("open1");
const open2 = document.getElementById("open2");
const open3 = document.getElementById("open3");
xIcon.addEventListener("click", () => {
  abs.style.display = "none";
});
xIcon1.addEventListener("click", () => {
  abs1.style.display = "none";
});
xIcon2.addEventListener("click", () => {
  abs2.style.display = "none";
});
xIcon3.addEventListener("click", () => {
  abs3.style.display = "none";
});
open.addEventListener("click", () => {
  abs.style.display = "block";
});
open1.addEventListener("click", () => {
  abs1.style.display = "block";
});
open2.addEventListener("click", () => {
  abs2.style.display = "block";
});
open3.addEventListener("click", () => {
  abs3.style.display = "block";
});
