const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for(const el of ids){
    console.log(el);
}

console.log(ids.has('abc'));

ids.delete('bb2');

console.log(ids);

const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = {name: 'Germany', population: 82};

resultData.set(germany, 0.89);

for (const el of resultData){
    console.log(el);
}

resultData.set('average', 25.67);

console.log(resultData);

console.log(resultData.get('average'));
console.log(resultData.average);

// resultData.delete(germany);
resultData.delete({name: 'Germany', population: 82});
console.log(resultData);