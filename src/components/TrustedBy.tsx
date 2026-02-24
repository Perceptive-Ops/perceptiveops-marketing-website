const brands = [
  "Stripe", "Shopify", "HubSpot", "Notion", "Vercel", "Supabase", "Linear", "Retool",
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by innovative teams
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-2xl font-display font-bold text-muted-foreground/30 whitespace-nowrap select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
