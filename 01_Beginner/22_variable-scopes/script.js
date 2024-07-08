let globalVar = 'I am a global variable!'; // Global scope: Bu değişken, tüm kod boyunca herhangi bir yerden erişilebilir.

// globalFunction fonksiyonu, globalVar değişkenini kullanarak HTML içeriğini günceller.
function globalFunction() {
    document.getElementById('output').innerHTML = globalVar; // Global değişken kullanımı.
}

// localFunction fonksiyonu, kendi yerel değişkenini tanımlar ve HTML içeriğini bu yerel değişkenle günceller.
function localFunction() {
    let localVar = 'I am a local variable!'; // Local scope: Bu değişken sadece localFunction içinde kullanılabilir.
    document.getElementById('output').innerHTML = localVar; // Yerel değişken kullanımı.
}

// nestedFunction fonksiyonu, iç içe geçmiş fonksiyonlar ve değişken kapsamını gösterir.
function nestedFunction() {
    let outerVar = 'I am an outer variable!'; // Bu değişken, nestedFunction içinde yerel olarak tanımlanmıştır.
    
    // innerFunction fonksiyonu, outerVar ve innerVar değişkenlerini kullanarak HTML içeriğini günceller.
    function innerFunction() {
        let innerVar = 'I am an inner variable!'; // Bu değişken, sadece innerFunction içinde kullanılabilir.
        document.getElementById('output').innerHTML = `${outerVar} and ${innerVar}`; // Hem outerVar hem de innerVar kullanımı.
    }
    
    innerFunction(); // innerFunction çağrısı, nestedFunction içinde yapılır.
}
