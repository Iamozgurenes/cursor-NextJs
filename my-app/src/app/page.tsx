import Link from 'next/link'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

// Bu fonksiyon, sunucu tarafında çalışacak ve verileri getirecek
async function getPosts() {
  // Burada gerçek bir API'den veya veritabanından blog gönderilerini çekebilirsiniz
  // Şimdilik statik veri döndürüyoruz
  return [
    { id: 1, title: 'İlk Yazım', slug: 'ilk-yazim', excerpt: 'Bu benim ilk blog yazım.', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'İkinci Yazım', slug: 'ikinci-yazim', excerpt: 'Bu da ikinci blog yazım.', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Üçüncü Yazım', slug: 'ucuncu-yazim', excerpt: 'Ve işte üçüncü blog yazım.', image: 'https://via.placeholder.com/300x200' },
  ]
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Son Yazılar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link href={`/posts/${post.slug}`}>
                  <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer">Devamını Oku</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}