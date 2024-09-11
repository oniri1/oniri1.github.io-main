const chatSiteValues = {
  skillsTitle: "Colosseum",
  skillsDetail:
    "팀장으로서 FrontEnd와 BackEnd를 담당하며 Socket.io, MongoDB를 R&D하여 실시간 통신을 구현하였습니다.",
  skillsImg: `<a href="https://main.oniri1.com/chatSite/" target="_blank"><img src="./images/projects/chatSite.jpg" style="width: 100%; height: 100%;" alt="project1"></a>`,
  skillsLibrary: `<li class="bar"><div class="bar__metadata"><span class="skills__title">FrontEnd</span><span>60%</span></div><div class="bar__bg"><div class="bar__value" style="width: 60%"></div></div></li><li>전체 페이지 데이터 처리</li>`,
  skillsFrameWork: `<li class="bar"><div class="bar__metadata"><span class="skills__title">BackEnd</span><span>100%</span></div><div class="bar__bg"><div class="bar__value" style="width: 100%"></div></div></li><li>cookie-parser</li><li>sequelize</li><li>mongodb</li><li>multer</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1gye06OWaA1VnIj6k7zW0eCBuw98OzT5V",
};
//

const shopSiteValues = {
  skillsTitle: "Hamster_Market",
  skillsDetail:
    "프론트엔드와 글쓰기 페이지와 유저 페이지를 중점으로 구현하고 NaverMap,OAuth를 R&D 하여 프로젝트에 적용 시켰습니다.",
  skillsImg: `<a href="https://main.oniri1.com/twoProject/front" target="_blank"><img src="./images/projects/HamsterMarket.png" style="width: 100%; height: 100%;" alt="project2"></a>`,
  skillsLibrary: `<li class="bar"><div class="bar__metadata"><span class="skills__title">FrontEnd</span><span>70%</span></div><div class="bar__bg"><div class="bar__value" style="width: 70%"></div></div></li><li>react-query</li><li>react-router-dom</li><li>recoil</li><li>Observer</li><li>유저 페이지 구현</li><li>게시글 쓰기 페이지 구현</li><li>전체적인 데이터 처리</li><li>React Warning 수정</li>`,
  skillsFrameWork: `<li class="bar"><div class="bar__metadata"><span class="skills__title">BackEnd</span><span>20%</span></div><div class="bar__bg"><div class="bar__value" style="width: 20%"></div></div></li><li>OAuth 코드 구현</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1yF5krXC3MG6jJQ8BB1w6SqyAyIUU7y94",
};

//
const openAiValues = {
  skillsTitle: "AI_InterViewSite",
  skillsDetail:
    "Next.js와 Nest.js, OpenAI를 R&D하여 사용자 인터뷰 및 답변에 대한 피드백을 받을 수 있는 AI 서비스 프로젝트를 만들었습니다.",
  skillsImg: `<a href="https://main.oniri1.com/openAiProject/" target="_blank"><img src="./images/projects/openAI.png" style="width: 100%; height: 100%;" alt="project3"></a>`,
  skillsLibrary: `<li class="bar"><div class="bar__metadata"><span class="skills__title">FrontEnd</span><span>100%</span></div><div class="bar__bg"><div class="bar__value" style="width: 100%"></div></div></li>`,
  skillsFrameWork: `<li class="bar"><div class="bar__metadata"><span class="skills__title">BackEnd</span><span>100%</span></div><div class="bar__bg"><div class="bar__value" style="width: 100%"></div></div></li><li>typeorm</li><li>mongoose</li><li>openAI 미세조정</li><li>jsonwebtoken</li><li>session-file-store</li><li>crypto</li>`,
  skillsHref:
    "https://drive.google.com/drive/folders/1rFDuQeqd_2wfpaOXx_e4-SdKtgtldlu2",
};

const skillChanger = ({
  skillsTitle,
  skillsDetail,
  skillsImg,
  skillsLibrary,
  skillsFrameWork,
  skillsHref,
}) => {
  const title = document.getElementById("skillsTitle");
  const detail = document.getElementById("skillsDetail");
  const img = document.getElementById("skillsImg");
  const library = document.getElementById("skillsLibrary");
  const framework = document.getElementById("skillsFrameWork");
  const link = document.getElementById("skillsHref");

  title.innerText = skillsTitle;
  detail.innerHTML = skillsDetail;
  img.innerHTML = skillsImg;
  library.innerHTML = skillsLibrary;
  framework.innerHTML = skillsFrameWork;
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
