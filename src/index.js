import Vorpal from "vorpal";
import {
  addLemonadeToOrder,
  writeFileSync,
  readAllFiles,
  buildQuestionArray,
  createLemonade,
  updateOrderTotal,
  map,
} from "./lib";

const vorpal = Vorpal();

console.log(
  [1, 2, 3, 4, 5].reduce((acc, curr, idx) => {
    const letters = ["a", "b", "c", "d", "e"];

    return {
      ...acc,
      [letters[idx]]: curr,
    };
  }, {})
);

// split: (key: string) -> [string, string, string]
const split = ([key, val]) => [key.split(/(\d+)/), val];

const parseNums = ([[key, idx], val]) => [
  key,
  Number.parseInt(idx),
  Number.parseInt(val),
];

const createObjects = (acc, [key, idx, val]) =>
  acc[idx] ? (acc[idx][key] = val) && acc : [...acc, { [key]: val }];

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const makeLemonadeObjects = compose(map(split), map(parseNums))(createObjects);

vorpal
  .command(
    "createOrder <name> <phoneNumber>",
    "Create an order and saves it as a JSON file"
  )
  .action(function (args) {
    // Prompt the user for how many lemonades they want
    return (
      this.prompt({
        type: "number",
        name: "numLemonades",
        default: 1,
        message: "how many lemonades would you like to order?",
      })
        .then(({ numLemonades }) =>
          [...Array(Number.parseInt(numLemonades))].flatMap(buildQuestionArray)
        )
        .then((questions) => this.prompt(questions))
        .then((response) =>
          Object.entries(response).reduce(makeLemonadeObjects, [])
        ) / then((lemonades) => this.log(lemonades))
      // .then((response) =>
      //   updateOrderTotal(
      //     [...Array(Number.parseInt(numLemonades))].reduce(
      //       map(createLemonade(response))(addLemonadeToOrder),
      //       {
      //         total: 0,
      //         lemonades: [],
      //         customer: {
      //           name: args.name,
      //           phoneNumber: args.phoneNumber,
      //         },
      //         lemonadeStand: {
      //           name: "Cooksys Lemonade Stand",
      //         },
      //       }
      //     )
      //   )
      // )
      // .then((order) =>
      //   writeFileSync(
      //     order.lemonadeStand.name + "/" + order.customer.name + ".json",
      //     order
      //   )
      // )
    );
  });
vorpal
  .command(
    "getOrders <lemonadeStand>",
    "Get all orders for the given lemonade stand"
  )
  .action(function ({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand);
    this.log(`There are ${orders.length} orders at ${lemonadeStand}`);
    for (let order of orders) {
      this.log(`Order: `);
      this.log(`Total Price: ${order.total}`);
      this.log(`Lemonades:`);
      this.log(order.lemonades);
      this.log(`Customer:`);
      this.log(order.customer);
    }
    callback();
  });

vorpal.delimiter("lemonade-stand$").show();
