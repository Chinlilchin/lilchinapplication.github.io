////兩百字內的個人簡介
const introNone = document.querySelector("#introNone");
const introHere = document.querySelector("#introHere");
const introPara = document.querySelector("#introPara");
const introBorder = document.querySelector("#introBorder");

//為了成為軟體工程師，曾做過什麼努力
const effortNone = document.querySelector("#effortNone");
const effortHere = document.querySelector("#effortHere");
const effortPara = document.querySelector("#effortPara");
const effortBorder = document.querySelector("#effortBorder");

//如果參與這個計劃，會怎麼安排學習時間
const learning = document.querySelector("#learningNone");
const learningUp = document.querySelector("#learningHere");
const learningPara = document.querySelector("#learningPara");
const learningBorder = document.querySelector("#learningBorder");

// 是否有想要加入的軟體公司?為什麼想加入該公司?
const jobNone = document.querySelector("#jobNone");
const jobHere = document.querySelector("#jobHere");
const jobPara = document.querySelector("#jobPara");
const jobBorder = document.querySelector("#jobBorder");

//請描述一件你曾經碰到最困難的事情，如何克服?
const difficultNone = document.querySelector("#difficultNone");
const difficultHere = document.querySelector("#difficultHere");
const difficultPara = document.querySelector("#difficultPara");
const difficultBorder = document.querySelector("#difficultBorder");

//關於這份申請網頁，請分享一個你開發時的心得。
const applyNone = document.querySelector("#applyNone");
const applyHere = document.querySelector("#applyHere");
const applyPara = document.querySelector("#applyPara");
const applyBorder = document.querySelector("#applyBorder");
//其他想要對我們說的事情?
const otherNone = document.querySelector("#otherNone");
const otherHere = document.querySelector("#otherHere");
const otherPara = document.querySelector("#otherPara");
const questionBorder = document.querySelector("#questionBorder");


//兩百字內的個人簡介
function changeToIntroHere() {
  introNone.style.display = "none";
  introHere.style.display = "block";
  introPara.style.display = "block";
  introBorder.style.borderBottomRightRadius = "0px";
  introBorder.style.borderBottomLeftRadius = "0px";
  introPara.style.borderTopRightRadius = "0px";
  introPara.style.borderTopLeftRadius = "0px";
}

function changeToIntroNone() {
  introNone.style.display = "block";
  introHere.style.display = "none";
  introPara.style.display = "none";
  introBorder.style.borderBottomRightRadius = "20px";
  introBorder.style.borderBottomLeftRadius = "20px";
}

//為了成為軟體工程師，曾做過什麼努力
function changeToeffortHere() {
  effortNone.style.display = "none";
  effortHere.style.display = "block";
  effortPara .style.display = "block";
  effortBorder.style.borderBottomRightRadius = "0px";
  effortBorder.style.borderBottomLeftRadius = "0px";
  effortPara.style.borderTopRightRadius = "0px";
  effortPara.style.borderTopLeftRadius = "0px";
}

function changeToeffortNone() {
  effortNone.style.display = "block";
  effortHere.style.display = "none";
  effortPara.style.display = "none";
  effortBorder.style.borderBottomRightRadius = "20px";
  effortBorder.style.borderBottomLeftRadius = "20px";
}

//如果參與這個計劃，會怎麼安排學習時間
function learningNone() {
  learning.style.display = "none";
  learningUp.style.display = "block";
  learningPara.style.display = "block";
  learningBorder.style.borderBottomRightRadius = "0px";
  learningBorder.style.borderBottomLeftRadius = "0px";
  learningPara.style.borderTopRightRadius = "0px";
  learningPara.style.borderTopLeftRadius = "0px";
}

function learningShow() {
  learning.style.display = "block";
  learningUp.style.display = "none";
  learningPara.style.display = "none";
  learningBorder.style.borderBottomRightRadius = "20px";
  learningBorder.style.borderBottomLeftRadius = "20px";
}

// 是否有想要加入的軟體公司?為什麼想加入該公司?
function changeToJobHere() {
  jobNone.style.display = "none";
  jobHere.style.display = "block";
  jobPara.style.display = "block";
  jobBorder.style.borderBottomRightRadius = "0px";
  jobBorder.style.borderBottomLeftRadius = "0px";
  jobPara.style.borderTopRightRadius = "0px";
  jobPara.style.borderTopLeftRadius = "0px";
}

function changeToJobNone() {
  jobNone.style.display = "block";
  jobHere.style.display = "none";
  jobPara.style.display = "none";
  jobBorder.style.borderBottomRightRadius = "20px";
  jobBorder.style.borderBottomLeftRadius = "20px";
}

//請描述一件你曾經碰到最困難的事情，如何克服?
function changeToDifficultHere() {
  difficultNone.style.display = "none";
  difficultHere.style.display = "block";
  difficultPara.style.display = "block";
  difficultBorder.style.borderBottomRightRadius = "0px";
  difficultBorder.style.borderBottomLeftRadius = "0px";
  difficultPara.style.borderTopRightRadius = "0px";
  difficultPara.style.borderTopLeftRadius = "0px";
}

function changeToDifficultNone() {
  difficultNone.style.display = "block";
  difficultHere.style.display = "none";
  difficultPara.style.display = "none";
  difficultBorder.style.borderBottomRightRadius = "20px";
  difficultBorder.style.borderBottomLeftRadius = "20px";
}

//關於這份申請網頁，請分享一個你開發時的心得。
function changeToApplyHere() {
  applyNone.style.display = "none";
  applyHere.style.display = "block";
  applyPara.style.display = "block";
  applyBorder.style.borderBottomRightRadius = "0px";
  applyBorder.style.borderBottomLeftRadius = "0px";
  applyPara.style.borderTopRightRadius = "0px";
  applyPara.style.borderTopLeftRadius = "0px";
  
}

function changeToApplyNone() {
  applyNone.style.display = "block";
  applyHere.style.display = "none";
  applyPara.style.display = "none";
  applyBorder.style.borderBottomRightRadius = "20px";
  applyBorder.style.borderBottomLeftRadius = "20px";
}

//其他想要對我們說的事情?
function changeToOtherHere() {
  otherNone.style.display = "none";
  otherHere.style.display = "block";
  otherPara.style.display = "block";
  questionBorder.style.marginBottom = "0";
  questionBorder.style.borderBottomRightRadius = "0px";
  questionBorder.style.borderBottomLeftRadius = "0px";
  otherPara.style.borderTopRightRadius = "0px";
  otherPara.style.borderTopLeftRadius = "0px";
}

function changeToOtherNone() {
  otherNone.style.display = "block";
  otherHere.style.display = "none";
  otherPara.style.display = "none";
  questionBorder.style.marginBottom = "20px";
  questionBorder.style.borderBottomRightRadius = "20px";
  questionBorder.style.borderBottomLeftRadius = "20px";
}
