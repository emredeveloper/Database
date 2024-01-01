# JSON Dosyası Alma ve Dosya Adını Yazdırma

Bu basit Python scripti, belirli bir GitHub Raw URL'sinden JSON verisi alır ve dosyanın adını yazdırır.

## Kullanım

1. İlk olarak, [Python](https://www.python.org/downloads/) yükleyin, eğer yüklü değilse.
2. Terminal veya komut istemcisine aşağıdaki komutu yazarak gerekli bağımlılıkları yükleyin:

    ```bash
    pip install requests
    ```
   
3. Kodu bir metin düzenleyicide açın ve `<YOUR_GITHUB_RAW_URL>` kısmını kendi GitHub Raw URL'nizle değiştirin.
4. Terminal veya komut istemcisine aşağıdaki komutu yazarak Python scriptini çalıştırın:

    ```bash
    python json_data_extraction.py
    ```

## Örnek Çıktı

```plaintext
Dosya Adı: db.json

Alınan Veri:
{
  "cities": [
    {
      "id": 1,
      "name": "Istanbul",
      "country": "Turkey",
      "temperature": 25,
      "weather": "Partly Cloudy",
      "humidity": 60
    },
    // Diğer şehirler
  ]
}
