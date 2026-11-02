import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/posts";
import { siteConfig } from "@/data/config";
import { Calendar, Clock, BookOpen, ArrowRight, User, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.brandName} [${siteConfig.hotline}] - Cẩm Nang & Tin Tức Dịch Vụ Taxi Vĩnh Phúc`,
  },
  description:
    "Tổng hợp kinh nghiệm đặt xe taxi giá rẻ, cẩm nang du lịch Tam Đảo - Tây Thiên, so sánh xe 4 chỗ và 7 chỗ, dịch vụ xe tiện chuyến Hà Nội và hợp đồng KCN Vĩnh Phúc.",
  alternates: {
    canonical: `${siteConfig.domain}/tin-tuc`,
  },
  openGraph: {
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Cẩm Nang & Kinh Nghiệm Đi Xe Taxi Vĩnh Phúc`,
    description: "Kinh nghiệm đặt xe sân bay, xe tiện chuyến và du lịch Vĩnh Phúc giá rẻ nhất.",
    url: `${siteConfig.domain}/tin-tuc`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function TinTucPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  const jsonLd = {
    "@context": "https://schema.org",
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
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-slate-600" />
            <span>CẨM NANG & KINH NGHIỆM ĐI XE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {`${siteConfig.brandName} [${siteConfig.hotline}] - Tin Tức & Cẩm Nang Tuyến Đường`}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Chia sẻ kinh nghiệm di chuyển tiết kiệm, thông tin bảng giá cập nhật và cẩm nang du lịch Vĩnh Phúc.
          </p>
        </div>

        {/* Featured Top Post */}
        {featuredPost && (
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[300px] bg-slate-900 overflow-hidden">
              <Image
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`font-bold text-xs px-3 py-1 rounded-full shadow-md ${featuredPost.isHoliday ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white' : 'bg-amber-500 text-slate-950'}`}>
                  {featuredPost.badgeText || featuredPost.category}
                </span>
                {featuredPost.isPinned && (
                  <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Ghim nổi bật
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredPost.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <Link href={`/tin-tuc/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {featuredPost.author}
                </span>

                <Link
                  href={`/tin-tuc/${featuredPost.slug}`}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md transition"
                >
                  <span>Đọc Ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Link href={`/tin-tuc/${post.slug}`} className="relative h-48 bg-slate-900 block overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/tin-tuc/${post.slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">{post.author}</span>
                <Link
                  href={`/tin-tuc/${post.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-slate-800 flex items-center gap-1"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-black">Cần Đặt Xe Đi Nội Bài Hoặc Hà Nội Ngay?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Tổng đài phục vụ 24/7 đón tận nhà tại tất cả các huyện thuộc Vĩnh Phúc.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg transition transform hover:scale-105"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>Gọi Tổng Đài: {siteConfig.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
