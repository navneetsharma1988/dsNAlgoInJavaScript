const { createQueue } = require('./index');

const q = createQueue();

console.log(q.isEmpty());

q.enqueue('Make an DS lesson');
q.enqueue('Help others learn');
q.enqueue('Be happy');

console.log(q.peek());
q.dequeue();
q.dequeue();
console.log(q.peek());