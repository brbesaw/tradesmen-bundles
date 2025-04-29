// app/apprentice/page.js

import ToolSection from "@/components/ToolSection";

export default function ApprenticeBundle() {

  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-2">Apprentice Bundle</h1>
      <p className="italic mb-6">Solid American-made basics built to last.</p>

      <ToolSection
        title="Aviation Snips (Red/Green)"
        tools={[
          {
            level: "Good",
            name: "Hurricane 3-Piece Aviation Snip Set (Left, Right, Straight)",
            url: "https://www.amazon.com/Hurricane-02-003-Aviation-Chrome-Vanadium/dp/B07CTJLRT2?tag=tradesmenbund-20",
            comment: "Budget-friendly 3-piece set for beginners — includes left, right, and straight snips with chrome vanadium steel blades. Great starter set for light to moderate sheet metal work."
          },
          {
            level: "Better",
            name: "Midwest Aviation Snip Set (Left and Right, Kush’n-Power Grip)",
            url: "https://www.amazon.com/MIDWEST-Aviation-Snip-Set-KUSHN-POWER/dp/B07RC7ZBK9?tag=tradesmenbund-20",
            comment: "Midwest snips are job-tested and union-trusted. This set includes both left and right cutting aviation snips with comfortable grips and solid cutting performance."
          },
          {
            level: "Best",
            name: "Klenk Offset Aviation Snips - Left and Right Handed",
            url: [
              "https://www.amazon.com/MA75200-Klenk-offset-aviation-snips/dp/B004QOHJRI?tag=tradesmenbund-20",
              "https://www.amazon.com/MA75210-Klenk-offset-aviation-snips/dp/B003XFL3QE?tag=tradesmenbund-20"
            ],
            comment: "Top-tier offset snips for sheet metal pros. Includes both left- and right-handed snips for full coverage. Ergonomic offset design reduces fatigue and improves accuracy on long cuts."
          }
        ]}
      />

      <ToolSection
        title="Sheet Metal Hammer"
        tools={[
          {
            level: "Good",
            name: "Estwing Tinner's Hammer - 18 oz",
            url: "https://www.amazon.com/Estwing-Tinners-Hammer-Metalworking-Construction/dp/B000V7PBJ2?tag=tradesmenbund-20",
            comment: "Solid one-piece American-made tinner's hammer. Forged steel with shock reduction grip — reliable and widely used on job sites."
          },
          {
            level: "Better",
            name: "Klenk Square Face Tinner's Hammer",
            url: "https://www.amazon.com/DA70510-Klenk-Tinners-Hammer-Square/dp/B000T3EGX0?tag=tradesmenbund-20",
            comment: "Classic square face with a long wooden handle. A good balance of feel and striking control, made by a brand trusted in the trade."
          },
          {
            level: "Best",
            name: "Midwest Sheet Metal Hammer - 18 oz Shock Reduction Grip",
            url: "https://www.amazon.com/MIDWEST-Sheet-Metal-Hammer-Reduction/dp/B0CZ4MN6DB?tag=tradesmenbund-20",
            comment: "Heavy-duty 18 oz sheet metal hammer from Midwest with shock-absorbing grip. Built for daily use and precision striking in the field."
          },
        ]}
      />

      <ToolSection
        title="Magnetic Torpedo Level"
        tools={[
          {
            level: "Good",
            name: "Empire EM71.8 Magnetic Level",
            url: "https://www.amazon.com/dp/B00LP417N4?tag=tradesmenbund-20",
            comment: "Compact, durable, and affordable. Strong magnets for hands-free metal surface leveling."
          },
          {
            level: "Better",
            name: "Klein Tools 935RB Rare Earth Level",
            url: "https://www.amazon.com/dp/B01MF9N8FE?tag=tradesmenbund-20",
            comment: "Strong rare-earth magnets and a rugged build make this a go-to torpedo for tradesmen."
          },
          {
            level: "Best",
            name: "Johnson Magnetic Billet Level",
            url: "https://www.amazon.com/dp/B0BMGWDLM1?tag=tradesmenbund-20",
            comment: "Billet aluminum body, laser-etched vials, and top-tier accuracy — built for long-term use in demanding settings."
          },
        ]}
      />

      <ToolSection
        title="Channel Locks"
        tools={[
          {
            level: "Good",
            name: "CRAFTSMAN Groove Joint Pliers (2-Piece)",
            url: "https://www.amazon.com/dp/B07QN1PYYM?tag=tradesmenbund-20",
            comment: "Reliable budget set for beginners. Includes two commonly used sizes for general gripping and turning."
          },
          {
            level: "Better",
            name: "Irwin VISE-GRIP GrooveLock Pliers",
            url: "https://www.amazon.com/dp/B000FK1R0W?tag=tradesmenbund-20",
            comment: "Comfortable grip and quick-adjust jaw mechanism make these a great upgrade from basic pliers."
          },
          {
            level: "Best",
            name: "Channellock 12-Inch Tongue & Groove Pliers",
            url: "https://www.amazon.com/dp/B0006694A0?tag=tradesmenbund-20",
            comment: "Made in the USA with forged high-carbon steel. The gold standard for professionals who need strong, slip-free grip."
          },
        ]}
      />

<ToolSection
        title="Combo Screwdriver"
        tools={[
          {
            level: "Good",
            name: "CRAFTSMAN 6-in-1 Multi-Bit Screwdriver",
            url: "https://www.amazon.com/CRAFTSMAN-Screwdriver-Multi-Bit-Acetate-CMHT66052/dp/B0CH3YQD5H?tag=tradesmenbund-20",
            comment: "Solid 6-in-1 screwdriver with interchangeable bits. Comfortable grip and reliable build — a dependable choice for apprentices getting started."
          },
          {
            level: "Better",
            name: "Klein Tools 11-in-1 Screwdriver/Nut Driver",
            url: "https://www.amazon.com/Screwdriver-Industrial-Strength-Klein-Tools/dp/B0015SBILG?tag=tradesmenbund-20",
            comment: "Heavy-duty and trusted on job sites everywhere. The Klein 11-in-1 has excellent bit retention, tough construction, and offers multiple driver heads for everyday tasks."
          },
          {
            level: "Best",
            name: "Klein Tools 14-in-1 Ratcheting Screwdriver",
            url: "https://www.amazon.com/Klein-Tools-32313HD-Screwdriver-Double-Ended/dp/B0CX27G678?tag=tradesmenbund-20",
            comment: "Top-tier 14-in-1 ratcheting driver with smooth action and secure bit storage. Built for pros who want speed and versatility without sacrificing durability."
          },
        ]}
      />

<ToolSection
  title="Adjustable Wrench"
  tools={[
    {
      level: "Good",
      name: "WORKPRO 2-piece Adjustable Wrench Set (6\" & 10\")",
      url: "https://www.amazon.com/WORKPRO-2-piece-Adjustable-Extra-Wide-Workshop/dp/B08RJ55NPF?tag=tradesmenbund-20",
      comment: "Budget-friendly set with solid performance. Includes 6\" and 10\" sizes with extra-wide jaws — perfect for beginners needing quick versatility."
    },
    {
      level: "Better",
      name: "CRAFTSMAN Adjustable Wrench Set (3-Piece)",
      url: "https://www.amazon.com/CRAFTSMAN-Adjustable-Wrench-3-Piece-CMMT12001/dp/B07QQ8P5K6?tag=tradesmenbund-20",
      comment: "Well-rounded 3-piece set with sizes for small, medium, and larger jobs. Forged for durability with easy-to-read markings — a great step up in value."
    },
    {
      level: "Best",
      name: "Crescent 10\" Adjustable Construction Wrench (Spud Wrench)",
      url: "https://www.amazon.com/Crescent-AT210SPUD-Cresent-Adjustable-Construction/dp/B01HXM5XOU?tag=tradesmenbund-20",
      comment: "Heavy-duty and job site proven. The Crescent spud wrench offers extreme toughness, a smooth adjustment mechanism, and a tapered handle for lining up bolt holes — ideal for steelwork and industrial tasks."
    },
  ]}
/>

<ToolSection
        title="Tape Measure"
        tools={[
          {
            level: "Good",
            name: "CRAFTSMAN PROREACH 25-Foot Tape Measure",
            url: "https://www.amazon.com/CRAFTSMAN-Measure-PROREACH-25-Foot-CMHT37665S/dp/B08GHFMM5C?tag=tradesmenbund-20",
            comment:
              "Compact and durable with a standout of 14 feet. Great for basic measuring tasks and features strong blade lock and magnetic hook — good value for new tradesmen."
          },
          {
            level: "Better",
            name: "Milwaukee 25-Foot Compact Magnetic Tape Measure",
            url: "https://www.amazon.com/Milwaukee-Compact-Magnetic-Straighter-48-22-1025M/dp/B0DLHD85RB?tag=tradesmenbund-20",
            comment:
              "Milwaukee durability in a compact package. Features reinforced housing, a magnetic hook for solo measurements, and a straighter standout. A reliable choice for rough jobsite use."
          },
          {
            level: "Best",
            name: "Stanley FATMAX 25-Foot Magnetic Tape Measure",
            url: "https://www.amazon.com/Stanley-FMHT33865S-FATMAX-Magnetic-Tape/dp/B00AGYYQW8?tag=tradesmenbund-20",
            comment:
              "Pro-grade standout and durability. The FATMAX delivers 14 feet of standout, a durable case, and strong magnet for long solo measurements. Built to handle daily abuse with ease."
          }
        ]}
      />

<ToolSection
  title="Sheet Metal Scribes"
  tools={[
    {
      level: "Good",
      name: "General Tools 818 Hardwood Scratch Awl",
      url: "https://www.amazon.com/General-Tools-818-Hardwood-Scratch/dp/B00004T7R3?tag=tradesmenbund-20",
      comment:
        "Affordable and reliable. This scratch awl is a great tool for marking metal surfaces, with a comfortable hardwood handle."
    },
    {
      level: "Better",
      name: "Klein Tools 650 Scratch Awl with Cushion Grip",
      url: "https://www.amazon.com/Scratch-Cushion-Klein-Tools-650/dp/B0000302W2?tag=tradesmenbund-20",
      comment:
        "A trusted name in tools. The cushion grip provides extra comfort, making it perfect for extended use in professional settings."
    },
    {
      level: "Best",
      name: "Malco A50 Carbide-Tipped Scribe",
      url: "https://www.amazon.com/Malco-A50-Carbide-Tipped-Scribe/dp/B0038QYX42?tag=tradesmenbund-20",
      comment:
        "The best option for tough jobs. This carbide-tipped scribe provides superior durability and precision, perfect for heavy-duty tasks."
    }
  ]}
/>

<ToolSection
        title="Tongs"
        tools={[
          {
            level: "Good",
            name: "MIDWEST Seamer Tong with KUSH'N-POWER Grips",
            url: "https://www.amazon.com/MIDWEST-Seamer-Tong-KUSHN-POWER-Comfort/dp/B00REG7CD6?tag=tradesmenbund-20",
            comment:
              "Comfortable and durable. These tongs provide good leverage and control for shaping or holding metal — a solid entry-level choice."
          },
          {
            level: "Better",
            name: "Fairmont MT14000 Seamers with Straight Handle",
            url: "https://www.amazon.com/MT14000-Fairmont-Seamers-Straight-Handle/dp/B000PW5FLM?tag=tradesmenbund-20",
            comment:
              "Trusted brand with classic straight handle design. Provides more precise control and excellent grip strength — ideal for more advanced layout and forming tasks."
          },
          {
            level: "Best",
            name: "Fairmont MT14030 Offset Tongs with Cushion Grips",
            url: "https://www.amazon.com/MT14030-Fairmont-Tongs-Offset-Cushion/dp/B000PW745M?tag=tradesmenbund-20",
            comment:
              "Offset design offers better ergonomics and access in tight spaces. Durable and comfortable for all-day use — a favorite for pros doing layout or folding work."
          }
        ]}
      />

<ToolSection
  title="Center Punch"
  tools={[
    {
      level: "Good",
      name: "Neiko 02638A Automatic Center Punch",
      url: "https://www.amazon.com/Neiko-02638A-Automatic-Center-Adjustable/dp/B008DXYOLC?tag=tradesmenbund-20",
      comment:
        "Solid, budget-friendly center punch with adjustable spring tension. Great starter option for accurate marking in sheet metal."
    },
    {
      level: "Better",
      name: "HORUSDY Automatic Center Punch Set (Large and Small)",
      url: "https://www.amazon.com/HORUSDY-Automatic-Adjustable-%EF%BC%88large%EF%BC%89155mm-%EF%BC%88Small%EF%BC%89130mm/dp/B07DS7CMFX?tag=tradesmenbund-20",
      comment:
        "Comes as a two-pack with large and small punches. Adjustable force for different materials — great value and flexibility for serious apprentices."
    },
    {
      level: "Best",
      name: "General Tools 78 Automatic Center Punch",
      url: "https://www.amazon.com/General-Tools-78-Automatic-Center/dp/B00004T7RF?tag=tradesmenbund-20",
      comment:
        "Reliable classic — durable, precise, and ideal for consistent center marks. A trusted choice on professional job sites."
    }
  ]}
/>

      <a href="/" className="text-blue-400 underline">← Back to Home</a>
    </main>
  );
}
