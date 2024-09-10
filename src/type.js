"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 50,
})
  .pause(400)
  .delete(null, { instant: true })

  .type("메인 언어 : TypeScript")
  .pause(300)
  .delete(null, { instant: true })

  .type("프레임워크: Next.js, Nest.js, React, tailwindCss")
  .pause(400)
  .delete(null, { instant: true })

  .type("OPEN API: OpenAI,naverMap, Naver & Google OAuth")
  .pause(400)
  .delete(null, { instant: true })

  .type("작업 환경 : Node.js, Linux, AWS")
  .pause(400)
  .delete(null, { instant: true })

  .type("데이터 베이스 : MySQL, MongoDB")
  .pause(400)
  .delete(null, { instant: true })

  .type("툴 / 데브옵스 : AWS, GitHub Action, Google Docs, Figma")
  .pause(400)
  .delete(null, { instant: true })

  .type("라이브러리: Axios, Socket.io, Express.js, Sequelize, Mongoose")
  .pause(500)
  .delete(null, { instant: true })

  .go();
