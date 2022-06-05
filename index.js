const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listnames, hasilSorting) => {
  const newhasilSorting = hasilSorting(listnames);
  let no = 0;
  let newList = [];
  for(let i = 0; i < newhasilSorting.length; i++){
    no = i+1;
    newList.push(`${no}. ${newhasilSorting[i]}`);
  }
  return newList;
};


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (listnames) => {
  return listnames.sort();
};


// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (listnames) => {
  listnames.sort();
  return listnames.reverse();
  
};

// ! JANGAN DIMODIFIKASI
(function main() {
   console.log(sorter?.(names, sortAscending)?.join("\n"));
   console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
