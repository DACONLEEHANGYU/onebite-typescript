// 타입 별칭
// 상당히 편하다. 타입 재활용
type User = {
    id?: number;
    name: string;
    nickName: string;
    age: number;
    jip: string;
    // 공통적으로 프로퍼티 추가 가능
};

// 주의점 => 같은 스코프 내 타입별칭 정의 시 오류 발생 구분 필요
// function func() {
//     type User = {};
// }

let user: User = {
    id: 1,
    name: '이한규',
    nickName: 'hank',
    age: 100,
    jip: '인천',
};

let user2: User = {
    name: '임꺽정',
    nickName: 'kk',
    age: 200,
    jip: '서울',
};

// 인덱스 시그니처
// key : value 로 정의 되어있는 객체의 타입을 정의할 때 사용
// 규칙을 바탕으로 정의되는 타입을 정의할 때 유용하다.

// 주의점 => 인덱스 시그니처 내 규칙을 위반하지 않은 경우에는 모두 허용이므로 주의
type ContryCodes = {
    [key: string]: string;
    Korea: string;
};

let contryCodes: ContryCodes = {
    Korea: 'KR',
    USA: 'US',
    Japan: 'JP',
};

// 추가 프로퍼티 작성 시 인덱스시그니처에 작성된 타입과 호환, 일치해야 한다.
// 규칙을 기반으로 타입 정의
type ContryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let contryNumberCodes: ContryNumberCodes = {
    Korea: 82,
    // Korea: '82', // 에러 발생
    USA: 1,
    Japan: 81,
};
