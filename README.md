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

        1. 이거는 상당히 자세하게 정리가 되어있다. 사용을 많이 할 듯
        2. 기존에는 display 만 사용했는데 이제는 섞어서 사용할 거 같다.

7.  vueJS - 꽃잎 점

        1. 간단한 거 한 개 뚝딱 만들어 봐야 겠다.

8.  react chart, graph - (d3, chart js)

        1. chart.js, react-chartjs-2, faker 설치
        2. 기가 막히네 나중에 쓸 수 있는 상황이 생기면 좋겠다.

9.  promise

        1. 비동기 처리에 사용되는 객체
        2. 통신 요청 후 데이터가 오기전에 데이터를 표시하려면 오류나는데 이것을 해결하는 방법 중 하나

10. 동기와 비동기 - 동기야 자니?

        1. 동기는 동시에 일어난다는 뜻 => 설계 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 못하고 대기해야함
        2. 비동기는 동시에 일어나지 않는다는 뜻 => 동기보다 복잡하지만 결과가 주어지는 동안 다른 작업을 할 수 있음
        3. Pending(대기), Fulfilled(이행), Rejected(실패)
        4. https://heytech.tistory.com/245
        5. 직접 호출해서 사용할 일은 거의 없을 거 같다. => 미들웨어를 직접 설정한다면 쓸지도?

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

        1. 내가 찾던게 이거였다.
        2. 반복되는 로직이 많을 경우 재사용하는 방법
        3. 이번에는 useScroll 만들어보았다.
        4. 현재 진행하고 있는 프로젝트에 useInput을 만들어서 적용해야겠다.

14. skeleton

        1. 비동기 동작에서 아직 데이터가 로딩되지 않았을 경우 적용
        2. 미리보기 같은 느낌
        3. 이거 괜찮네 앞으로 모든 프로젝트에 적용

15. useReducer()

        1. 이거 잘 쓰면 리덕스 잘 쓰겠다.
        2. useState랑 유사하지만 작동 방식이 redux같음

16. formik / yup

        1. yup은 validatorJS와 유사하다. 근데 validatorJS가 더 자세한 거 같다.
        2. formik은 form을 핸들링 하는 것이다.
        3. formik과 yup을 동시에 쓰는 것 아니면 validator가 좋은 거 같다.
        4. 이거는 다음 프로젝트에 2개를 다 바로 적용 해보아야 겠다.

17. jest, enzyme

18. storybook - atomic design

        1. 전에 프로젝트에서 한 번 적용해봐서 감을 잡고 있음
        2. 스토리북 자체가 아토믹 디자인을 적용하는 것 아니면 별로 효율이 안나는 것 같음
        3. css framework를 사용한다면 필요가 없다.

19. typescript

        1. storybook 프로젝트에서 적용했었음
        2. 한 가지 반성할 것이 type을 any로 많이 => 좀 더 조사를 많이 하고 했어야 했다.

20. 비동기 동작으로 인한 메모리 누수 방지

        1. 사진 판매 프로젝트에서 메인페이지에 상품 통신이 끝나기 전에 다른 페이지로 이동하면 메모리 누수가 발생했었다.
        2. 당시에는 인지만 하고 넘어갔는데 이번에 진행하는 프로젝트는 누수를 잡고 가려고 한다.
        3. https://juliangaramendy.dev/blog/use-promise-subscription

21. cypress

22. 여러 기업들의 코드 컨벤션

        1. Google JavaScript Style Guide
        2. Airbnb JavaScript Style Guide
        3. JavaScript Standard Style
        4. NHN FE개발랩
        - 에어비앤비를 좀 많이 봐야지

23. developer mozilla Web API - https://developer.mozilla.org/ko/docs/Web/API
