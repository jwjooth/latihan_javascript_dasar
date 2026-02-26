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

// soal 11
let student = {
  exam: 100,
  get nilai() {
    return this.exam;
  },
  set nilai(value) {
    if (value > 0) {
      this.exam = value;
    } else {
      return `Nilai tidak boleh < 0`;
    }
  },
};

student.nilai = 200;
console.log(student.nilai);

// soal 12
let mahasiswa = {
  nama: "jordan theovandy",
  alamat: {
    kota: "jakarta",
    kodePos: 12345,
  },
};

const {
  alamat: { kota, kodePos },
} = mahasiswa;

console.log(`${kota} ${kodePos}`);

// soal 13
function systemExam(nilai) {
  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai < 60) {
    return "D";
  }
}

console.log(systemExam(90));

// soal 14
function swicthCase(day) {
  switch (day) {
    case 1:
      return "Senin";
      break;
    case 2:
      return "Selasa";
      break;
    case 3:
      return "Rabu";
      break;
    case 4:
      return "Kamis";
      break;
    case 5:
      return "Jumat";
      break;
    case 6:
      return "Sabtu";
      break;
    case 7:
      return "Minggu";
      break;
    default:
      break;
  }
}

console.log(swicthCase(7));

// soal 15
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// soal 16
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// soal 17
outerloop: for (let i = 1; i <= 5; i++) {
  innerloop: for (let j = 1; j <= 5; j++) {
    if (i === 3 && j === 3) {
      console.log("breaking out of both loops");
      break outerloop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// soal 18
let dataSiswa = {
  name: "roger rejeki mampu",
  age: 20,
  major: "it",
};

let nilaiSiswa = [100, 90, 80, 70, 60, 50];

for (const key in dataSiswa) {
  console.log(key + " " + dataSiswa[key]);
}

for (const element of nilaiSiswa) {
  console.log(element);
}

// soal 19
function restParams(...value) {
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    total += value[i];
  }
  return total;
}

console.log(restParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// soal 20
function spreadSyntax(...value) {
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    total += value[i];
  }
  return total;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(spreadSyntax(...arr));
