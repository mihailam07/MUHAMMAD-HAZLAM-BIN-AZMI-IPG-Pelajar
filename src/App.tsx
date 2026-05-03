import React, { useState } from 'react';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mapInfo, setMapInfo] = useState<{ title: string; desc: string } | null>(null);
  const [quizState, setQuizState] = useState<'idle' | 'success'>('idle');

  const showMapDetail = (title: string, desc: string) => {
    setMapInfo({ title, desc });
    setTimeout(() => {
      document.getElementById('map-info')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setQuizState('success');
    } else {
      alert('Jawapan Salah! Cuba lagi.');
    }
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div className="bg-mc-sand font-retro text-xl overflow-x-hidden text-black min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://placehold.co/1920x1080/6fa8dc/white?text=Minecraft+Desert+Landscape')"
        }}
      >
        <div className="z-10 animate-bounce mb-8">
          <h1 className="font-pixel text-4xl md:text-6xl text-white pixel-text-shadow leading-tight">
            PENGEMBARAAN<br />HIJRAH RASULULLAH
          </h1>
          <p className="font-pixel text-lg text-mc-gold mt-4 pixel-text-shadow">
            Belajar Sirah Melalui Dunia Minecraft
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full px-4">
          <a href="#intro" className="mc-button py-4 px-6 font-pixel text-sm flex items-center justify-center text-black no-underline">
            Mula Pengembaraan
          </a>
          <a href="#intro-video" className="mc-button py-4 px-6 font-pixel text-sm flex items-center justify-center text-black no-underline">
            Tonton Video
          </a>
          <a href="#map" className="mc-button py-4 px-6 font-pixel text-sm flex items-center justify-center text-black no-underline">
            Peta Hijrah
          </a>
          <a href="#quiz" className="mc-button py-4 px-6 font-pixel text-sm flex items-center justify-center text-black no-underline">
            Kuiz Hijrah
          </a>
          <a href="#activities" className="mc-button py-4 px-6 font-pixel text-sm flex items-center justify-center text-black no-underline">
            Aktiviti Murid
          </a>
          <div className="hidden lg:flex items-center justify-center">
            <span className="text-white font-pixel text-2xl">محمد ﷺ</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-16 bg-mc-grass border-y-8 border-mc-wood">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mc-card mb-12">
            <h2 className="font-pixel text-3xl mb-6 text-mc-wood">Apa itu Hijrah?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-2xl leading-relaxed space-y-4">
                <p><strong>Maksud:</strong> Perpindahan Rasulullah ﷺ dan umat Islam dari Kota Mekah ke Kota Madinah (dahulu dikenali sebagai Yathrib).</p>
                <p><strong>Kenapa berlaku?</strong> Perintah Allah SWT demi menyelamatkan Islam daripada ancaman kaum Musyrikin Mekah.</p>
                <p><strong>Kepentingan:</strong> Bermulanya takwim Hijrah dan terbinanya negara Islam yang kuat di Madinah.</p>
              </div>
              <div id="intro-video" className="mc-border bg-black aspect-video flex items-center justify-center overflow-hidden">
                <iframe
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/3J1m0Rk9W6k"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-16 bg-mc-sand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pixel text-3xl mb-12">Sahabat Perjuangan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="mc-card flex flex-col items-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzcmmXFhPPDKY802h6DlwFtmPLlKqO4yOxMkFmIZhTJJsDL8MmvRbciPiLgfSwTPl4L3sHq60moaJI6LRutl8jHw0StauA4X8k-0Ls2u9wiKR_ARK1JyWSiTIo_rfIwE5eJv677y71vdQIEJIICsSlucuOmyMeGZo4UDGQ50mi3nIQHKzsAAeR6_YsUSByzR2r3FozhdcZrhqaYs710eAlf_eaThEKsOPBn1cnb3RgY1IojjS3079ZzpTSa1CSbaH9ykkvlmiZjgmP" alt="Abu Bakar Skin" className="w-32 h-32 mb-4 mc-border pixelated object-cover" />
              <h3 className="font-pixel text-xl mb-2">Abu Bakar as-Siddiq</h3>
              <p className="mb-4">Teman setia Rasulullah ﷺ sepanjang perjalanan hijrah yang penuh cabaran.</p>
              <button onClick={() => setActiveModal('abu')} className="mc-button px-4 py-2 mt-auto w-full font-pixel text-xs">Klik ketahui lagi</button>
            </div>
            <div className="mc-card flex flex-col items-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygHhctrUQ7EI0d-4hyO1SjfqIMCLQWZmMsEbwE7RzIlOZMMMdjABeCe38SabIZtV-FgSR2ac_wV0wWbRfqYWm48EjCmTtQMDH97_1WgjgzptpD56hXPEbww2RaKG6wyrFGi5HZCaRtwxpyGX11b91adX8cdJ7sLDpbjvCmyPhzVDZzXHVkg4r_y2U3Vv6QxNGlp3eDHhN8Po8fAiuC_MKELfS0r5D9a3crnnQLVffOnLEa3fIh2EJz-kuuEnvv3hPDKMTl7peDr21" alt="Ali Skin" className="w-32 h-32 mb-4 mc-border pixelated object-cover" />
              <h3 className="font-pixel text-xl mb-2">Ali bin Abi Talib</h3>
              <p className="mb-4">Pemuda berani yang menyamar tidur di katil Rasulullah ﷺ untuk mengaburi Musyrikin.</p>
              <button onClick={() => setActiveModal('ali')} className="mc-button px-4 py-2 mt-auto w-full font-pixel text-xs">Klik ketahui lagi</button>
            </div>
            <div className="mc-card flex flex-col items-center">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAuIQRDkhRnJ6Cy7_VqsZZAZBXIA6_idobesq6bk_E444sRDmyAwFnAeR2dZSQSXBh2TgK6ZbFtakDfvF5Xbu-R7vn-5vB0Oqn4C4rTEclzQ5aJlqY6cwk1RdXoEC50huyEFcUbopGFiFu9C7dxCNE4HzunBTJO8qo85cjWtifA6qWqZ5-T-wiVv0f2RQNrcFJ5rSbKYvlFoJ-FSTX1BbIKtXooCd1XKeEsUly7mXkXdmhSgO5C5En2g_xgBn8JgpMA_sok6YPDZco" alt="Asma Skin" className="w-32 h-32 mb-4 mc-border pixelated object-cover" />
              <h3 className="font-pixel text-xl mb-2">Asma' binti Abu Bakar</h3>
              <p className="mb-4">Digelar 'Zatun Nitaqain' (Pemilik dua tali pinggang) kerana membawa bekalan ke Gua Thur.</p>
              <button onClick={() => setActiveModal('asma')} className="mc-button px-4 py-2 mt-auto w-full font-pixel text-xs">Klik ketahui lagi</button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-stone-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-3xl mb-12 text-center text-mc-gold">Peta Jejak Hijrah</h2>
          <div className="mc-border bg-mc-sand p-8 text-black relative min-h-[500px] overflow-hidden">
            <div className="relative w-full h-[400px] bg-repeat opacity-50 absolute top-0 left-0" style={{ backgroundImage: "url('https://placehold.co/1200x400/8b7355/5c4d37?text=Minecraft+Desert+Grid')" }}></div>
            <div className="relative z-10 flex flex-wrap justify-center gap-8 items-center h-full">
              <div className="cursor-pointer group" onClick={() => showMapDetail('Mekah', 'Titik permulaan hijrah. Rasulullah ﷺ keluar pada waktu malam dengan perlindungan Allah.')}>
                <div className="mc-button p-4 flex flex-col items-center">
                  <span className="font-pixel text-xs mb-2">1. Mekah</span>
                  <div className="w-12 h-12 bg-mc-wood mc-border"></div>
                </div>
              </div>
              <div className="hidden lg:block text-4xl">➔</div>
              <div className="cursor-pointer group" onClick={() => showMapDetail('Gua Thur', 'Tempat persembunyian selama 3 hari. Laba-laba dan burung merpati membantu melindungi pintu gua.')}>
                <div className="mc-button p-4 flex flex-col items-center">
                  <span className="font-pixel text-xs mb-2">2. Gua Thur</span>
                  <div className="w-12 h-12 bg-mc-stone mc-border"></div>
                </div>
              </div>
              <div className="hidden lg:block text-4xl">➔</div>
              <div className="cursor-pointer group" onClick={() => showMapDetail('Padang Pasir', 'Perjalanan mencabar melalui jalan yang tidak biasa digunakan untuk mengelak dari diburu.')}>
                <div className="mc-button p-4 flex flex-col items-center">
                  <span className="font-pixel text-xs mb-2">3. Padang Pasir</span>
                  <div className="w-12 h-12 bg-yellow-200 mc-border"></div>
                </div>
              </div>
              <div className="hidden lg:block text-4xl">➔</div>
              <div className="cursor-pointer group" onClick={() => showMapDetail('Quba', 'Persinggahan pertama sebelum masuk Madinah. Masjid pertama (Masjid Quba) dibina di sini.')}>
                <div className="mc-button p-4 flex flex-col items-center">
                  <span className="font-pixel text-xs mb-2">4. Quba</span>
                  <div className="w-12 h-12 bg-mc-grass mc-border"></div>
                </div>
              </div>
              <div className="hidden lg:block text-4xl">➔</div>
              <div className="cursor-pointer group" onClick={() => showMapDetail('Madinah', 'Destinasi akhir. Disambut dengan meriah oleh penduduk Ansar dengan nasyid Tala\'al Badru \'Alayna.')}>
                <div className="mc-button p-4 flex flex-col items-center">
                  <span className="font-pixel text-xs mb-2">5. Madinah</span>
                  <div className="w-12 h-12 bg-mc-gold mc-border"></div>
                </div>
              </div>
            </div>
            
            {mapInfo ? (
              <div id="map-info" className="mt-8 mx-auto max-w-2xl text-center mc-card bg-mc-sky border-4 border-blue-900 block relative z-10">
                <h4 className="font-pixel text-lg mb-2">{mapInfo.title}</h4>
                <p className="text-xl">{mapInfo.desc}</p>
              </div>
            ) : (
              <div id="map-info" className="mt-8 mx-auto max-w-2xl text-center mc-card bg-mc-sky border-4 border-blue-900 block relative z-10">
                <h4 className="font-pixel text-lg mb-2">Pilih lokasi pada peta</h4>
                <p className="text-xl">Klik salah satu blok di atas untuk melihat info perjalanan.</p>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section id="missions" className="py-16 bg-mc-wood text-white border-b-8 border-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-pixel text-3xl mb-8">Misi Hijrah Minecraft</h2>
          <p className="text-2xl mb-12">Pilih misi anda untuk membantu perjuangan!</p>
          <div className="grid md:grid-cols-3 gap-6">
            <button onClick={() => alert('Misi Bermula: Cari Gua Thur di koordinat X:12, Y:64, Z:200')} className="mc-button text-black p-6 flex flex-col items-center w-full">
              <div className="text-4xl mb-4">🔍</div>
              <span className="font-pixel text-xs">Cari lokasi Gua Thur</span>
            </button>
            <button onClick={() => alert("Misi Bermula: Kumpul roti dan susu untuk dibawa ke gua!")} className="mc-button text-black p-6 flex flex-col items-center w-full">
              <div className="text-4xl mb-4">🍞</div>
              <span className="font-pixel text-xs">Bantu Asma' Hantar Makanan</span>
            </button>
            <button onClick={() => alert('Misi Bermula: Ikuti jejak unta Al-Qaswa di padang pasir.')} className="mc-button text-black p-6 flex flex-col items-center w-full">
              <div className="text-4xl mb-4">🐫</div>
              <span className="font-pixel text-xs">Ikuti Laluan Hijrah</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16 bg-mc-grass border-b-8 border-mc-wood">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mc-card">
            <h2 className="font-pixel text-2xl mb-8 text-center text-black">Kuiz Hijrah</h2>
            <div id="quiz-container">
              {quizState === 'idle' ? (
                <div className="quiz-step">
                  <p className="text-2xl mb-6">1. Siapakah sahabat yang menemani Rasulullah ﷺ semasa perjalanan ke Madinah?</p>
                  <div className="flex flex-col gap-4">
                    <button onClick={() => handleQuizAnswer(true)} className="mc-button text-left p-4">A. Abu Bakar as-Siddiq</button>
                    <button onClick={() => handleQuizAnswer(false)} className="mc-button text-left p-4">B. Umar bin al-Khattab</button>
                    <button onClick={() => handleQuizAnswer(false)} className="mc-button text-left p-4">C. Uthman bin Affan</button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="font-pixel text-green-700 text-2xl mb-4 leading-relaxed">MANTAP! JAWAPAN TEPAT.</p>
                  <p className="text-xl">Abu Bakar as-Siddiq adalah teman setia Baginda.</p>
                  <div className="mt-8 text-center">
                    <p className="font-pixel text-xl mb-4">Tahniah! Anda telah menamatkan misi kuiz.</p>
                    <button onClick={() => setQuizState('idle')} className="mc-button px-6 py-2 font-pixel text-xs">Cuba Lagi</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-mc-sand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pixel text-3xl mb-12">Aktiviti Murid (Blended Learning)</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="mc-card bg-mc-sky/20">
              <h3 className="font-pixel text-lg mb-4">Dalam Minecraft</h3>
              <p className="text-xl mb-4">Bina semula model Masjid Quba atau Gua Thur menggunakan blok Minecraft. Sertakan papan tanda untuk info sirah.</p>
              <div className="w-full h-40 bg-stone-400 mc-border flex items-center justify-center text-mc-wood font-bold">
                [IMAGE: Projek Minecraft Murid]
              </div>
            </div>
            <div className="mc-card bg-mc-grass/20">
              <h3 className="font-pixel text-lg mb-4">Bilik Darjah</h3>
              <p className="text-xl mb-4">Lukis peta perjalanan hijrah secara kreatif atau hasilkan diorama padang pasir menggunakan bahan terbuang.</p>
              <button className="mc-button bg-mc-gold w-full py-4 mt-auto font-pixel text-sm hover:!bg-yellow-400">Download Lembaran Aktiviti (PDF)</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mc-wood text-white py-12 border-t-8 border-black">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 font-pixel text-xl text-mc-gold">"Sesungguhnya Allah bersama kita"</div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#hero" className="mc-button text-black px-4 py-2 font-pixel text-xs no-underline">Ulang Pengembaraan</a>
            <a href="#quiz" className="mc-button text-black px-4 py-2 font-pixel text-xs no-underline">Cuba Kuiz Lagi</a>
            <a href="https://www.youtube.com/watch?v=3J1m0Rk9W6k" target="_blank" rel="noreferrer" className="mc-button text-black px-4 py-2 font-pixel text-xs no-underline">Rujukan Video</a>
          </div>
          <p className="text-mc-sand opacity-70">© 2023 Siri Pendidikan Sirah Minecraft - Untuk Kegunaan Sekolah Rendah</p>
        </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}>
          <div className="mc-card max-w-md w-full relative">
            <button onClick={closeModal} className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-500 mc-border px-3 py-1 text-white font-pixel active:translate-y-1 transition-transform cursor-pointer">X</button>
            {activeModal === 'abu' && (
              <>
                <h3 className="font-pixel text-xl mb-4 text-black">Abu Bakar as-Siddiq</h3>
                <p className="mb-4 text-black">Beliau merupakan orang dewasa pertama memeluk Islam dan sahabat paling rapat dengan Rasulullah ﷺ. Semasa hijrah, beliau sanggup menggadai harta dan nyawa untuk menemani Baginda.</p>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7BWOlE2gXr-6r__8f4XVgJeZmxYlO9lhWwTxUMcqh7UwabzOQ2h8lV9ODhDfRBLfD36-yS2Wa85jzhR0hxHwVEAr-Z_iPdUM6vLfirMNZUy-VWMP9kC_bYjuDfOXwTpXGNrqrEUtKoDQqfcx6FAjwxupKg_v3kM4QznqZKe_7o0_0qZdxmKaKIqHNfbzfCNK3VOygY5ErwaPEj-h66L-1rJrcIefXWolr-3km45g4LAeWeKD9Wtpw-4j6SHn7fuTLmWQlVaSSQYx4" className="mc-border w-full object-cover" alt="Abu Bakar" />
              </>
            )}
            {activeModal === 'ali' && (
              <>
                <h3 className="font-pixel text-xl mb-4 text-black">Ali bin Abi Talib</h3>
                <p className="mb-4 text-black">Seorang pemuda yang sangat berani. Beliau rela tidur di tempat tidur Nabi ﷺ untuk mengelirukan pembunuh yang mengepung rumah Nabi, membolehkan Nabi keluar dengan selamat.</p>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JBnBMgEcWrSgtx8NCqfkCXs06VS_Xj01jXe1GGBzKaf1oEub-oI_DALcQ1CpaooMKl4yL57vt-cZPLuSQuWhsaiJaRZRcJ2I6-imPxmxRblas-AQ_5npcfojRa_SZ5aicq1dTi_Z4fRAZylVlk-PWZqNhDzBcywaqiYpwaaxbcp2xFJ_ti5_m-Jqi2LLA-pUdncC7HxtDrHhCbj_Ofygetq0MYasE_ntGWPGaSl6MHibSz_8hvRGTb68xll9c5e5WKrpN9cGsGlg" className="mc-border w-full object-cover" alt="Ali" />
              </>
            )}
            {activeModal === 'asma' && (
              <>
                <h3 className="font-pixel text-xl mb-4 text-black">Asma' binti Abu Bakar</h3>
                <p className="mb-4 text-black">Anak kepada Abu Bakar. Beliau yang menghantar bekalan makanan ke Gua Thur secara rahsia pada waktu malam walaupun sedang hamil tua.</p>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArKwJEjFdzwdRFKsrdmOPCQmmEdcvXWz9QnZGXjhyHLwRpQO02ON8XsUoyQjVdwC6eSLJh5gHXuZqz8d8ap15Tb5hjCvFGxUHqOQ2z5THrBPIyGdUIxsVTmEvUnAzNbB1hiJMv7w1L-270p17XdMNm44eddcbmXlO_lkNfJXAHwVeoU41lUS_vz2gZqgfJXLiENbU793Uj3TgWKVSFXXcFN455pODdSMnw7DbYtoWE0JZESlK48PODGAhOhYDdbIlRlyJDc12cOxTj" className="mc-border w-full object-cover" alt="Asma" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
