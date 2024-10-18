"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 25,
  strings: [
    " ",
    "JWT를 통한 유저 인증, TypeORM과 @nestjs/mongoose를 활용한 데이터베이스 커넥션 설정 및 관리 경험, GitHub Actions으로 CI/CD를 구현하여 프로젝트를 관리해 왔습니다.",
    "OpenAI API, OAuth2.0, NaverMap 같이 API를 활용한 기능 개발에도 능숙합니다.",
    "express, Nest.js 프레임 워크를 사용한 서버 구축과 실시간 통신(Socket.IO) 기술을 바탕으로, 안정적이고 확장 가능한 백엔드 서버 제작을 지향하는 주니어 개발자입니다!",
    "React, Next.js를 통한 간단한 프론트 제작 또한 가능합니다!",
  ],
})
  .pause(2000)
  .delete(null, { instant: true })
  .go();
