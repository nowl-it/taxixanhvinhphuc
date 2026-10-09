import React from "react";
import Link from "next/link";
import Image from "next/image";
import { carFleet } from "@/data/cars";
import { siteConfig } from "@/data/config";
import { Users, Briefcase, CheckCircle2, Phone, ArrowRight, Sparkles } from "lucide-react";

export default function CarFleet() {
  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ĐỘI XE ĐỜI MỚI 2022 - 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Đội Xe Sang Trọng, Sạch Sẽ, Không Mùi
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            100% phương tiện phục vụ là xe gia đình đời mới, được vệ sinh khử khuẩn hàng ngày và trang bị đầy đủ tiện nghi điều hòa, wifi, sạc điện thoại.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {carFleet.map((car) => (
            <div
              key={car.id}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Car Image Preview */}
              <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Badge Top Left */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {car.seats} Chỗ Ngồi
                </div>

                {/* Price Tag Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl text-xs font-black text-red-600 shadow-md">
                  {car.basePricePerKm}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">{car.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-2.5 sm:mb-3">{car.tagline}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 sm:mb-4 leading-relaxed">{car.description}</p>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-200/70 mb-4 bg-white/60 rounded-xl p-2.5">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{car.seats} Hành khách</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{car.luggage}</span>
                    </div>
                  </div>

                  {/* Models list */}
                  <div className="text-xs text-slate-600 mb-3">
                    <span className="font-bold text-slate-800">Các dòng xe: </span>
                    <span>{car.models.join(", ")}</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {car.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`tel:${siteConfig.hotlineRaw}`}
                    className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Đặt Xe Này</span>
                  </a>

                  <Link
                    href={`/dich-vu/${car.slug}`}
                    className="py-3 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1 transition"
                  >
                    <span>Chi Tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
