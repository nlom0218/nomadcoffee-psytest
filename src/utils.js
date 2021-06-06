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

export const files = [
  "./img/test1-unsplash.jpg",
  "./img/test2-unsplash.jpg",
  "./img/test3-unsplash.jpg",
  "./img/test4-unsplash.jpg",
  "./img/test5-unsplash.jpg",
  "./img/test6-unsplash.jpg",
  "./img/test7-unsplash.jpg",
  "./img/test8-unsplash.jpg",
  "./img/test9-unsplash.jpg",
  "./img/test10-unsplash.jpg",
  "./img/coffee1-unsplash.jpg",
  "./img/coffee2-unsplash.jpg",
  "./img/coffee3-unsplash.jpg",
  "./img/coffee4-unsplash.jpg",
  "./img/coffee5-unsplash.jpg",
  "./img/coffee6-unsplash.jpg",
  "./img/coffee7-unsplash.jpg",
]


export const preloading = async (files) => {
  let imgs = new Array()
  for (let i = 0; i < files.length; i++) {
    imgs[i] = new Image()
    imgs[i].src = files[i];
  }
  return imgs
}
