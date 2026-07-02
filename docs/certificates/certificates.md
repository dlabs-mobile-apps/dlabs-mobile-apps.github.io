---
sidebar_position: 1
description: Panduan membuat dan memperbarui certificates Apple Developer
---

# Apple Developer Certificates

Akses melalui [Web Apple Developer](https://developer.apple.com/account/resources/certificates/list).

## Langkah A: Buat Certificate Signing Request (CSR) di Mac

1. Buka aplikasi **Keychain Access** di Mac Anda.
2. Pada menu bar atas, pilih **Keychain Access > Certificate Assistant > Request a Certificate From a Certificate Authority...**
3. Masukkan alamat email Anda dan isi **Common Name** (misal: "Nama Anda Distribution").
4. Pada opsi **Request is**, pilih **Saved to disk**, lalu klik **Continue**.
5. Simpan file `.certSigningRequest` tersebut di desktop Anda.

## Langkah B: Generate Sertifikat Baru di Website Apple

1. Masuk ke halaman **Apple Developer Account**.
2. Masuk ke menu **Certificates, Identifiers & Profiles**.
3. Pada bagian **Certificates**, klik tombol **+** (tambah) di sebelah tulisan Certificates.
4. Pilih jenis sertifikat yang ingin dibuat:
   - **Untuk development:** Pilih **Apple Development** atau **iOS App Development**
   - **Untuk publish/store:** Pilih **Apple Distribution** atau **iOS Distribution** (App Store and Ad Hoc)
5. Klik **Continue**.
6. Klik **Choose File** dan unggah file `.certSigningRequest` yang sudah Anda simpan dari langkah A.
7. Klik **Continue / Generate**.
8. Setelah selesai, klik **Download** untuk mengunduh sertifikat baru Anda (biasanya berformat `.cer`).
9. Klik dua kali (double click) file `.cer` yang diunduh tadi agar otomatis terinstal ke dalam **Keychain Access** Mac Anda.

## Langkah C: Update Provisioning Profile ⚠️ PENTING

1. Setelah sertifikat baru terbuat, Provisioning Profile lama Anda yang terikat dengan sertifikat expired tersebut biasanya akan berstatus **Invalid**. Anda perlu memperbaruinya.

### Opsi 1: Automatic Signing (Tidak disarankan)

2. Jika Anda mencentang **"Automatically manage signing"** di Xcode, cukup buka project Anda. Xcode akan otomatis memperbaiki Provisioning Profile-nya menggunakan sertifikat baru yang baru saja Anda buat.

### Opsi 2: Manual Signing (Kita biasa menggunakan ini)

3. Jika Anda mengelola Provisioning Profile secara manual:
   - Kembali ke web **Apple Developer > Profiles**
   - Klik profile aplikasi Anda yang berstatus **Invalid**, lalu klik **Edit**
   - Pada bagian **Certificates**, centang sertifikat baru yang baru saja Anda buat (pastikan cek tanggal expiry-nya agar tidak salah pilih)
   - Klik **Save**, lalu **Download** profile yang baru tersebut dan pasang kembali ke Xcode Anda