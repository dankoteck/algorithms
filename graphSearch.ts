// reference: https://www.youtube.com/watch?v=cWNEl4HE2OE - Fireship.io (Graph Search Algorithms in 100 Seconds - And Beyond with JS)

// Data
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Setup Graph
const adjacencyList = new Map();

const addNode = (node: string) => {
  adjacencyList.set(node, []);
};

const addEdge = (from: string, to: string) => {
  adjacencyList.get(from).push(to);
  adjacencyList.get(to).push(from);
};

airports.forEach(addNode);
routes.forEach(([from, to]) => addEdge(from, to));

// Breadth-first search
const bfs = (start: string, search: string) => {
  const queue = [start];

  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === search) {
        console.log(`Founded node: ${search} from: ${airport}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(`Traversal to ${destination} node.`);
      }
    }
  }
};

// Depth-first search
const dfs = (
  start: string,
  search: string,
  visited: Set<string> = new Set<string>()
) => {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === search) {
      console.log(`Founded node: ${search} from: ${start}`);
    }

    if (!visited.has(destination)) {
      dfs(destination, search, visited);
    }
  }
};

dfs("PHX", "MEX");
