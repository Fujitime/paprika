import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Paprika3 from '../../public/paprika1.jpeg';
import Paprika2 from '../../public/paprika2.jpeg';

const articles = [
  {
    id: 1,
    title: 'Apa Itu Paprika?',
    slug: 'apa-itu-paprika',
    thumbnail: `${Paprika3}`, // URL thumbnail gambar
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ante sit amet velit venenatis, non venenatis dolor rutrum.'
  },
  {
    id: 2,
    title: 'Kenapa Membeli Paprika Kami?',
    slug: 'kenapa-membeli-paprika-kami',
    thumbnail: `${Paprika2}`, // URL thumbnail gambar
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  }
];

const ArticleListPage = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Daftar Artikel</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Link to={`/article/${article.slug}`}>
                  <img src={article.thumbnail} alt={article.title} className="w-full h-64 object-cover object-center" />
                </Link>
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold mb-2">
                    <Link to={`/article/${article.slug}`} className="text-blue-500 hover:underline">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ArticleListPage;
