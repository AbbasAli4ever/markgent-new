"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const TESTIMONIALS = [
  {
    name: "Michael B.",
    role: "Home goods seller · Amazon US",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=160&q=80",
    quote:
      "For years our listings felt like an afterthought — inconsistent photos, thin copy, and a conversion rate that never moved. The Markgent rebuilt our catalogue from the ground up: new imagery, restructured bullet points, and keyword-mapped titles. Within six weeks our conversion rate had climbed noticeably, and it has kept climbing since.",
  },
  {
    name: "Sarah K.",
    role: "Beauty brand · Shopify",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    quote:
      "We almost launched a product with a packaging flaw that would have hurt returns and reviews. The tester program caught it early, with detailed photos and honest notes we could act on immediately. That single report probably saved us thousands in returns and a much rockier launch.",
  },
  {
    name: "Daniel R.",
    role: "Accessories seller · Etsy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    quote:
      "Communication is the part people underestimate, and it's the best part of working with this team. We always know what's happening with our account, what changed, and why. No chasing status updates, no guessing — just a clear point of contact who actually understands our catalogue.",
  },
  {
    name: "Priya N.",
    role: "Wellness brand · Walmart Marketplace",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    quote:
      "Switching platforms felt risky, but the team mapped our entire catalogue over to Walmart without a single listing going down. Ad spend was profitable from the first week because the targeting was already dialed in before we launched.",
  },
  {
    name: "Owen T.",
    role: "Outdoor gear seller · eBay",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=160&q=80",
    quote:
      "What sold me was how they handled a slow month — instead of disappearing, they sent a breakdown of what changed in the algorithm and adjusted our bids within a day. That kind of attentiveness is rare from an agency.",
  },
];

const CARD_COUNT = TESTIMONIALS.length;

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="w-95 shrink-0 relative overflow-hidden bg-paper border border-line rounded-[20px] p-7 flex flex-col">
      <div className="flex items-center gap-3.5">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="flex-none w-11 h-11 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-ink">
            {testimonial.name}
          </div>
          <div className="text-[13px] text-muted truncate">
            {testimonial.role}
          </div>
        </div>
        <div className="ml-auto flex-none text-gold text-sm tracking-[2px]">
          ★★★★★
        </div>
      </div>

      <p className="relative mt-5 text-[15px] leading-[1.65] text-ink flex-1">
        {testimonial.quote}
      </p>

      <BiSolidQuoteAltRight
        aria-hidden
        className="relative self-end mt-4 w-14 h-14 text-ink"
      />
    </div>
  );
}

export default function Testimonials({ show = true }: { show?: boolean }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth / 2;

      tweenRef.current = gsap.to(track, {
        x: -distance,
        duration: CARD_COUNT * 6,
        ease: "none",
        repeat: -1,
      });
    }, track);

    return () => ctx.revert();
  }, []);

  if (!show) return null;

  return (
    <section className="max-w-[1240px] mx-auto px-10 pt-24">
      <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
        Client Feedback
      </div>

      <div
        className="relative mt-7 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        <div ref={trackRef} className="flex w-max gap-4.5">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.name}-${i}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-[13px] text-faint">
        Placeholder quotes — real client reviews to be added.
      </p>
    </section>
  );
}
