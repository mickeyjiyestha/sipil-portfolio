"use client";

import {
  ArrowRight,
  Building2,
  Home,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ArchitectWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" />
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                UMAQ DESIGN
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Layanan
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Tentang
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Kontak
              </Link>
            </div>
            <a href="#contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2">
                Konsultasi Gratis
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-12 sm:pt-16 sm:pb-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan
                  <span className="block text-gray-600">
                    Struktur Bangunan yang Aman dan Terpercaya
                  </span>
                  <span className="block">Anda</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Saya membantu mewujudkan bangunan yang kokoh dengan
                  perhitungan struktur yang tepat dan pengawasan konstruksi yang
                  profesional.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 sm:px-8 text-sm sm:text-base"
                  >
                    Mulai Proyek
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-3 sm:px-8 bg-transparent text-sm sm:text-base"
                  >
                    Lihat Portfolio
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Proyek Selesai
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Kepuasan Klien
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/image-home.png"
                  alt="Modern Architecture"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      Award Winner
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Best Design 2024
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Solusi personal untuk kebutuhan arsitektur dan desain Anda dengan
              pendekatan yang lebih fleksibel dan terjangkau
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service cards with better mobile spacing */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <Home className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Perhitungan Struktur
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Perhitungan struktur bangunan yang aman dan efisien sesuai
                  standar SNI dan peraturan bangunan.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <li>• Analisis struktur beton</li>
                  <li>• Perhitungan pondasi</li>
                  <li>• Gambar struktur detail</li>
                  <li>• Spesifikasi material</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Building2 className="h-12 w-12 text-gray-900 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pengawasan Konstruksi
                </h3>
                <p className="text-gray-600 mb-6">
                  Pengawasan pelaksanaan konstruksi untuk memastikan kualitas
                  dan keamanan bangunan.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quality control material</li>
                  <li>• Supervisi pelaksanaan</li>
                  <li>• Progress monitoring</li>
                  <li>• Safety management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-gray-900 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Studi Kelayakan
                </h3>
                <p className="text-gray-600 mb-6">
                  Analisis kelayakan teknis dan ekonomis untuk proyek konstruksi
                  Anda.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Analisis tanah dan lokasi</li>
                  <li>• Estimasi biaya konstruksi</li>
                  <li>• Penjadwalan proyek</li>
                  <li>• Risk assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Portfolio Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Beberapa proyek yang telah saya kerjakan dengan dedikasi dan
              perhatian detail
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Analisis Struktur Rumah 2 Lantai",
                location: "Denpasar, Bali",
                category: "Structural Analysis",
                img: "dummy1.png",
              },
              {
                title: "Pengawasan Konstruksi Gedung",
                location: "Ubud, Bali",
                category: "Construction Supervision",
                img: "dummy1.png",
              },
              {
                title: "Perkuatan Struktur Bangunan Lama",
                location: "Sanur, Bali",
                category: "Structural Strengthening",
                img: "dummy1.png",
              },
              {
                title: "Desain Pondasi Tanah Lunak",
                location: "Canggu, Bali",
                category: "Foundation Design",
                img: "dummy1.png",
              },
              {
                title: "Quality Control Beton Ready Mix",
                location: "Jimbaran, Bali",
                category: "Quality Control",
                img: "dummy1.png",
              },
              {
                title: "Struktur Jembatan Penyeberangan",
                location: "Tabanan, Bali",
                category: "Infrastructure",
                img: "dummy1.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={`/${project.img}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 sm:px-8 bg-transparent text-sm sm:text-base"
            >
              Lihat Semua Proyek
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Tentang Saya
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Saya adalah seorang civil engineer dengan fokus pada
                  perhitungan struktur dan pengawasan konstruksi. Dengan
                  pengalaman di berbagai proyek di Bali, saya berkomitmen
                  memberikan layanan teknis yang akurat dan terpercaya untuk
                  memastikan keamanan struktur bangunan Anda.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Berlokasi di Bali, saya memahami karakteristik tanah dan
                  kondisi iklim lokal yang mempengaruhi desain struktur. Setiap
                  proyek ditangani dengan perhitungan yang teliti dan pengawasan
                  yang ketat sesuai standar SNI.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Visi Saya
                  </h4>
                  <p className="text-gray-600">
                    Memastikan setiap struktur bangunan aman dan berkualitas
                    dengan perhitungan yang akurat dan pengawasan yang ketat.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Misi Saya
                  </h4>
                  <p className="text-gray-600">
                    Memberikan layanan teknik sipil yang profesional, akurat,
                    dan sesuai dengan standar keselamatan konstruksi.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=480&text=Architect+Team"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mari Berdiskusi
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Butuh konsultasi struktur atau pengawasan konstruksi? Mari kita
              diskusikan kebutuhan teknis proyek Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Telepon</div>
                      <div className="text-gray-600">+62 898-0753-6992</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">gungwahy@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Alamat</div>
                      <div className="text-gray-600">
                        Kampial, Nusadua, Bali
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Jam Operasional
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  Konsultasi Gratis
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Depan
                      </label>
                      <Input placeholder="John" id="firstName" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Belakang
                      </label>
                      <Input placeholder="Doe" id="lastName" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <Input placeholder="+62 812 3456 7890" id="phone" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Proyek
                    </label>
                    <select
                      id="projectType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option>Pilih jenis proyek</option>
                      <option>Perhitungan Struktur</option>
                      <option>Pengawasan Konstruksi</option>
                      <option>Studi Kelayakan</option>
                      <option>Konsultasi Teknis</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      placeholder="Ceritakan tentang proyek Anda..."
                      rows={4}
                      id="message"
                    />
                  </div>
                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800 py-3 text-sm sm:text-base"
                    onClick={() => {
                      const firstName =
                        (
                          document.getElementById(
                            "firstName"
                          ) as HTMLInputElement
                        )?.value || "";
                      const lastName =
                        (
                          document.getElementById(
                            "lastName"
                          ) as HTMLInputElement
                        )?.value || "";
                      const email =
                        (document.getElementById("email") as HTMLInputElement)
                          ?.value || "";
                      const phone =
                        (document.getElementById("phone") as HTMLInputElement)
                          ?.value || "";
                      const projectType =
                        (
                          document.getElementById(
                            "projectType"
                          ) as HTMLSelectElement
                        )?.value || "";
                      const message =
                        (
                          document.getElementById(
                            "message"
                          ) as HTMLTextAreaElement
                        )?.value || "";

                      const whatsappMessage = `Halo, saya ${firstName} ${lastName}%0A%0AEmail: ${email}%0ATelepon: ${phone}%0AJenis Proyek: ${projectType}%0A%0APesan:%0A${message}`;

                      window.open(
                        `https://wa.me/6289807536992?text=${whatsappMessage}`,
                        "_blank"
                      );
                    }}
                  >
                    Kirim via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-bold">
                  UMAQ DESIGN
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Studio teknik sipil yang fokus pada perhitungan struktur,
                pengawasan konstruksi, dan konsultasi teknis dengan standar
                keselamatan tinggi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desain Rumah
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bangunan Komersial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Konsultasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Renovasi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tim
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+62 898-0753-6992</li>
                <li>gungwahy@gmail.com</li>
                <li>
                  Kampial, Nusadua
                  <br />
                  Bali, Indonesia
                </li>
                <li>
                  <Link
                    href="https://instagram.com/umaq.design"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    Instagram: @umaq.design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">
              &copy; 2025 UMAQ DESIGN. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
