import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquire | Blue Bird Mobile Dessert Bar",
  description:
    "Request a quote for Blue Bird Mobile Dessert Bar at your wedding, corporate event, or private party. Tell us about your event and Shauna will be in touch within 24 hours.",
};

export default function InquirePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#f7f9fd] py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4178ac] mb-2">Get a Quote</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#494a52] mb-4">
          Let&apos;s make your event unforgettable
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Tell us about your event and we&apos;ll put together a custom proposal — usually within 24 hours.
        </p>
      </section>

      {/* Form embed */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        {/* Honeybook lead form */}
        <div className="hb-p-6213a16676ae4e000848b36a-1"></div>
        <img height="1" width="1" style={{ display: "none" }} src="https://www.honeybook.com/p.png?pid=6213a16676ae4e000848b36a" alt="" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,b,s,n,i,p,e,t) {
  h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
  t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
  e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
})(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6213a16676ae4e000848b36a");`,
          }}
        />
      </section>

      {/* What to expect */}
      <section className="bg-[#f7f9fd] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#494a52] mb-6 text-center">What happens next</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { step: "1", title: "Submit your inquiry", body: "Tell us about your event — date, guest count, type of event, and what you have in mind." },
              { step: "2", title: "We reach out", body: "Shauna will be in touch within 24 hours to learn more about your vision and answer any questions." },
              { step: "3", title: "Custom proposal", body: "You'll receive a tailored proposal with your menu, package options, and pricing." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-[#c8dcf6]">
                <div className="w-8 h-8 rounded-full bg-[#4178ac] text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#494a52] mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
