import sasktelLogo from "@/assets/client-logos/sasktel.svg";
import tdBankLogo from "@/assets/client-logos/td-bank.svg";
import greatWestLifecoLogo from "@/assets/client-logos/great-west-lifeco.svg";
import sevenElevenLogo from "@/assets/client-logos/7-eleven.svg";
import tdAmeritradeLogo from "@/assets/client-logos/td-ameritrade.svg";
import usaaLogo from "@/assets/client-logos/usaa.svg";
import verizonLogo from "@/assets/client-logos/verizon.svg";
import attLogo from "@/assets/client-logos/att.svg";
import pwcLogo from "@/assets/client-logos/pwc.svg";
import amazonLogo from "@/assets/client-logos/amazon.svg";
import intuitLogo from "@/assets/client-logos/intuit.svg";
import rocheLogo from "@/assets/client-logos/roche.svg";
import capitalOneLogo from "@/assets/client-logos/capital-one.svg";
import jpmorganChaseLogo from "@/assets/client-logos/jpmorgan-chase.svg";
import tMobileLogo from "@/assets/client-logos/t-mobile.svg";

const brands = [
  { name: "SaskTel", logo: sasktelLogo },
  { name: "TD Bank", logo: tdBankLogo },
  { name: "Great-West Lifeco", logo: greatWestLifecoLogo },
  { name: "7-Eleven", logo: sevenElevenLogo },
  { name: "TD Ameritrade", logo: tdAmeritradeLogo },
  { name: "USAA", logo: usaaLogo },
  { name: "Verizon", logo: verizonLogo },
  { name: "AT&T", logo: attLogo },
  { name: "PwC", logo: pwcLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Intuit", logo: intuitLogo },
  { name: "Roche", logo: rocheLogo },
  { name: "Capital One", logo: capitalOneLogo },
  { name: "JPMorganChase", logo: jpmorganChaseLogo },
  { name: "T-Mobile", logo: tMobileLogo },
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by forward-thinking companies
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-14 lg:gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group h-10 lg:h-12 w-32 lg:w-36 flex items-center justify-center shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain select-none grayscale opacity-60 transition duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
