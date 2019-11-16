# WordQuiz
nodejs, express, nunjucks로 만든 다항식 단어 퀴즈 페이지
## 시작하기
npm으로 모듈을 설치한 후 실행
### 설치
모듈 설치하기.
```
npm i
```
### 실행
WordQuiz 경로에서 다음을 실행
```
node app.js
```
http://localhost:8002/ 로 접속

### 단어 넣는 방법 
`./datas/problems.json`파일을 수정함
#### problems.json 구성
- problems : 단어문제 배열
- word : 단어
- correctAnswer : 정답
- wrongAnswers : 오답



## 빌드 환경
- [nodejs](https://nodejs.org/en/)
- [express](http://expressjs.com/)
- [nunjucks](https://mozilla.github.io/nunjucks/)


