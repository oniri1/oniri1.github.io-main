const elemMain = document.createElement("div");
elemMain.classList.add("two_s_container");

const elemImg = document.createElement("img");
elemImg.src = "벨류";
elemImg.alt = "알트벨류";

const elemTags = document.createElement("div");
elemTags.classList.add("project_tags");

// 2

const elemTagTitle = document.createElement("h3");
elemTagTitle.classList.add("title");
elemTagTitle.innerHTML = "타이틀 벨류";

const elemTagLibox = document.createElement("div");
elemTagLibox.classList.add("project_cates");

const listValues = [
  "사용 스택",
  "프로젝트 설명",
  "맡은 작업",
  "느낀 점",
  "배포 사이트",
];

const elemTagLis = listValues.map((value) => {
  return (document.createElement("li").innerHTML = value);
});

//   <div class="project_tags">
//     <div id="project_cates">
//       <li>사용 스택</li>
//       <li>프로젝트 설명</li>
//       <li>맡은 작업</li>
//       <li>느낀 점</li>
//       <li>배포 사이트</li>
//     </div>
//   </div>
