// 每一道
const QAcontrol = document.querySelectorAll(".QAcontrol");
// 讀取畫面
const loading = document.querySelectorAll(".loading");
// 所有的答案的選項
const singleList = document.querySelectorAll(".singleList");

singleList.forEach((item, QAind) => {
  // 取得是哪一題的答案的選項
  let answerNumber = item.getAttribute("data-answerNumber");
  // 判斷是哪一題的答案選項
  if (QAind == answerNumber) {
    // 選擇的答案【分辨出是哪道題的答案】
    const singleItem = document.querySelectorAll(
      `[data-answerNumber = '${answerNumber}'] .singleItem`
    );

    singleItem.forEach((answerBTN) => {
      // 判斷點擊哪個
      answerBTN.addEventListener("click", () => {
        // 點擊後便顏色
        answerBTN.classList.add("singleItem--active");

        singleItem.forEach((answerClick) => {
          // 判斷那些沒點擊到【並移除】
          if (answerBTN != answerClick) {
            answerClick.classList.add("singleItem--close");
          }
        });

        nextQA(answerNumber);
      });
    });
  }
});

let nextQAnumber = 0;
// 顯示下一道題目
function nextQA(number) {
  console.log(number);
  loading.forEach((item, ind) => {
    if (ind != number) {
      return;
    } else {
      let loadingNumber = item.getAttribute("data-loading");
      console.log("loadingNumber ", `第${ind}個`, loadingNumber);
      if (nextQAnumber == loadingNumber) {
        item.classList.add("loading--show");
        setTimeout(() => {
          item.classList.remove("loading--show");
          QAcontrol.forEach((item) => {
            let QAcontrolNumber = item.getAttribute("data-QAnumber");
            if (nextQAnumber == QAcontrolNumber) {
              item.classList.add("QAcontrol--show", "fadeInLeft");
              scrollBottom(item);
            }
          });
          nextQAnumber += 1;
        }, 1500);
      }
    }
  });
}
// 點擊滾動到指定位子
function scrollBottom(el) {
  console.log(el.offsetTop);
  window.scrollTo({ behavior: "smooth", top: el.offsetTop - 10 });
}

// 選取下一題的按鈕【不是多選一按鈕】
const nextBtn = document.querySelectorAll(".nextBtn");

nextBtn.forEach((item, ind) => {
  item.addEventListener("click", () => {
    console.log(ind);
    if (ind + 3 != nextQAnumber) {
      return;
    } else {
      scrollBottom2();
      nextQA(nextQAnumber);
    }
  });
});
// 選取下一題的按鈕【不是多選一按鈕】先讓loading出來
function scrollBottom2() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

// 有Tips的功能
const singleItemTip = document.querySelectorAll(".singleItemTip");
const tips = document.querySelectorAll(".tips");
singleItemTip.forEach((item, ind) => {
  item.addEventListener("click", () => {
    item.classList.add("singleItemTip--active");
    tips[ind].classList.add("tips--show");
    singleItemTip.forEach((checkItem, checkInd) => {
      if (item != checkItem) {
        // console.log(checkItem);
        checkItem.classList.remove("singleItemTip--active");
        tips[checkInd].classList.remove("tips--show");
      }
    });
  });
});
