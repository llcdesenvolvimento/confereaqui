import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostBySlug, getPostsSorted } from "@/data/blogPosts";
import usePageMeta from "@/hooks/usePageMeta";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  usePageMeta({
    title: post ? `Confere Aqui - ${post.title}` : "Confere Aqui - Artigo",
    description: post?.description ?? "Artigo do blog Confere Aqui.",
    canonical: post ? `https://confereaqui.com/blog/${post.slug}` : undefined,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relacionados = getPostsSorted()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="flex-1 py-8 md:py-14 px-3 sm:px-4">
      <article className="mx-auto max-w-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o blog
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.readTime} min de leitura
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {post.title}
        </h1>

        <p className="text-sm text-muted-foreground mb-8">
          Publicado em {formatDate(post.publishedAt)}
        </p>

        <div
          className="prose prose-sm sm:prose-base max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:text-foreground/85 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[15px] [&_ul]:text-foreground/85 [&_ul]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-foreground [&_strong]:font-bold"
        >
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p className="text-muted-foreground italic">
              Conteúdo deste artigo em breve.
            </p>
          )}
        </div>

        {relacionados.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Continue lendo
            </h3>
            <div className="space-y-3">
              {relacionados.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-bold text-foreground leading-snug mb-1">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default BlogPost;
