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
  "/static/media/test1-unsplash.jpg",
  "/static/media/test2-unsplash.jpg",
  "/static/media/test3-unsplash.jpg",
  "/static/media/test4-unsplash.jpg",
  "/static/media/test5-unsplash.jpg",
  "/static/media/test6-unsplash.jpg",
  "/static/media/test7-unsplash.jpg",
  "/static/media/test8-unsplash.jpg",
  "/static/media/test9-unsplash.jpg",
  "/static/media/test10-unsplash.jpg",
  "/static/media/coffee1-unsplash.jpg",
  "/static/media/coffee2-unsplash.jpg",
  "/static/media/coffee3-unsplash.jpg",
  "/static/media/coffee4-unsplash.jpg",
  "/static/media/coffee5-unsplash.jpg",
  "/static/media/coffee6-unsplash.jpg",
  "/static/media/coffee7-unsplash.jpg",
]


export const preloading = async (files) => {
  let imgs = new Array()
  for (let i = 0; i < files.length; i++) {
    imgs[i] = new Image()
    imgs[i].src = files[i];
  }
  return imgs
}
