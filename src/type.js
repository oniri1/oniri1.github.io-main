"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 25,
  strings: [
    "TypeScript, Node.js, Nest.JS를 활용해 안정적인 백엔드 서버를 구축하고, MySQL, MongoDB로 데이터베이스를 관리합니다.",
    "React와 Next.js로 프론트엔드를 구현하며, Socket.IO와 Axios로 실시간 소켓 통신과 API 호출을 처리합니다.",
    "OAuth로 인증 시스템을 구축하고, GitHub로 협업 해 AWS로 배포해 왔습니다.",
    "OpenAI와 같은 최신 기술 스택의 배움을 즐기며 빠르게 성장하는 주니어 개발자 입니다.",
  ],
})
  .pause(2000)
  .delete(null, { instant: true })
  .go();
