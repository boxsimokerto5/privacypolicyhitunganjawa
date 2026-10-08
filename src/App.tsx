import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Database,
  Bell,
  Wifi,
  Copy,
  Check,
  Printer,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  FileText,
  EyeOff,
  Radio,
  Calendar,
  Building,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Cloud,
  X
} from 'lucide-react';
import appLogo from './assets/images/hitungan_jawa_icon_1791474236538.jpg';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [copied, setCopied] = useState(false);
  const [showRaw, setShowRaw] = useState(false);
  const [showCfGuide, setShowCfGuide] = useState(false);

  const rawPolicyText = `KEBIJAKAN PRIVASI (PRIVACY POLICY) - HITUNGAN JAWA
==================================================
Terakhir Diperbarui : 8 Oktober 2026
Pengembang          : GecckoCreator
Nama Aplikasi       : Hitungan JAWA (Almanak & Kalender Jawa)
Package Name        : com.hitunganjawa.gecckocreator
Kontak Email        : eccko.w4@gmail.com
Lokasi              : Sby, Indonesia

1. PENDAHULUAN
GecckoCreator ("kami") berkomitmen untuk melindungi privasi pengguna ("Anda") dari aplikasi Hitungan JAWA. Kebijakan Privasi ini menjelaskan bagaimana informasi Anda dikumpulkan, digunakan, dan dilindungi saat menggunakan aplikasi kami.

2. INFORMASI YANG KAMI KUMPULKAN & PENYIMPANAN LOKAL
Aplikasi Hitungan JAWA dirancang dengan prinsip bebas registrasi. Kami TIDAK mengumpulkan data pribadi langsung (seperti nama lengkap, alamat email pribadi, nomor telepon, kontak, atau lokasi GPS).
- Catatan agenda, pengingat selapanan, dan resep usada disimpan 100% secara lokal di perangkat Anda (Room SQLite).
- Izin POST_NOTIFICATIONS dan VIBRATE digunakan untuk pengingat tradisi adat.
- Izin INTERNET dan ACCESS_NETWORK_STATE digunakan untuk pembaruan resmi Google Play dan iklan.

3. LAYANAN PIHAK KETIGA
- Jaringan Iklan: ironSource Mediation, Meta Audience Network, Yandex Mobile Ads (menggunakan AD_ID untuk tayangan iklan non-invasif).
- Pembaruan Aplikasi: Google Play Core Library (In-App Updates) untuk pembaruan resmi dari Google Play Store.

4. KEAMANAN DATA & HAK PENGGUNA
Data Anda aman di ponsel Anda dan dapat dihapus kapan saja melalui aplikasi atau dengan menghapus data aplikasi.

5. KONTAK
Email: eccko.w4@gmail.com
Lokasi: Sby, Indonesia`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawPolicyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Official Top Navigation Bar */}
      <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand & App Info */}
          <div className="flex items-center gap-3">
            <img
              src={appLogo}
              alt="Hitungan JAWA"
              className="w-10 h-10 rounded-xl border border-amber-300 shadow-xs object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight font-serif tracking-tight">
                  Hitungan JAWA
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Resmi
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Pengembang: <span className="font-medium text-slate-700">GecckoCreator</span>
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <div className="inline-flex rounded-lg p-0.5 bg-slate-100 border border-slate-200 text-xs">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-md font-medium transition ${
                  lang === 'id' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md font-medium transition ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Cloudflare Pages Deployment Guide */}
            <button
              onClick={() => setShowCfGuide(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-200 bg-orange-50 hover:bg-orange-100 text-xs font-medium text-orange-800 transition"
              title="Pengaturan Build Cloudflare Pages"
            >
              <Cloud className="w-3.5 h-3.5 text-orange-600" />
              <span>Cloudflare Pages</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 transition"
              title="Cetak atau simpan ke PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Cetak</span>
            </button>

            {/* Copy Policy Text Button */}
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs font-semibold shadow-xs transition"
              title="Salin teks kebijakan untuk Google Play Console"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Cloudflare Pages Deployment Modal */}
      {showCfGuide && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-slate-900 text-base">Pengaturan Cloudflare Pages (Vite)</h3>
              </div>
              <button
                onClick={() => setShowCfGuide(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Proyek ini sudah dikonfigurasi 100% untuk <strong>Cloudflare Pages</strong> menggunakan preset <strong>Vite</strong>. File <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-800">public/_redirects</code> dan <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-800">public/_headers</code> sudah disiapkan otomatis.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500 font-sans">Framework preset:</span>
                <span className="font-bold text-orange-700">Vite</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500 font-sans">Build command:</span>
                <span className="font-bold text-slate-900">npm run build</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500 font-sans">Build output directory:</span>
                <span className="font-bold text-emerald-700">dist</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans">Root directory:</span>
                <span className="font-bold text-slate-900">/</span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Saat Anda mengaitkan Git repository ke Cloudflare Pages dan memilih preset <strong>Vite</strong>, Cloudflare akan otomatis mendeteksi konfigurasi di atas dan build akan sukses seketika.
              </span>
            </div>

            <button
              onClick={() => setShowCfGuide(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition"
            >
              Mengerti & Tutup
            </button>
          </div>
        </div>
      )}

      {/* Main Document Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="no-print flex items-center gap-2 text-xs text-slate-500 mb-6">
          <span className="hover:text-slate-700">Beranda</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="hover:text-slate-700">Kebijakan Privasi</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Hitungan JAWA</span>
        </nav>

        {/* The Formal Web Document Sheet */}
        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-12 space-y-10">
          {/* Document Header */}
          <div className="border-b border-slate-100 pb-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'id' ? 'DOKUMEN HUKUM RESMI' : 'OFFICIAL LEGAL DOCUMENT'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
              KEBIJAKAN PRIVASI (PRIVACY POLICY)
            </h1>
            <p className="text-base sm:text-lg font-semibold text-amber-800">
              HITUNGAN JAWA (Almanak & Kalender Jawa)
            </p>

            {/* Official Metadata Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-slate-500">{lang === 'id' ? 'Terakhir Diperbarui:' : 'Last Updated:'}</span>
                <strong className="text-slate-900">8 Oktober 2026</strong>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <Building className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-slate-500">{lang === 'id' ? 'Pengembang:' : 'Developer:'}</span>
                <strong className="text-slate-900">GecckoCreator</strong>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <Smartphone className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-slate-500">Package Name:</span>
                <code className="font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-900 font-semibold text-xs">
                  com.hitunganjawa.gecckocreator
                </code>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-slate-500">{lang === 'id' ? 'Lokasi:' : 'Location:'}</span>
                <strong className="text-slate-900">Surabaya (Sby), Indonesia</strong>
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-2 text-slate-700 pt-1 border-t border-slate-200/80">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-slate-500">{lang === 'id' ? 'Kontak Email:' : 'Contact Email:'}</span>
                <a href="mailto:eccko.w4@gmail.com" className="text-amber-800 hover:underline font-mono font-semibold">
                  eccko.w4@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Table of Contents Jump Links */}
          <div className="no-print p-4 rounded-xl bg-amber-50/50 border border-amber-200/60">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
              {lang === 'id' ? 'Daftar Isi Kebijakan:' : 'Table of Contents:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
              <a href="#pasal-1" className="hover:text-amber-800 flex items-center gap-1.5">
                <span className="text-amber-700 font-bold">1.</span>
                <span>Pendahuluan</span>
              </a>
              <a href="#pasal-2" className="hover:text-amber-800 flex items-center gap-1.5">
                <span className="text-amber-700 font-bold">2.</span>
                <span>Informasi & Penyimpanan Lokal</span>
              </a>
              <a href="#pasal-3" className="hover:text-amber-800 flex items-center gap-1.5">
                <span className="text-amber-700 font-bold">3.</span>
                <span>Layanan Pihak Ketiga & Iklan</span>
              </a>
              <a href="#pasal-4" className="hover:text-amber-800 flex items-center gap-1.5">
                <span className="text-amber-700 font-bold">4.</span>
                <span>Keamanan Data & Hak Pengguna</span>
              </a>
              <a href="#pasal-5" className="hover:text-amber-800 flex items-center gap-1.5">
                <span className="text-amber-700 font-bold">5.</span>
                <span>Kontak Pengembang</span>
              </a>
            </div>
          </div>

          {/* Section 1 */}
          <section id="pasal-1" className="scroll-mt-20 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
              {lang === 'id' ? '1. PENDAHULUAN' : '1. INTRODUCTION'}
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-slate-700 space-y-3">
              <p>
                {lang === 'id' ? (
                  <>
                    <strong>GecckoCreator</strong> ("<strong>kami</strong>") berkomitmen untuk melindungi privasi pengguna ("<strong>Anda</strong>") dari aplikasi <strong>Hitungan JAWA</strong>. Kebijakan Privasi ini menjelaskan bagaimana informasi Anda dikumpulkan, digunakan, dan dilindungi saat menggunakan aplikasi kami.
                  </>
                ) : (
                  <>
                    <strong>GecckoCreator</strong> ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") is committed to protecting the privacy of users ("<strong>you</strong>") of the <strong>Hitungan JAWA</strong> application. This Privacy Policy explains how your information is collected, used, and protected when using our application.
                  </>
                )}
              </p>
              <p className="text-slate-600 text-sm">
                {lang === 'id'
                  ? 'Aplikasi ini dirancang sebagai sarana pelestarian budaya kalender tradisional Jawa, perhitungan weton, neptu, pasaran, pranoto mongso, dan resep usada dengan kenyamanan dan keamanan digital yang terjamin.'
                  : 'This application is dedicated to Javanese cultural almanac preservation, weton, neptu, pasaran, pranoto mongso calculations, and herbal usada wisdom, operating with full digital transparency and user safety.'}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="pasal-2" className="scroll-mt-20 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
              {lang === 'id'
                ? '2. INFORMASI YANG KAMI KUMPULKAN & PENYIMPANAN LOKAL'
                : '2. INFORMATION WE COLLECT & LOCAL STORAGE'}
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
              <p className="font-semibold text-slate-900">
                {lang === 'id'
                  ? 'Aplikasi Hitungan JAWA dirancang dengan prinsip bebas registrasi. Kami TIDAK mengumpulkan data pribadi langsung (seperti nama lengkap, alamat email pribadi, nomor telepon, kontak, atau lokasi GPS).'
                  : 'The Hitungan JAWA application is built with a strict registration-free model. We DO NOT collect direct personal data (such as full name, personal email address, phone number, contacts list, or GPS location).'}
              </p>

              {/* Data Storage Description */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Database className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'id' ? 'Penyimpanan Data Lokal (Room SQLite)' : 'Local Device Storage (Room SQLite)'}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {lang === 'id'
                    ? 'Catatan agenda, pengingat selapanan, dan resep usada disimpan 100% secara lokal di perangkat Anda (Room SQLite). Data ini tersimpan di memori aman perangkat Anda sendiri dan tidak pernah dikirim ke server luar.'
                    : 'Calendar agenda notes, selapanan cycle reminders, and traditional usada recipes are stored 100% locally on your device using Android Room SQLite. This data remains on your internal device memory and is never transmitted to outside servers.'}
                </p>
              </div>

              {/* Android Permissions Table */}
              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'id' ? 'Daftar Perizinan Aplikasi (App Permissions)' : 'Application Permissions List'}</span>
                </h3>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3">{lang === 'id' ? 'Nama Izin' : 'Permission'}</th>
                        <th className="py-2.5 px-3">{lang === 'id' ? 'Tujuan Penggunaan' : 'Purpose & Usage'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-semibold text-amber-800">POST_NOTIFICATIONS</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {lang === 'id'
                            ? 'Digunakan untuk pengingat tradisi adat, agenda selapanan, dan waktu penanggalan penting.'
                            : 'Used to send alerts for cultural traditions, selapanan cycles, and scheduled dates.'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-semibold text-amber-800">VIBRATE</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {lang === 'id'
                            ? 'Digunakan untuk memberikan getaran pengingat tradisi adat bersamaan dengan notifikasi alarm.'
                            : 'Used to trigger haptic vibration feedback when a cultural reminder or alert triggers.'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-semibold text-amber-800">INTERNET</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {lang === 'id'
                            ? 'Digunakan untuk pembaruan resmi Google Play dan memuat tayangan iklan.'
                            : 'Used for verified Google Play in-app updates and loading third-party advertisements.'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-semibold text-amber-800">ACCESS_NETWORK_STATE</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {lang === 'id'
                            ? 'Digunakan untuk mendeteksi ketersediaan sambungan internet sebelum memuat pembaruan atau iklan.'
                            : 'Used to check network connectivity state prior to update checks or ad delivery.'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="pasal-3" className="scroll-mt-20 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
              {lang === 'id' ? '3. LAYANAN PIHAK KETIGA' : '3. THIRD-PARTY SERVICES'}
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
              <p>
                {lang === 'id'
                  ? 'Aplikasi Hitungan JAWA menggunakan layanan pihak ketiga resmi untuk mendukung keberlangsungan aplikasi serta penyampaian pembaruan:'
                  : 'Hitungan JAWA integrates authorized third-party services to support ongoing maintenance and application delivery:'}
              </p>

              {/* Jaringan Iklan */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Radio className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'id' ? 'Jaringan Iklan (Advertising Networks)' : 'Advertising Networks'}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {lang === 'id'
                    ? 'ironSource Mediation, Meta Audience Network, Yandex Mobile Ads (menggunakan AD_ID / Google Advertising ID untuk tayangan iklan non-invasif).'
                    : 'ironSource Mediation, Meta Audience Network, and Yandex Mobile Ads (utilizing AD_ID / Google Advertising ID for non-invasive advertisement serving).'}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-700 hover:text-amber-800"
                  >
                    <span>ironSource Policy</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-700 hover:text-amber-800"
                  >
                    <span>Meta Policy</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://yandex.com/legal/confidential/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-700 hover:text-amber-800"
                  >
                    <span>Yandex Policy</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Pembaruan Aplikasi */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Wifi className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'id' ? 'Pembaruan Aplikasi (In-App Updates)' : 'App Updates (In-App Updates)'}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {lang === 'id'
                    ? 'Google Play Core Library (In-App Updates) untuk pembaruan resmi dari Google Play Store.'
                    : 'Google Play Core Library (In-App Updates) to deliver verified, official updates securely from the Google Play Store.'}
                </p>
                <div className="pt-1">
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-800 hover:underline font-medium"
                  >
                    <span>Kebijakan Privasi Google Play</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="pasal-4" className="scroll-mt-20 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
              {lang === 'id' ? '4. KEAMANAN DATA & HAK PENGGUNA' : '4. DATA SECURITY & USER RIGHTS'}
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
              <p className="font-semibold text-slate-900">
                {lang === 'id'
                  ? 'Data Anda aman di ponsel Anda dan dapat dihapus kapan saja melalui aplikasi atau dengan menghapus data aplikasi.'
                  : 'Your data is securely kept on your mobile device and can be deleted at any time through the application or by clearing app storage.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'id' ? 'Melalui Menu Aplikasi' : 'Inside the App'}</span>
                  </strong>
                  <p className="text-slate-600">
                    {lang === 'id'
                      ? 'Anda dapat menghapus agenda atau catatan individu langsung di dalam menu yang tersedia.'
                      : 'You can remove single agendas, notes, or reminder items directly from the app interface.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <strong className="text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'id' ? 'Hapus Data Aplikasi Android' : 'Clear App Data'}</span>
                  </strong>
                  <p className="text-slate-600">
                    {lang === 'id'
                      ? 'Melalui Pengaturan Android > Aplikasi > Hitungan JAWA > Penyimpanan > "Hapus Data" untuk menghapus seluruh database lokal secara instan.'
                      : 'Via Android Settings > Apps > Hitungan JAWA > Storage > "Clear Data" to immediately wipe all local database files.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="pasal-5" className="scroll-mt-20 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
              {lang === 'id' ? '5. KONTAK' : '5. CONTACT INFORMATION'}
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-slate-700 space-y-3">
              <p>
                {lang === 'id'
                  ? 'Jika Anda memiliki pertanyaan atau permohonan informasi terkait Kebijakan Privasi ini, silakan hubungi pengembang melalui:'
                  : 'If you have any questions or inquiries concerning this Privacy Policy, please contact the developer via:'}
              </p>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Pengembang:</span>
                  <span className="font-bold text-slate-900">GecckoCreator</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Email Kontak:</span>
                  <a href="mailto:eccko.w4@gmail.com" className="font-mono text-amber-800 font-semibold hover:underline">
                    eccko.w4@gmail.com
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">Lokasi:</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Surabaya (Sby), Indonesia</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Toggle Raw Text Section */}
          <div className="no-print pt-6 border-t border-slate-100">
            <button
              onClick={() => setShowRaw(!showRaw)}
              className="text-xs text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>{showRaw ? 'Sembunyikan Teks Mentah (Raw)' : 'Lihat Teks Mentah Kebijakan Privasi'}</span>
            </button>

            {showRaw && (
              <div className="mt-3 p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {rawPolicyText}
              </div>
            )}
          </div>
        </article>

        {/* Google Play Data Safety Compliance Card */}
        <section className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-base font-serif">
              {lang === 'id' ? 'Pernyataan Keamanan Data Google Play' : 'Google Play Data Safety Declaration'}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Pengumpulan Data:</span>
              <p className="text-slate-600">Tidak ada data identitas pengguna yang dikumpulkan (Zero Personal Data).</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Berbagi Data:</span>
              <p className="text-slate-600">Tidak ada pembagian data pribadi ke pihak ketiga.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Penyimpanan:</span>
              <p className="text-slate-600">100% lokal pada database internal ponsel (Room SQLite).</p>
            </div>
          </div>
        </section>
      </main>

      {/* Official Web Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-800">
            Hitungan JAWA (Almanak & Kalender Jawa) — Dikembangkan oleh GecckoCreator
          </p>
          <p>
            Dokumen Kebijakan Privasi Resmi • Sby, Indonesia • Kontak:{' '}
            <a href="mailto:eccko.w4@gmail.com" className="text-amber-800 hover:underline">
              eccko.w4@gmail.com
            </a>
          </p>
          <p className="text-slate-400 text-[11px] pt-2">
            © {new Date().getFullYear()} GecckoCreator. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </footer>
    </div>
  );
}
