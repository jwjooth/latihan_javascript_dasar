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
function normalisasiNama(nama){
  let name = nama.trim(" ");
  console.log(name);
}

normalisasiNama("  budi   santoso  "); // → "Budi Santoso"
normalisasiNama("RINA wati");          // → "Rina Wati"
normalisasiNama("agus123");            // → "Nama tidak valid"
normalisasiNama("  ");                 // → "Nama tidak valid"
normalisasiNama("siti  nurbaya");      // → "Siti Nurbaya"