// let age = prompt('Isi umur').toLowerCase;

// if (age <= 20){
//     console.log('Udah kepala 2 aja nih, Mau apalagi hayo');
// }else if(age <= 30){
//     console.log('Udah nikah belum?');
// }else if(age<=40){
//     console.log('Anak udah mulai gede yah');
// }else if(age<=50){
//     console.log('Pensiun om, biar kami yang gantiin');
// }else{
//     console.log('Sudahkah kamu siap untuk mati?');
// }

// const hari = prompt('Isikan Hari').toLowerCase();

// if (hari === 'senin'){
//     console.log('Selamat Bekerja');
// }else if(hari === 'sabtu'){
//     console.log('Mau kemana kita?');
// }else{
//     console.log('Yauda SIH!!!');
// }

// const password = prompt('Buat Password')

// if(password.length<6){
//     console.log('Minimal panjang 6 karakter')

//     if(password.includes(' ')){
//         console.log('tidak boleh ada spasi')
//     }

    
// }else{
//     console.log('berhasil')
// }



// const password = prompt('Buat Pasword');
// if (password.length >= 6 && password.indexOf(' ') === -1){
//    console.log('Valid');
// }else{
//    console.warn('gak benar');
// }

// const akses = prompt ('Akses Masuk');

// if(akses == 'admin' || akses == 'bos'){
//     console.log ('akses di terima');
// }else{
//     console.log ('akses ditolak');
// }

// const balon = prompt ('Masukkan Balon');

// switch(balon){
//     case 'merah':
//     console.log ('Bukan Balonku');
//     break;
// }

// const animals = 
//     ['Cat', 'Dog', 'Crocodile', 'Bird', 'Tiger'];


// for (let row of animals){
//     for(let mamalia of row){
//         console.log(mamalia);
//     }
// }


// for (let i = 0; i < animals.length; i++ ){
//     console.log(i,animals[i]);
// }

// const soal = 'ABCD';

// for (let i = 1; i <= 5 ; i++){
//     console.log (`${i}. Soal Nomor ${i}:`);
//     for (let b = 0; b < soal.length; b++ ){
//         console.log (`  ${soal[b]}. pilihan `);
//     }
// }

// const student = [
//     ['gewa', 'darna', 'Nazrul', 'Amar'],
//     ['uti', 'juanda', 'billy', 'dinda'],
//     ['Agunf', 'hadi', 'syahputra', 'fajri'],
// ];

// for
// for (let i=1; i <= 3; i++){
//     console.log(`${i}. Absensi Siswa :`);
//     for(let j = 0; j < student.length; j++){
//         console.log (`      ${student[j]}`);
//     };
// };

// for of
// for (let row of student){
//     for(let pelajar of row){
//         console.log(pelajar);
//     }
// }


// const student = prompt('Masukkan Kelas');
// const sia7 = ['gewa', 'darna', 'amar'];
// const simiA = ['Uti', 'Dinda', 'Juanfa'];
// const sia1 = ['Bila', 'lasmi', 'Ijri'];

// switch (student) {
//     case 'sia7':
//         console.log(`${sia7}`);
//         break;
//     case 'simiA':
//         console.log(`${simiA}`);
//         break;
//     case 'sia1':
//         console.log(`${sia1}`);
//         break;
//     default:
//         console.log('Kelas tidak ditemukan');
// }

        
// else if(student == 'simiA'){
//     console.log(simiA)
// }else if(student == 'sia1'){
//     console.log(sia1);
// }

// const pass = '123';

// let panggilPass = prompt('Masukkan password');
// while (panggilPass !== pass ){
//     panggilPass = prompt('Masukkan password');
// } 
// alert ('Password benar')

// let max = parseInt(prompt ('Masukkan nilai maksimal'));
// while (!max){
//     prompt ('masukkan nilai maksimal');
// }

// const targetNum = Math.floor(Math.random() * max) + 1;
// console.log = targetNum

// let guess = parseInt(prompt('isi tebakan pertama kamu'));

// while (guess !== targetNum){
//     if (guess > targetNum){
//         guess = parseInt(prompt ('Nilai terlalu besar :'));
//     }else{
//         guess = parseInt(prompt('Nilai terlalu kecil :'));
//     }
// }alert ('Tebakan kamu benar');

// function lemparDadu(){
//     console.log (Math.floor(Math.random() *12) +1);
// }

// function sapa(name){
//     console.log(`Hallo ${name}. Selamat pagi`);
// }

// sapa('gewa');

// const laptop = 3500000;
// const handPhone = 2000000;

// function jumlah(laptop, handPhone){
//     if(typeof laptop !== 'number' || typeof handPhone !== 'number'){
//         return false;
//     }
    
//     return laptop + handPhone
// }


// function jumlahkan(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return false;
//     }
    
//     return a + b;
// }

// while
// var nilaiAwal = 1

// while (nilaiAwal <=10){
//     console.log(`nilai awal ${nilaiAwal}x`);
//     nilaiAwal++
// }
// penutup while


// scope (function)
// let programing = ('JavaSript');

// function prog(){
//     const programing = ('PHP');
//     console.log(programing);
// }

// prog();

// console.log(programing);
// 1

// let tinggi = 8;
// if (tinggi > 5){
//     let lebar = 10;
//     console.log(lebar);
// }
// console.log (tinggi);


// function kerja(){
//     const pekerjaan = 'Programer';

//     function ordal(){
//         let orangDalam = (`saya menjadi ${pekerjaan} karena relasi`);
//         console.log(orangDalam);
//     }

//     ordal();
// }

// function rumahMakan(){
//     menu = ('Lontong, Ayang penyet, Miesop');

//     function a(){
//         makan = `Dirumah makan ini hanya ada ${menu}`;
//         console.log (makan);
//     }
//     a();
// }

// console.log(rumahMakan());

// function expression
// const hasil = function(a,b){
//     return a*b;
// };


// ForEach
// dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array

// contoh
// const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(function(number){
//     if(number %2 === 0){
//         console.log(number);
//     }
// }); 

// const animes = [
//     {
//         title : 'one piece',
//         rating : 90,
//     },
//     {
//         title : 'Attack on titan',
//         rating : 80,
//     },
//     {
//         title : 'Naruto',
//         rating : 90,
//     },
    
// ];

// animes.forEach(function(anime,i){
//         console.log(`${i + 1}. ${anime.title} ${anime.rating} / 100`);
// }); //Fungsi forEach dirancang khusus untuk menjalankan suatu tindakan pada setiap elemen array tanpa memerlukan loop for lagi. Saat Anda menggunakan forEach, Anda mendapatkan akses langsung ke setiap elemen array dan tidak perlu secara eksplisit mendeklarasikan atau mengatur indeks. sumber(chat gpt)


// map
// nilai balikknya array baru yang sudah dimodifikasi melalui callback function dari suatu array atau simplenya "Memanipulasi data yang sudah ada". jadi output dari map adalah array dan array yang memiliki nilai dan bisa saja berbeda dari sumber yang digunakan 

// contoh
// const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`angka sebelum di berikan map ${numbers}`);

// const numbersx2 = numbers.map(function(number){
//     if(number %2 == 0){
// //         number * 2;
//         console.log(`angka sesudah diberikan map ${number}`);
//     }
// })


// arrow function

// const perpangkatan = function(x){ //ini function biasa
//     return x * x;
// }

// console.log = perpangkatan(5);

// const perpangkatan = (x) =>{ //ini arrow function menggunakan parameter
//     return x * x;
// }

// const random = () =>{ //ini arrow function tanpa parameter
//     return Math.floor(Math.random() * 1000);
// }


// implisit return dari arrow function
// jika perintah hanya 1 baris saja kita tidak harus menggunakan return namun tanda{} diganti dengan ()
// contoh :
// const random = () => ( 
//      Math.floor(Math.random() * 1000)
// );//


// setTimeout & setInterval
// callback function yang bukan berasal dari array. Fungsinya untuk memberikan waktu jedah dan melakukan perulangan setiap waktu yang ditentukan. Kedua function berkaitan dengan waktu dengan satuan milisecond

// contoh
// 1.setTimeout
// console.log('haloo..'); //simplenya setTimeout() 
// setTimeout(() =>{
//     console.log('ini siapa ya..?')
// }, 10000 );


// setInterval
// const interval = setInterval(() =>{
//     console.log (Math.random(Math.floor()));
// },2000);

// ////

// fileter atau pilih
// Function yang akan mengembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang ditetapkan

// const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaBaru = numbers.filter((n) =>{
//     return n > 5;
// });


// const animes = [
//     {
//         title : 'one piece',
//         rating : 90,
//     },
//     {
//         title : 'Attack on titan',
//         rating : 80,
//     },
//     {
//         title : 'Naruto',
//         rating : 90,
//     },
    
// ];

// const anime = animes.filter(anime => anime.rating > 80)
// const judulAnimeBagus = animes.filter(judulAnimeBagus => judulAnimeBagus.title);
// filter baisa digunakan untuk memilih sesuatu berdasarkan yang kita mau

// /

// every
// Akan mengenmablikan nilai bolean true pada suatu array memiliki kriteria yang sama. False jika salah satu nilai tidak memiliki nilai yang sama

// contoh
// const nilai = [80, 85, 89, 90, 98];
// const lulus = nilai.every((score) =>
//     score >= 75,
// ); // semua nilai harus benar, disini kondisinya true karena semua nilai lebih besar dari 75


// some
// jika every semua nilai harus benar, some hanya salah satu benar maka akan di balikkan nilai bolean true
// const animes = [
//     {
//         title : 'one piece',
//         rating : 90,
//     },
//     {
//         title : 'Attack on titan',
//         rating : 80,
//     },
//     {
//         title : 'Naruto',
//         rating : 90,
//     },
    
// ];

// const animeRating = animes.some((rat) =>
//     rat.rating === 80,
// );

// reduce
// melakukan proses seperti - + maupun % pada elemen array dan nilai yang di return adalah single value atau satu nilai
// const nilai = [80, 85, 89, 90, 98];

// const totalNilai = nilai.reduce((curentTotal, subTotal) =>{
//     return curentTotal + subTotal
// }); //cara baca : totalNilai sama dengan nilai yang di reduce dari curentTotal dan subTOtal. kembalikan nilai curentTotal + subTotal.
// curentTotal = 80
// subtotal = 85
// 80 + 85 = 165, 165 balik lagi menjadi curentTotal dan ditambahkan lagi pada niai yang belum dimasukkan / 89

// const animes = [
//     {
//         title : 'one piece',
//         rating : 92,
//     },
//     {
//         title : 'Attack on titan',
//         rating : 80,
//     },
//     {
//         title : 'Naruto',
//         rating : 85,
//     },
//     {
//         title : 'Boruto',
//         rating : 82,
//     },
        
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) =>{
//     console.log(bestAnime, currAnime)
//     if(currAnime.rating > bestAnime.rating){ //jika currAnime lebih besar dari bestAnime maka kembalikan nilai currAnime
//         return currAnime; //mengganti currAnime pada nilai yang lebih tinggi, dan nilai yang lebih rendah akan ditinggalkan
//     }
//     return bestAnime;
// }) //intinya disini mencari rating anime paling tinggi dengan cara membandingkan satu persatu. reduce juga bisa untuk menambahkan total belanja walaupun ada discount karena dihitung 1 / 1

//////

//default value parameter *Mengatur default value pada function
//Nilai yang digunakan saat fungsi dipanggil tapi tidak dapat diberi nilai argument yang diperlukan

//contoh

function dadu (sisi = 6){ //sisi dadu otomatis akan terisi dengan nilai 6
    return Math.floor(Math.random() * sisi) +1;
}

function sapa(user = 'gewa',selamat = 'selamat ngoding'){
    console.log(`${user} ${selamat}`);
}