// any :
//  특정 변수의 타입을 확실히 모를때, 미정일 때 사용할 수 있는 타입
let anyVar: any = 10;
anyVar = 'string'; // 초기값으로 자동 추론

anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = { name: 'Neo', age: 100 };

anyVar.toUpperCase(); // any 타입이기 때문에 에러가 발생하지 않는다.

// but 런타임 에러가 발생할 수 있음
// 타입스크립트의 이점을 포기하게 되므로 사용을 자제해야 한다.

let num: number = 10;
num = anyVar; // 모든 타입의 변수에 any 타입의 변수 할당이 가능하다

// unknown :
let unknownVar: unknown = 10;

unknownVar = 'string';
unknownVar = true;
unknownVar = null;
unknownVar = undefined;

// any와 unknown의 차이점
// num = unknownVar; // unknown 타입은 다른 타입에 할당이 불가능하다.

// 타입 좁히기
if (typeof unknownVar === 'number') {
    num = unknownVar;
}
