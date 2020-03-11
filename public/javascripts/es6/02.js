const number = [5, 10, 15, 20, 25, 30];
const double1 = number.map(function(number) {
  return number * 2;
});
const double2 = number.map(number => {
  return number * 2;
});

console.log('double1', double1);
console.log('double2', double2);

const greet = name => {
  console.log(`Hello ${name}`);
};
greet('Alex');

const Abby = {
  name: 'Abby',
  age: 21,
  hobbies: ['Coding', 'Sleeping', 'Reading'],
  printHobby: function() {
    self = this;
    console.log(this);
    this.hobbies.map(function(hobby) {
      console.log(`${self.name} loves ${hobby}`);
    });
  }
};

const Alex = {
  name: 'Alex',
  age: 22,
  hobbies: ['Playing', 'traveling', 'Watching'],
  printHobby: function() {
    console.log(this);
    //箭头函数绑定父级函数的this
    this.hobbies.map(hobby => {
      console.log(`${this.name} loves ${hobby}`);
    });
  }
};

Abby.printHobby();
Alex.printHobby();

const person = 'John';
const age = 22;
//原版
var sentence1 = person + ' is ' + age + ' years old';
console.log('sentence1', sentence1);
//ES6
const sentence2 = `${person} is ${age} years old`;
console.log('sentence2', sentence2);

const Jelly = {
  name: 'Jelly',
  age: 22,
  date: '2020-3-11',
  todos: [
    { name: 'Go to Store', completed: false },
    { name: 'Watch Movie', completed: true },
    { name: 'Running', completed: true }
  ]
};

function renderTodos(todos) {
  return `<ul>
    ${Jelly.todos
      .map(
        todo => `
      <li>
        ${todo.name} ${todo.completed ? '✔' : '❌'}
      </li>`
      )
      .join('')}
  <ul>`;
}

const template = `
  <div>
    <div>${Jelly.name}</div>
    <div>${renderTodos(Jelly.todos)}</div>
    <div>${Jelly.date}</div>
  </div>
`;
document.getElementById('demo1').innerHTML = template;

const user1 = 'Mary';
const topic1 = 'Learn to use markdown';

function highlight1(strings, ...values) {
  const highlighted = values.map(
    value => `
    <span class="highlight">${value}</span>
  `
  );
  return strings.reduce(
    (prev, curr, i) => `${prev}${curr}${highlighted[i] || ''}`,
    ''
  );
}
const temp1 = highlight1`${user1} has commented on your topic ${topic1}`;
document.getElementById('demo2').innerHTML = temp1;

const user2 = 'Harry';
const topic2 = 'Learn to use javascirpt';
function highlight2(strings, ...values) {
  const highlighted = values.map(
    value => `
    <span class="highlight">${value}</span>
  `
  );
  let str = '';
  strings.forEach((string, i) => {
    str += `${string}${highlighted[i] || ''}`;
    // console.log('str', str);
  });
  // console.log('str', str);
  return str;
}

const temp2 = highlight2`${user2} has commented on your topic ${topic2}`;
document.getElementById('demo3').innerHTML = temp2;
