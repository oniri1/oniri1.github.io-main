const dataOfWork = [
  `<li>next.js 앱 라우터 방식으로 제작</li>
<li>tailwindCss 커스텀 애니메이션 사용 경험</li>
<li>JWT를 통한 유저 검증</li>
<li>OpenAI 서비스를 사용한 면접관 모델 생성</li>
<li>OpenAI API를 사용한 면접 기능</li>
<li>typeORM, Nest/Mongoose으로 Nest와 Database 커넥션 설정 및 데이터 관리 경험</li>
<li>Github Actions을 통한 CI/CD 구현</li>`,
  `
<li>NaverMap API를 사용한 맵 기능</li>
<li>OAuth2.0으로 사용자 인증 및 권한 부여 경험</li>
<li>내장 API(navigator)를 사용한 GPS 기능</li>
<li>데이터 처리 메서드(Blob)을 활용한 이미지 데이터 핸들링 경험</li>
<li>React-query를 사용하여 상태 관리</li>
<li>recoil로 전역 상태 관리</li>
<li>React로 유저,글 작성 페이지 제작</li>
<li>정규 표현식을 활용하여 입력폼에 유효성 검사 처리</li>
`,
  `<li>Axios를 사용하여 서버-클라이언트 비동기 통신</li>
<li>프레임워크 없는 CSR 구현 경험</li>
<li>Express router 기능을 사용하여 서버 제작</li>
<li>Multer로 이미지 업로드 구현</li>
<li>MongoDB, sequelize 라이브러리 사용 경험</li>
<li>socket.io를 사용하여 실시간 통신 기능 구현</li>`,
];
const dataOfFeal = [
  `풀스택 개발 경험으로 각 기술의 개발 능력과, 인증 및 데이터 보안의 중요성과, 새로운 프레임 워크와 Open API를 공부하여 구현함으로서, 코드 분석 및 문제 해결 능력이 향상 되었습니다.
<br/>또한, 말로만 듣던 AI를 백엔드에서 직접 다루어보며 기술의 발전을 실감하게 되었습니다. 이 기술을 어떻게 사용하여 더 나은 서비스나 원하는 출력을 뽑아낼 수 있는지, 다양한 요구를 어떻게 처리할 수 있는지 등등 저에게 많은 가능성을 열어주는 프로젝트로서 인상 깊이 남게 되었습니다.`,
  `팀원으로서 프론트를 담당하며 OpenAPI를 중점으로 여러 기능을 개발하게 되었습니다.
<br/>React를 기반한 프로젝트 협업을 진행함으로서 코드 리뷰 및 모듈화를 통한 가독성 향상과 단일 책임 원칙의 중요성을 깨닫게 되었습니다.
<br/>특히, 코드 리뷰 없이 진행한 프로젝트는 팀원의 잘못된 이해를 동반한 코드의 방향성으로 인해 많은 문제가 생길 수 있음을 알 수 있었고, 모듈화와 가독성이 부족하여 많은 고생을 하였지만 TypeScript의 타입 추론과 타입 체크 덕분에 수정을 수월하게 진행할 수 있었던 경험이 깊이 남게 되었습니다.
<br/>이 경험을 통해 React 라이프 사이클 및 최적화에 대한 이해도가 향상 되었으며, 주 역할로 맡았던 페이지 기능 구현과 API를 활용한 개발을 성공적으로 완수하며 한층 더 나은 개발자로서 성장하게 되었습니다.`,
  `팀장으로서 백과 프론트를 담당하며 실시간 채팅 사이트를 구현하게 되었습니다.
<br/>진행사항 체크 및 코드 병합의 수월한 진행을 위해 팀원간의 소통과 사전 계획의 중요성을 깨닫게 되었습니다.
<br/>socket.io를 구현하며 개발에 대한 방향성을 잡았으며, Axios로 통신하는 과정에서 서버-클라이언트 모델에 대한 이해도가 향상 되었습니다.
<br/>또한 MongoDB와 Socket.io를 R&D 한 경험이 저의 개발자로서의 역량을 향상시켜 주었습니다.
`,
];

const modal = document.getElementById("myModal");
const span = document.querySelector(".close");

const title = document.getElementById("modal_title");
const text = document.getElementById("modal_content");

const workedElem = [...document.getElementsByClassName("forWork")];
const fealElem = [...document.getElementsByClassName("forModal")];

workedElem.forEach((element, index) => {
  element.onclick = () => {
    title.innerHTML = "맡은 작업";
    text.innerHTML = dataOfWork[index];
    openModal();
  };
});

fealElem.forEach((element, index) => {
  element.onclick = () => {
    title.innerHTML = "느낀 점";
    text.innerHTML = dataOfFeal[index];
    openModal();
  };
});

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  title.innerHTML = "";
  text.innerHTML = "";
};

//닫기
span.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
