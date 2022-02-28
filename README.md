### react 상태 관리와 여러가지 함수 숙달용 ++ 평소 공부 해보고 싶던 거 전부 해보기

1.  redux

        1. redux dux 패턴 - https://github.com/erikras/ducks-modular-redux
        2. 프로젝트 단위가 엄청 크면 쓰고 왠만하면 swr + context API나 쓰자
        3. thunk와 saga의 차이점은?

2.  swr + context API

3.  useMemo()

        1. useMemo가 함수를 저장했다가 불러와서 쓰는 것인줄 알았는데 그런게 아니라 필요없는 렌더링 없애는 거구나.
        2. useCallback과 유사한 거 같다.
        3. 얘는 결과 값만 재사용하네

4.  useCallback()

        1. useCallback 함수는 useMemo를 기반으로 만들어졌다. - 유사함
        2. 특정 함수를 재사용 할 때 적용

5.  useRef()

        1. 새로 고침 후 특정 DOM에 Focus가 필요할 때 => ref.current.focus()
        2. 시간으로 만들어진 변수나 외부 라이브러리를 사용하여 생성된 인스턴스나 scroll 위치를 조회할 때
        -- Focus와 scroll 위치 조회를 제외하면 잘 사용하지 않을 거 같다.

6.  gridLayout

7.  vueJS - 꽃잎 점

        1. 간단한 거 한 개 뚝딱 만들어 봐야 겠다.

8.  react chart, graph - (d3, chart js)

        1. chart.js, react-chartjs-2, faker 설치
        2. 기가 막히네 나중에 쓸 수 있는 상황이 생기면 좋겠다.

9.  promise

10. 동기와 비동기 - 동기야 자니?

11. deps 배열

        1. 의존성 배열 - 함수 마지막에 (, []) 이렇게 쓰는 것들 ex) useEffect
        2. 특정 상황에 특정 이펙트를 실행하기 위해서 있는 것
        3. 지금까지는 그냥 썼는데 이런 의미였네

12. DOM - Document Object Model

        1. 웹이 원본 html을 읽은 후 스타일을 입히고 표시하는 과정을 Critical Rendering Path라 한다.
        2. CRP 6단계 = DOM 트리 구축, CSSOM 트리 구축, JS실해, 렌더 트리 구축, 레이아웃 생성, 페인팅
        3. DOM은 HTML 문서에 대한 인터페이스이다.
        4. https://usefultoknow.tistory.com/entry/DOM-%EC%9D%B4%EB%9E%80-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%80-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%80%EB%8A%94-%EB%B0%A9%EB%B2%95

13. 커스텀 훅

14. skeleton

15. useReducer()

16. formik / yup

17. jest, enzyme

18. storybook - atomic design

19. typescript

20. 비동기 동작으로 인한 메모리 누수 방지

21. cypress
