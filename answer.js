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