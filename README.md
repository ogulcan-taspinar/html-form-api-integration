# Kullanıcı Kayıt Formu Projesi

Bu proje, RESTful API ile kullanıcı kaydı oluşturmak için tasarlanmış bir HTML arayüzü içerir. Ayrıca bonus olarak Outlook eklentisi de mevcuttur.

## Dosya Yapısı

### Ana Proje (Web Sayfası)
- `index.html` - Ana HTML sayfası
- `script.js` - JavaScript kodu
- `style.css` - CSS stilleri

### Outlook Eklentisi (Bonus)
- `manifest.xml` - Outlook eklenti tanımı
- `outlook.html` - Outlook'a özel HTML sayfası
- `outlook-script.js` - Outlook API'si ile entegre JavaScript
- `assets/` - Icon dosyaları klasörü

## Nasıl Çalıştırılır

### Web Sayfası
1. Live Server veya herhangi bir web sunucusu ile `index.html` dosyasını açın
2. "Adınız" ve "Mesleğiniz" alanlarını doldurun
3. "Gönder" butonuna tıklayın
4. Sonuç ekranda görünecektir

### Outlook Eklentisi (Bonus)
1. Outlook Desktop (Windows) veya Outlook Web App açın
2. Eklenti geliştirme modunu etkinleştirin
3. `manifest.xml` dosyasını Outlook'a yükleyin
4. Eklenti Outlook ribbon'ında "Rigosis Tools" altında görünecektir

## Teknik Detaylar

### API Entegrasyonu
- **Endpoint:** https://reqres.in/api/users
- **Method:** POST
- **Request Body:** `{"name": "...", "job": "..."}`
- **Response:** ID ile birlikte kayıt bilgileri

### Özellikler
- ✅ Responsive tasarım
- ✅ Form validasyonu
- ✅ Loading durumu gösterimi
- ✅ Hata yönetimi
- ✅ Accessibility (autocomplete)
- ✅ Outlook eklentisi desteği

## Kullanılan Teknolojiler
- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- Office.js (Outlook eklentisi için)

## Proje Gereksinimleri
✅ HTML arayüz ile 2 alan: "Adınız" ve "Mesleğiniz"
✅ "Gönder" butonu
✅ RESTful API entegrasyonu
✅ Yanıt ID'si ile başarı mesajı
✅ Bonus: Outlook eklentisi

## Geliştirici
Oğulcan Taşpınar - Rigosis Project Assignment #1
