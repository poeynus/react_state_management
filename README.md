### react 상태 관리와 여러가지 함수 숙달용 ++ 평소 공부 해보고 싶던 거 전부 해보기

1.  redux

        redux dux 패턴
        https://github.com/erikras/ducks-modular-redux

        프로젝트 단위가 엄청 크면 쓰고 왠만하면 swr + context API나 쓰자

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

9.  promise

10. 동기와 비동기 - 동기야 자니?

11. deps 배열

12. DOM

13. 커스텀 훅

14. skeleton

15. useReducer()
