console.log("========== GÖREV 1: FONKSİYONLAR ==========");


function kareAl(sayi) {
    return sayi * sayi;
}

console.log("5'in karesi:", kareAl(5));


function faktoriyel(sayi) {
    let sonuc = 1;

    for(let i = 1; i <= sayi; i++) {
        sonuc *= i;
    }

    return sonuc;
}

console.log("5! =", faktoriyel(5));


function ciftMi(sayi) {
    return sayi % 2 === 0;
}

console.log("4 çift sayidir:", ciftMi(4));



console.log("\n========== GÖREV 2: ARROW FUNCTIONS ==========");

const toplama = (a,b) => a + b;

const carpma = (a,b) => a * b;

const buyuklukKontrol = (sayi1,sayi2) =>
    sayi1 > sayi2 ? sayi1 : sayi2;

console.log("Toplama:", toplama(8,12));
console.log("Çarpma:", carpma(6,7));
console.log("Büyük sayi:", buyuklukKontrol(15,8));



console.log("\n========== GÖREV 3: MAP ve FILTER ==========");

const sayilar = [3,7,12,5,8,21,4,9,15,6];

// 3.1
const ucKati = sayilar.map(sayi => sayi * 3);
console.log("3 katlari:", ucKati);

// 3.2
const ondanBuyuk = sayilar.filter(sayi => sayi > 10);
console.log("10'dan büyükler:", ondanBuyuk);

// 3.3
const tekSayilar = sayilar.filter(sayi => sayi % 2 !== 0);
console.log("Tek sayilar:", tekSayilar);



console.log("\n========== GÖREV 4: REDUCE ==========");

// 4.1 Toplam
const toplam = sayilar.reduce((toplam,sayi) => toplam + sayi, 0);
console.log("Toplam:", toplam);

// 4.2 En büyük
const enBuyuk = sayilar.reduce((a,b) => a > b ? a : b);
console.log("En büyük sayi:", enBuyuk);

// 4.3 En küçük
const enKucuk = sayilar.reduce((a,b) => a < b ? a : b);
console.log("En küçük sayi:", enKucuk);



console.log("\n========== GÖREV 5: OBJECT ve JSON ==========");



const kitap = {
    baslik: "Sefiller",
    yazar: "Victor Hugo",
    yil: 1862,
    sayfaSayisi: 1248
};

console.log("Kitap bilgileri:");

for(let ozellik in kitap) {
    console.log(ozellik + ":", kitap[ozellik]);
}


const ogrenci = {
    ad: "Ayşe",
    soyad: "Demir",
    numara: 2021001234,
    dersler: ["Matematik","Fizik","Programlama"]
};

const jsonVeri = JSON.stringify(ogrenci);

console.log("JSON String:");
console.log(jsonVeri);

const tekrarObje = JSON.parse(jsonVeri);

console.log("Öğrenci adi:");
console.log(tekrarObje.ad);



console.log("\n========== GÖREV 6: CLASS ==========");

class Kitap {

    constructor(baslik,yazar,yil,fiyat) {
        this.baslik = baslik;
        this.yazar = yazar;
        this.yil = yil;
        this.fiyat = fiyat;
    }

    bilgiVer() {
        console.log(
            `Başlik: ${this.baslik}, Yazar: ${this.yazar}, Yıl: ${this.yil}`
        );
    }

    fiyatGuncelle(yeniFiyat) {
        this.fiyat = yeniFiyat;
    }

    indirimUygula(yuzde) {
        this.fiyat = this.fiyat - (this.fiyat * yuzde / 100);
    }

}

const kitap1 = new Kitap(
    "Suç ve Ceza",
    "Dostoyevski",
    1866,
    120
);

const kitap2 = new Kitap(
    "Yüzüklerin Efendisi",
    "J.R.R. Tolkien",
    1954,
    180
);

const kitap3 = new Kitap(
    "Hayvan Çiftliği",
    "George Orwell",
    1945,
    90
);

kitap1.bilgiVer();
kitap2.bilgiVer();
kitap3.bilgiVer();

console.log("\n%10 İndirim Sonrası:");

kitap1.indirimUygula(10);
kitap2.indirimUygula(10);
kitap3.indirimUygula(10);

console.log(kitap1.baslik + ":", kitap1.fiyat + " TL");
console.log(kitap2.baslik + ":", kitap2.fiyat + " TL");
console.log(kitap3.baslik + ":", kitap3.fiyat + " TL");



console.log("\n========== GÖREV 7: DÖNGÜLER ==========");



console.log("Yildiz Deseni:");

for(let i = 1; i <= 5; i++) {

    let satir = "";

    for(let j = 1; j <= i; j++) {
        satir += "* ";
    }

    console.log(satir);
}



const numbers = [5,12,8,23,7,31,4,19];

let index = 0;
let bulunanSayi = null;

while(index < numbers.length) {

    if(numbers[index] > 20) {
        bulunanSayi = numbers[index];
        break;
    }

    index++;
}

console.log("20'den büyük ilk sayi:", bulunanSayi);