// object 타입
// 객체 리터럴 타입
// 타입스크립트 : 구조적 타입 시스템 -> property based type system
// 이름을 기준을 정의 -> 명목적 타입 시스템
let user = {
    id: 1,
    name: '이한규',
};
user = {
    name: '임꺽정',
};
console.log(user);
let config = {
    apiKey: 'API_KEY',
};
export {};
// config.apiKey = '1234'; // 에러 발생 => 읽기 전용 프로퍼티
////
// 타입 어노테이션을 사용하여 객체를 선언할 수 있다.
// 객체 내 다른 타입의 값이 들어오는 것을 방지할 수 있을것
// let cat: {
//     name: string;
//     age: number;
// } = {
//     name: '딴딴이',
//     age: 9,
// };
// console.log(user.id);
// console.log(`우리집 고양이 이름은 ${cat.name} 이며 나이는 ${cat.age}살 입니다.`);
