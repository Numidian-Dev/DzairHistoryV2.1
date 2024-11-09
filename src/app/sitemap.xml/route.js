
const ARTICLES_API_URL = "https://dzairhistory.com/api/articles";
const BOOKS_API_URL = "https://dzairhistory.com/api/books";
const BASE_URL = "https://dzairhistory.com";

function generateSiteMap(articles, books) {
  // Débogage
  console.log("Articles:", articles);
  console.log("Books:", books);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}/</loc>
     </url>
     <url>
       <loc>${BASE_URL}/categorie/histoire</loc>
     </url>
     <url>
       <loc>${BASE_URL}/categorie/culture</loc>
     </url>
     <url>
       <loc>${BASE_URL}/categorie/regions</loc>
     </url>
     <url>
       <loc>${BASE_URL}/categorie/archives/livres</loc>
     </url>
     <url>
       <loc>${BASE_URL}/contact</loc>
     </url>
     <url>
       <loc>${BASE_URL}/a-propos-de-nous</loc>
     </url>
     
     <!-- Articles URLs -->
          ${articles
       .map(({ link }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/article/${link}`}</loc>
       </url>
     `;
       })
       .join('')}
     
     <!-- Books URLs -->
     ${Array.isArray(books) ? books.map((book) => {
         console.log("Processing book:", book); // Débogage de chaque livre
         return `
       <url>
           <loc>${`${BASE_URL}/archives/livres/details/${book.id}`}</loc>
       </url>
     `;
       }).join('') : '<!-- No books found -->'}
   </urlset>
 `;
}

export async function GET() {
  try {
    const [articlesResponse, booksResponse] = await Promise.all([
      fetch(ARTICLES_API_URL),
      fetch(BOOKS_API_URL)
    ]);

    const [articles, books] = await Promise.all([
      articlesResponse.json(),
      booksResponse.json()
    ]);

    // Débogage des réponses
    console.log("Articles Response:", articles);
    console.log("Books Response:", books);

    const sitemap = generateSiteMap(articles, books);

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(`Error generating sitemap: ${error.message}`, { status: 500 });
  }
}