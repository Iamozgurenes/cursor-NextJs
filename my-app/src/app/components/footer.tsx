export default function Footer() {
    return (
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Benim Blogum. Tüm hakları saklıdır.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mx-2">Facebook</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mx-2">Twitter</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mx-2">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }