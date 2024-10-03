import Head from 'next/head'
import Link from 'next/link'

export default function Post({ post }:any) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{post.title} | Benim Blogum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              <Link href="/">
                <span className="text-gray-800 cursor-pointer">Benim Blogum</span>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/">
                <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Ana Sayfa</span>
              </Link>
              <Link href="/hakkimda">
                <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Hakkımda</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center">&copy; 2023 Benim Blogum. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticPaths() {
  // Burada gerçek bir API'den veya veritabanından tüm blog gönderilerinin slug'larını çekebilirsiniz
  const posts = [
    { slug: 'ilk-yazim' },
    { slug: 'ikinci-yazim' },
    { slug: 'ucuncu-yazim' },
  ]

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }:any) {
  // Burada gerçek bir API'den veya veritabanından belirli bir blog gönderisini çekebilirsiniz
  const post = {
    title: 'Örnek Blog Yazısı',
    image: 'https://via.placeholder.com/800x400',
    content: '<p>Bu bir örnek blog yazısıdır. İçeriği buraya gelecek.</p>',
  }

  return {
    props: {
      post,
    },
  }
}