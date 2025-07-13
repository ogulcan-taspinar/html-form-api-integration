// Test mesajı
console.log("OUTLOOK-SCRIPT.JS YÜKLENDI!");

// Sayfa yüklendiğinde formu başlat
window.addEventListener('load', function() {
    console.log("Sayfa yüklendi, form başlatılıyor...");
    initializeForm();
});

function initializeForm() {
    console.log("initializeForm çalışıyor...");
    // Form event listener'ını ekle
    const form = document.getElementById('userForm');
    if (form) {
        console.log("Form bulundu, event listener ekleniyor...");
        form.addEventListener('submit', function(e) {
            console.log("Form gönderildi!");
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const job = document.getElementById('job').value;
            console.log("Veriler:", name, job);
            
            // Kullanıcıya işlem başladığını göster
            document.getElementById('result').innerHTML = 'Kayıt gönderiliyor...';
            
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    job: job
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('API Yanıtı:', data);
                document.getElementById('result').innerHTML =
                    `Sayın ${name}, ${data.id} numaralı kaydınız oluşturulmuştur.`;
            })
            .catch(error => {
                console.error('Hata:', error);
                document.getElementById('result').innerHTML =
                    'Kayıt oluşturulurken hata oluştu. Lütfen tekrar deneyin.<br><br>Detay: ' + error;
            });
        });
    } else {
        console.error("Form bulunamadı!");
    }
}
