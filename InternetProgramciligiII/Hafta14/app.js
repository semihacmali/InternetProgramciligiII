/**
 * Fonksiyon Tanımlama;
 * function fonksiyonAdi(Parametre){
 * return -> geri deger dondurmek için
 * }
 * Fonksiyon Çağırma;
 * fonksiyonAdi(Parametre);
 * !Parametresiz Fonksiyonlar
 * 
 */

function fonk1(){
    console.log("Parametresi olmayan fonksiyon örneği");
}

fonk1();


/**
 * ! Parametreli Fonksiyonlar
 * dışarıdan herhangi bir değer alan fonksiyon
 */

let sayi1 = 7;

function fonk2(sayi1){
    console.log("Parametresi : " + sayi1 + " olan fonksiyon örneği");
}
fonk2();


console.log("sayi1 degisken degeri : " + sayi1);

fonk2(sayi1 = 9);

console.log("sayi1 degisken degeri : " + sayi1);

/**
 * ! default(varsayılan deger) degeri olan parametreli fonksiyonlar
 */



function fonk3(sayi2 = 5){
    console.log("Girilen parametre degeri : " + sayi2);
}

fonk3();
fonk3(8);


/**
 * ! return ile geri deger donduren fonksiyonlar
 * ? KDV hesaplama Örneği
 */

function KDVHesapla(tutar, kdvOrani = 18){
    let sonuc = tutar + (tutar * kdvOrani / 100);
    return sonuc;
}

var girilenDeger = Number(prompt("Tutarı Giriniz : "));
console.log(girilenDeger + " Default KDV dahil tutarı : " + KDVHesapla(tutar = girilenDeger));

var girilenDeger = Number(prompt("Tutarı Giriniz : "));
var kdvOrani = Number(prompt("KDV Oranini Giriniz : "));
console.log(girilenDeger  + "  %"+ kdvOrani +  "KDV dahil tutarı : " + KDVHesapla(tutar = girilenDeger, kdvOrani = kdvOrani));

/**
 * !input ile deger alma
 */
function degerOkuma(){
    var gelenDeger = document.getElementById("inputTxt").value;
    faktoriyelHesapla(gelenDeger);
    document.getElementById("outputDeger").innerHTML = ("Girilen Deger :  " + gelenDeger);
    document.getElementById("FaktoriyelSonuc").innerHTML = ("Faktöriyel Sonucu : " + faktoriyelHesapla(gelenDeger));
    document.getElementById("RecursiveFaktoriyelSonuc").innerHTML = ("Recursive Faktöriyel Sonucu : " + recursiveFaktoriyelHesapla(gelenDeger));

}
/**
 * !Fonksiyon icerisinden farkli bir fonksiyon çağırma
 */
function faktoriyelHesapla(sayi){
    let sonuc = 1;
    for(let i = 2; i <= sayi; i++){
        sonuc *=i;
    }
    return sonuc;
}
/**
 * 0! = 1
 * 1! = 1
 */
function recursiveFaktoriyelHesapla(sayi){
    if(sayi <= 1){
        return 1;
    }else{
        return sayi * recursiveFaktoriyelHesapla(--sayi);
    }
}

/**
 * Kombinasyon Hesaplama
 * C(n,r)  = n! / (r! * (n -r)!)
 */

function KombinasyonHesapla(){
    let elemanSayisi = document.getElementById("elemanSayisi").value;
    let rDegeri = document.getElementById("kombinasyonSayisi").value;

    let nFaktoriyel = recursiveFaktoriyelHesapla(elemanSayisi);
    let rFaktoriyel = recursiveFaktoriyelHesapla(rDegeri);
    let nEksiRFaktoriyel = recursiveFaktoriyelHesapla(elemanSayisi - rDegeri);

    let sonuc = nFaktoriyel / (rFaktoriyel * nEksiRFaktoriyel)
    document.getElementById("kombinasyonSonuc").innerHTML = "Kombinasyon Sonucu : " + sonuc;
}