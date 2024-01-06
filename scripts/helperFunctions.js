function prettyPrint(node, prefix = '', isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

function getRandomNumbers(amount = 10) {
  const returnArray = [];
  for (let i = 0; i < amount; i += 1) {
    const number = Math.round(Math.random() * 99);
    returnArray.push(number);
  }

  return returnArray;
}

export { prettyPrint, getRandomNumbers };
