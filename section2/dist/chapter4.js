// 주의점 => 같은 스코프 내 타입별칭 정의 시 오류 발생 구분 필요
// function func() {
//     type User = {};
// }
let user = {
    id: 1,
    name: '이한규',
    nickName: 'hank',
    age: 100,
    jip: '인천',
};
let user2 = {
    name: '임꺽정',
    nickName: 'kk',
    age: 200,
    jip: '서울',
};
let contryCodes = {
    Korea: 'KR',
    USA: 'US',
    Japan: 'JP',
};
let contryNumberCodes = {
    Korea: 82,
    // Korea: '82', // 에러 발생
    USA: 1,
    Japan: 81,
};
export {};
