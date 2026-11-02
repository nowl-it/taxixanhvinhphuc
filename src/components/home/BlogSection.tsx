import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/posts";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CẨM NANG & KINH NGHIỆM ĐI XE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Tin Tức & Cẩm Nang Du Lịch
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Cập nhật bảng giá mới nhất, kinh nghiệm đặt xe giá rẻ và mẹo di chuyển an toàn tại Vĩnh Phúc.
            </p>
          </div>

          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-800 hover:underline shrink-0"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <Link href={`/tin-tuc/${post.slug}`} className="relative h-44 sm:h-48 bg-slate-900 overflow-hidden block">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md ${post.isHoliday ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white' : 'bg-amber-500 text-slate-950'}`}>
                    {post.badgeText || post.category}
                  </span>
                  {post.isPinned && (
                    <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                      Nổi bật
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
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

                  <Link href={`/tin-tuc/${post.slug}`}>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/tin-tuc/${post.slug}`}
                    className="text-xs font-bold text-slate-700 group-hover:text-slate-800 flex items-center gap-1 transition"
                  >
                    <span>Đọc tiếp bài viết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
