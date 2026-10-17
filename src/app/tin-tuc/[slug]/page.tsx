import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Calendar, Clock, User, Phone, ArrowRight, Tag, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Bài Viết Không Tồn Tại",
    };
  }

  const seoTitle = `${post.title} [${siteConfig.hotline}]`;

  return {
    title: {
      absolute: seoTitle,
    },
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteConfig.domain}/tin-tuc/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: `${siteConfig.domain}/tin-tuc/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export const instant = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Simple Markdown renderer for tables, headings, and lists
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = (key: string) => {
      if (inTable && tableHeaders.length > 0) {
        elements.push(
          <div key={key} className="overflow-x-auto my-6 rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  {tableHeaders.map((th, hIdx) => (
                    <th key={hIdx} className="p-3 border-b border-slate-200 font-bold" dangerouslySetInnerHTML={{ __html: th }} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/70">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table line detection
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const cells = trimmed
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim().replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"));

        // Separator row |---|:---:|
        if (cells.every((c) => /^:?-+:?$/.test(c))) {
          return;
        }

        if (!inTable) {
          inTable = true;
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable(`table-${index}`);
      }

      // Heading 2
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4 border-l-4 border-emerald-600 pl-3 leading-snug"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      // Heading 3
      else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-lg sm:text-xl font-bold text-slate-800 mt-6 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      // Blockquote
      else if (trimmed.startsWith("> ")) {
        elements.push(
          <div
            key={index}
            className="my-4 p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-xs sm:text-sm"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace("> ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
      // Horizontal rule
      else if (trimmed === "---") {
        elements.push(<hr key={index} className="my-6 border-slate-200" />);
      }
      // Bullet list item
      else if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        elements.push(
          <li
            key={index}
            className="ml-5 list-disc text-slate-700 text-sm leading-relaxed my-1.5"
            dangerouslySetInnerHTML={{
              __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
      // Numbered list item
      else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <li
            key={index}
            className="ml-5 list-decimal text-slate-700 text-sm leading-relaxed my-1.5"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
      // Paragraph
      else if (trimmed.length > 0) {
        elements.push(
          <p
            key={index}
            className="text-slate-700 text-sm sm:text-base leading-relaxed my-3"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
    });

    flushTable("table-end");
    return elements;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: siteConfig.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cẩm nang & Tin tức",
            item: `${siteConfig.domain}/tin-tuc`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteConfig.domain}/tin-tuc/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.featuredImage.startsWith("http")
          ? post.featuredImage
          : `${siteConfig.domain}${post.featuredImage}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.brandName,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.domain}/logo.svg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.domain}/tin-tuc/${post.slug}`,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/tin-tuc" className="hover:text-emerald-600">Cẩm nang & Tin tức</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-2 border-b border-slate-200">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm leading-relaxed">
          {renderContent(post.content)}

          {/* In-Article Call to Action Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>ĐẶT XE NGAY HÔM NAY - GIẢM 40% CHIỀU VỀ</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black">
              Tổng Đài Đặt Xe Taxi Xanh Vĩnh Phúc 24/7
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Tài xế bản địa lịch sự, xe mới 100%, đón đúng giờ hẹn. Đón trả tận nhà tại TP. Vĩnh Yên, Phúc Yên và toàn bộ các huyện tỉnh Vĩnh Phúc.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Phone className="w-4 h-4 animate-phone-ring" />
                <span>BẤM GỌI: {siteConfig.hotline}</span>
              </a>

              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 shadow-sm font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <ZaloIcon className="w-4 h-4" />
                <span>Chat Zalo Nhận Báo Giá</span>
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-6">
            <h3 className="text-xl font-black text-slate-900 border-l-4 border-emerald-600 pl-3">
              Bài Viết Cùng Chủ Đề
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {rel.category}
                    </span>
                    <Link href={`/tin-tuc/${rel.slug}`}>
                      <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition text-sm line-clamp-2">
                        {rel.title}
                      </h4>
                    </Link>
                  </div>
                  <Link
                    href={`/tin-tuc/${rel.slug}`}
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 pt-3"
                  >
                    <span>Xem tiếp</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
