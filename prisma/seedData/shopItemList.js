const shopItemList = [
  { "shopId": 1, "catalystId": 31, "price": 120 },
  { "shopId": 1, "catalystId": 7, "price": 120 },
  { "shopId": 1, "catalystId": 15, "price": 120 },
  { "shopId": 2, "catalystId": 23, "price": 120 },
  { "shopId": 2, "catalystId": 33, "price": 120 },
  { "shopId": 2, "catalystId": 26, "price": 120 },
  { "shopId": 3, "catalystId": 31, "price": 120 },
  { "shopId": 3, "catalystId": 36, "price": 120 },
  { "shopId": 3, "catalystId": 34, "price": 120 },
  { "shopId": 4, "catalystId": 5, "price": 120 },
  { "shopId": 4, "catalystId": 14, "price": 120 },
  { "shopId": 4, "catalystId": 3, "price": 120 },
  { "shopId": 5, "catalystId": 14, "price": 120 },
  { "shopId": 5, "catalystId": 3, "price": 120 },
  { "shopId": 5, "catalystId": 35, "price": 120 },
  { "shopId": 6, "catalystId": 29, "price": 120 },
  { "shopId": 6, "catalystId": 30, "price": 120 },
  { "shopId": 6, "catalystId": 2, "price": 120 },
  { "shopId": 7, "catalystId": 17, "price": 120 },
  { "shopId": 7, "catalystId": 29, "price": 120 },
  { "shopId": 7, "catalystId": 21, "price": 120 },
  { "shopId": 8, "catalystId": 15, "price": 120 },
  { "shopId": 8, "catalystId": 5, "price": 120 },
  { "shopId": 8, "catalystId": 30, "price": 120 },
  { "shopId": 9, "catalystId": 13, "price": 120 },
  { "shopId": 9, "catalystId": 21, "price": 120 },
  { "shopId": 9, "catalystId": 25, "price": 120 },
  { "shopId": 10, "catalystId": 7, "price": 120 },
  { "shopId": 10, "catalystId": 32, "price": 120 },
  { "shopId": 10, "catalystId": 13, "price": 120 },
  { "shopId": 11, "catalystId": 8, "price": 120 },
  { "shopId": 11, "catalystId": 9, "price": 120 },
  { "shopId": 11, "catalystId": 35, "price": 120 },
  { "shopId": 12, "catalystId": 33, "price": 120 },
  { "shopId": 12, "catalystId": 28, "price": 120 },
  { "shopId": 12, "catalystId": 32, "price": 120 },
  { "shopId": 13, "catalystId": 34, "price": 120 },
  { "shopId": 13, "catalystId": 17, "price": 120 },
  { "shopId": 13, "catalystId": 26, "price": 120 },
  { "shopId": 14, "catalystId": 28, "price": 120 },
  { "shopId": 14, "catalystId": 10, "price": 120 },
  { "shopId": 14, "catalystId": 2, "price": 120 },
  { "shopId": 15, "catalystId": 23, "price": 120 },
  { "shopId": 15, "catalystId": 36, "price": 120 },
  { "shopId": 15, "catalystId": 9, "price": 120 },
  { "shopId": 16, "catalystId": 8, "price": 120 },
  { "shopId": 16, "catalystId": 10, "price": 120 },
  { "shopId": 16, "catalystId": 25, "price": 120 },
  { "shopId": 17, "catalystId": 16, "price": 400 },
  { "shopId": 17, "catalystId": 31, "price": 120 },
  { "shopId": 17, "catalystId": 7, "price": 120 },
  { "shopId": 17, "catalystId": 15, "price": 120 },
  { "shopId": 18, "catalystId": 27, "price": 400 },
  { "shopId": 18, "catalystId": 23, "price": 120 },
  { "shopId": 18, "catalystId": 33, "price": 120 },
  { "shopId": 18, "catalystId": 26, "price": 120 },
  { "shopId": 19, "catalystId": 31, "price": 120 },
  { "shopId": 19, "catalystId": 36, "price": 120 },
  { "shopId": 19, "catalystId": 34, "price": 120 },
  { "shopId": 20, "catalystId": 12, "price": 400 },
  { "shopId": 20, "catalystId": 5, "price": 120 },
  { "shopId": 20, "catalystId": 14, "price": 120 },
  { "shopId": 20, "catalystId": 3, "price": 120 },
  { "shopId": 21, "catalystId": 14, "price": 120 },
  { "shopId": 21, "catalystId": 3, "price": 120 },
  { "shopId": 21, "catalystId": 35, "price": 120 },
  { "shopId": 22, "catalystId": 22, "price": 400 },
  { "shopId": 22, "catalystId": 29, "price": 120 },
  { "shopId": 22, "catalystId": 30, "price": 120 },
  { "shopId": 22, "catalystId": 2, "price": 120 },
  { "shopId": 23, "catalystId": 6, "price": 400 },
  { "shopId": 23, "catalystId": 17, "price": 120 },
  { "shopId": 23, "catalystId": 29, "price": 120 },
  { "shopId": 23, "catalystId": 21, "price": 120 },
  { "shopId": 24, "catalystId": 11, "price": 400 },
  { "shopId": 24, "catalystId": 15, "price": 120 },
  { "shopId": 24, "catalystId": 5, "price": 120 },
  { "shopId": 24, "catalystId": 30, "price": 120 },
  { "shopId": 25, "catalystId": 24, "price": 400 },
  { "shopId": 25, "catalystId": 13, "price": 120 },
  { "shopId": 25, "catalystId": 21, "price": 120 },
  { "shopId": 25, "catalystId": 25, "price": 120 },
  { "shopId": 26, "catalystId": 1, "price": 400 },
  { "shopId": 26, "catalystId": 7, "price": 120 },
  { "shopId": 26, "catalystId": 32, "price": 120 },
  { "shopId": 26, "catalystId": 13, "price": 120 },
  { "shopId": 27, "catalystId": 20, "price": 400 },
  { "shopId": 27, "catalystId": 8, "price": 120 },
  { "shopId": 27, "catalystId": 9, "price": 120 },
  { "shopId": 27, "catalystId": 35, "price": 120 },
  { "shopId": 28, "catalystId": 19, "price": 400 },
  { "shopId": 28, "catalystId": 33, "price": 120 },
  { "shopId": 28, "catalystId": 28, "price": 120 },
  { "shopId": 28, "catalystId": 32, "price": 120 },
  { "shopId": 29, "catalystId": 18, "price": 400 },
  { "shopId": 29, "catalystId": 34, "price": 120 },
  { "shopId": 29, "catalystId": 17, "price": 120 },
  { "shopId": 29, "catalystId": 26, "price": 120 },
  { "shopId": 30, "catalystId": 4, "price": 400 },
  { "shopId": 30, "catalystId": 28, "price": 120 },
  { "shopId": 30, "catalystId": 10, "price": 120 },
  { "shopId": 30, "catalystId": 2, "price": 120 },
  { "shopId": 31, "catalystId": 23, "price": 120 },
  { "shopId": 31, "catalystId": 36, "price": 120 },
  { "shopId": 31, "catalystId": 9, "price": 120 },
  { "shopId": 32, "catalystId": 8, "price": 120 },
  { "shopId": 32, "catalystId": 10, "price": 120 },
  { "shopId": 32, "catalystId": 25, "price": 120 },
  { "shopId": 33, "catalystId": 10, "price": 120 },
  { "shopId": 33, "catalystId": 9, "price": 120 },
  { "shopId": 33, "catalystId": 15, "price": 120 },
  { "shopId": 34, "catalystId": 31, "price": 120 },
  { "shopId": 34, "catalystId": 9, "price": 120 },
  { "shopId": 34, "catalystId": 23, "price": 120 },
  { "shopId": 34, "catalystId": 30, "price": 120 },
  { "shopId": 35, "catalystId": 5, "price": 120 },
  { "shopId": 35, "catalystId": 35, "price": 120 },
  { "shopId": 35, "catalystId": 17, "price": 120 },
  { "shopId": 36, "catalystId": 7, "price": 120 },
  { "shopId": 36, "catalystId": 5, "price": 120 },
  { "shopId": 36, "catalystId": 10, "price": 120 },
  { "shopId": 36, "catalystId": 35, "price": 120 },
  { "shopId": 37, "catalystId": 29, "price": 120 },
  { "shopId": 37, "catalystId": 21, "price": 120 },
  { "shopId": 37, "catalystId": 2, "price": 120 },
  { "shopId": 38, "catalystId": 31, "price": 120 },
  { "shopId": 38, "catalystId": 26, "price": 120 },
  { "shopId": 38, "catalystId": 13, "price": 120 },
  { "shopId": 39, "catalystId": 17, "price": 120 },
  { "shopId": 39, "catalystId": 21, "price": 120 },
  { "shopId": 39, "catalystId": 2, "price": 120 },
  { "shopId": 40, "catalystId": 33, "price": 120 },
  { "shopId": 40, "catalystId": 15, "price": 120 },
  { "shopId": 40, "catalystId": 26, "price": 120 },
  { "shopId": 41, "catalystId": 32, "price": 120 },
  { "shopId": 41, "catalystId": 33, "price": 120 },
  { "shopId": 41, "catalystId": 7, "price": 120 },
  { "shopId": 42, "catalystId": 8, "price": 120 },
  { "shopId": 42, "catalystId": 30, "price": 120 },
  { "shopId": 42, "catalystId": 23, "price": 120 },
  { "shopId": 43, "catalystId": 30, "price": 120 },
  { "shopId": 43, "catalystId": 32, "price": 120 },
  { "shopId": 43, "catalystId": 29, "price": 120 },
  { "shopId": 44, "catalystId": 28, "price": 120 },
  { "shopId": 44, "catalystId": 8, "price": 120 },
  { "shopId": 44, "catalystId": 13, "price": 120 },
  { "shopId": 45, "catalystId": 10, "price": 120 },
  { "shopId": 45, "catalystId": 23, "price": 120 },
  { "shopId": 45, "catalystId": 5, "price": 120 },
  { "shopId": 46, "catalystId": 34, "price": 120 },
  { "shopId": 46, "catalystId": 3, "price": 120 },
  { "shopId": 46, "catalystId": 35, "price": 120 },
  { "shopId": 46, "catalystId": 25, "price": 120 },
  { "shopId": 47, "catalystId": 14, "price": 120 },
  { "shopId": 47, "catalystId": 28, "price": 120 },
  { "shopId": 47, "catalystId": 34, "price": 120 },
  { "shopId": 47, "catalystId": 35, "price": 120 },
  { "shopId": 48, "catalystId": 16, "price": 400 },
  { "shopId": 48, "catalystId": 36, "price": 120 },
  { "shopId": 48, "catalystId": 23, "price": 120 },
  { "shopId": 48, "catalystId": 32, "price": 120 },
  { "shopId": 49, "catalystId": 27, "price": 400 },
  { "shopId": 49, "catalystId": 26, "price": 120 },
  { "shopId": 49, "catalystId": 33, "price": 120 },
  { "shopId": 49, "catalystId": 34, "price": 120 },
  { "shopId": 50, "catalystId": 22, "price": 400 },
  { "shopId": 50, "catalystId": 28, "price": 120 },
  { "shopId": 50, "catalystId": 5, "price": 120 },
  { "shopId": 50, "catalystId": 14, "price": 120 },
  { "shopId": 51, "catalystId": 12, "price": 400 },
  { "shopId": 51, "catalystId": 3, "price": 120 },
  { "shopId": 51, "catalystId": 30, "price": 120 },
  { "shopId": 51, "catalystId": 25, "price": 120 },
  { "shopId": 52, "catalystId": 18, "price": 400 },
  { "shopId": 52, "catalystId": 17, "price": 120 },
  { "shopId": 52, "catalystId": 31, "price": 120 },
  { "shopId": 52, "catalystId": 9, "price": 120 },
  { "shopId": 53, "catalystId": 4, "price": 400 },
  { "shopId": 53, "catalystId": 35, "price": 120 },
  { "shopId": 53, "catalystId": 29, "price": 120 },
  { "shopId": 53, "catalystId": 33, "price": 120 },
  { "shopId": 54, "catalystId": 6, "price": 400 },
  { "shopId": 54, "catalystId": 21, "price": 120 },
  { "shopId": 54, "catalystId": 7, "price": 120 },
  { "shopId": 54, "catalystId": 26, "price": 120 },
  { "shopId": 55, "catalystId": 1, "price": 400 },
  { "shopId": 55, "catalystId": 15, "price": 120 },
  { "shopId": 55, "catalystId": 2, "price": 120 },
  { "shopId": 55, "catalystId": 3, "price": 120 },
  { "shopId": 56, "catalystId": 24, "price": 400 },
  { "shopId": 56, "catalystId": 34, "price": 120 },
  { "shopId": 56, "catalystId": 10, "price": 120 },
  { "shopId": 56, "catalystId": 35, "price": 120 },
  { "shopId": 57, "catalystId": 11, "price": 400 },
  { "shopId": 57, "catalystId": 14, "price": 120 },
  { "shopId": 57, "catalystId": 25, "price": 120 },
  { "shopId": 57, "catalystId": 2, "price": 120 },
  { "shopId": 58, "catalystId": 20, "price": 400 },
  { "shopId": 58, "catalystId": 32, "price": 120 },
  { "shopId": 58, "catalystId": 13, "price": 120 },
  { "shopId": 58, "catalystId": 28, "price": 120 },
  { "shopId": 59, "catalystId": 19, "price": 400 },
  { "shopId": 59, "catalystId": 9, "price": 120 },
  { "shopId": 59, "catalystId": 8, "price": 120 },
  { "shopId": 59, "catalystId": 31, "price": 120 },
]

module.exports = shopItemList;