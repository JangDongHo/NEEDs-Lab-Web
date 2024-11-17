![](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F779e2c30-d00c-41e5-9026-e00f93a5505c%2Fa0741083-4dde-40f9-95cc-cbcb67a667d3%2FUntitled.png&blockId=d5e9c4f5-cde0-4779-bb27-dcecb0876fa0)

# **1. 개요**

- 프로젝트 명: 경상국립대학교 차세대 에너지 환경 기계 연구실 반응형 홈페이지 제작 외주
- 개발 기간: 2024. 06. 30 ~ 2024. 07. 27
- 인력 구성: 1명
- 서비스 링크: https://needs.gnu.ac.kr/
- Github 링크: https://github.com/JangDongHo/NEEDs-Lab-Web

# 2.기술 스택

**FRONT**

- HTML5
- Pug
- CSS3
- JavaScript(ES6)

**DATABASE**

- Google Sheets
- Google Drive

**DEPLOY**

- Github Pages

# 3. 시스템 아키텍처

![](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F779e2c30-d00c-41e5-9026-e00f93a5505c%2F600e209f-c098-453c-965e-140cdf093081%2FUntitled.png&blockId=6021f897-e34e-4ffa-b677-d97bc5d5979b)

# 4. 기술적 고민

## Google Sheets + Google Drive 활용

![](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F779e2c30-d00c-41e5-9026-e00f93a5505c%2Ffca7d15a-cc68-4d45-bc7a-20908b5eefeb%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-06-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_6.34.01.png&blockId=3deea295-445d-4b79-8801-29ba57cec314)

 관리자가 홈페이지의 콘텐츠를 쉽게 등록할 수 있도록 어드민 페이지와 데이터베이스를 구성해야 한다. 어드민 페이지를 직접 만드는 대신, Google Sheets를 활용하는 방법을 택했다.

 Google Sheets를 데이터 소스로 사용하여 관리자가 직접 시트를 업데이트하면, 자동으로 웹사이트 콘텐츠가 업데이트되도록 시스템을 설계했다. Google Sheets를 사용함으로써 비개발자도 쉽게 콘텐츠를 관리할 수 있으며, 어드민 페이지와 데이터베이스의 역할을 동시에 수행하여 빠른 개발이 가능했다.

 다만, 이미지 같은 경우는 Google Sheets에 저장해도 API를 통해 웹에서 불러올 수 없기 때문에 Google Drive를 사용했다. Google Drive에 실제 이미지를 업로드하면 생성되는 이미지 ID를 Google Sheets에 저장하면 웹에서 구글 드라이브에 저장된 이미지 URL을 동적으로 생성하도록 설계했다. 이를 통해 텍스트와 이미지를 모두 효율적으로 관리할 수 있었다.

## Pug 템플릿 엔진

빠른 홈페이지 개발을 위해 HTML 대신 Pug 템플릿 엔진을 활용하였다. Pug는 간결하고 가독성이 뛰어나며, HTML보다 효율적으로 템플릿을 작성할 수 있는 장점이 있다. Pug의 템플릿 재사용 기능을 이용하여 공통된 요소를 관리하고, 데이터를 동적으로 처리하여 웹 페이지의 내용을 업데이트 하였다.
