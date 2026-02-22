// soal 1
function hitungTotal(hargaStr, jumlah) {
  let harga = Number(hargaStr);
  if (jumlah < 0) return;
  if (harga) {
    console.log(`Rp ${Math.ceil(harga * jumlah)}`);
  } else {
    console.log("Input tidak valid");
  }
}

hitungTotal("15000", 3); // → "Rp 45000"
hitungTotal("12.5abc", 2); // → "Input tidak valid"
hitungTotal("", 5); // → "Input tidak valid"
hitungTotal("20000.99", 2); // → "Rp 40001"  (dibulatkan ke atas dengan Math.ceil)

// soal 2
function tentukanAkses(usia, isPremium) {
  if (usia < 13) {
    console.log("Akses Ditolak: Di bawah ummur");
  } else if (usia > 13 && usia < 17 && isPremium === true) {
    console.log("Akses Teen Premium");
  } else if (usia > 13 && usia < 17 && isPremium === false) {
    console.log("Akses Teen Gratis");
  } else if (usia >= 18 && isPremium === true) {
    console.log("Akses Dewasa Premium");
  } else if (usia >= 18 && isPremium === false) {
    console.log("Akses Dewasa Gratis");
  } else {
    console.log("Anda Tidak Memiliki Akses");
  }
}

tentukanAkses(10, true); // → "Akses Ditolak: Di bawah umur"
tentukanAkses(15, false); // → "Akses Teen Gratis"
tentukanAkses(15, true); // → "Akses Teen Premium"
tentukanAkses(25, false); // → "Akses Dewasa Gratis"
tentukanAkses(30, true); // → "Akses Dewasa Premium"

// soal 3
function statistikNilai(arrNilai) {
  let average = 0;
  let highest = 0;
  let lowest = arrNilai[0];
  if (arrNilai.length === 0) {
    console.log(null);
  } else {
    for (let i = 0; i < arrNilai.length; i++) {
      if (arrNilai.length === 1) {
        average = arrNilai[i];
        highest = arrNilai[i];
        lowest = arrNilai[i];
        break;
      }
      if (highest < arrNilai[i]) {
        highest = arrNilai[i];
      }
      if (lowest > arrNilai[i]) {
        lowest = arrNilai[i];
        console.log("test lowest" + arrNilai[i]);
      }
      average = average + arrNilai[i];
    }
    console.log({
      rata: average / arrNilai.length,
      tertinggi: highest,
      terendah: lowest,
    });
  }
}

statistikNilai([80, 95, 60, 72, 88]);
// → { rata: 79, tertinggi: 95, terendah: 60 }

statistikNilai([100]);
// → { rata: 100, tertinggi: 100, terendah: 100 }

statistikNilai([]);
// → null

// soal 4
function normalisasiNama(nama) {
  if (/[^a-zA-Z\s]/.test(nama)) {
    console.log("Nama tidak valid");
  } else if (nama.trim()) {
    let a = nama.trim().split(/\s+/);
    let kataTerformat = a.map((kata) => {
      return kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase();
    });
    console.log(kataTerformat.join(" "));
  } else {
    console.log("Nama tidak valid");
  }
}

normalisasiNama("  budi   santoso  "); // → "Budi Santoso"
normalisasiNama("RINA wati"); // → "Rina Wati"
normalisasiNama("agus123"); // → "Nama tidak valid"
normalisasiNama("  "); // → "Nama tidak valid"
normalisasiNama("siti  nurbaya"); // → "Siti Nurbaya"

// soal 5
const produk = [
  { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 8000000, stok: 5 },
  { id: 2, nama: "Buku JS", kategori: "Pendidikan", harga: 150000, stok: 0 },
  { id: 3, nama: "Headphone", kategori: "Elektronik", harga: 750000, stok: 12 },
  {
    id: 4,
    nama: "Meja Belajar",
    kategori: "Furnitur",
    harga: 1200000,
    stok: 3,
  },
  { id: 5, nama: "Kabel HDMI", kategori: "Elektronik", harga: 85000, stok: 0 },
  {
    id: 6,
    nama: "Kursi Ergonomis",
    kategori: "Furnitur",
    harga: 2500000,
    stok: 7,
  },
];

function produkTersedia(arr) {
  let a = arr.filter((value) => value.stok !== 0);
  let b = a.map((data) => {
    return data.nama;
  });
  console.log(b.sort());
}

function totalNilaiInventori(arr) {
  console.log(
    arr.reduce((acu, cur) => {
      let value = cur.stok * cur.harga;
      return acu + value;
    }, 0),
  );
}

function ringkasanPerKategori(arr) {
  let e = 0;
  let p = 0;
  let f = 0;
  console.log(
    arr.reduce((acu, cur) => {
      if (cur.kategori === "Elektronik") {
        e += 1;
      } else if (cur.kategori === "Pendidikan") {
        p += 1;
      } else {
        f += 1;
      }
      return {
        Elektronik: e,
        Pendidikan: p,
        Furnitur: f,
      };
    }, 0),
  );
}

produkTersedia(produk);
// → ["Headphone", "Kursi Ergonomis", "Laptop", "Meja Belajar"]

totalNilaiInventori(produk);
// → 8000000*5 + 750000*12 + 1200000*3 + 2500000*7 = 60600000

ringkasanPerKategori(produk);
// → { Elektronik: 3, Pendidikan: 1, Furnitur: 2 }

// soal 6
console.log(x); // Baris 1
var x = 10;
console.log(x); // Baris 3

function coba() {
  // console.log(y); // Baris 6 kode ini tidak akan bisa dieksekusi dan error karena variable y dideklarasikan setelahnya
  let y = 20;
  console.log(y); // Baris 8
}
coba();

let hasil = []; // menggunakan let agar bisa diakses untuk global scoped sehingga tidak perlu function scoped dll spt var
for (let i = 0; i < 3; i++) {
  hasil.push(function () {
    return i;
  });
}
console.log(hasil[0]()); // Diharapkan: 0, aktual: ???
console.log(hasil[1]()); // Diharapkan: 1, aktual: ???
console.log(hasil[2]()); // Diharapkan: 2, aktual: ???

// soal 7
function hitungPajakDeclaration(penghasilan) {
  if (penghasilan < 60) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "5%",
      jumlahPajak: penghasilan * 0.05,
    });
  } else if (penghasilan > 60 && penghasilan < 250) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "15%",
      jumlahPajak: penghasilan * 0.15,
    });
  } else if (penghasilan > 250 && penghasilan < 500) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "25%",
      jumlahPajak: penghasilan * 2.5,
    });
  } else {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "30%",
      jumlahPajak: penghasilan * 0.3,
    });
  }
}

const hitungPajakExpression = function (penghasilan) {
  if (penghasilan < 60) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "5%",
      jumlahPajak: penghasilan * 0.05,
    });
  } else if (penghasilan > 60 && penghasilan < 250) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "15%",
      jumlahPajak: penghasilan * 0.15,
    });
  } else if (penghasilan > 250 && penghasilan < 500) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "25%",
      jumlahPajak: penghasilan * 2.5,
    });
  } else {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "30%",
      jumlahPajak: penghasilan * 0.3,
    });
  }
};

const hitungPajakArrow = (penghasilan) => {
  if (penghasilan < 60) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "5%",
      jumlahPajak: penghasilan * 0.05,
    });
  } else if (penghasilan > 60 && penghasilan < 250) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "15%",
      jumlahPajak: penghasilan * 0.15,
    });
  } else if (penghasilan > 250 && penghasilan < 500) {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "25%",
      jumlahPajak: penghasilan * 2.5,
    });
  } else {
    console.log({
      penghasilan: penghasilan,
      tarifPersen: "30%",
      jumlahPajak: penghasilan * 0.3,
    });
  }
};

hitungPajakDeclaration(50);
// → { penghasilan: 50, tarifPersen: "5%", jumlahPajak: 2.5 }

hitungPajakExpression(300);
// → { penghasilan: 300, tarifPersen: "25%", jumlahPajak: 75 }

hitungPajakArrow(600);
// → { penghasilan: 600, tarifPersen: "30%", jumlahPajak: 180 }

// soal 8
const karyawan = {
  id: "EMP001",
  nama: "Dewi Rahayu",
  departemen: "Engineering",
  gaji: 12000000,
  skills: ["JavaScript", "React", "Node.js"],
  aktif: true,
};

function tambahSkill(objKaryawan, skillBaru) {
  let { skills } = objKaryawan;
  for (let i = 0; i < skills.length; i++) {
    if (!skills.includes(skillBaru)) {
      skills.push(skillBaru);
    }
  }
  console.log(objKaryawan);
}

function ringkasanKaryawan(objKaryawan) {
  let { id, nama, departemen, skills } = objKaryawan;
  console.log(`${id} ${nama} - ${departemen} (${skills.length} skills)`);
}

function karyawanKeArray(objKaryawan) {
  let { id, nama, departemen, gaji, skills, aktif } = objKaryawan;
  console.log(
    Object.entries(objKaryawan)
      .sort()
      .filter(([key, value]) => !Array.isArray(value)),
  );
}

tambahSkill(karyawan, "TypeScript");
// → { ...karyawan, skills: ["JavaScript", "React", "Node.js", "TypeScript"] }

tambahSkill(karyawan, "React");
// → object yang sama persis (tidak berubah)

ringkasanKaryawan(karyawan);
// → "EMP001 Dewi Rahayu - Engineering (3 skills)"

karyawanKeArray(karyawan);
// → [["aktif", true], ["departemen", "Engineering"], ["gaji", 12000000], ["id", "EMP001"], ["nama", "Dewi Rahayu"]]

// soal 9
function faktorial(n) {
  if (n < 0) return null;
  if (n == 0 || n == 1) return 1;
  return n * faktorial(n - 1);
}

function ratakan(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  if (Array.isArray(first)) {
    return [...ratakan(first), ...ratakan(rest)];
  }
  return [first, ...ratakan(rest)];
}

console.log(faktorial(5)); // → 120
console.log(faktorial(0)); // → 1
console.log(faktorial(-3)); // → null
console.log(faktorial(10)); // → 3628800

console.log(ratakan([1, [2, 3], [4, [5, [6]]]]));
// → [1, 2, 3, 4, 5, 6]

console.log(ratakan([1, [2, [3, [4, [5]]]]]));
// → [1, 2, 3, 4, 5]

console.log(ratakan([1, 2, 3]));
// → [1, 2, 3]

// soal 10
function parseDataAPI(jsonString) {
  try {
    let result = JSON.parse(jsonString);
    if (
      typeof result === "object" &&
      result !== null &&
      !Array.isArray(result)
    ) {
      console.log(result);
    } else {
      console.error("Data bukan object");
    }
  } catch (error) {
    console.error({
      error: true,
      message: "JSON tidak valid",
      input: "ini bukan json",
    });
  } finally {
    console.log("Proses parsing selesai");
  }
}

parseDataAPI('{"nama":"Andi","usia":22}');
// console: "Proses parsing selesai."
// → { nama: "Andi", usia: 22 }

parseDataAPI("[1, 2, 3]");
// console: "Proses parsing selesai."
// → throws Error("Data bukan object")  ← tangkap ini di luar jika perlu

parseDataAPI("ini bukan json");
// console: "Proses parsing selesai."
// → { error: true, pesan: "JSON tidak valid", input: "ini bukan json" }

