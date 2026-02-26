"use strict";

// soal 1
function convertString(value) {
  if (Number(value) !== NaN) {
    return Number(value) * Number(value);
  } else {
    return `Input Tidak Valid`;
  }
}

console.log(convertString("25"));

// soal 2
function detectDataType(value) {
  if (typeof value === "number") {
    return `Ini Number`;
  } else if (typeof value === "boolean") {
    return `Ini Boolean`;
  } else if (typeof value === "string") {
    return `Ini String`;
  } else {
    return `Tipe Lain`;
  }
}

console.log(detectDataType(12));

// soal 3
function FalsyTruthy(value) {
  if (value) {
    return `Truthy Value`;
  } else {
    return `Falsy Value`;
  }
}

console.log(FalsyTruthy(""));

// soal 4
function operatorMath(a, b) {
  let penjumlahan = a + b;
  let pengurangan = a - b;
  let perkalian = a * b;
  let pembagian = a / b;
  let modulus = a % 2;
  let pangkat = a * a;
  return {
    penjumlahan,
    pengurangan,
    perkalian,
    pembagian,
    modulus,
    pangkat,
  };
}

console.log(operatorMath(12, 5));

// soal 5
function nullishOperator(nama) {
  return nama ?? "Guest";
}

function orOperator(nama) {
  return nama || "Guest";
}

console.log(nullishOperator(""));
console.log(orOperator(""));

// soal 6
function arrayManagement() {
  let arr = [];
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);
  arr.push(5);
  delete arr[2];
  let arrLen = arr.length;
  let index2 = 2 in arr;
  return { arr, arrLen, index2 };
}

console.log(arrayManagement());

// soal 7
function totalArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(totalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// soal 8
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// soal 9
function statistic(arr) {
  let total = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      total += arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
      total += arr[i];
    }
  }
  let avg = total / arr.length;
  return {
    avg,
    max,
    min,
  };
}

console.log(statistic([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// soal 10
let person = {
  nama: "jowjo",
  umur: 21,
  status: "not married yet",
  perkenalan: function () {
    return `Halo nama saya, ${this.nama}, umur ${this.umur} tahun`;
  },
};

console.log(person.perkenalan());