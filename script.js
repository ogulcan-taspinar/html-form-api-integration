document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
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