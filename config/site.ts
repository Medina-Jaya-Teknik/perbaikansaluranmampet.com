export interface AreaInfo {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  landmark: string;
  coverageDetail: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  price: string;
  features: string[];
}

export const siteConfig = {
  name: "perbaikansaluranmampet.com",
  brandName: "perbaikansaluranmampet.com",
  legalName: "perbaikansaluranmampet.com - Layanan Saluran Mampet Bandung",
  domain: "https://perbaikansaluranmampet.com",
  phone: "0851-2277-7253",
  phoneRaw: "085122777253",
  whatsappNumber: "6285122777253",
  whatsappMessage: "Halo Teknisi perbaikansaluranmampet.com, saya butuh bantuan perbaikan saluran mampet di Bandung.",
  address: {
    street: "Jl. Baladewa No.114, Pamoyanan, Kec. Cicendo",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40173",
    country: "ID",
    geo: {
      latitude: -6.9175,
      longitude: 107.6191,
    },
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "Rp150.000 - Rp500.000",
  rating: {
    ratingValue: "4.9",
    reviewCount: "194",
    bestRating: "5",
  },
  areas: [
    {
      slug: "bandung",
      name: "Bandung",
      fullName: "Kota Bandung",
      description: "Pusat layanan prioritas perbaikan saluran mampet, wastafel tersumbat, dan sedot pipa kotor seluruh kecamatan di Kota Bandung.",
      landmark: "Alun-Alun Bandung, Gedung Sate, Asia Afrika, Dago, Sukajadi",
      coverageDetail: "Meliputi 30 kecamatan di seluruh Kota Bandung dengan pos teknisi tersebar untuk respon cepat 24 jam.",
    },
    {
      slug: "sukajadi",
      name: "Sukajadi",
      fullName: "Sukajadi, Bandung",
      description: "Jasa perbaikan saluran pipa mampet, WC tersumbat, dan pembersihan pipa air buangan tanpa bongkar keramik area Sukajadi.",
      landmark: "PVJ Mall, Sukajadi Atas, Setiabudi, Sukagalih, Pasteur",
      coverageDetail: "Siaga melayani kawasan perumahan, kos-kosan mahasiswa, ruko kuliner, dan hotel di sepanjang Jl. Sukajadi & Pasteur.",
    },
    {
      slug: "cicendo",
      name: "Cicendo",
      fullName: "Cicendo, Bandung",
      description: "Teknisi ahli saluran mampet Bandung terdekat di kawasan Cicendo. Solusi pipa wastafel, floor drain, dan kloset mampet dalam 1 jam.",
      landmark: "Pamoyanan, Pasirkaliki, Stasiun Bandung, Padjajaran, Pajajaran",
      coverageDetail: "Merupakan pusat pangkalan teknisi utama kami di Jl. Baladewa Pamoyanan, menjamin respon kedatangan tercepat 15-30 menit.",
    },
    {
      slug: "buah-batu",
      name: "Buah Batu",
      fullName: "Buah Batu, Bandung",
      description: "Layanan pelancaran saluran pipa air mampet dan sedot lemak grease trap restoran/kafe di koridor Buah Batu & Batununggal.",
      landmark: "Terusan Buah Batu, Batununggal Indah, Pasar Kordon, Cijawura",
      coverageDetail: "Sering menangani sumbatan minyak lemak dapur restoran dan instalasi pipa perumahan komplek Buah Batu.",
    },
    {
      slug: "antapani",
      name: "Antapani",
      fullName: "Antapani, Bandung",
      description: "Spesialis penanganan WC mampet dan saluran got tersumbat tanpa bobok lantai untuk kawasan perumahan padat Antapani.",
      landmark: "Gasibu Antapani, Jl. Terusan Jakarta, Purwakarta, Sindangsari",
      coverageDetail: "Fokus penanganan saluran air buangan rumah tangga, talang air hujan, dan kloset mampet di komplek hunian Antapani.",
    },
    {
      slug: "arcamanik",
      name: "Arcamanik",
      fullName: "Arcamanik, Bandung",
      description: "Jasa pelancar pipa air buangan dan pembersihan jalur drainase mampet bergaransi di Arcamanik dan Sukamiskin.",
      landmark: "Sport Jabar Arcamanik, Cisaranten Kulon/Endah, Sukamiskin",
      coverageDetail: "Melayani perumahan klaster baru maupun rumah lama dengan pipa tersumbat lemak, sisa makanan, atau endapan pasir.",
    },
    {
      slug: "dago",
      name: "Dago",
      fullName: "Dago / Coblong, Bandung",
      description: "Perbaikan saluran mampet tanpa bongkar untuk kosan, kafe, resto, dan hunian di kawasan Dago Atas, Dago Bawah, & Dipatiukur.",
      landmark: "Simpang Dago, ITB, UNPAD Dipatiukur, Dago Pakar, Ir. H. Juanda",
      coverageDetail: "Spesialis pipa mampet akibat lemak dapur usaha kuliner kafe dan saluran kloset kos-kosan padat penghuni.",
    },
    {
      slug: "cileunyi",
      name: "Cileunyi",
      fullName: "Cileunyi & Cibiru, Bandung Timur",
      description: "Panggilan tukang saluran mampet 24 jam area Cileunyi, Cibiru, dan sekitarnya. Cepat, bergaransi, dan tarif terjangkau.",
      landmark: "Gerbang Tol Cileunyi, Bundaran Cibiru, Cinunuk, Jatinangor batas",
      coverageDetail: "Menjangkau hunian perumahan Bandung Timur, kos-kosan kampus, ruko perdagangan, dan industri.",
    },
    {
      slug: "cimahi",
      name: "Cimahi",
      fullName: "Kota Cimahi & Bandung Barat",
      description: "Layanan jasa pelancar saluran pipa mampet profesional untuk wilayah Cimahi Tengah, Cimahi Utara, dan Cimahi Selatan.",
      landmark: "Alun-Alun Cimahi, Baros, Cihanjuang, Melong, Leuwigajah",
      coverageDetail: "Teknisi siap datang menangani WC mampet, bak kontrol meluap, dan pipa dapur tersumbat di seluruh Cimahi.",
    },
    {
      slug: "ujungberung",
      name: "Ujungberung",
      fullName: "Ujungberung, Bandung",
      description: "Jasa saluran mampet tanpa bongkar keramik untuk wilayah Ujungberung, Pasir Endah, Cigending, dan sekitarnya.",
      landmark: "Alun-Alun Ujungberung, Jl. A.H. Nasution, Sindanglaya",
      coverageDetail: "Solusi cepat saluran pembuangan air kamar mandi, talang cor dak mampet, dan wastafel mampet bergaransi.",
    },
  ] as AreaInfo[],
  services: [
    {
      id: "wc-mampet",
      name: "Perbaikan WC Mampet Tanpa Bongkar",
      shortDesc: "Pelancaran kloset duduk/jongkok tersumbat tisu, pembalut, atau benda asing dengan mesin spiral elektrik tanpa merusak porselen.",
      fullDesc: "Menggunakan mesin spiral rigid fleksibel bermata khusus yang mampu berputar 360 derajat menelusuri lekukan leher angsa kloset, menghancurkan dan menarik sumbatan tanpa merusak porselen kloset atau membongkar lantai kamar mandi.",
      icon: "FaToilet",
      price: "Mulai Rp150.000",
      features: [
        "Metode 100% Tanpa Bongkar Lantai & Porselen",
        "Mesin Drain Snake Spiral Otomatis Berkekuatan Tinggi",
        "Garansi pengerjaan tuntas lancar baru bayar",
        "Penanganan cepat 30-45 menit di lokasi",
      ],
    },
    {
      id: "wastafel-mampet",
      name: "Pelancaran Wastafel & Kitchen Sink Mampet",
      shortDesc: "Pembersihan pipa cuci piring dan wastafel yang tersumbat endapan minyak, lemak beku (saponifikasi), dan sisa makanan.",
      fullDesc: "Sumbatan wastafel dapur biasanya disebabkan lemak minyak masakan yang mengeras seperti lilin di dalam pipa PVC. Mesin spiral drain cleaner kami menghancurkan kerak lemak hingga bersih tuntas tanpa perlu mengganti pipa di dalam dinding.",
      icon: "FaSink",
      price: "Mulai Rp150.000",
      features: [
        "Membersihkan kerak lemak beku hingga ke dinding pipa",
        "Aman untuk semua jenis pipa PVC dan sifon P-Trap",
        "Bebas bau busuk dan genangan air kotor",
        "Pengerjaan bersih dan higienis tanpa kotoran tercecer",
      ],
    },
    {
      id: "floor-drain-kamar-mandi",
      name: "Saluran Kamar Mandi (Floor Drain) & Pipa Air Buangan",
      shortDesc: "Mengatasi genangan air lantai kamar mandi akibat sumbatan rambut rontok, sisa sabun, buih deterjen, dan pasir halus.",
      fullDesc: "Floor drain yang mampet menimbulkan genangan air kotor dan bau tak sedap. Kami melancarkan pipa pembuangan kamar mandi hingga ke bak kontrol dengan kawat spiral fleksibel berdiameter khusus.",
      icon: "FaShower",
      price: "Mulai Rp150.000",
      features: [
        "Menarik gumpalan rambut dan serat kain yang tersangkut",
        "Mengikis endapan busa sabun & lemak tubuh",
        "Aliran air kembali lancar seketika",
        "Dilengkapi garansi pengerjaan resmi",
      ],
    },
    {
      id: "got-talang-air",
      name: "Got, Bak Kontrol & Saluran Talang Hujan Mampet",
      shortDesc: "Pembersihan saluran talang dak atap, pipa got luar, dan bak kontrol tersumbat lumut, dedaunan, pasir, atau endapan lumpur.",
      fullDesc: "Talang air mampet di musim hujan sangat berisiko menyebabkan kebocoran plafon dan banjir lokal di pekarangan rumah. Kami membersihkan jalur pipa vertikal maupun horizontal hingga ke saluran pembuangan akhir kota.",
      icon: "FaWater",
      price: "Mulai Rp200.000",
      features: [
        "Mencegah rembesan dan luapan air ke dalam rumah",
        "Menembus sumbatan lumpur dan dedaunan lebat",
        "Peralatan kawat spiral panjang hingga puluhan meter",
        "Pemeriksaan menyeluruh seluruh jalur pembuangan",
      ],
    },
    {
      id: "grease-trap-restoran",
      name: "Sedot & Pembersihan Grease Trap Restoran / Kafe",
      shortDesc: "Pembersihan berkala dan pelancaran pipa perangkap lemak dapur komersial, restoran, rumah makan, hotel, dan usaha catering.",
      fullDesc: "Bisnis kuliner menghasilkan volume limbah minyak tinggi yang wajib dikelola agar tidak membeku dan menutup total saluran kota. Kami menyediakan layanan pembersihan lemak grease trap berkala dengan prosedur higienis dan cepat.",
      icon: "FaUtensils",
      price: "Mulai Rp300.000",
      features: [
        "Pembersihan total kerak lemak tebal restoran",
        "Jadwal fleksibel (siap malam hari setelah resto tutup)",
        "Menghilangkan bau tak sedap di area dapur pelanggan",
        "Kerja sama perawatan rutin bulanan tersedia",
      ],
    },
  ] as ServiceItem[],
};
