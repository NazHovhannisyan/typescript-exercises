
interface iPlayerData<HoursData> {
  game: string | number,
  hours: HoursData,
  server: string
}

const player1: iPlayerData<number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: iPlayerData<string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: iPlayerData<{ total: number, inMenu: number }> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

interface iAmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
};

interface iFigures {
  name: "square" | "circle" | "triangle" | "line" | string;
  data?: { [key: string]: unknown }
}

function calculateAmountOfFigures(figures: iFigures[]): iAmountOfFigures {
  const res: iAmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0
  };

  figures.forEach(figure => {
    switch (figure.name) {
      case "square":
        res.squares++
        break;
      case "circle":
        res.circles++
        break;
      case "triangle":
        res.triangles++
        break;
      case "line":
        res.others++
        break;
      default:
        break;
    }

  })
  return res
}

const data = [
  {
    name: "square",
    data: { a: 5, b: 10 },
  },
  {
    name: "square",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "square",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];

console.log(calculateAmountOfFigures(data));


