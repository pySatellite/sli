# sli
- Satellite Location Information

![image](https://github.com/satellite-info/satellite-info.github.io/assets/87309910/f2216aef-54a8-43ba-8731-e097987f807a)

### PRE-PRD
- https://satellite-info.github.io

### PRD 
- https://satellite-info.web.app
- https://satellite.diginori.com
- https://sli.diginori.com
- const { data: wel_msg } = useQuery('wel_msg', () => queryClient.getQueryData('wel_msg'));

## Installation
Install the application dependencies by running:

```sh
npm install
```

## Development
Start the application in development mode by running:

```sh
npm run dev
```

## Production
Build the application in production mode by running:

```sh
npm run build
```


### 궤도 요소(Orbital Elements) 데이터 - Two Line Element Set (TLE)
- https://www.space-track.org/documentation#tle
```angular2html
1 25544U 98067A   23326.81223606  .00014119  00000+0  25909-3 0  9997
2 25544  51.6438 262.8620 0000581 342.7208  60.7343 15.49535756426392

# chat.openai.com
이 문자열은 NORAD(북미항공방위사령부) 행성궤도센터(NORAD Space Command's (NORAD's) Space Track)에서 제공하는 궤도 요소(Orbital Elements) 데이터입니다. 
이 데이터는 국제우주정거장(ISS, International Space Station)의 궤도 정보를 설명합니다. 
이 문자열은 두 줄로 구성되어 있으며 각 줄은 다음과 같은 정보를 포함하고 있습니다.

첫 번째 줄:

1 25544U 98067A: NORAD 카탈로그 번호 및 국제우주정거장의 NORAD ID.
23326.81223606: 정보가 기록된 날짜. 여기서는 "23326"이 Julian 날짜이며, 뒤의 소수 부분은 하루의 일부를 나타냅니다.
.00014119: 이것은 별명 "Ballistic coefficient"로 알려진 값으로, 대기 중의 물체가 어떻게 저항하는지를 나타내는 값 중 하나입니다.
00000+0: 이는 궤도의 기울기에 대한 정보입니다.
25909-3: 이는 궤도의 원근 인자(perigee argument)에 대한 정보입니다.
0 9997: NORAD 궤도 요소 데이터의 체크섬 값.
두 번째 줄:

2 25544: NORAD 카탈로그 번호 및 국제우주정거장의 NORAD ID.
51.6438: 궤도 경도.
262.8620: 궤도 기울기.
0000581: 궤도의 궤도면 기울기.
342.7208: 궤도의 오목물 인자.
60.7343: 궤도의 교환 경도.
15.49535756426392: 궤도의 평균 우주 신경(Revolutions per day).
이 정보는 궤도 계산에 사용되며, 우주 정거장의 현재 위치와 궤도를 추적하는 데 사용됩니다.

# clova-x.naver.com
첫 번째 문자열은 국제우주정거장(ISS)의 위치와 관련된 정보를 담고 있습니다.

1 25544U 98067A: ISS의 식별자(ID)입니다. U는 미국 항공우주국(NASA)에서 발사한 위성을 의미합니다.
23326.81223606: ISS가 지구를 공전하면서 지나간 날짜와 시간을 나타냅니다.
.00014119: ISS의 위치 오차를 나타내는 숫자입니다.
00000+0: ISS의 위치 오차의 방향을 나타내는 숫자입니다.
25909-3 0: ISS의 궤도 경사각과 궤도 이심률을 나타내는 숫자입니다.
9997: ISS의 궤도 주기를 나타내는 숫자입니다.
두 번째 문자열은 ISS의 자세와 관련된 정보를 담고 있습니다.

25544: ISS의 식별자(ID)입니다.
51.6438: ISS의 자전축 경사각을 나타내는 숫자입니다.
262.8620: ISS의 자전축 방향을 나타내는 숫자입니다.
0000581: ISS의 태양 전지판의 방향을 나타내는 숫자입니다.
342.7208: ISS의 태양 전지판의 방향을 나타내는 숫자입니다.
60.7343: ISS의 태양 전지판의 방향을 나타내는 숫자입니다.
15.49535756426392: ISS의 태양 전지판의 방향을 나타내는 숫자입니다.
위의 정보는 모두 ISS의 위치와 자세를 파악하는 데 중요한 역할을 합니다.

# bard.google.com
위 문자열은 미국 항공우주국(NASA)의 NORAD 두더지(NORAD Juliet)에 의해 수집된 위성 추적 데이터입니다. 첫 번째 줄은 위성의 고유 식별자, 궤도 번호, 발사 날짜 및 시간, 그리고 현재 위치를 나타냅니다. 두 번째 줄은 위성의 속도, 방향 및 지오센트릭 고도를 나타냅니다.

위 문자열에 대한 자세한 설명은 다음과 같습니다.

1 25544U 98067A   23326.81223606  .00014119  00000+0  25909-3 0  9997

1: 위성의 고유 식별자
25544: 위성의 궤도 번호
98067A: 위성의 발사 날짜 및 시간
23326.81223606: 현재 시간(UTC)
.00014119: 현재 시간의 오차
00000+0: 현재 속도(km/s)
25909-3: 현재 방향(도)
0: 현재 고도(km)
9997: 예비 공간
2 25544  51.6438 262.8620 0000581 342.7208  60.7343 15.49535756426392

2: 위성의 고유 식별자
51.6438: 현재 속도의 x 성분(km/s)
262.8620: 현재 속도의 y 성분(km/s)
0000581: 현재 방향의 x 성분(도)
342.7208: 현재 방향의 y 성분(도)
60.7343: 현재 고도(km)
15.49535756426392: 현재 시간의 오차(초)
위 데이터는 NORAD Juliet가 지구 궤도를 도는 위성들을 추적하는 데 사용됩니다. 이 데이터는 군사, 민간, 과학 분야에서 다양한 용도로 사용됩니다.

```


### Ref
- https://stackoverflow.com/questions/66863200/changing-the-input-and-output-directory-in-vite
- https://citylock77.tistory.com/128
- https://marmelab.com/react-admin/ToggleThemeButton.html
- [github fork sync](https://velog.io/@yourmean/TIL-Github-Fork%ED%95%9C-Repository-Update-%ED%95%98%EA%B8%B0)
- [React, Vue 개발자를 위한 VSCode Extension 추천](https://violetboralee.medium.com/react-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-vscode-extension-f50474b1cfac)
- https://www.reddit.com/r/sveltejs/comments/zcqg6y/threejs_satellite_viewer_svelte_or_react/?rdt=58598
- https://three-satellites.vercel.app
- https://satellite-tracker.netlify.com
- https://orbit.ing-now.com/https://orbit.ing-now.com/https://orbit.ing-now.com/
- https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2023-170A
- https://www.space-track.org/
- 우주로가즈아*찾아1002
