// 배열
// 배열 요소의 타입 지정
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['Hello', 'World', 'Ts'];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 배열 요소의 타입이 다양한 경우
// 유니온 타입 string 혹은 number 일 수 있음
let multiArr: (string | number)[] = [1, 'Hello'];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6, 7],
];

// 튜플 타입 => js 에는 존재하지 않음
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // Error
// tup1 = [1, 'string']; // Error

let tup2: [number, string, boolean] = [1, '2', true];

// ! 튜플 타입 사용 시 배열 메서드 사용 시 주의하여 사용하여야 한다.
// tup1.push(1);
// tup1.pop();
// tup1.pop();
// tup1.pop();

// 튜플 사용 예제
const users: [string, number][] = [
    ['Alice', 24],
    ['Bob', 27],
    ['Charlie', 29],
    // [7, 'David'], // Error
];

// tsc 의경우 프로젝트 단위로 컴파일 하는것을 권장한다
// tsc --outDir dist src/chapter2.ts < 이와같이 개별 컴파일 설정을 할 수 있다
