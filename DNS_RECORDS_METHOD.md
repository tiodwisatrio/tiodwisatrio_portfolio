# 🎯 CARA ALTERNATIF: DNS Records (LEBIH CEPAT!)

Karena nameserver method membutuhkan waktu propagasi yang lama, gunakan **DNS Records method** untuk hasil lebih cepat (5-15 menit).

## 📍 Lokasi Zone Editor di Hostinger

Berdasarkan screenshot Anda:

1. **Anda saat ini di tab "DNS/Nameserver"** (tab pertama dengan ikon DNS)
2. **Klik tab "DNS record"** (tab kedua) untuk masuk ke Zone Editor
3. Di sana Anda akan melihat daftar DNS records (A, CNAME, MX, TXT, dll)

## 🔧 Langkah-Langkah DNS Records Method

### Step 1: Buka DNS Records Tab

```
Sidebar kiri → DNS/Nameserver menu
└── Tab "DNS/Nameserver" (tab 1) ← Anda di sini sekarang
└── Tab "DNS record" (tab 2) ← KLIK TAB INI!
```

### Step 2: Hapus Records Lama (Jika Ada)

Di Zone Editor, cari dan **HAPUS** records berikut jika ada:

- ❌ A record dengan name `@` atau kosong
- ❌ A record dengan name `www`
- ❌ CNAME dengan name `www`

### Step 3: Tambah 2 Records Baru

#### A Record (Root Domain)

```
Type: A
Name: @ (atau kosong)
Points to: 76.76.21.21
TTL: 14400 (atau default)
```

#### CNAME Record (WWW Subdomain)

```
Type: CNAME
Name: www
Points to: cname.vercel-dns.com
TTL: 14400 (atau default)
```

### Step 4: Save & Wait

1. Klik tombol **"Save"** atau **"Add Record"**
2. Tunggu **5-15 menit** (jauh lebih cepat dari nameserver!)
3. DNS akan propagasi otomatis

## ✅ Verifikasi Setelah 5-15 Menit

### 1. Test DNS di PowerShell

```powershell
# Test root domain
nslookup tiodwisatrio.com

# Test www subdomain
nslookup www.tiodwisatrio.com
```

**Expected Result:**

```
tiodwisatrio.com
Address: 76.76.21.21

www.tiodwisatrio.com
canonical name = cname.vercel-dns.com
```

### 2. Refresh Vercel Dashboard

```
1. Buka https://vercel.com/tiodwisatrio/tiodwisatrio-portfolio/settings/domains
2. Klik "Refresh" pada tiodwisatrio.com
3. Klik "Refresh" pada www.tiodwisatrio.com
4. Wait 5 minutes untuk SSL certificate generation
```

### 3. Test Website

```
1. Buka https://tiodwisatrio.com
2. Buka https://www.tiodwisatrio.com
3. Should show your portfolio! 🎉
```

## 🆚 DNS Records vs Nameservers

| Method          | Propagation Time         | Difficulty | Recommended      |
| --------------- | ------------------------ | ---------- | ---------------- |
| **DNS Records** | ⚡ 5-15 minutes          | 😊 Easy    | ✅ **USE THIS!** |
| Nameservers     | 🐌 30 minutes - 48 hours | 😐 Medium  | ⚠️ Slower        |

## 🎯 Kenapa DNS Records Lebih Cepat?

- **Nameservers**: Mengubah seluruh kontrol DNS domain → butuh waktu propagasi global
- **DNS Records**: Hanya mengubah specific records → propagasi lokal lebih cepat

## 📸 Screenshot Guidance

Di tab "DNS record", Anda akan melihat table seperti ini:

```
┌─────────┬──────────┬─────────────────────────┬─────┐
│ Type    │ Name     │ Points to               │ TTL │
├─────────┼──────────┼─────────────────────────┼─────┤
│ A       │ @        │ 76.76.21.21             │ ... │
│ CNAME   │ www      │ cname.vercel-dns.com    │ ... │
│ ...     │ ...      │ ...                     │ ... │
└─────────┴──────────┴─────────────────────────┴─────┘
```

**Tombol "Add Record" atau "+" untuk menambah record baru**

## ⚠️ PENTING: Jangan Gabungkan 2 Method!

Pilih SALAH SATU method saja:

- ✅ **Option A**: DNS Records method (A + CNAME) ← **RECOMMENDED**
- ❌ **Option B**: Nameservers method (ns1.vercel-dns.com)

**JANGAN gunakan keduanya sekaligus!** Akan konflik.

## 🆘 Troubleshooting

### Problem: Tab "DNS record" tidak ada

**Solution**:

- Cek apakah Anda sudah login ke Hostinger
- Domain harus aktif dan tidak expired
- Beberapa hosting plan mungkin membatasi akses DNS

### Problem: Tidak bisa edit DNS records

**Solution**:

- Pastikan nameservers masih menggunakan Hostinger (ns1.dns-parking.com)
- Jika sudah diganti ke Vercel nameservers, DNS records tidak bisa diedit
- Kembalikan ke Hostinger nameservers dulu, baru edit DNS records

### Problem: Setelah 15 menit masih belum working

**Solution**:

```powershell
# Clear DNS cache
ipconfig /flushdns

# Test lagi
nslookup tiodwisatrio.com
```

## 📞 Next Steps

Setelah Anda klik tab "DNS record":

1. **Screenshot** isi Zone Editor Anda
2. Share ke saya untuk guidance lebih detail
3. Saya akan bantu verify records sudah benar

---

💡 **TIP**: DNS Records method adalah cara tercepat untuk deploy website ke custom domain!
