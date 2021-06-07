import test1Img from "./img/test1-unsplash.jpg"
import test2Img from "./img/test2-unsplash.jpg"
import test3Img from "./img/test3-unsplash.jpg"
import test4Img from "./img/test4-unsplash.jpg"
import test5Img from "./img/test5-unsplash.jpg"
import test6Img from "./img/test6-unsplash.jpg"
import test7Img from "./img/test7-unsplash.jpg"
import test8Img from "./img/test8-unsplash.jpg"
import test9Img from "./img/test9-unsplash.jpg"
import test10Img from "./img/test10-unsplash.jpg"
import coffee1Img from "./img/coffee1-unsplash.jpg"
import coffee2Img from "./img/coffee2-unsplash.jpg"
import coffee3Img from "./img/coffee3-unsplash.jpg"
import coffee4Img from "./img/coffee4-unsplash.jpg"
import coffee5Img from "./img/coffee5-unsplash.jpg"
import coffee6Img from "./img/coffee6-unsplash.jpg"
import coffee7Img from "./img/coffee7-unsplash.jpg"

export const checkList = [
  {
    id: 1,
    title: "이제부터 당신은 여행을 계획합니다. 당신이 가고싶어하는 여행지는 어디입니까?",
    options: [
      "가깝지만 평소에 많이 가지 못했던 곳",
      "인스타에서 소문난 국내여행지",
      "낯설지만 평소 가보고 싶었던 해외여행지"
    ],
  },
  {
    id: 2,
    title: "며칠 동안 여행을 떠나고 싶나요?",
    options: [
      "3일 이내의 짧은 기간",
      "일주일 정도의 기간",
      "한 달 이상의 긴 기간"
    ],
  },
  {
    id: 3,
    title: "당신의 떠나는 여행의 목적은 무엇인가요?",
    options: [
      "아무런 목적 없이 떠나는 여행",
      "지친 나를 위로해주는 휴식",
      "새로운 곳에서의 새로운 사람들과의 만남"
    ],
  },
  {
    id: 4,
    title: "누구랑 여행을 떠나나요?",
    options: [
      "혼자",
      "가장 친한 친구 한 명 또는 애인",
      "가족(부모님 혹은 자녀 포함)",
      "친구 여려명(3명 이상)"
    ],
  },
  {
    id: 5,
    title: "당신은 여행 계획을 어느정도 자세하게 세웁니까?",
    options: [
      "시간대 별로 세세하게 세운다",
      "오전 오후 밤으로 나누어 세운다",
      "하루에 할 일을 정리하여 세운다",
      "계획은 필요없다. 일단 출발하고 나서 생각한다"
    ],
  },
  {
    id: 6,
    title: "여행 당일이 되었습니다. 그런데 날씨가 당신이 원하는 날씨가 아닙니다. 여행을 어떻게 하시겠습니까?",
    options: [
      "여행을 취소한다",
      "일정을 하루 미뤄 출발한다",
      "날씨 상관없이 바로 출발한다"
    ],
  },
  {
    id: 7,
    title: "여행지로 이동 하는 중 휴게소를 들렸습니다.",
    options: [
      "급한 볼 일만 얼른 보고 다시 출발한다",
      "휴게소를 천천히 둘러보며 충분한 휴식을 가진다"
    ],
  },
  {
    id: 8,
    title: "드디어 여행지의 숙소에 도착했습니다. 이동하느라 많이 피곤한 당신, 첫 날은 어떻게 보내겠습니까?",
    options: [
      "숙소 안에서 휴식을 가지면서 시간을 보낸다",
      "숙소 밖을 나와 간단히 요기를 하고 구경한다"
    ],
  },
  {
    id: 9,
    title: "여행지에서 당신은?",
    options: [
      "천천히 거닐며 지나가는 사람들과 풍경을 본다",
      "맛집, 관광지, 기념품 샵을 돌아다닌다",
      "정해진 시간 동안 많은 곳을 보기위해 서둘러 둘러본다"
    ],
  },
  {
    id: 10,
    title: "여행의 마지막 날 입니다. 마지막 날 당신은?",
    options: [
      "오전 일찍 일어나 준비하여 집으로 간다",
      "오전 늦게 일어나 간단히 점심을 먹고 집으로 간다",
      "최선을 다해 놀 다 녹초가 되어 집으로 간다"
    ],
  }
]

export const coffee = [
  {
    //10 ~ 12
    id: 1,
    EName: "Espresso",
    KName: "에스프레소",
    contents: [
      "조용한 휴식이 필요한 당신에게 에스프레소를 추천합니다",
      "에스프레소라는 이름은 영어로 `빠른`을 뜻하는 Express의 이탈리아어 입니다",
      "아주 진한 이탈리아식 커피로 데미타세(demitasse)라는 조그만 잔에 담아서 마셔야 제맛을 느낄 수 있습니다"
    ],
  },
  {
    //13 ~ 15
    id: 2,
    EName: "Caffe Latte",
    KName: "카페라떼",
    contents: [
      "낭만적인 당신에게 카페라떼를 추천합니다",
      "라떼는 이탈리아어로 우유를 뜻으로 에스프레소와 우유의 만남을 이름 그대로 표현한 커피입니다",
      "부드러운 우유 맛이 일품인 라떼는 양을 많이 해서 큰 잔에 마시며 아침 식사 대용으로도 든든합니다"
    ],
  },
  {
    //16 ~ 18
    id: 3,
    EName: "Caffe Latte",
    EName: "Americano",
    KName: "아메리카노",
    contents: [
      "상냥하고 헌신적인 당신에게 아메리카노를 추천합니다",
      "에스프레소에 뜨거운 물을 섞어 연하게 마시는 커피로 미국인들(American)이 즐겨 마신다고 하여 붙여진 이름입니다",
      "다른 커피 종류들에 비해 칼로리가 매우 낮아 다이어트에 매우 좋은 커피입니다"
    ],
  },
  {
    //19 ~ 21
    id: 4,
    EName: "Vanila Latte",
    KName: "바닐라라떼",
    contents: [
      "이상보다는 현실을 직시하는 당신에게 바닐라라떼를 추천합니다",
      "에스프레소를 이용한 카페라떼에 바닐라 시럽을 넣은 커피입니다",
      "바닐라 시럽을 넣어 에스프레소의 쓴맛과 바닐라시럽의 향미가 함께 느껴져 대부분 사람들의 입맛을 가리지 않습니다"
    ],
  },
  {
    //21 ~ 23
    id: 5,
    EName: "Caramel Macchiato",
    KName: "카라멜 마끼아또",
    contents: [
      "자유로운 영혼을 가진 당신에게 카라멜 마끼아또를 추천합니다",
      "마끼아또는 얼룩진, 표시한, 점 등의 의미를 가진 이탈리아어로 에스프레소 위에 흰 거품을 올린 모양이 꼭 얼국과 같다고 하여 이름이 붙었습니다",
      "카라멜 마끼아또는 젓지 않고 그냥 그대로 마시면 우유와 우유거품, 에스프레소, 시럽을 입안에서 다 느낄 수 있습니다"
    ],
  },
  {
    //24 ~ 26asdf
    id: 6,
    EName: "Cappuccino",
    KName: "카푸치노",
    contents: [
      "도전정신이 뛰어난 당신에게 카푸치노를 추천합니다",
      "카푸치노라는 이름의 유래 중 하나는 이탈리아 프란체스코회의 카푸친 수도회(Capuchin friars) 수도사들의 머리모양과 비슷하여 이름이 붙어졌다는 것입니다",
      "달콤한 우유 거품을 듬뿍 추가하여 카푸치노를 즐겨 보세요"
    ],
  },
  {
    // ~ 30
    id: 7,
    EName: "Caffe Mocha",
    KName: "카페모카",
    contents: [
      "에너지가 넘치는 당신에게 카페모카를 추천합니다",
      "커피, 우유, 초콜릿이 함께한 메뉴로 최초 커피 경작지인 예멘지역의 커피 수출이 원활했던 항구 모카(Mocha)에서 이름에서 유래되었습니다",
      "카페모카 위에 캐러멜, 생크림등을 추가하면 더욱 맛있는 카페모카를 즐길 수 있습니다"
    ],
  }
]