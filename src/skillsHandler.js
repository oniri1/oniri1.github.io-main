const chatSiteValues = {
  skillsTitle: "Colosseum",
  skillsDetail:
    "HTML, CSS, JS, Node.js, Express로 프론트와 서버를 구축하고 Socket.io, Axios로 실시간 통신을 구현해 MySQL,MongoDB에 데이터를 저장하는 프로젝트를 만들었습니다.",
  skillsImg: `<img src="./images/projects/chatSite.jpg" style="width: 100%; height: 100%;" alt="project1"><a href="https://main.oniri1.com/chatSite/" target="_blank"> <div class="skills__metadata"><h3>클릭 시 이동</h3></div></a>`,
  skillsLibrary: `<li>axios</li><li>cookie-parser</li><li>express</li><li>multer</li><li>socket.io</li><li>sequelize</li><li>mongodb</li>`,
  skillsFrameWork: `<li>Node.js</li>`,
};
//

const shopSiteValues = {
  skillsTitle: "Hamster_Market",
  skillsDetail:
    "TypeScript를 메인 언어로 React,TailwindCss 프레임워크를 사용하여 만든 팀 프로젝트입니다.<br/> 역할은 프론트엔드와 R&D로서 글쓰기 페이지와 유저 페이지, NaverMap,OAuth를 구현하여 프로젝트에 적용 시켰습니다.",
  skillsImg: `<img src="./images/projects/HamsterMarket.png" style="width: 100%; height: 100%;" alt="project2"><a href="https://main.oniri1.com/twoProject/front" target="_blank"> <div class="skills__metadata"><h3>클릭 시 이동</h3></div></a>`,
  skillsLibrary: `<li>axios</li><li>react-query</li><li>react-router-dom</li><li>navermaps</li><li>OAuth</li>`,
  skillsFrameWork: `<li>React</li><li>tailwindcss</li><li>Typescript</li>`,
};

//
const openAiValues = {
  skillsTitle: "AI_InterViewSite",
  skillsDetail:
    "Next.js와 Nest.js 및 OpenAI를 중심으로 활용하여 인터뷰 및 답변에 대한 피드백을 받을 수 있는 프로젝트를 만들었습니다.",
  skillsImg: `<img src="./images/projects/openAI.png" style="width: 100%; height: 100%;" alt="project3"><a href="https://main.oniri1.com/openAiProject/" target="_blank"><div class="skills__metadata"><h3>클릭 시 이동</h3></div></a>`,
  skillsLibrary: `<li>axios</li><li>typeorm</li><li>mongoose</li><li>openai</li><li>session-file-store</li><li>jsonwebtoken</li>`,
  skillsFrameWork: `<li>Next.js</li><li>Nest.js</li><li>TailwindCss</li>`,
};

const skillChanger = ({
  skillsTitle,
  skillsDetail,
  skillsImg,
  skillsLibrary,
  skillsFrameWork,
}) => {
  const title = document.getElementById("skillsTitle");
  const detail = document.getElementById("skillsDetail");
  const img = document.getElementById("skillsImg");
  const library = document.getElementById("skillsLibrary");
  const framework = document.getElementById("skillsFrameWork");

  title.innerText = skillsTitle;
  detail.innerHTML = skillsDetail;
  img.innerHTML = skillsImg;
  library.innerHTML = skillsLibrary;
  framework.innerHTML = skillsFrameWork;
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
