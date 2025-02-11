// 배열
// 배열 요소의 타입 지정
var numArr = [1, 2, 3];
var strArr = ['Hello', 'World', 'Ts'];
// 제네릭 문법
var boolArr = [true, false, true];
// 배열 요소의 타입이 다양한 경우
// 유니온 타입 string 혹은 number 일 수 있음
var multiArr = [1, 'Hello'];
// 다차원 배열 타입 정의
var doubleArr = [
    [1, 2, 3],
    [4, 5],
    [6, 7],
];
// 튜플 타입 => js 에는 존재하지 않음
// 길이와 타입이 고정된 배열
var tup1 = [1, 2];
// tup1 = [1, 2, 3]; // Error
// tup1 = [1, 'string']; // Error
var tup2 = [1, '2', true];
// tsc 의경우 프로젝트 단위로 컴파일 하는것을 권장한다
// tsc --outDir dist src/chapter2.ts < 이와같이 개별 컴파일 설정을 할 수 있다
