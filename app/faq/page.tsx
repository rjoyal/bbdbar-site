import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Blue Bird Mobile Dessert Bar",
  description:
    "Common questions about booking Blue Bird Mobile Dessert Bar for weddings and events — pricing, dietary accommodations, venue requirements, travel, and more.",
};

const faqs = [
  {
    q: "What dessert and espresso options do you offer?",
    a: "We offer a full espresso bar with lattes, cappuccinos, cold brew, matcha, herbal teas, and artisan sodas — plus affogato bars, ice cream sundae bars, and cannoli bars. For desserts, every menu is custom and handmade: cookies, brownies, French macarons, madeleines, cupcakes, babka, Kouign Amann, and more. The final menu is always curated together with you.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Yes — we've created full vegan and dairy-free dessert menus for past events, and several items can be made gluten-free. Our desserts can be made without nuts, though they're prepared in a kitchen where nuts are present. Cross-contact is possible, so we cannot accommodate severe nut allergies. Share your needs during consultation and we'll find great options for every guest.",
  },
  {
    q: "What are your prices?",
    a: "Blue Bird camper packages start at $575. Perch cart packages start at $450. Both include transportation, full setup and breakdown, insurance, and service staff. Camper packages also include lounge furniture. Dessert and espresso service are built on top of the base package — Shauna will help you customize. A $300 deposit secures your date.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "Most weddings book 6–12 months in advance. Popular dates go quickly — we recommend reaching out as early as possible. Corporate events and private parties often have more flexibility. Contact us to check your date.",
  },
  {
    q: "Do you handle setup, service, and cleanup?",
    a: "Yes, completely. We arrive one hour before service begins to set up the bar and lounge, staff the bar throughout your event, and break down within 30 minutes after service ends. You don't lift a finger.",
  },
  {
    q: "Is there a minimum guest count?",
    a: "Our minimum is 25 guests. There's no stated maximum — we've served events with 200+ guests. For larger events, reach out so we can discuss the right package configuration.",
  },
  {
    q: "Can you customize the menu for my event?",
    a: "Absolutely — every menu is built specifically for you. During your consultation, you'll share your vision, theme, and any must-have flavors. Shauna will create a custom proposal covering pastries, coffee, signature drinks, and décor options.",
  },
  {
    q: "What deposit do you require to hold our date?",
    a: "A $300 deposit is required to reserve your date. Once received, Shauna will begin working on your customized menu proposal.",
  },
  {
    q: "What is your cancellation policy?",
    a: "The $300 deposit is non-refundable. For cancellations: more than one week out — no additional charges beyond the deposit; less than one week — 50% of total contract cost; less than 72 hours — 75%; less than 24 hours — 100%. If we're able to rebook your date, we may reduce or waive outstanding fees at our discretion. True emergencies are handled case by case.",
  },
  {
    q: "Are there travel fees for events outside your area?",
    a: "Our home base is in Hamilton, MA. Events more than 20 miles away incur an additional mileage-based charge. Very long distances may require overnight accommodations. We serve all of eastern Massachusetts and regularly travel to Maine, New Hampshire, western MA, Connecticut, and Rhode Island.",
  },
  {
    q: "What are the venue space requirements?",
    a: "The camper needs at least 15′ × 20′ of horizontal clearance and 11′ of vertical clearance. For power, we prefer a 20-amp circuit (shore power) — it saves generator fuel costs. If that's not available, we can bring our generator.",
  },
  {
    q: "Do you serve both the camper and a cart option?",
    a: "Yes. The Blue Bird camper (Happier Camper HC1) is our signature setup — it includes lounge furniture and becomes a centerpiece. The Perch cart is a compact alternative for indoor venues or tighter spaces. Both deliver the same handcrafted quality.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section className="bg-[#f7f9fd] py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4178ac] mb-2">FAQ</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#494a52] mb-4">
          Frequently asked questions
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Everything you need to know before booking. Don&apos;t see your question? We&apos;re happy to chat.
        </p>
      </section>

      {/* FAQ list */}
      <section className="py-16 px-4 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-[#c8dcf6] rounded-2xl p-6">
            <h2 className="font-semibold text-[#494a52] mb-2">{faq.q}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Reach out and Shauna will get back to you, usually within 24 hours.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Send Us a Message
        </Link>
      </section>
    </>
  );
}
