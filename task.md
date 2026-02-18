  # UJIAN AKHIR
## Nama Mahasiswa: Jordan Theovandy
## Mata Kuliah: JavaScript Dasar
## Program Studi: Rekayasa Perangkat Lunak

| Informasi | Detail |
|---|---|
| **Durasi** | 180 menit |
| **Sifat Ujian** | Open Book & Open Internet |
| **Bobot Nilai** | Bagian A: 40% · Bagian B: 35% · Bagian C: 25% |
| **Prasyarat Lulus** | Nilai akhir minimal **70 / 100** |

---

### 📋 Instruksi Umum

1. Seluruh jawaban **harus berupa kode JavaScript yang dapat dijalankan** di browser console atau Node.js.
2. Setiap fungsi yang diminta **wajib menggunakan nama fungsi yang ditentukan** dalam soal.
3. Dilarang menggunakan library eksternal kecuali jika soal secara eksplisit mengizinkan.
4. Sertakan `console.log()` untuk memvalidasi setiap output yang diminta.
5. Kode yang tidak dapat dijalankan (syntax error) mendapat nilai **0** pada soal tersebut.
6. Open book dan open internet **tidak berarti copy-paste solusi jadi**; pengujian akan mencakup sesi tanya jawab teknis.

---

## BAGIAN A — Easy to Medium
> **Bobot:** 4 poin per soal × 10 soal = **40 poin**

---

### Soal 1 — Tipe Data & Konversi Eksplisit

**Deskripsi Kasus:**
Sebuah sistem kasir menerima input harga dari form HTML dalam format string. Sistem harus memvalidasi apakah nilai tersebut merupakan angka yang valid sebelum melakukan perhitungan total, lalu mengembalikan hasil dalam format mata uang Rupiah tanpa library eksternal.

**Spesifikasi Teknis:**
Buatlah fungsi `hitungTotal(hargaStr, jumlah)` yang:
- Menerima `hargaStr` (string) dan `jumlah` (number).
- Mengonversi `hargaStr` ke number secara eksplisit.
- Jika `hargaStr` tidak dapat dikonversi menjadi angka valid (hasil konversi adalah `NaN`), fungsi mengembalikan string `"Input tidak valid"`.
- Jika valid, kembalikan total harga dalam format string: `"Rp X"` di mana X adalah hasil `hargaStr * jumlah`, **tanpa desimal**.

**Constraint:**
- `jumlah` selalu berupa integer positif.
- Tidak boleh menggunakan `eval()`.
- Tidak boleh menggunakan `parseInt` untuk konversi utama; gunakan `Number()`.

**Contoh Input & Output:**
```js
hitungTotal("15000", 3);   // → "Rp 45000"
hitungTotal("12.5abc", 2); // → "Input tidak valid"
hitungTotal("", 5);        // → "Input tidak valid"
hitungTotal("20000.99", 2);// → "Rp 40001"  (dibulatkan ke atas dengan Math.ceil)
```

---

### Soal 2 — Operator & Logika Kondisional

**Deskripsi Kasus:**
Sebuah platform streaming menerapkan aturan akses konten berdasarkan usia pengguna dan status berlangganan. Buatlah fungsi yang menentukan level akses pengguna.

**Spesifikasi Teknis:**
Buatlah fungsi `tentukanAkses(usia, isPremium)` yang mengembalikan string sesuai tabel berikut:

| Kondisi | Return Value |
|---|---|
| Usia < 13 | `"Akses Ditolak: Di bawah umur"` |
| Usia 13–17 AND premium | `"Akses Teen Premium"` |
| Usia 13–17 AND bukan premium | `"Akses Teen Gratis"` |
| Usia ≥ 18 AND premium | `"Akses Dewasa Premium"` |
| Usia ≥ 18 AND bukan premium | `"Akses Dewasa Gratis"` |

**Constraint:**
- `usia` adalah integer ≥ 0.
- `isPremium` adalah boolean.
- Gunakan `if-else if-else`, **bukan switch**.
- Operator ternary untuk kondisi utama usia diperbolehkan.

**Contoh Input & Output:**
```js
tentukanAkses(10, true);   // → "Akses Ditolak: Di bawah umur"
tentukanAkses(15, false);  // → "Akses Teen Gratis"
tentukanAkses(15, true);   // → "Akses Teen Premium"
tentukanAkses(25, false);  // → "Akses Dewasa Gratis"
tentukanAkses(30, true);   // → "Akses Dewasa Premium"
```

---

### Soal 3 — Perulangan & Akumulasi

**Deskripsi Kasus:**
Seorang analis data ingin menghitung statistik dasar dari sekumpulan nilai ujian mahasiswa yang disimpan dalam array. Analis membutuhkan nilai rata-rata, nilai tertinggi, dan nilai terendah tanpa menggunakan method bawaan seperti `Math.max` atau `Math.min`.

**Spesifikasi Teknis:**
Buatlah fungsi `statistikNilai(arrNilai)` yang menerima array of numbers dan mengembalikan **object** dengan properti:
- `rata`: rata-rata (number, dibulatkan 2 desimal dengan `toFixed`, kembalikan sebagai number bukan string).
- `tertinggi`: nilai maksimum (number).
- `terendah`: nilai minimum (number).

**Constraint:**
- **Dilarang** menggunakan `Math.max()`, `Math.min()`, `reduce()`, atau method array tingkat tinggi lainnya.
- Harus menggunakan perulangan `for` biasa.
- Jika array kosong, kembalikan `null`.
- Semua nilai dalam array dijamin berupa number.

**Contoh Input & Output:**
```js
statistikNilai([80, 95, 60, 72, 88]);
// → { rata: 79, tertinggi: 95, terendah: 60 }

statistikNilai([100]);
// → { rata: 100, tertinggi: 100, terendah: 100 }

statistikNilai([]);
// → null
```

---

### Soal 4 — String Methods & Manipulasi Teks

**Deskripsi Kasus:**
Sebuah sistem registrasi membutuhkan fungsi untuk menormalisasi nama pengguna. Nama yang diterima dari input sering kali memiliki spasi berlebih, huruf yang tidak konsisten, atau karakter angka yang tidak diperbolehkan.

**Spesifikasi Teknis:**
Buatlah fungsi `normalisasiNama(nama)` yang:
1. Memotong spasi di awal dan akhir string (`trim`).
2. Menghapus spasi ganda di tengah (lebih dari satu spasi berturut-turut diganti satu spasi).
3. Mengubah setiap kata menjadi format *Title Case* (huruf pertama kapital, sisanya lowercase).
4. Jika nama mengandung karakter selain huruf dan spasi (misalnya angka atau simbol), kembalikan `"Nama tidak valid"`.

**Constraint:**
- Gunakan method String bawaan: `trim()`, `split()`, `join()`, `replace()`, `toUpperCase()`, `toLowerCase()`.
- Regex **diperbolehkan** hanya untuk pengecekan karakter invalid.
- Nama yang valid hanya mengandung huruf A-Z (case insensitive) dan spasi.

**Contoh Input & Output:**
```js
normalisasiNama("  budi   santoso  "); // → "Budi Santoso"
normalisasiNama("RINA wati");          // → "Rina Wati"
normalisasiNama("agus123");            // → "Nama tidak valid"
normalisasiNama("  ");                 // → "Nama tidak valid"
normalisasiNama("siti  nurbaya");      // → "Siti Nurbaya"
```

---

### Soal 5 — Array Methods Fungsional

**Deskripsi Kasus:**
Sebuah toko online memiliki daftar produk dalam format array of objects. Manajer toko ingin memfilter, mentransformasi, dan merangkum data produk menggunakan pendekatan fungsional.

**Spesifikasi Teknis:**
Diberikan data berikut (hardcoded di dalam solusi Anda):
```js
const produk = [
  { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 8000000, stok: 5 },
  { id: 2, nama: "Buku JS", kategori: "Pendidikan", harga: 150000, stok: 0 },
  { id: 3, nama: "Headphone", kategori: "Elektronik", harga: 750000, stok: 12 },
  { id: 4, nama: "Meja Belajar", kategori: "Furnitur", harga: 1200000, stok: 3 },
  { id: 5, nama: "Kabel HDMI", kategori: "Elektronik", harga: 85000, stok: 0 },
  { id: 6, nama: "Kursi Ergonomis", kategori: "Furnitur", harga: 2500000, stok: 7 },
];
```

Buatlah tiga fungsi terpisah:

**(a)** `produkTersedia(arr)` — Kembalikan array nama produk (string) yang stoknya > 0, diurutkan alphabetical A-Z.

**(b)** `totalNilaiInventori(arr)` — Kembalikan total nilai inventori (harga × stok) untuk **semua** produk, sebagai number.

**(c)** `ringkasanPerKategori(arr)` — Kembalikan object di mana key-nya adalah nama kategori dan value-nya adalah jumlah produk dalam kategori tersebut (termasuk yang stok 0).

**Constraint:**
- Fungsi (a) wajib menggunakan `filter()` dan `map()` dan `sort()`.
- Fungsi (b) wajib menggunakan `reduce()`.
- Fungsi (c) wajib menggunakan `reduce()` atau `forEach()`.

**Contoh Output:**
```js
produkTersedia(produk);
// → ["Headphone", "Kursi Ergonomis", "Laptop", "Meja Belajar"]

totalNilaiInventori(produk);
// → 8000000*5 + 750000*12 + 1200000*3 + 2500000*7 = 60600000

ringkasanPerKategori(produk);
// → { Elektronik: 3, Pendidikan: 1, Furnitur: 2 }
```

---

### Soal 6 — Scope, Hoisting & `var` vs `let`

**Deskripsi Kasus:**
Pemahaman tentang scope adalah fondasi sebelum masuk ke OOP. Perhatikan kode berikut dan jawab pertanyaan analisis, kemudian perbaiki kode tersebut.

**Bagian (a) — Analisis (jelaskan dalam komentar kode):**
```js
console.log(x); // Baris 1
var x = 10;
console.log(x); // Baris 3

function coba() {
  console.log(y); // Baris 6
  let y = 20;
  console.log(y); // Baris 8
}
coba();
```
Dalam komentar di atas setiap baris `console.log`, jelaskan: apa yang akan terjadi dan **mengapa** (hoisting, TDZ, dll).

**Bagian (b) — Perbaikan Kode:**
Kode di bawah ini memiliki bug terkait scope yang menyebabkan semua elemen array mencetak nilai yang sama. Identifikasi bug-nya dan perbaiki **tanpa mengubah struktur loop for** (hanya ubah deklarasi variabel).

```js
var hasil = [];
for (var i = 0; i < 3; i++) {
  hasil.push(function() {
    return i;
  });
}
console.log(hasil[0]()); // Diharapkan: 0, aktual: ???
console.log(hasil[1]()); // Diharapkan: 1, aktual: ???
console.log(hasil[2]()); // Diharapkan: 2, aktual: ???
```

**Constraint:**
- Perbaikan Bagian (b) hanya boleh mengubah **satu kata** (`var` → `let`). Jelaskan mengapa perubahan ini memperbaiki masalah dalam komentar kode.

---

### Soal 7 — Function: Declaration, Expression & Arrow Function

**Deskripsi Kasus:**
Sebuah kalkulator pajak membutuhkan tiga implementasi yang berbeda untuk fungsi yang sama, masing-masing menggunakan gaya penulisan fungsi yang berbeda. Ini melatih pemahaman Anda terhadap perbedaan sintaks dan perilaku setiap gaya.

**Spesifikasi Teknis:**
Implementasikan logika perhitungan pajak berikut dengan **tiga cara berbeda**:

- Input: `penghasilan` (number, dalam satuan juta Rupiah per tahun)
- Tarif pajak:
  - Penghasilan ≤ 60 juta → pajak 5%
  - Penghasilan 60–250 juta → pajak 15%
  - Penghasilan 250–500 juta → pajak 25%
  - Penghasilan > 500 juta → pajak 30%
- Output: object `{ penghasilan, tarifPersen, jumlahPajak }` di mana `jumlahPajak` adalah hasil `penghasilan * tarif`.

**(a)** Implementasi menggunakan **Function Declaration** dengan nama `hitungPajakDeclaration`.

**(b)** Implementasi menggunakan **Function Expression** (anonymous function) yang disimpan dalam `const hitungPajakExpression`.

**(c)** Implementasi menggunakan **Arrow Function** yang disimpan dalam `const hitungPajakArrow`.

**Constraint:**
- Ketiga fungsi harus menghasilkan output yang **identik** untuk input yang sama.
- Demonstrasikan hoisting Function Declaration dengan memanggilnya **sebelum** deklarasinya dalam kode.

**Contoh Output:**
```js
hitungPajakDeclaration(50);
// → { penghasilan: 50, tarifPersen: "5%", jumlahPajak: 2.5 }

hitungPajakExpression(300);
// → { penghasilan: 300, tarifPersen: "25%", jumlahPajak: 75 }

hitungPajakArrow(600);
// → { penghasilan: 600, tarifPersen: "30%", jumlahPajak: 180 }
```

---

### Soal 8 — Object: Manipulasi & Iterasi

**Deskripsi Kasus:**
Sebuah sistem HR menyimpan data karyawan dalam bentuk object. Sistem membutuhkan beberapa fungsi utilitas untuk memanipulasi data tersebut.

**Spesifikasi Teknis:**
Diberikan object karyawan:
```js
const karyawan = {
  id: "EMP001",
  nama: "Dewi Rahayu",
  departemen: "Engineering",
  gaji: 12000000,
  skills: ["JavaScript", "React", "Node.js"],
  aktif: true
};
```

Buatlah fungsi-fungsi berikut:

**(a)** `tambahSkill(objKaryawan, skillBaru)` — Menambahkan skill ke array skills **tanpa mengubah object asli** (kembalikan object baru). Jika skill sudah ada, kembalikan object asli tanpa perubahan.

**(b)** `ringkasanKaryawan(objKaryawan)` — Mengembalikan string: `"[ID] Nama - Departemen (N skills)"`.

**(c)** `karyawanKeArray(objKaryawan)` — Mengonversi semua properti **non-array** dan **non-object** dari object karyawan menjadi array of pairs `[[key, value], ...]`, diurutkan berdasarkan key secara alphabetical.

**Constraint:**
- Fungsi (a) harus menggunakan **spread operator** `{...obj}` untuk immutability.
- Fungsi (c) menggunakan `Object.entries()` dan `filter()`.

**Contoh Output:**
```js
tambahSkill(karyawan, "TypeScript");
// → { ...karyawan, skills: ["JavaScript", "React", "Node.js", "TypeScript"] }

tambahSkill(karyawan, "React");
// → object yang sama persis (tidak berubah)

ringkasanKaryawan(karyawan);
// → "EMP001 Dewi Rahayu - Engineering (3 skills)"

karyawanKeArray(karyawan);
// → [["aktif", true], ["departemen", "Engineering"], ["gaji", 12000000], ["id", "EMP001"], ["nama", "Dewi Rahayu"]]
```

---

### Soal 9 — Rekursi

**Deskripsi Kasus:**
Rekursi adalah konsep penting yang akan sering digunakan dalam struktur data dan OOP. Implementasikan dua fungsi rekursif berikut.

**Bagian (a) — Faktorial:**
Buatlah fungsi rekursif `faktorial(n)` yang menghitung n!.
- Jika `n < 0`, kembalikan `null`.
- Jika `n === 0` atau `n === 1`, kembalikan `1`.

**Bagian (b) — Flatten Array Nested:**
Buatlah fungsi rekursif `ratakan(arr)` yang meratakan array bersarang ke level berapa pun **tanpa menggunakan `Array.prototype.flat()`**.

**Constraint:**
- Kedua fungsi harus murni rekursif (tidak boleh ada loop `for`/`while`).
- Untuk Bagian (b), gunakan spread operator dan rekursi.

**Contoh Input & Output:**
```js
faktorial(5);   // → 120
faktorial(0);   // → 1
faktorial(-3);  // → null
faktorial(10);  // → 3628800

ratakan([1, [2, 3], [4, [5, [6]]]]);
// → [1, 2, 3, 4, 5, 6]

ratakan([1, [2, [3, [4, [5]]]]]);
// → [1, 2, 3, 4, 5]

ratakan([1, 2, 3]);
// → [1, 2, 3]
```

---

### Soal 10 — Error Handling dengan `try-catch-finally`

**Deskripsi Kasus:**
Sebuah fungsi parser JSON digunakan untuk memproses data yang diterima dari API. Data yang masuk tidak selalu valid, sehingga dibutuhkan penanganan error yang robust.

**Spesifikasi Teknis:**
Buatlah fungsi `parseDataAPI(jsonString)` yang:
1. Mencoba mem-parse `jsonString` menggunakan `JSON.parse()`.
2. Jika parsing **berhasil** dan result adalah object (bukan array/null/primitive), kembalikan object tersebut.
3. Jika parsing **berhasil** tetapi result **bukan object murni**, lempar (`throw`) Error baru dengan pesan `"Data bukan object"`.
4. Jika parsing **gagal** (JSON tidak valid), tangkap error dan kembalikan object `{ error: true, pesan: "JSON tidak valid", input: jsonString }`.
5. Blok `finally` harus selalu mencetak ke console: `"Proses parsing selesai."`.

**Constraint:**
- Gunakan `try-catch-finally`.
- Pengecekan "object murni": `typeof result === 'object' && result !== null && !Array.isArray(result)`.

**Contoh Input & Output:**
```js
parseDataAPI('{"nama":"Andi","usia":22}');
// console: "Proses parsing selesai."
// → { nama: "Andi", usia: 22 }

parseDataAPI('[1, 2, 3]');
// console: "Proses parsing selesai."
// → throws Error("Data bukan object")  ← tangkap ini di luar jika perlu

parseDataAPI('ini bukan json');
// console: "Proses parsing selesai."
// → { error: true, pesan: "JSON tidak valid", input: "ini bukan json" }
```

---

## BAGIAN B — Medium to Hard
> **Bobot:** 5 poin per soal × 7 soal = **35 poin**

---

### Soal 11 — Closure & Factory Function

**Deskripsi Kasus:**
Closure adalah fondasi utama JavaScript OOP. Buatlah sebuah factory function untuk mensimulasikan rekening bank dengan enkapsulasi state menggunakan closure, sebelum Anda mempelajari cara OOP yang sesungguhnya.

**Spesifikasi Teknis:**
Buatlah fungsi `buatRekening(namaPemilik, saldoAwal)` yang mengembalikan **object** dengan method:
- `setor(jumlah)` — Menambah saldo. Jika `jumlah <= 0`, throw Error `"Jumlah setor tidak valid"`.
- `tarik(jumlah)` — Mengurangi saldo. Jika `jumlah <= 0`, throw Error `"Jumlah tarik tidak valid"`. Jika saldo tidak cukup, throw Error `"Saldo tidak mencukupi"`.
- `getSaldo()` — Mengembalikan saldo saat ini (number).
- `getMutasi()` — Mengembalikan array of strings riwayat transaksi.
- `getInfo()` — Mengembalikan string: `"Rekening atas nama [nama], Saldo: Rp [saldo]"`.

**Constraint:**
- Variabel `saldo` dan `mutasi` **tidak boleh dapat diakses langsung dari luar** fungsi (hanya lewat method yang disediakan).
- Setiap transaksi berhasil dicatat ke `mutasi` dengan format:
  - Setor: `"SETOR: +Rp [jumlah] | Saldo: Rp [saldo baru]"`
  - Tarik: `"TARIK: -Rp [jumlah] | Saldo: Rp [saldo baru]"`

**Contoh Penggunaan & Output:**
```js
const rek = buatRekening("Siti", 500000);
rek.setor(200000);
rek.tarik(100000);
rek.getSaldo();  // → 600000
rek.getInfo();   // → "Rekening atas nama Siti, Saldo: Rp 600000"
rek.getMutasi();
// → [
//     "SETOR: +Rp 200000 | Saldo: Rp 700000",
//     "TARIK: -Rp 100000 | Saldo: Rp 600000"
//   ]

// Verifikasi enkapsulasi:
console.log(rek.saldo);   // → undefined
console.log(rek.mutasi);  // → undefined
```

---

### Soal 12 — Higher-Order Function & Komposisi Fungsi

**Deskripsi Kasus:**
Higher-order function (HOF) adalah paradigma yang akan terus digunakan di level OOP dan functional programming. Implementasikan beberapa HOF dari nol.

**Bagian (a) — Implementasi `myMap`:**
Buatlah fungsi `myMap(arr, callback)` yang meniru perilaku `Array.prototype.map()` **tanpa menggunakan** `.map()`.

**Bagian (b) — Implementasi `myFilter`:**
Buatlah fungsi `myFilter(arr, callback)` yang meniru perilaku `Array.prototype.filter()` **tanpa menggunakan** `.filter()`.

**Bagian (c) — Function Composition:**
Buatlah fungsi `compose(...fns)` yang menggabungkan beberapa fungsi menjadi satu, dieksekusi dari **kanan ke kiri** (seperti komposisi matematik: `f(g(h(x)))`).

**Constraint:**
- `myMap` dan `myFilter` harus menggunakan `for` loop internal.
- `compose` menerima jumlah fungsi yang tidak terbatas (gunakan rest parameter `...fns`).
- `compose` menggunakan `reduce()` atau `reduceRight()`.

**Contoh Input & Output:**
```js
myMap([1, 2, 3, 4], x => x * x);
// → [1, 4, 9, 16]

myFilter([1, 2, 3, 4, 5, 6], x => x % 2 === 0);
// → [2, 4, 6]

const tambahSatu = x => x + 1;
const kaliDua   = x => x * 2;
const kurangiga = x => x - 3;

const transform = compose(kurangiga, kaliDua, tambahSatu);
transform(5);  // → kurangiga(kaliDua(tambahSatu(5))) = kurangiga(kaliDua(6)) = kurangiga(12) = 9
```

---

### Soal 13 — Prototype & Inheritance Manual (Pre-OOP)

**Deskripsi Kasus:**
Sebelum menggunakan sintaks `class`, Anda harus memahami sistem prototype yang menjadi dasarnya. Implementasikan inheritance menggunakan prototype secara manual.

**Spesifikasi Teknis:**

**(a)** Buatlah **constructor function** `Hewan(nama, suara)` dengan:
- Properti: `nama`, `suara`.
- Method di `prototype`: `bersuara()` → mengembalikan string `"[nama] berkata: [suara]!"`.
- Method di `prototype`: `info()` → mengembalikan string `"Hewan: [nama]"`.

**(b)** Buatlah **constructor function** `Anjing(nama, ras)` yang:
- Mewarisi dari `Hewan` dengan `suara` selalu bernilai `"Guk"`.
- Menambahkan properti: `ras`.
- Method di `prototype`: `info()` → **meng-override** method `info` dari `Hewan`, mengembalikan `"Anjing: [nama] (Ras: [ras])"`.
- Method di `prototype`: `fetch()` → mengembalikan `"[nama] mengambil bola!"`.

**Constraint:**
- Gunakan `Hewan.call(this, ...)` untuk inheritance constructor.
- Gunakan `Object.create()` untuk menyambung prototype chain.
- Perbaiki properti `constructor` setelah `Object.create()`.
- **Tidak boleh menggunakan sintaks `class`** pada soal ini.

**Contoh Penggunaan & Output:**
```js
const kucing = new Hewan("Mimi", "Meong");
kucing.bersuara(); // → "Mimi berkata: Meong!"
kucing.info();     // → "Hewan: Mimi"

const dog = new Anjing("Rex", "Golden Retriever");
dog.bersuara();    // → "Rex berkata: Guk!"  (diwariskan)
dog.info();        // → "Anjing: Rex (Ras: Golden Retriever)"  (override)
dog.fetch();       // → "Rex mengambil bola!"

// Verifikasi inheritance:
console.log(dog instanceof Anjing); // → true
console.log(dog instanceof Hewan);  // → true
```

---

### Soal 14 — Manipulasi Array Kompleks & Sorting Custom

**Deskripsi Kasus:**
Sebuah platform e-learning menyimpan data progress mahasiswa. Sistem perlu melakukan pengurutan dan pengelompokan data kompleks.

**Spesifikasi Teknis:**
Diberikan data:
```js
const mahasiswa = [
  { nim: "A001", nama: "Budi",    nilai: { uts: 75, uas: 80, tugas: 90 } },
  { nim: "A002", nama: "Citra",   nilai: { uts: 90, uas: 85, tugas: 95 } },
  { nim: "A003", nama: "Dani",    nilai: { uts: 60, uas: 55, tugas: 70 } },
  { nim: "A004", nama: "Eva",     nilai: { uts: 85, uas: 90, tugas: 88 } },
  { nim: "A005", nama: "Fajar",   nilai: { uts: 70, uas: 75, tugas: 65 } },
  { nim: "A006", nama: "Gita",    nilai: { uts: 55, uas: 60, tugas: 50 } },
];
```

Bobot nilai: UTS 30% + UAS 40% + Tugas 30%.

Buatlah fungsi-fungsi berikut:

**(a)** `hitungNilaiAkhir(mhs)` — Kembalikan array baru di mana setiap object mahasiswa ditambahkan properti `nilaiAkhir` (number, 2 desimal) dan `grade` berdasarkan:
- ≥ 85: "A" | ≥ 75: "B" | ≥ 60: "C" | ≥ 50: "D" | < 50: "E"

**(b)** `rankingMahasiswa(arr)` — Urutkan array (hasil dari fungsi a) berdasarkan `nilaiAkhir` dari tertinggi ke terendah. Jika nilai sama, urutkan nama secara alphabetical A-Z.

**(c)** `kelompokkanGrade(arr)` — Kembalikan object yang mengelompokkan mahasiswa berdasarkan grade: `{ A: [...nama], B: [...nama], C: [...nama], ... }`. Hanya tampilkan grade yang ada datanya.

**Contoh Output (parsial):**
```js
const hasilAkhir = hitungNilaiAkhir(mahasiswa);
// Budi: 0.3*75 + 0.4*80 + 0.3*90 = 22.5 + 32 + 27 = 81.5 → grade "B"
// Citra: 0.3*90 + 0.4*85 + 0.3*95 = 27 + 34 + 28.5 = 89.5 → grade "A"

rankingMahasiswa(hasilAkhir);
// → [Citra(89.5), Eva(87.7), Budi(81.5), Fajar(70.5), Dani(61), Gita(55)]

kelompokkanGrade(hasilAkhir);
// → { A: ["Citra", "Eva"], B: ["Budi"], C: ["Fajar", "Dani"], D: ["Gita"] }
```

---

### Soal 15 — Callback & Simulasi Asynchronous

**Deskripsi Kasus:**
Sebelum mempelajari Promise dan async/await, pemahaman callback adalah fondasi penting. Implementasikan sistem antrian tugas berbasis callback.

**Spesifikasi Teknis:**
Buatlah fungsi `prosesAntrian(daftarTugas, onSelesai, onError)` di mana:
- `daftarTugas` adalah array of objects: `{ nama: string, durasi: number, berhasil: boolean }`.
- Fungsi harus memproses setiap tugas secara **berurutan** menggunakan `setTimeout`.
- Untuk setiap tugas yang `berhasil: true`, setelah `durasi` ms, panggil `onSelesai(nama, index)`.
- Untuk setiap tugas yang `berhasil: false`, setelah `durasi` ms, panggil `onError(nama, "Tugas gagal")`.
- Setelah **semua** tugas selesai, cetak ke console: `"Semua tugas dalam antrian telah diproses."`.

**Constraint:**
- Tugas harus diproses **berurutan** (tugas ke-2 baru mulai setelah tugas ke-1 selesai), bukan paralel.
- Gunakan rekursi callback atau pendekatan iteratif dengan closure untuk sequential processing.
- Error pada satu tugas **tidak** menghentikan tugas berikutnya.

**Contoh Penggunaan:**
```js
const tugas = [
  { nama: "Unduh Data",   durasi: 500,  berhasil: true  },
  { nama: "Proses Data",  durasi: 300,  berhasil: false },
  { nama: "Simpan Data",  durasi: 200,  berhasil: true  },
];

prosesAntrian(
  tugas,
  (nama, i) => console.log(`✓ [${i}] ${nama} berhasil`),
  (nama, pesan) => console.log(`✗ ${nama}: ${pesan}`)
);

// Expected console output (setelah total ~1000ms):
// ✓ [0] Unduh Data berhasil
// ✗ Proses Data: Tugas gagal
// ✓ [2] Simpan Data berhasil
// Semua tugas dalam antrian telah diproses.
```

---

### Soal 16 — Destructuring, Spread & Rest Parameter

**Deskripsi Kasus:**
Fitur ES6+ ini adalah sintaks modern yang wajib dikuasai sebelum masuk ke OOP. Implementasikan serangkaian fungsi yang memanfaatkan fitur-fitur tersebut.

**Bagian (a) — Destructuring Object dengan Default Value:**
Buatlah fungsi `buatProfil({ nama, usia = 18, kota = "Jakarta", hobi = [] } = {})` yang mengembalikan string:
`"[nama], [usia] tahun, dari [kota], hobi: [hobi.join(', ') atau 'tidak ada']"`.

**Bagian (b) — Swap Variabel:**
Gunakan array destructuring untuk menukar nilai dua variabel `a` dan `b` dalam satu baris tanpa variabel sementara. Demonstrasikan dengan `a = 10, b = 20`.

**Bagian (c) — Rest & Spread:**
Buatlah fungsi `gabungUnik(...arrays)` yang:
- Menerima sejumlah array (rest parameter).
- Menggabungkan semua array menjadi satu.
- Menghapus duplikat (setiap nilai hanya muncul sekali).
- Kembalikan array yang sudah diurutkan secara ascending.

**Contoh Input & Output:**
```js
buatProfil({ nama: "Ria", usia: 22, hobi: ["Membaca", "Coding"] });
// → "Ria, 22 tahun, dari Jakarta, hobi: Membaca, Coding"

buatProfil({ nama: "Eko" });
// → "Eko, 18 tahun, dari Jakarta, hobi: tidak ada"

buatProfil();
// → harus tidak error, gunakan default parameter `= {}`

gabungUnik([1, 2, 3], [2, 3, 4, 5], [5, 6]);
// → [1, 2, 3, 4, 5, 6]

gabungUnik(["a", "b"], ["b", "c", "d"]);
// → ["a", "b", "c", "d"]
```

---

### Soal 17 — Pemrosesan Data Pipeline

**Deskripsi Kasus:**
Dalam pengembangan aplikasi nyata, data seringkali harus diproses melalui beberapa tahap transformasi secara berurutan. Buatlah sebuah sistem pipeline pemrosesan data penjualan.

**Spesifikasi Teknis:**
Diberikan raw data transaksi:
```js
const transaksi = [
  { id: "T001", tanggal: "2024-01-15", produk: "Laptop",    qty: 2, hargaSatuan: 8000000 },
  { id: "T002", tanggal: "2024-01-15", produk: "Mouse",     qty: 5, hargaSatuan: 150000  },
  { id: "T003", tanggal: "2024-01-16", produk: "Laptop",    qty: 1, hargaSatuan: 8000000 },
  { id: "T004", tanggal: "2024-01-16", produk: "Keyboard",  qty: 3, hargaSatuan: 350000  },
  { id: "T005", tanggal: "2024-01-17", produk: "Mouse",     qty: 2, hargaSatuan: 150000  },
  { id: "T006", tanggal: "2024-01-17", produk: "Monitor",   qty: 1, hargaSatuan: 3500000 },
];
```

Buatlah fungsi `analisisPenjualan(data)` yang mengembalikan **satu object** berisi:
- `totalPendapatan` (number): jumlah seluruh `qty * hargaSatuan`.
- `produkTerlaris` (string): nama produk dengan total qty terjual terbanyak.
- `pendapatanPerHari` (object): `{ "2024-01-15": total, "2024-01-16": total, ... }`.
- `rataRataPerTransaksi` (number): rata-rata pendapatan per transaksi, 2 desimal.

**Constraint:**
- Harus diselesaikan dalam **satu fungsi** menggunakan chaining array methods.
- Tidak diperbolehkan menggunakan loop eksplisit (`for`, `while`) di luar helper function internal.

**Contoh Output:**
```js
analisisPenjualan(transaksi);
// → {
//     totalPendapatan: 2*8000000 + 5*150000 + 1*8000000 + 3*350000 + 2*150000 + 1*3500000,
//     produkTerlaris: "Laptop",  // qty: 2+1=3, Mouse: 5+2=7 → seharusnya Mouse
//     pendapatanPerHari: {
//       "2024-01-15": 16000000 + 750000,
//       "2024-01-16": 8000000 + 1050000,
//       "2024-01-17": 300000 + 3500000
//     },
//     rataRataPerTransaksi: totalPendapatan / 6
//   }
```
> **Catatan:** Hitung sendiri nilai yang tepat dan validasi dengan kode Anda.

---

## BAGIAN C — Hard / Applied Problem
> **Bobot:** 5 poin per soal × 5 soal = **25 poin**

---

### Soal 18 — Implementasi Stack & Queue dengan Closure

**Deskripsi Kasus:**
Struktur data adalah fondasi algoritma dan OOP. Implementasikan struktur data **Stack** (LIFO) dan **Queue** (FIFO) menggunakan closure, **tanpa menggunakan sintaks `class`**.

**Bagian (a) — Stack:**
Buatlah factory function `buatStack()` yang mengembalikan object dengan method:
- `push(item)` — Menambah item ke atas stack.
- `pop()` — Menghapus dan mengembalikan item teratas. Jika stack kosong, throw Error `"Stack kosong"`.
- `peek()` — Mengembalikan item teratas tanpa menghapus. Jika kosong, throw Error `"Stack kosong"`.
- `isEmpty()` — Mengembalikan boolean.
- `size()` — Mengembalikan jumlah item.

**Bagian (b) — Queue:**
Buatlah factory function `buatQueue()` yang mengembalikan object dengan method:
- `enqueue(item)` — Menambah item ke belakang antrian.
- `dequeue()` — Menghapus dan mengembalikan item terdepan. Jika kosong, throw Error `"Queue kosong"`.
- `front()` — Mengembalikan item terdepan tanpa menghapus.
- `isEmpty()` — Mengembalikan boolean.
- `size()` — Mengembalikan jumlah item.

**Bagian (c) — Aplikasi Stack:**
Gunakan `buatStack()` untuk mengimplementasikan fungsi `cekKurungSeimbang(str)` yang memeriksa apakah kurung dalam sebuah string seimbang (memeriksa `()`, `[]`, `{}`).

**Contoh Input & Output:**
```js
// Stack:
const s = buatStack();
s.push(1); s.push(2); s.push(3);
s.pop();    // → 3
s.peek();   // → 2
s.size();   // → 2

// Queue:
const q = buatQueue();
q.enqueue("A"); q.enqueue("B"); q.enqueue("C");
q.dequeue();    // → "A"
q.front();      // → "B"

// Kurung Seimbang:
cekKurungSeimbang("({[]})");   // → true
cekKurungSeimbang("({[})");    // → false
cekKurungSeimbang("((()))");   // → true
cekKurungSeimbang("");         // → true
cekKurungSeimbang("{[}]");     // → false
```

---

### Soal 19 — Memoization & Optimisasi Fungsi

**Deskripsi Kasus:**
Memoization adalah teknik optimisasi penting yang mendemonstrasikan pemahaman closure secara mendalam. Implementasikan teknik ini secara generik.

**Bagian (a) — Generic Memoize:**
Buatlah HOF `memoize(fn)` yang membungkus fungsi apapun dan menyimpan cache hasilnya berdasarkan argumen. Jika fungsi dipanggil dengan argumen yang sama, kembalikan hasil dari cache tanpa menghitung ulang.

**Bagian (b) — Fibonacci Termemoize:**
Buatlah fungsi `fibonacci(n)` menggunakan rekursi murni (tanpa memoize bawaan), lalu buat versi termemoizenya menggunakan `memoize(fibonacci)`.

Demonstrasikan perbedaan performa dengan menghitung `fibonacci(40)` sebelum dan sesudah memoize menggunakan `console.time()` dan `console.timeEnd()`.

**Constraint:**
- `memoize` harus bekerja untuk fungsi dengan **satu argumen** (minimum).
- Cache disimpan menggunakan **closure** (bukan variabel global).
- Untuk multi-argumen, gunakan `JSON.stringify(arguments)` sebagai key cache.

**Contoh Penggunaan & Output:**
```js
const tambah = (a, b) => a + b;
const memoTambah = memoize(tambah);

memoTambah(2, 3);  // → 5 (dihitung)
memoTambah(2, 3);  // → 5 (dari cache)
memoTambah(4, 5);  // → 9 (dihitung)

// Fibonacci:
const fib = memoize(function fibs(n) {
  if (n <= 1) return n;
  return fibs(n - 1) + fibs(n - 2);
});

fib(10);  // → 55
fib(40);  // → 102334155 (jauh lebih cepat dari versi tanpa memoize)
```

---

### Soal 20 — Event System (Observer Pattern Manual)

**Deskripsi Kasus:**
Observer Pattern adalah design pattern fundamental dalam OOP. Implementasikan sistem event emitter sederhana menggunakan closure dan higher-order function, sebelum mempelajari implementasi berbasis class.

**Spesifikasi Teknis:**
Buatlah factory function `buatEventEmitter()` yang mengembalikan object dengan method:
- `on(event, listener)` — Mendaftarkan listener untuk event tertentu. Satu event bisa memiliki banyak listener.
- `off(event, listener)` — Menghapus listener tertentu dari event.
- `emit(event, ...data)` — Memanggil semua listener yang terdaftar untuk event tersebut, dengan data sebagai argumen.
- `once(event, listener)` — Mendaftarkan listener yang **hanya dipanggil sekali**, lalu otomatis di-off.
- `listenerCount(event)` — Mengembalikan jumlah listener aktif untuk event tertentu.

**Constraint:**
- Data listeners harus tersimpan dalam closure (tidak boleh diakses langsung dari luar).
- `off` harus menghapus **hanya** listener yang diberikan, bukan semua listener pada event tersebut.
- `emit` tidak boleh error jika dipanggil untuk event yang tidak memiliki listener.

**Contoh Penggunaan & Output:**
```js
const emitter = buatEventEmitter();

const logData = (data) => console.log("Log:", data);
const alertData = (data) => console.log("Alert:", data);

emitter.on("data", logData);
emitter.on("data", alertData);
emitter.emit("data", "Hello World");
// → "Log: Hello World"
// → "Alert: Hello World"

emitter.off("data", logData);
emitter.emit("data", "Second Call");
// → "Alert: Second Call"  (logData sudah dihapus)

emitter.listenerCount("data"); // → 1

emitter.once("connect", () => console.log("Terhubung!"));
emitter.emit("connect");  // → "Terhubung!"
emitter.emit("connect");  // → (tidak ada output)
emitter.listenerCount("connect"); // → 0
```

---

### Soal 21 — Algoritma: Pencarian & Pengurutan

**Deskripsi Kasus:**
Kemampuan mengimplementasikan algoritma dari nol adalah indikator kompetensi seorang programmer. Implementasikan dua algoritma berikut.

**Bagian (a) — Binary Search:**
Buatlah fungsi `binarySearch(arrTerurut, target)` yang:
- Menerima array of numbers yang sudah diurutkan ascending.
- Mengembalikan **index** elemen jika ditemukan.
- Mengembalikan `-1` jika tidak ditemukan.
- Harus diimplementasikan secara **iteratif** (bukan rekursif).
- Time complexity: O(log n).

**Bagian (b) — Merge Sort:**
Buatlah fungsi `mergeSort(arr)` yang:
- Mengimplementasikan algoritma Merge Sort secara **rekursif**.
- Mengembalikan array baru yang sudah terurut ascending.
- **Tidak boleh** menggunakan `.sort()` bawaan JavaScript.
- Time complexity: O(n log n).

**Constraint:**
- Kedua fungsi tidak boleh memodifikasi array asli (immutable).
- Sertakan komentar penjelasan untuk setiap langkah utama algoritma.

**Contoh Input & Output:**
```js
// Binary Search:
binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23);  // → 5
binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 10);  // → -1
binarySearch([1], 1);  // → 0
binarySearch([], 5);   // → -1

// Merge Sort:
mergeSort([38, 27, 43, 3, 9, 82, 10]);
// → [3, 9, 10, 27, 38, 43, 82]

mergeSort([5, 4, 3, 2, 1]);
// → [1, 2, 3, 4, 5]

mergeSort([1]);
// → [1]

// Verifikasi immutability:
const arr = [3, 1, 2];
const sorted = mergeSort(arr);
console.log(arr);    // → [3, 1, 2]  (tidak berubah)
console.log(sorted); // → [1, 2, 3]
```

---

### Soal 22 — Mini Application: Student Grade Manager

**Deskripsi Kasus:**
Soal terakhir menguji kemampuan Anda mengintegrasikan seluruh konsep JavaScript Dasar dalam sebuah aplikasi kecil yang realistis. Ini adalah soal paling representatif untuk mengukur kesiapan Anda memasuki JavaScript OOP.

**Spesifikasi Teknis:**
Implementasikan module `GradeManager` menggunakan **IIFE (Immediately Invoked Function Expression)** yang mengekspos API publik berikut:

```js
const GradeManager = (function() {
  // Implementasi di sini...
  return {
    tambahMahasiswa,
    tambahNilai,
    hapusMahasiswa,
    getLaporan,
    getPeringkat,
    exportCSV
  };
})();
```

**Method yang harus diimplementasikan:**

`tambahMahasiswa(nim, nama)` — Menambahkan mahasiswa baru. Throw Error jika NIM sudah terdaftar.

`tambahNilai(nim, mataKuliah, nilai)` — Menambahkan nilai untuk mahasiswa. `nilai` harus antara 0–100. Throw Error jika NIM tidak ditemukan atau nilai di luar range.

`hapusMahasiswa(nim)` — Menghapus mahasiswa. Throw Error jika tidak ditemukan.

`getLaporan(nim)` — Mengembalikan object:
```js
{
  nim, nama,
  nilaiPerMK: { "MK001": 85, "MK002": 90, ... },
  ipk: number,  // rata-rata semua nilai, 2 desimal
  predikat: string  // "Cumlaude" ≥ 3.5, "Sangat Memuaskan" ≥ 3.0, "Memuaskan" ≥ 2.5, "Cukup" lainnya
  // (konversi nilai: A=4, B=3, C=2, D=1, E=0 berdasarkan grade dari Soal 14)
}
```

`getPeringkat()` — Mengembalikan array seluruh mahasiswa diurutkan IPK tertinggi ke terendah.

`exportCSV()` — Mengembalikan string format CSV: baris pertama header, baris berikutnya data setiap mahasiswa (NIM, Nama, IPK, Predikat).

**Constraint:**
- Semua data tersimpan di dalam closure IIFE (tidak boleh ada variabel global).
- Method harus menggunakan array methods fungsional (`map`, `filter`, `reduce`, `sort`).
- Penanganan error menggunakan `throw new Error(...)` yang spesifik dan deskriptif.
- Kode harus dapat dijalankan dan divalidasi dengan test case berikut:

**Test Case Wajib:**
```js
GradeManager.tambahMahasiswa("A001", "Andi Saputra");
GradeManager.tambahMahasiswa("A002", "Bela Kusuma");
GradeManager.tambahMahasiswa("A003", "Candra Wijaya");

GradeManager.tambahNilai("A001", "JS Dasar", 92);
GradeManager.tambahNilai("A001", "Algoritma", 78);
GradeManager.tambahNilai("A002", "JS Dasar", 65);
GradeManager.tambahNilai("A002", "Algoritma", 55);
GradeManager.tambahNilai("A003", "JS Dasar", 88);
GradeManager.tambahNilai("A003", "Algoritma", 91);

console.log(GradeManager.getLaporan("A001"));
// → { nim: "A001", nama: "Andi Saputra", nilaiPerMK: { "JS Dasar": 92, Algoritma: 78 }, ipk: 3.5, predikat: "Cumlaude" }

console.log(GradeManager.getPeringkat().map(m => m.nama));
// → ["Candra Wijaya", "Andi Saputra", "Bela Kusuma"]

console.log(GradeManager.exportCSV());
// → "NIM,Nama,IPK,Predikat\nA001,Andi Saputra,3.5,Cumlaude\n..."

// Test error handling:
try {
  GradeManager.tambahMahasiswa("A001", "Duplikat");
} catch(e) {
  console.log(e.message); // → "NIM A001 sudah terdaftar"
}

try {
  GradeManager.tambahNilai("A001", "MK Baru", 150);
} catch(e) {
  console.log(e.message); // → "Nilai harus antara 0 dan 100"
}
```

---

## Lampiran: Rubrik Penilaian

| Kriteria | Bobot |
|---|---|
| Kode dapat dijalankan tanpa error | 30% |
| Output sesuai spesifikasi | 35% |
| Penggunaan konsep yang diminta (closure, HOF, dll) | 25% |
| Keterbacaan kode & komentar | 10% |

---

*Dokumen ujian ini dibuat untuk keperluan akademik mata kuliah JavaScript Dasar.*
*Dilarang menyebarluaskan tanpa izin dosen pengampu.*