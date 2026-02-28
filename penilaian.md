# 📋 PENILAIAN UJIAN KOMPETENSI KELULUSAN
## JavaScript Fundamental — Hardcoded Assessment

> **Penilai:** Evaluasi Objektif Akademik  
> **Standar Penilaian:** Kebenaran logika, kesesuaian spesifikasi, kualitas kode, dan penanganan edge case  
> **Tanggal Evaluasi:** 28 Februari 2026

---

## REKAP NILAI PER SOAL

| No | Soal | Nilai | Status |
|----|------|-------|--------|
| 1 | Validasi Konversi Angka | 4/10 | ❌ Bug Kritis |
| 2 | Deteksi Tipe Data | 10/10 | ✅ Sempurna |
| 3 | Evaluasi Falsy & Truthy | 10/10 | ✅ Sempurna |
| 4 | Operasi Matematika Lengkap | 5/10 | ⚠️ Bug Logika |
| 5 | Nullish vs OR Operator | 10/10 | ✅ Sempurna |
| 6 | Manajemen Array Dinamis | 10/10 | ✅ Sempurna |
| 7 | Total Nilai Array | 10/10 | ✅ Sempurna |
| 8 | Reverse Manual | 10/10 | ✅ Sempurna |
| 9 | Statistik Sederhana | 2/10 | ❌ Bug Kritis |
| 10 | Object Profil | 10/10 | ✅ Sempurna |
| 11 | Getter & Setter | 6/10 | ⚠️ Tidak Sesuai Spesifikasi |
| 12 | Destructuring Complex | 10/10 | ✅ Sempurna |
| 13 | Sistem Penilaian | 10/10 | ✅ Sempurna |
| 14 | Switch Case Hari | 9/10 | ✅ Minor Issue |
| 15 | Looping Segitiga Bintang | 10/10 | ✅ Sempurna |
| 16 | FizzBuzz Advanced | 7/10 | ⚠️ Syarat `continue` Tidak Dipenuhi |
| 17 | Label Break | 10/10 | ✅ Sempurna |
| 18 | For In vs For Of | 10/10 | ✅ Sempurna |
| 19 | Rest Parameter Total | 10/10 | ✅ Sempurna |
| 20 | Spread Syntax | 10/10 | ✅ Sempurna |
| 21 | Recursive Factorial | 8/10 | ⚠️ Base Case Tidak Lengkap |
| 22 | Function Generator | 10/10 | ✅ Sempurna |
| 23 | Closure Counter | 10/10 | ✅ Sempurna |
| 24 | Anonymous & Arrow Function | 7/10 | ⚠️ Tidak Lengkap |
| 25 | Optional & Default Parameter | 10/10 | ✅ Sempurna |
| 26 | Optional Chaining | 10/10 | ✅ Sempurna |
| 27 | Strict Mode Error | 3/10 | ❌ Tidak Diimplementasikan |
| 28 | NaN Handling | 3/10 | ❌ Bug Kritis |
| 29 | Ternary Kompleks | 6/10 | ⚠️ Bug Logika |
| 30 | Mini Project Kasir | 4/10 | ❌ Bug Kritis + Tidak Sesuai Spesifikasi |

---

## NILAI TOTAL

| | |
|---|---|
| **Total Poin** | 244 / 300 |
| **Persentase** | 81.3% |
| **Huruf Mutu** | **B** |
| **Kategori Kelulusan** | **Paham, perlu penguatan edge case (75–89)** |

---

## ANALISIS DETAIL PER SOAL

---

### ❌ Soal 1 — Validasi Konversi Angka (4/10)

**Kode yang ditulis:**
```js
if (Number(value) !== NaN) { ... }
```

**Bug Kritis:** Ekspresi `Number(value) !== NaN` selalu bernilai `true`. Ini adalah salah satu gotcha paling fundamental di JavaScript: `NaN` tidak sama dengan dirinya sendiri (`NaN !== NaN === true`). Akibatnya, branch `else` yang mengembalikan `"Input Tidak Valid"` **tidak pernah bisa dicapai (unreachable code)**.

**Koreksi yang benar:**
```js
if (!Number.isNaN(Number(value)) && value.trim() !== "") {
    return Number(value) ** 2;
} else {
    return "Input Tidak Valid";
}
```

**Catatan Dosen:** Pemahaman tentang perilaku `NaN` adalah kompetensi dasar. Harusnya menggunakan `Number.isNaN()` atau `isNaN()`. Ini bukan sekadar typo — ini menunjukkan kesalahpahaman konseptual tentang equality dan `NaN`.

---

### ✅ Soal 2, 3, 5, 6, 7, 8, 10, 12, 13, 15, 17, 18, 19, 20, 22, 23, 25, 26 — LULUS SEMPURNA

Implementasi benar, logika sesuai spesifikasi, kode bersih.

---

### ⚠️ Soal 4 — Operasi Matematika Lengkap (5/10)

**Dua bug ditemukan:**

```js
let modulus = a % 2;   // ❌ Harusnya a % b
let pangkat = a * a;   // ❌ Harusnya a ** b (atau Math.pow(a, b))
```

Modulus hanya terhadap konstanta `2`, bukan parameter `b`. Pangkat hanya mengkuadratkan `a`, bukan menghitung `a` pangkat `b`. Selain itu, tidak ada penggunaan **augmented assignment** (`+=`, `-=`, dll) sebagaimana diminta soal.

**Koreksi:**
```js
let modulus = a % b;
let pangkat = a ** b;
// Contoh augmented assignment:
let penjumlahan = 0;
penjumlahan += a + b;
```

---

### ❌ Soal 9 — Statistik Sederhana (2/10)

**Bug Kritis:** Akumulasi `total` hanya terjadi ketika elemen baru adalah max atau min baru, bukan untuk semua elemen. Ini menyebabkan nilai `avg` sama sekali salah.

```js
// Kode mahasiswa (salah):
if (arr[i] > max) {
    max = arr[i];
    total += arr[i];  // ← hanya ditambah kalau jadi max baru
}
```

Untuk array `[1,2,3,4,5,6,7,8,9]`:
- Kode mahasiswa: `total = 1 + 9 = 10`, `avg = 10/9 ≈ 1.11` ❌  
- Jawaban benar: `total = 45`, `avg = 5` ✅

**Koreksi:**
```js
function statistic(arr) {
    let total = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];               // akumulasi semua
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { avg: total / arr.length, max, min };
}
```

**Catatan Dosen:** Ini adalah logical error yang fatal. Mahasiswa tampaknya menulis akumulasi `total` di dalam kondisi max/min tanpa menyadari bahwa semua elemen harus dijumlahkan.

---

### ⚠️ Soal 11 — Getter & Setter (6/10)

**Dua masalah:**
1. Spesifikasi meminta property `_nilai`, bukan `exam`. Konvensi underscore (`_nilai`) adalah pola enkapsulasi yang eksplisit diminta soal.
2. `return` di dalam `setter` tidak valid — setter tidak mengembalikan nilai; pernyataan itu di-ignore secara diam-diam oleh JavaScript engine.

```js
// Kode mahasiswa:
set nilai(value) {
    if (value > 0) { this.exam = value; }
    else { return `Nilai tidak boleh < 0`; }  // ← tidak akan pernah ter-return
}
```

**Koreksi:**
```js
let student = {
    _nilai: 100,
    get nilai() { return this._nilai; },
    set nilai(value) {
        if (value >= 0) { this._nilai = value; }
        // setter tidak return — gunakan console.warn atau throw Error
    }
};
```

---

### ⚠️ Soal 14 — Switch Case Hari (9/10)

`break` setelah `return` adalah **dead code** (tidak pernah dieksekusi). Meskipun tidak menyebabkan error fungsional, ini menunjukkan kurangnya pemahaman tentang alur kontrol. `default` case juga tidak mengembalikan nilai yang informatif.

---

### ⚠️ Soal 16 — FizzBuzz Advanced (7/10)

Soal secara eksplisit meminta penggunaan `continue`. Implementasi mahasiswa menggunakan `if-else if` chain yang valid secara fungsional, tetapi **tidak memenuhi syarat instruksional** yang diminta.

**Versi dengan `continue`:**
```js
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) { console.log("FizzBuzz"); continue; }
    if (i % 3 === 0)  { console.log("Fizz"); continue; }
    if (i % 5 === 0)  { console.log("Buzz"); continue; }
    console.log(i);
}
```

---

### ⚠️ Soal 21 — Recursive Factorial (8/10)

Base case hanya menangani `n === 1`, namun `0! = 1` juga valid secara matematis. Memanggil `faktorial(0)` akan menyebabkan **infinite recursion** dan stack overflow.

**Koreksi:**
```js
function faktorial(n) {
    if (n < 0) return undefined; // edge case
    if (n === 0 || n === 1) return 1;
    return n * faktorial(n - 1);
}
```

---

### ⚠️ Soal 24 — Anonymous & Arrow Function (7/10)

Soal meminta pengujian dengan **dua** jenis function: anonymous function dan arrow function. Mahasiswa hanya mengimplementasikan arrow function. Anonymous function (tanpa nama) tidak didemonstrasikan sama sekali.

**Contoh lengkap:**
```js
// Arrow function (sudah ada):
const sayHello = (name) => `hellow ${name}`;

// Anonymous function (belum ada):
console.log(anonymous(function(name) {
    return `hellow ${name}`;
}));
```

---

### ❌ Soal 27 — Strict Mode Error (3/10)

Kode di-comment-out seluruhnya. Mahasiswa hanya meninggalkan komentar tanpa implementasi yang berfungsi. Soal ini seharusnya mendemonstrasikan perbedaan perilaku strict vs sloppy mode — misalnya dengan variabel tidak terdeklaasi, duplikasi parameter, atau penggunaan `with`.

Poin 3 diberikan karena mahasiswa setidaknya menunjukkan pemahaman bahwa `with` adalah contoh yang tepat.

---

### ❌ Soal 28 — NaN Handling (3/10)

**Bug Kritis:** `Number.isNaN("j")` mengembalikan `false`, bukan `true`. Ini karena `Number.isNaN()` hanya mengembalikan `true` untuk nilai yang secara literal adalah `NaN` — tidak melakukan konversi tipe terlebih dahulu.

```js
Number.isNaN("j")        // false ← string bukan NaN literal
Number.isNaN(Number("j")) // true ← baru benar
isNaN("j")               // true ← versi lama, lebih toleran
```

Sehingga `nanHandling("j", 1)` mengembalikan `NaN` (bukan `"Data Tidak Valid"`) karena branch validasi tidak tertrigger.

**Koreksi:**
```js
function nanHandling(value, params) {
    const numA = Number(value);
    const numB = Number(params);
    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return "Data Tidak Valid";
    }
    return numA + numB;
}
```

---

### ⚠️ Soal 29 — Ternary Kompleks (6/10)

**Bug Logika:** Kondisi untuk "Dewasa" menggunakan `age > 18` (strict greater than), sehingga seseorang **tepat berumur 18 tahun** akan dikategorikan sebagai "Lansia" — jelas salah.

```js
// Kode mahasiswa (salah untuk age === 18):
age < 18 ? "Anak" : age > 18 && age < 60 ? "Dewasa" : "Lansia"
//                       ^^^ harusnya >=

// Koreksi:
age < 18 ? "Anak" : age <= 60 ? "Dewasa" : "Lansia"
```

---

### ❌ Soal 30 — Mini Project Kasir (4/10)

**Terdapat bug serius dan beberapa ketidaksesuaian spesifikasi:**

**Bug #1 — Variable scope:** Di dalam function `cashier(products)`, loop mengacu ke variabel global `product` alih-alih parameter `products`. Ini adalah referensi yang salah dan akan menyebabkan kode bergantung pada variabel global (fragile, side-effectful).

```js
function cashier(products) {
    for (const key in product) {   // ← Harusnya `products`
        const element = product[key]; // ← Harusnya `products[key]`
```

**Bug #2 — Destructuring tidak digunakan:** Soal secara eksplisit meminta penggunaan destructuring untuk mengakses `name` dan `price` dari setiap produk.

**Bug #3 — Fitur yang diminta tidak diimplementasikan:**
- ❌ Destructuring dalam loop
- ❌ Template string untuk output
- ❌ Nullish coalescing operator (`??`)
- ❌ Ternary untuk logika diskon

**Contoh implementasi yang benar:**
```js
function cashier(products) {
    let total = 0;
    for (const { name, price } of products) {  // destructuring
        total += price ?? 0;  // nullish coalescing
    }
    const diskon = total > 100000 ? total * 0.1 : 0;  // ternary
    const totalBayar = total - diskon;
    return `Total: ${total}\nDiskon: ${diskon}\nTotal Bayar: ${totalBayar}`;  // template string
}
```

---

## RINGKASAN KOMPETENSI

| Kategori | Status |
|----------|--------|
| Tipe data & konversi | ⚠️ Lemah (NaN misconception di soal 1 & 28) |
| Array & Object manipulation | ✅ Kuat |
| Looping & percabangan | ✅ Baik |
| Function lanjutan (closure, generator, recursion) | ✅ Kuat |
| Destructuring & spread/rest | ✅ Kuat |
| Edge case & defensive programming | ❌ Perlu penguatan serius |
| Kepatuhan terhadap spesifikasi soal | ⚠️ Ada beberapa kelalaian |

---

## REKOMENDASI DOSEN

Mahasiswa menunjukkan **pemahaman yang solid terhadap konsep-konsep inti JavaScript** seperti closure, generator, destructuring, spread/rest, dan OOP-lite dengan getter/setter. Kemampuan looping dan percabangan juga dinilai cukup mumpuni.

Namun, terdapat **dua area kritis yang harus diperbaiki** sebelum mahasiswa dianggap siap lanjut ke JavaScript OOP:

**1. Pemahaman mendalam tentang `NaN`** — Kesalahan yang sama muncul di dua soal berbeda (soal 1 dan 28). Perbedaan antara `Number.isNaN()` dan `isNaN()`, serta perilaku `NaN !== NaN`, adalah fondasi yang wajib dikuasai.

**2. Ketelitian membaca dan mengimplementasikan spesifikasi** — Beberapa soal memiliki persyaratan eksplisit (`continue` di soal 16, `_nilai` di soal 11, fitur lengkap di soal 30) yang tidak dipenuhi. Dalam konteks profesional, ini setara dengan mengabaikan acceptance criteria.

**3. Testing sederhana** — Hampir semua bug bisa tertangkap dengan test case sederhana sebelum submit. Biasakan menulis test untuk edge case: `0`, nilai negatif, string non-numerik, dan nilai batas (boundary values).

---

> **Nilai Akhir: 81.3 / 100 — Kategori B**  
> *"Paham, perlu penguatan edge case"*  
> Mahasiswa **LULUS** dengan rekomendasi melakukan review mandiri pada topik NaN, defensive programming, dan kepatuhan spesifikasi sebelum melanjutkan ke materi OOP.