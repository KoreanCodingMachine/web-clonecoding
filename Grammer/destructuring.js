//ES6의 배열 디스트럭처링은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다. 이때 추출/할당 기준은 배열의 인덱스이다.
// 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.

const arr = [1, 2, 3];
const [one, two, three] = arr;

console.log(one, two, three);

//배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수 리스트가 필요하다.

let x, y, z;
[x, y, z] = [1, 2, 3];

// 위의 구문과 동치이다.

let [a, b, c] = [1, 2, 3];

//ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당한다. 이때 할당 기준은 프로퍼티 이름(키)이다.

const obj = { firstName: 'Ungmo', lastName: 'Lee' };

const { lastName, firstName } = obj;

console.log(firstName, lastName);
