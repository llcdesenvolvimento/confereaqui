import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { getPostsSorted } from "@/data/blogPosts";
import usePageMeta from "@/hooks/usePageMeta";

const POSTS_PER_PAGE = 10;

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`;
};

const Blog = () => {
  usePageMeta({
    title: "Confere Aqui - Blog",
    description: "Artigos práticos sobre verificação cadastral, locação, contratação e LGPD para pequenas empresas, corretores e profissionais.",
    canonical: "https://confereaqui.com/blog",
  });

  const allPosts = getPostsSorted();
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const posts = allPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allPosts.length;

  return (
    <main className="flex-1 py-8 md:py-14 px-3 sm:px-4">
      <div className="mx-auto max-w-4xl">
        <header className="text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Blog
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Artigos práticos sobre verificação cadastral, locação, contratação e proteção de dados.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min de leitura
                </span>
              </div>

              <h2
                className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {post.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Ler artigo
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
            >
              Ler mais artigos
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
