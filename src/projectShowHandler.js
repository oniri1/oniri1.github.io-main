const chatSiteValues = {
  skillsTitle: "Colosseum",
  skillsDetail:
    "팀장으로서 FrontEnd와 BackEnd를 담당하며 Socket.io, MongoDB를 R&D하여 실시간 통신을 구현하였습니다.",
  skillsImg: `<a href="https://main.oniri1.com/chatSite/" target="_blank"><img src="./images/projects/chatSite.jpg" style="width: 100%; height: 100%;" alt="project1"></a>`,
  skillsLibrary: `<img src="./images/Js.png" alt="JavaScript"class="mainStack_logo">`,
  skillsLibraryJob: `<li>CSR</li>`,
  skillsFrameWork: `<li>cookie-parser</li><li>sequelize</li><li>mongodb</li><li>multer</li>`,
  skillsFrameWorkJob: `<li>서버 전체 구현</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1gye06OWaA1VnIj6k7zW0eCBuw98OzT5V",
  skillLogos: `<img src="./images/HTML.png" alt="HTML" class="mainStack_logo"><img src="./images/cssLogo.png" alt="css"class="mainStack_logo"><img src="./images/Js.png" alt="JavaScript"class="mainStack_logo"><img src="./images/express.png" alt="express"class="mainStack_logo"><img src="./images/socket.png" alt="socket.io"class="mainStack_logo"><img src="./images/Axios.png" alt="axios"class="mainStack_logo"><img src="./images/mySQL.png" alt="mySQL"class="mainStack_logo"><img src="./images/mongoDB.png" alt="mongoDB"class="mainStack_logo">`,
};
//

const shopSiteValues = {
  skillsTitle: "Hamster_Market",
  skillsDetail:
    "프론트엔드와 글쓰기 페이지와 유저 페이지를 중점으로 구현하고 NaverMap,OAuth를 R&D 하여 프로젝트에 적용 시켰습니다.",
  skillsImg: `<a href="https://main.oniri1.com/twoProject/front" target="_blank"><img src="./images/projects/HamsterMarket.png" style="width: 100%; height: 100%;" alt="project2"></a>`,
  skillsLibrary: `<li>react-query</li><li>react-router-dom</li><li>recoil</li><li>Observer</li>`,
  skillsLibraryJob: `<li>유저 페이지 구현</li><li>게시글 쓰기 페이지 구현</li><li>전체적인 데이터 처리</li><li>React Warning 수정</li><li>NaverMap 구현</li>`,
  skillsFrameWork: `<img src="./images/express.png" alt="express"class="mainStack_logo">`,
  skillsFrameWorkJob: `<li>OAuth 코드 구현</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1yF5krXC3MG6jJQ8BB1w6SqyAyIUU7y94",
  skillLogos: `<img src="./images/react.png" alt="react" class="mainStack_logo"><img src="./images/tailwindcss.png" alt="tailwindcss"class="mainStack_logo"><img src="./images/express.png" alt="express"class="mainStack_logo"><img src="./images/TS.png" alt="TypeScript"class="mainStack_logo"><img src="./images/oAuth.png" alt="OAuth"class="mainStack_logo"><img src="./images/naverMap.png" alt="naverMap"class="mainStack_logo"><img src="./images/Axios.png" alt="axios"class="mainStack_logo"><img src="./images/mySQL.png" alt="mySQL"class="mainStack_logo"><img src="./images/mongoDB.png" alt="mongoDB"class="mainStack_logo">`,
};

//
const openAiValues = {
  skillsTitle: "AI_InterViewSite",
  skillsDetail:
    "Next.js와 Nest.js, OpenAI를 R&D하여 사용자 인터뷰 및 답변에 대한 피드백을 받을 수 있는 AI 서비스 프로젝트를 만들었습니다.",
  skillsImg: `<a href="https://main.oniri1.com/openAiProject/" target="_blank"><img src="./images/projects/openAI.png" style="width: 100%; height: 100%;" alt="project3"></a>`,
  skillsLibrary: `<img src="./images/Next.png" alt="next" class="mainStack_logo">`,
  skillsLibraryJob: `<img src="./images/Next.png" alt="next" class="mainStack_logo">`,
  skillsFrameWork: `<li>typeorm</li><li>mongoose</li><li>jsonwebtoken</li><li>session-file-store</li><li>crypto</li>`,
  skillsFrameWorkJob: `<li>openAI Fine tuning</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1rFDuQeqd_2wfpaOXx_e4-SdKtgtldlu2",

  skillLogos: `<img src="./images/Next.png" alt="next" class="mainStack_logo"><img src="./images/Nest.png" alt="nest"class="mainStack_logo"><img src="./images/tailwindcss.png" alt="tailwindcss"class="mainStack_logo"><img src="./images/TS.png" alt="TypeScript"class="mainStack_logo"><img src="./images/AI.png" alt="openAI"class="mainStack_logo"><img src="./images/Axios.png" alt="axios"class="mainStack_logo"><img src="./images/mySQL.png" alt="mySQL"class="mainStack_logo"><img src="./images/mongoDB.png" alt="mongoDB"class="mainStack_logo">`,
};

const skillChanger = ({
  skillsTitle,
  skillsDetail,
  skillsImg,
  skillsLibrary,
  skillsLibraryJob,
  skillsFrameWork,
  skillsFrameWorkJob,
  skillsHref,
  skillLogos,
}) => {
  const title = document.getElementById("skillsTitle");
  const detail = document.getElementById("skillsDetail");
  const img = document.getElementById("skillsImg");

  const library = document.getElementById("addLibFront");
  const libWork = document.getElementById("myJobFront");

  const framework = document.getElementById("addLibBack");
  const fraWork = document.getElementById("myJobBack");

  const link = document.getElementById("skillsHref");
  const logos = document.getElementById("skillsLogosC");

  title.innerText = skillsTitle;
  detail.innerHTML = skillsDetail;
  img.innerHTML = skillsImg;
  library.innerHTML = skillsLibrary;
  libWork.innerHTML = skillsLibraryJob;
  framework.innerHTML = skillsFrameWork;
  fraWork.innerHTML = skillsFrameWorkJob;
  logos.innerHTML = skillLogos;
  link.setAttribute("href", skillsHref); // 새로운 href 설정
};

const projectAll = document.getElementById("projectClick");

projectAll.onclick = (e) => {
  const projectElement = e.target.closest("[data-projectid]");
  if (projectElement) {
    const id = projectElement.getAttribute("data-projectid");

    if (id) {
      if (id === "1") {
        skillChanger(chatSiteValues);
      }
      if (id === "2") {
        skillChanger(shopSiteValues);
      }
      if (id === "3") {
        skillChanger(openAiValues);
      }
    }
  }
};

skillChanger(openAiValues);
