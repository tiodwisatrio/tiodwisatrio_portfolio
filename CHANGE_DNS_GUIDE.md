# 🌐 Cara Ganti DNS Lokal Windows ke OpenDNS/Google DNS

## 🎯 Tujuan

Mengganti DNS resolver lokal ke server public yang sudah propagasi nameservers Vercel, sehingga bisa akses `tiodwisatrio.com` tanpa menunggu ISP DNS propagasi.

## 🔧 Method 1: Via Settings (Recommended)

### Step 1: Buka Network Settings

```
1. Tekan Windows Key + I (Settings)
2. Klik "Network & Internet"
3. Klik "Ethernet" (jika pakai kabel) atau "Wi-Fi" (jika wireless)
4. Klik nama koneksi Anda (contoh: "Ethernet" atau "Wi-Fi")
```

### Step 2: Edit DNS Settings

```
5. Scroll ke bawah, klik "Edit" di bagian "DNS server assignment"
6. Ganti dari "Automatic (DHCP)" ke "Manual"
7. Toggle "IPv4" ke ON
```

### Step 3: Masukkan DNS Servers

**Pilih salah satu:**

#### Option A: OpenDNS (Sudah propagasi ke Vercel ✅)

```
Preferred DNS:  208.67.222.222
Alternate DNS:  208.67.220.220
```

#### Option B: Google DNS (Fastest & Reliable)

```
Preferred DNS:  8.8.8.8
Alternate DNS:  8.8.4.4
```

#### Option C: Cloudflare DNS (Privacy-focused)

```
Preferred DNS:  1.1.1.1
Alternate DNS:  1.0.0.1
```

### Step 4: Save & Test

```
8. Klik "Save"
9. Close Settings
10. Buka PowerShell dan jalankan:
```

```powershell
ipconfig /flushdns
nslookup tiodwisatrio.com
```

---

## 🔧 Method 2: Via PowerShell (Faster)

### Check Interface Name

```powershell
Get-NetAdapter | Select-Object Name, Status, LinkSpeed
```

Output example:

```
Name                Status       LinkSpeed
----                ------       ---------
Ethernet            Up           1 Gbps
Wi-Fi               Disconnected 0 bps
```

### Set OpenDNS (Already propagated to Vercel)

```powershell
# Ganti "Ethernet" dengan nama interface Anda
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("208.67.222.222","208.67.220.220")

# Flush DNS
ipconfig /flushdns

# Test
nslookup tiodwisatrio.com
```

### Set Google DNS (Alternative)

```powershell
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("8.8.8.8","8.8.4.4")
ipconfig /flushdns
nslookup tiodwisatrio.com
```

### Set Cloudflare DNS (Alternative)

```powershell
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("1.1.1.1","1.0.0.1")
ipconfig /flushdns
nslookup tiodwisatrio.com
```

---

## ✅ Verification

### Expected Result After DNS Change:

```powershell
nslookup tiodwisatrio.com
```

**Before (ISP DNS):**

```
Server:  your-isp-dns
Address:  xxx.xxx.xxx.xxx

tiodwisatrio.com        nameserver = ns1.dns-parking.com ❌
```

**After (OpenDNS/Google/Cloudflare):**

```
Server:  dns.google (or resolver1.opendns.com)
Address:  8.8.8.8 (or 208.67.222.222)

tiodwisatrio.com        nameserver = ns1.vercel-dns.com ✅
tiodwisatrio.com        nameserver = ns2.vercel-dns.com ✅
```

---

## 🌐 Test Website

After DNS change, test website immediately:

```powershell
# Method 1: Browser
start https://tiodwisatrio.com

# Method 2: Check IP resolution
nslookup tiodwisatrio.com

# Method 3: Check with curl
curl -I https://tiodwisatrio.com
```

**Expected**: Website should show your portfolio! 🎉

---

## 🔄 Restore to Default DNS (When Done)

### Via PowerShell:

```powershell
# Get interface name first
Get-NetAdapter | Select-Object Name, Status

# Reset to automatic (DHCP)
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ResetServerAddresses

# Flush DNS
ipconfig /flushdns
```

### Via Settings:

```
1. Settings → Network & Internet → Ethernet/Wi-Fi
2. Click "Edit" on DNS server assignment
3. Change "Manual" back to "Automatic (DHCP)"
4. Save
```

---

## 📊 DNS Server Comparison

| DNS Provider    | Primary        | Secondary      | Speed   | Privacy | Propagated to Vercel? |
| --------------- | -------------- | -------------- | ------- | ------- | --------------------- |
| **OpenDNS**     | 208.67.222.222 | 208.67.220.220 | Fast    | Medium  | ✅ **YES**            |
| **Google DNS**  | 8.8.8.8        | 8.8.4.4        | Fastest | Low     | 🟡 Likely             |
| **Cloudflare**  | 1.1.1.1        | 1.0.0.1        | Fast    | High    | 🟡 Likely             |
| **ISP Default** | Auto           | Auto           | Medium  | High    | ❌ Not yet            |

---

## ⚠️ Important Notes

1. **This is temporary solution** - Untuk testing saja
2. **ISP DNS akan propagasi sendiri** - Dalam 15-60 menit
3. **Tidak perlu permanent** - Setelah ISP DNS propagasi, bisa dikembalikan ke automatic
4. **Aman untuk digunakan** - Public DNS servers sangat reliable

---

## 🎯 Recommended Workflow

1. ✅ **Ganti DNS ke OpenDNS** (208.67.222.222) - Already propagated
2. ✅ **Test website** - https://tiodwisatrio.com
3. ✅ **Verify everything works** - SSL, images, links
4. ⏰ **Tunggu 1-2 jam** - ISP DNS akan propagasi
5. 🔄 **Kembalikan ke automatic** - Setelah ISP DNS sudah OK

---

## 💡 Pro Tips

- **Use OpenDNS for now** - Already confirmed propagated to Vercel
- **Keep Google DNS as backup** - Very reliable and fast
- **Don't forget to flush DNS** - After every change
- **Test with both domains** - tiodwisatrio.com AND www.tiodwisatrio.com

---

## 🆘 Troubleshooting

### Problem: "Access Denied" when running PowerShell command

**Solution**: Run PowerShell as Administrator

```
Right-click PowerShell → "Run as Administrator"
```

### Problem: Cannot find network adapter name

**Solution**:

```powershell
Get-NetAdapter | Format-Table Name, Status, InterfaceDescription
```

Use the exact "Name" value (case-sensitive)

### Problem: Website still shows Hostinger page

**Solution**:

```powershell
# Clear all caches
ipconfig /flushdns
ipconfig /release
ipconfig /renew

# Close all browsers
# Reopen browser in Incognito/Private mode
start chrome --incognito https://tiodwisatrio.com
```

### Problem: SSL certificate error

**Solution**: Wait 5 more minutes - Vercel is generating SSL certificate

---

## 🚀 Quick Command for Testing

Copy-paste this complete command:

```powershell
# Full DNS switch and test
Get-NetAdapter | Select-Object Name, Status; Write-Host "`nCopy interface Name and use in next command" -ForegroundColor Yellow
```

Then:

```powershell
# Replace "Ethernet" with your interface name
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("208.67.222.222","208.67.220.220"); ipconfig /flushdns; Write-Host "`n✅ DNS changed to OpenDNS!`n" -ForegroundColor Green; nslookup tiodwisatrio.com
```
