const shopItemList = [
  { "regionId": 1, "catalystId": 31, "price": 120 },
  { "regionId": 1, "catalystId": 7, "price": 120 },
  { "regionId": 1, "catalystId": 15, "price": 120 },
  { "regionId": 2, "catalystId": 23, "price": 120 },
  { "regionId": 2, "catalystId": 33, "price": 120 },
  { "regionId": 2, "catalystId": 26, "price": 120 },
  { "regionId": 3, "catalystId": 31, "price": 120 },
  { "regionId": 3, "catalystId": 36, "price": 120 },
  { "regionId": 3, "catalystId": 34, "price": 120 },
  { "regionId": 4, "catalystId": 5, "price": 120 },
  { "regionId": 4, "catalystId": 14, "price": 120 },
  { "regionId": 4, "catalystId": 3, "price": 120 },
  { "regionId": 5, "catalystId": 14, "price": 120 },
  { "regionId": 5, "catalystId": 3, "price": 120 },
  { "regionId": 5, "catalystId": 35, "price": 120 },
  { "regionId": 6, "catalystId": 29, "price": 120 },
  { "regionId": 6, "catalystId": 30, "price": 120 },
  { "regionId": 6, "catalystId": 2, "price": 120 },
  { "regionId": 7, "catalystId": 17, "price": 120 },
  { "regionId": 7, "catalystId": 29, "price": 120 },
  { "regionId": 7, "catalystId": 21, "price": 120 },
  { "regionId": 8, "catalystId": 15, "price": 120 },
  { "regionId": 8, "catalystId": 5, "price": 120 },
  { "regionId": 8, "catalystId": 30, "price": 120 },
  { "regionId": 9, "catalystId": 13, "price": 120 },
  { "regionId": 9, "catalystId": 21, "price": 120 },
  { "regionId": 9, "catalystId": 25, "price": 120 },
  { "regionId": 10, "catalystId": 7, "price": 120 },
  { "regionId": 10, "catalystId": 32, "price": 120 },
  { "regionId": 10, "catalystId": 13, "price": 120 },
  { "regionId": 11, "catalystId": 8, "price": 120 },
  { "regionId": 11, "catalystId": 9, "price": 120 },
  { "regionId": 11, "catalystId": 35, "price": 120 },
  { "regionId": 12, "catalystId": 33, "price": 120 },
  { "regionId": 12, "catalystId": 28, "price": 120 },
  { "regionId": 12, "catalystId": 32, "price": 120 },
  { "regionId": 13, "catalystId": 34, "price": 120 },
  { "regionId": 13, "catalystId": 17, "price": 120 },
  { "regionId": 13, "catalystId": 26, "price": 120 },
  { "regionId": 14, "catalystId": 28, "price": 120 },
  { "regionId": 14, "catalystId": 10, "price": 120 },
  { "regionId": 14, "catalystId": 2, "price": 120 },
  { "regionId": 15, "catalystId": 23, "price": 120 },
  { "regionId": 15, "catalystId": 36, "price": 120 },
  { "regionId": 15, "catalystId": 9, "price": 120 },
  { "regionId": 16, "catalystId": 8, "price": 120 },
  { "regionId": 16, "catalystId": 10, "price": 120 },
  { "regionId": 16, "catalystId": 25, "price": 120 },
  { "regionId": 17, "catalystId": 16, "price": 400 },
  { "regionId": 17, "catalystId": 31, "price": 120 },
  { "regionId": 17, "catalystId": 7, "price": 120 },
  { "regionId": 17, "catalystId": 15, "price": 120 },
  { "regionId": 18, "catalystId": 27, "price": 400 },
  { "regionId": 18, "catalystId": 23, "price": 120 },
  { "regionId": 18, "catalystId": 33, "price": 120 },
  { "regionId": 18, "catalystId": 26, "price": 120 },
  { "regionId": 19, "catalystId": 31, "price": 120 },
  { "regionId": 19, "catalystId": 36, "price": 120 },
  { "regionId": 19, "catalystId": 34, "price": 120 },
  { "regionId": 20, "catalystId": 12, "price": 400 },
  { "regionId": 20, "catalystId": 5, "price": 120 },
  { "regionId": 20, "catalystId": 14, "price": 120 },
  { "regionId": 20, "catalystId": 3, "price": 120 },
  { "regionId": 21, "catalystId": 14, "price": 120 },
  { "regionId": 21, "catalystId": 3, "price": 120 },
  { "regionId": 21, "catalystId": 35, "price": 120 },
  { "regionId": 22, "catalystId": 22, "price": 400 },
  { "regionId": 22, "catalystId": 29, "price": 120 },
  { "regionId": 22, "catalystId": 30, "price": 120 },
  { "regionId": 22, "catalystId": 2, "price": 120 },
  { "regionId": 23, "catalystId": 6, "price": 400 },
  { "regionId": 23, "catalystId": 17, "price": 120 },
  { "regionId": 23, "catalystId": 29, "price": 120 },
  { "regionId": 23, "catalystId": 21, "price": 120 },
  { "regionId": 24, "catalystId": 11, "price": 400 },
  { "regionId": 24, "catalystId": 15, "price": 120 },
  { "regionId": 24, "catalystId": 5, "price": 120 },
  { "regionId": 24, "catalystId": 30, "price": 120 },
  { "regionId": 25, "catalystId": 24, "price": 400 },
  { "regionId": 25, "catalystId": 13, "price": 120 },
  { "regionId": 25, "catalystId": 21, "price": 120 },
  { "regionId": 25, "catalystId": 25, "price": 120 },
  { "regionId": 26, "catalystId": 1, "price": 400 },
  { "regionId": 26, "catalystId": 7, "price": 120 },
  { "regionId": 26, "catalystId": 32, "price": 120 },
  { "regionId": 26, "catalystId": 13, "price": 120 },
  { "regionId": 27, "catalystId": 20, "price": 400 },
  { "regionId": 27, "catalystId": 8, "price": 120 },
  { "regionId": 27, "catalystId": 9, "price": 120 },
  { "regionId": 27, "catalystId": 35, "price": 120 },
  { "regionId": 28, "catalystId": 19, "price": 400 },
  { "regionId": 28, "catalystId": 33, "price": 120 },
  { "regionId": 28, "catalystId": 28, "price": 120 },
  { "regionId": 28, "catalystId": 32, "price": 120 },
  { "regionId": 29, "catalystId": 18, "price": 400 },
  { "regionId": 29, "catalystId": 34, "price": 120 },
  { "regionId": 29, "catalystId": 17, "price": 120 },
  { "regionId": 29, "catalystId": 26, "price": 120 },
  { "regionId": 30, "catalystId": 4, "price": 400 },
  { "regionId": 30, "catalystId": 28, "price": 120 },
  { "regionId": 30, "catalystId": 10, "price": 120 },
  { "regionId": 30, "catalystId": 2, "price": 120 },
  { "regionId": 31, "catalystId": 23, "price": 120 },
  { "regionId": 31, "catalystId": 36, "price": 120 },
  { "regionId": 31, "catalystId": 9, "price": 120 },
  { "regionId": 32, "catalystId": 8, "price": 120 },
  { "regionId": 32, "catalystId": 10, "price": 120 },
  { "regionId": 32, "catalystId": 25, "price": 120 },
  { "regionId": 33, "catalystId": 10, "price": 120 },
  { "regionId": 33, "catalystId": 9, "price": 120 },
  { "regionId": 33, "catalystId": 15, "price": 120 },
  { "regionId": 34, "catalystId": 31, "price": 120 },
  { "regionId": 34, "catalystId": 9, "price": 120 },
  { "regionId": 34, "catalystId": 23, "price": 120 },
  { "regionId": 34, "catalystId": 30, "price": 120 },
  { "regionId": 35, "catalystId": 5, "price": 120 },
  { "regionId": 35, "catalystId": 35, "price": 120 },
  { "regionId": 35, "catalystId": 17, "price": 120 },
  { "regionId": 36, "catalystId": 7, "price": 120 },
  { "regionId": 36, "catalystId": 5, "price": 120 },
  { "regionId": 36, "catalystId": 10, "price": 120 },
  { "regionId": 36, "catalystId": 35, "price": 120 },
  { "regionId": 37, "catalystId": 29, "price": 120 },
  { "regionId": 37, "catalystId": 21, "price": 120 },
  { "regionId": 37, "catalystId": 2, "price": 120 },
  { "regionId": 38, "catalystId": 31, "price": 120 },
  { "regionId": 38, "catalystId": 26, "price": 120 },
  { "regionId": 38, "catalystId": 13, "price": 120 },
  { "regionId": 39, "catalystId": 17, "price": 120 },
  { "regionId": 39, "catalystId": 21, "price": 120 },
  { "regionId": 39, "catalystId": 2, "price": 120 },
  { "regionId": 40, "catalystId": 33, "price": 120 },
  { "regionId": 40, "catalystId": 15, "price": 120 },
  { "regionId": 40, "catalystId": 26, "price": 120 },
  { "regionId": 41, "catalystId": 32, "price": 120 },
  { "regionId": 41, "catalystId": 33, "price": 120 },
  { "regionId": 41, "catalystId": 7, "price": 120 },
  { "regionId": 42, "catalystId": 8, "price": 120 },
  { "regionId": 42, "catalystId": 30, "price": 120 },
  { "regionId": 42, "catalystId": 23, "price": 120 },
  { "regionId": 43, "catalystId": 30, "price": 120 },
  { "regionId": 43, "catalystId": 32, "price": 120 },
  { "regionId": 43, "catalystId": 29, "price": 120 },
  { "regionId": 44, "catalystId": 28, "price": 120 },
  { "regionId": 44, "catalystId": 8, "price": 120 },
  { "regionId": 44, "catalystId": 13, "price": 120 },
  { "regionId": 45, "catalystId": 10, "price": 120 },
  { "regionId": 45, "catalystId": 23, "price": 120 },
  { "regionId": 45, "catalystId": 5, "price": 120 },
  { "regionId": 46, "catalystId": 34, "price": 120 },
  { "regionId": 46, "catalystId": 3, "price": 120 },
  { "regionId": 46, "catalystId": 35, "price": 120 },
  { "regionId": 46, "catalystId": 25, "price": 120 },
  { "regionId": 47, "catalystId": 14, "price": 120 },
  { "regionId": 47, "catalystId": 28, "price": 120 },
  { "regionId": 47, "catalystId": 34, "price": 120 },
  { "regionId": 47, "catalystId": 35, "price": 120 },
  { "regionId": 48, "catalystId": 16, "price": 400 },
  { "regionId": 48, "catalystId": 36, "price": 120 },
  { "regionId": 48, "catalystId": 23, "price": 120 },
  { "regionId": 48, "catalystId": 32, "price": 120 },
  { "regionId": 49, "catalystId": 27, "price": 400 },
  { "regionId": 49, "catalystId": 26, "price": 120 },
  { "regionId": 49, "catalystId": 33, "price": 120 },
  { "regionId": 49, "catalystId": 34, "price": 120 },
  { "regionId": 50, "catalystId": 22, "price": 400 },
  { "regionId": 50, "catalystId": 28, "price": 120 },
  { "regionId": 50, "catalystId": 5, "price": 120 },
  { "regionId": 50, "catalystId": 14, "price": 120 },
  { "regionId": 51, "catalystId": 12, "price": 400 },
  { "regionId": 51, "catalystId": 3, "price": 120 },
  { "regionId": 51, "catalystId": 30, "price": 120 },
  { "regionId": 51, "catalystId": 25, "price": 120 },
  { "regionId": 52, "catalystId": 18, "price": 400 },
  { "regionId": 52, "catalystId": 17, "price": 120 },
  { "regionId": 52, "catalystId": 31, "price": 120 },
  { "regionId": 52, "catalystId": 9, "price": 120 },
  { "regionId": 53, "catalystId": 4, "price": 400 },
  { "regionId": 53, "catalystId": 35, "price": 120 },
  { "regionId": 53, "catalystId": 29, "price": 120 },
  { "regionId": 53, "catalystId": 33, "price": 120 },
  { "regionId": 54, "catalystId": 6, "price": 400 },
  { "regionId": 54, "catalystId": 21, "price": 120 },
  { "regionId": 54, "catalystId": 7, "price": 120 },
  { "regionId": 54, "catalystId": 26, "price": 120 },
  { "regionId": 55, "catalystId": 1, "price": 400 },
  { "regionId": 55, "catalystId": 15, "price": 120 },
  { "regionId": 55, "catalystId": 2, "price": 120 },
  { "regionId": 55, "catalystId": 3, "price": 120 },
  { "regionId": 56, "catalystId": 24, "price": 400 },
  { "regionId": 56, "catalystId": 34, "price": 120 },
  { "regionId": 56, "catalystId": 10, "price": 120 },
  { "regionId": 56, "catalystId": 35, "price": 120 },
  { "regionId": 57, "catalystId": 11, "price": 400 },
  { "regionId": 57, "catalystId": 14, "price": 120 },
  { "regionId": 57, "catalystId": 25, "price": 120 },
  { "regionId": 57, "catalystId": 2, "price": 120 },
  { "regionId": 58, "catalystId": 20, "price": 400 },
  { "regionId": 58, "catalystId": 32, "price": 120 },
  { "regionId": 58, "catalystId": 13, "price": 120 },
  { "regionId": 58, "catalystId": 28, "price": 120 },
  { "regionId": 59, "catalystId": 19, "price": 400 },
  { "regionId": 59, "catalystId": 9, "price": 120 },
  { "regionId": 59, "catalystId": 8, "price": 120 },
  { "regionId": 59, "catalystId": 31, "price": 120 },
]

module.exports = shopItemList;