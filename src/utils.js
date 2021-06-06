import { coffee } from "./psyTestData"

export const coffeeInfo = (score) => {
  if (score < 10) {
    return null
  } else if (score < 13) {
    return coffee[0]
  } else if (score < 16) {
    return coffee[1]
  } else if (score < 19) {
    return coffee[2]
  } else if (score < 22) {
    return coffee[3]
  } else if (score < 25) {
    return coffee[4]
  } else if (score < 28) {
    return coffee[5]
  } else if (score <= 30) {
    return coffee[6]
  }
}

