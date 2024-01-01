import requests

# GitHub Raw URL
# kendi json formatındaki verimi alıyorum
raw_url = "https://raw.githubusercontent.com/emredeveloper/Database/main/db.json"

# API İsteği Gönderme
response = requests.get(raw_url)

# Yanıtı Kontrol Etme
if response.status_code == 200:
    # gelen veriyi json formatında döndürüyorum adettendir
    data = response.json()

    # Alınan Veriyi Gösterme
    print("Alınan Veri:")
    print(data)

else:
    print(f"Hata Kodu: {response.status_code}")
    print(f"Hata Mesajı: {response.text}")
