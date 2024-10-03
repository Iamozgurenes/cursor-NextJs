import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function Hakkimda() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Hakkımda</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <img src="https://via.placeholder.com/150" alt="Profil Resmi" className="float-left mr-6 mb-4 rounded-full" />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Merhaba! Ben [Adınız Soyadınız], [mesleğiniz/uzmanlık alanınız] olarak çalışıyorum ve bu blog'u [blog'un amacı] için oluşturdum.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            [Eğitim geçmişiniz, iş deneyimleriniz veya ilgi alanlarınız hakkında kısa bir paragraf]
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Bu blog'da [blog'unuzun ana konuları] hakkında yazılar paylaşıyorum. Amacım [blog'unuzun amacı veya okuyucularınıza ne kazandırmak istediğiniz].
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Benimle iletişime geçmek veya işbirliği yapmak isterseniz, lütfen İletişim sayfasını ziyaret edin.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
