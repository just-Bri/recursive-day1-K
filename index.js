// 1. Counting Sheep
function countSheep(sheep) {
  if (sheep === 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${sheep}: Another sheep jumps over the fence`);
    return countSheep(sheep - 1);
  }
}

// countSheep(4);

// 2. Power Calculator
powerCalculator = (base, exp) => {
  if (exp === 0) {
    return 1
  } else if (exp < 0) {
    console.log('Exponent must be greater than 0');
    return null;
  } else {
    return base * powerCalculator(base, exp - 1)
  }
}

//console.log(powerCalculator(10, 2));

// 3. Reverse String
function reverse(string) {
  if (string === '') {
    return '';
  } else {
    //return string[string.length - 1] + reverse(string.slice(0, -1))
    return reverse(string.substr(1)) + string[0]
  }
}
//console.log(reverse('reif'))

// 4. nth Triangular Number
tri = (n) => {
  if (n === 1) return 1
  else return n + tri(n - 1);
}

//console.log(tri(6))

// 5. String Splitter 
function split(string, sep, i, arr = []) {
  if (string[i] === sep) {
    arr.push(string.slice(0, i))
    return split(string.substring(i + 1), sep, 0, arr)
  } else if (string.length === i) {
    arr.push(string);
    return arr;
  } else {
    return split(string, sep, i + 1, arr);
  }
}

//console.log(split('02/20/2020/02/02/02', '/', 0));

// 6. Fibonacci
fib = (n) => {
  if (n < 1) return [0];
  if (n === 1) return [0, 1];
  else {
    let cur = fib(n - 1)
    cur.push(cur[cur.length - 1] + cur[cur.length - 2])
    return cur
  }
}
// console.log(fib(2))

// 7. Factorial
function factorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

//console.log(factorial(5));

// 8. Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function out(maze, x, y, arr) {
  if (maze[y][x] === 'e') {
    return arr;
  } else {
    if (y < maze.length - 1 && maze[y + 1][x] !== '*') {
      arr.push('D');
      return out(maze, x, y + 1, arr);
    }
    if (x < maze[y].length - 1 && maze[y][x + 1] !== '*') {
      arr.push('R');
      return out(maze, x + 1, y, arr);
    }
    if (y > 0 && maze[y - 1][x] !== '*') {
      arr.push('U');
      return out(maze, x, y - 1, arr)
    }
    if (x > 0 && maze[y][x - 1] !== '*') {
      arr.push('L');
      return out(maze, x - 1, y, arr)
    }
  }
}

//console.log(out(maze, 0, 0, []))

// 9. Find ALL the ways out of the maze
// maze -> tempMaze
// {
// change tempMaze[x][y] => *
// check directions => recurse
// }

function outAll(maze, x = 0, y = 0) {
  return 'coming back to this later'
}

console.log(outAll(mySmallMaze))


// 10. Anagrams
let ana = (string) => {
  let arr = [];
  if (string.length === 0) {
    arr.push("");
  } else {
    //iterate through every character in the string-- this is our anchor
    for (let i = 0; i < string.length; i++) {
      //save the current character
      let curr = string[i];
      //create a joined string of every other character
      let temp = string.slice(0, i) + string.slice(i + 1);
      //create every anagram from the other characters
      let tempAnagrams = ana(temp);
      //append them to every anagram of the substring
      for (let j = 0; j < tempAnagrams.length; j++) {
        arr.push(curr + tempAnagrams[j]);
      }
    }
  }
  return arr;
}

//console.log(ana('east'));


// 11. Organization Chart
let arr = [
  { id: 'Zuckerberg', parent: null },
  { id: 'Schroepfer', parent: 'Zuckerberg' },
  { id: 'Bosworth', parent: 'Schroepfer' },
  { id: 'Steve', parent: 'Bosworth' },
  { id: 'Kyle', parent: 'Bosworth' },
  { id: 'Andra', parent: 'Bosworth' },
  { id: 'Zhao', parent: 'Schroepfer' },
  { id: 'Richie', parent: 'Zhao' },
  { id: 'Sofia', parent: 'Zhao' },
  { id: 'Jen', parent: 'Zhao' },
  { id: 'Schrage', parent: 'Zuckerberg' },
  { id: 'VanDyck', parent: 'Schrage' },
  { id: 'Sabrina', parent: 'VanDyck' },
  { id: 'Michelle', parent: 'VanDyck' },
  { id: 'Josh', parent: 'VanDyck' },
  { id: 'Swain', parent: 'Schrage' },
  { id: 'Blanch', parent: 'Swain' },
  { id: 'Tom', parent: 'Swain' },
  { id: 'Joe', parent: 'Swain' },
  { id: 'Sandberg', parent: 'Zuckerberg' },
  { id: 'Goler', parent: 'Sandberg' },
  { id: 'Eddie', parent: 'Goler' },
  { id: 'Julie', parent: 'Goler' },
  { id: 'Annie', parent: 'Goler' },
  { id: 'Hernandez', parent: 'Sandberg' },
  { id: 'Rowi', parent: 'Hernandez' },
  { id: 'Inga', parent: 'Hernandez' },
  { id: 'Morgan', parent: 'Hernandez' },
  { id: 'Moissinac', parent: 'Sandberg' },
  { id: 'Amy', parent: 'Moissinac' },
  { id: 'Chuck', parent: 'Moissinac' },
  { id: 'Vinni', parent: 'Moissinac' },
  { id: 'Kelley', parent: 'Sandberg' },
  { id: 'Eric', parent: 'Kelley' },
  { id: 'Ana', parent: 'Kelley' },
  { id: 'Wes', parent: 'Kelley' }
]

let makeTree = (arr, parent) => {
  let node = {}
  arr
    .filter(a => a.parent === parent)
    .forEach(a => node[a.id] = makeTree(arr, a.id));
  return node
}

let makeTreeIndent = (arr, parent, z) => {
  let node = {}
  z++;
  arr
    .filter(a => a.parent === parent)
    .forEach(a => {
      let pad = '';
      for (let i = 0; i < z; i++) {
        pad = pad + '\t'
      }
      console.log(`${pad}${a.id}`)
      node[a.id] = makeTreeIndent(arr, a.id, z)
    });
}

//makeTreeIndent(arr, null, 0);

// 12. Binary Representation
function binary(num, str = '') {
  if (num === 0) {
    return '0';
  } else if (num === 1) {
    str = '1' + str
    return str
  } else {
    if (num % 2 === 1) {
      str = '1' + str;
      return binary((num - 1) / 2, str)
    } else {
      str = '0' + str;
      return (binary(num / 2, str))
    }
  }
}

function bi(num) {
  if (num === 0) {
    return '';
  } else {
    return bi(Math.floor(num / 2)) + num % 2;
  }
}

//console.log(bi(15));