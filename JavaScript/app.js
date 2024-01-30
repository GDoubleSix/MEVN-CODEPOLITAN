/*let age = prompt('Isi umur').toLowerCase;

if (age <= 20){
    console.log('Udah kepala 2 aja nih, Mau apalagi hayo');
}else if(age <= 30){
    console.log('Udah nikah belum?');
}else if(age<=40){
    console.log('Anak udah mulai gede yah');
}else if(age<=50){
    console.log('Pensiun om, biar kami yang gantiin');
}else{
    console.log('Sudahkah kamu siap untuk mati?');
}*/

/*const hari = prompt('Isikan Hari').toLowerCase();

if (hari === 'senin'){
    console.log('Selamat Bekerja');
}else if(hari === 'sabtu'){
    console.log('Mau kemana kita?');
}else{
    console.log('Yauda SIH!!!');
}*/

/*const password = prompt('Buat Password')

if(password.length<6){
    console.log('Minimal panjang 6 karakter')

    if(password.includes(' ')){
        console.log('tidak boleh ada spasi')
    }

    
}else{
    console.log('berhasil')
}

*/

//const password = prompt('Buat Pasword');
//if (password.length >= 6 && password.indexOf(' ') === -1){
//    console.log('Valid');
//}else{
//    console.warn('gak benar');
//}

/*const akses = prompt ('Akses Masuk');

if(akses == 'admin' || akses == 'bos'){
    console.log ('akses di terima');
}else{
    console.log ('akses ditolak');
}*/

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

//for
// for (let i=1; i <= 3; i++){
//     console.log(`${i}. Absensi Siswa :`);
//     for(let j = 0; j < student.length; j++){
//         console.log (`      ${student[j]}`);
//     };
// };

/*for of*/
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

/*while
var nilaiAwal = 1

while (nilaiAwal <=10){
    console.log(`nilai awal ${nilaiAwal}x`);
    nilaiAwal++
}
penutup while*/


//scope (function)
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

//function expression
// const hasil = function(a,b){
//     return a*b;
// };
