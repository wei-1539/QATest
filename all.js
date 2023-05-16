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
    console.log(singleItem);

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

        nextQA()
        console.log('nextQAnumber',nextQAnumber)
      });
    });
  }
});

let nextQAnumber = 0;

function nextQA() {
  loading.forEach((item) => {
    let loadingNumber = item.getAttribute("data-loading");
    console.log("loadingNumber", loadingNumber)
    if (nextQAnumber == loadingNumber) {
      item.classList.add("loading--show");
      setTimeout(() => {
        item.classList.remove("loading--show");
        QAcontrol.forEach((item) => {
          let QAcontrolNumber = item.getAttribute("data-QAnumber");
          console.log("QAcontrolNumber", QAcontrolNumber)
          if (nextQAnumber == QAcontrolNumber) {
            item.classList.add("QAcontrol--show", "fadeInLeft");

          }
        });
        nextQAnumber+=1
      }, 1500); 
    }
    
  });
}

const nextBtn = document.querySelector('.nextBtn')
nextBtn.addEventListener("click",()=>{
  nextQA()
})
const nextBtn2 = document.querySelector('.nextBtn2')
nextBtn2.addEventListener("click",()=>{
  nextQA()
})