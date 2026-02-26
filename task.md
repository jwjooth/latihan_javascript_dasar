# UJIAN KOMPETENSI KELULUSAN

## JavaScript Fundamental -- Hardcoded Assessment

Durasi: 180 menit\
Instruksi: 1. Gunakan `use strict` di setiap file. 2. Gunakan `let` atau
`const`, tidak boleh `var`. 3. Gunakan minimal 1 function di setiap
soal. 4. Tampilkan output menggunakan `console.log`. 5. Tidak
diperbolehkan menggunakan Class atau konsep OOP.

------------------------------------------------------------------------

# BAGIAN A -- LOGIKA DASAR & TIPE DATA (Soal 1--5)

## 1. Validasi Konversi Angka

Buat function yang menerima string angka. - Jika bisa dikonversi menjadi
number → tampilkan hasil kuadratnya. - Jika tidak valid → tampilkan
"Input Tidak Valid".

Contoh: Input: "25"\
Output: 625

------------------------------------------------------------------------

## 2. Deteksi Tipe Data

Buat function yang menerima satu parameter. Gunakan `typeof` dan
tampilkan: - "Ini Number" - "Ini String" - "Ini Boolean" - "Tipe Lain"

------------------------------------------------------------------------

## 3. Evaluasi Falsy & Truthy

Buat function yang menerima parameter bebas. Jika value termasuk falsy →
tampilkan "Falsy Value". Jika truthy → tampilkan "Truthy Value".

------------------------------------------------------------------------

## 4. Operasi Matematika Lengkap

Buat function menerima dua angka. Tampilkan: - Penjumlahan -
Pengurangan - Perkalian - Pembagian - Modulus - Pangkat

Gunakan operator aritmatika dan minimal satu augmented assignment.

------------------------------------------------------------------------

## 5. Nullish vs OR Operator

Buat function yang menerima parameter `nama`. Jika `nama` null atau
undefined → gunakan default "Guest" dengan operator `??`. Bandingkan
hasilnya jika menggunakan `||`.

------------------------------------------------------------------------

# BAGIAN B -- ARRAY & OBJECT (Soal 6--12)

## 6. Manajemen Array Dinamis

-   Buat array kosong.
-   Tambahkan 5 angka menggunakan `push`.
-   Hapus index ke-2 menggunakan `delete`.
-   Tampilkan panjang array.
-   Gunakan `in` operator untuk cek index 2.

------------------------------------------------------------------------

## 7. Total Nilai Array

Buat function yang menerima array angka. Hitung total tanpa menggunakan
`.reduce()`.

------------------------------------------------------------------------

## 8. Reverse Manual

Balik isi array tanpa `.reverse()`.

------------------------------------------------------------------------

## 9. Statistik Sederhana

Dari array angka, hitung: - Nilai tertinggi - Nilai terendah - Rata-rata

------------------------------------------------------------------------

## 10. Object Profil

Buat object dengan property: - nama - umur - status

Tambahkan method `perkenalan()` yang menampilkan: "Halo nama saya X,
umur Y tahun"

------------------------------------------------------------------------

## 11. Getter & Setter

Buat object dengan: - property `_nilai` - getter `nilai` - setter
`nilai` (nilai tidak boleh \< 0)

------------------------------------------------------------------------

## 12. Destructuring Complex

Buat object nested:

mahasiswa { nama, alamat: { kota, kodePos } }

Gunakan destructuring untuk mengambil `kota` dan `kodePos`.

------------------------------------------------------------------------

# BAGIAN C -- PERCABANGAN & LOOPING (Soal 13--18)

## 13. Sistem Penilaian

Input angka 0--100. Gunakan `if else if`: - A (\>=85) - B (\>=70) - C
(\>=60) - D (\<60)

------------------------------------------------------------------------

## 14. Switch Case Hari

Input angka 1--7. Tampilkan nama hari menggunakan `switch`.

------------------------------------------------------------------------

## 15. Looping Segitiga Bintang

Cetak pola: * ** *** \*\*\*\* \*\*\*\*\*

Gunakan nested loop.

------------------------------------------------------------------------

## 16. FizzBuzz Advanced

1--50: - Kelipatan 3 → Fizz - Kelipatan 5 → Buzz - Kelipatan 3 & 5 →
FizzBuzz Gunakan continue.

------------------------------------------------------------------------

## 17. Label Break

Buat nested loop 5x5. Gunakan label untuk berhenti ketika i=3 dan j=3.

------------------------------------------------------------------------

## 18. For In vs For Of

Buat: - Object data siswa - Array nilai Gunakan `for in` untuk object
dan `for of` untuk array.

------------------------------------------------------------------------

# BAGIAN D -- FUNCTION ADVANCED (Soal 19--25)

## 19. Rest Parameter Total

Buat function menerima angka bebas jumlahnya. Kembalikan totalnya.

------------------------------------------------------------------------

## 20. Spread Syntax

Gunakan array dan kirim ke function rest parameter menggunakan spread.

------------------------------------------------------------------------

## 21. Recursive Factorial

Buat factorial recursive tanpa loop.

------------------------------------------------------------------------

## 22. Function Generator

Buat generator angka genap 1--20. Gunakan `yield`.

------------------------------------------------------------------------

## 23. Closure Counter

Buat function `buatCounter()`. Setiap dipanggil, return function yang
menaikkan nilai counter.

------------------------------------------------------------------------

## 24. Anonymous & Arrow Function

Buat function menerima parameter function. Uji dengan: - anonymous
function - arrow function

------------------------------------------------------------------------

## 25. Optional & Default Parameter

Buat function diskon(harga, persen = 10). Hitung harga setelah diskon.

------------------------------------------------------------------------

# BAGIAN E -- ADVANCED LOGIC & EDGE CASE (Soal 26--30)

## 26. Optional Chaining

Buat object nested. Akses property yang mungkin undefined tanpa error.

------------------------------------------------------------------------

## 27. Strict Mode Error

Buat contoh kode yang error di strict mode tapi tidak di sloppy mode.

------------------------------------------------------------------------

## 28. NaN Handling

Buat function menerima dua input string angka. Konversi dan jumlahkan.
Jika salah satu NaN → tampilkan "Data Tidak Valid".

------------------------------------------------------------------------

## 29. Implementasi Ternary Kompleks

Buat sistem: - Jika umur \< 18 → "Anak" - 18--60 → "Dewasa" - \>60 →
"Lansia"

Gunakan nested ternary.

------------------------------------------------------------------------

## 30. Mini Project: Sistem Kasir Sederhana

Buat program: - Array produk (nama & harga) - Hitung total belanja -
Diskon 10% jika total \> 100000 - Gunakan: - destructuring - function -
loop - ternary - template string - nullish coalescing

Output contoh: Total: 150000 Diskon: 15000 Total Bayar: 135000

------------------------------------------------------------------------

# KRITERIA KELULUSAN

  Nilai     Kategori
  --------- ---------------------------------------------
  90--100   Siap masuk JavaScript OOP
  75--89    Paham, perlu penguatan edge case
  60--74    Dasar cukup, perlu ulang looping & function
  \<60      Wajib ulang materi fundamental
