/*
  PROJECTS — edit this list to add, change, or reorder projects on the site.
  Newest or best project first. Copy one block, paste it, and change the values.

  Fields (only title and summary are required):
    title      Project name
    status     "Live", "In progress", or "Complete"
    dates      e.g. "Jul 2026 – now"
    summary    One or two sentences
    features   List of [what, detail] pairs shown as rows
    note       Optional small line under the features
    tech       List of tools / languages
    links      List of { label, url } — the first one is the main (dark) button
    shots      Up to 3 screenshots { src, label, alt } — put images in /assets
    caseStudy  Optional link to a longer write-up page, e.g. "projects/marks.html"
*/
window.PROJECTS = [
  {
    title: "Marks Investment Analytics",
    status: "Live",
    dates: "Jul 2026 – now",
    summary: "A full-stack personal finance platform running on live market data.",
    features: [
      ["Market trends & stock pages", "Yahoo Finance API"],
      ["Monte Carlo simulator", "1,000 simulated paths"],
      ["Portfolio builder & compare", "allocation tools"],
      ["Mortgage, budget, retirement, debt", "10+ calculators"],
      ["Accounts & saved data", "Supabase · Postgres"]
    ],
    note: "Built with AI coding tools; I made the product and architecture decisions and reviewed every change.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind", "Supabase", "Vercel"],
    links: [
      { label: "Open the app", url: "https://marks-financial-services.vercel.app" },
      { label: "Read the code", url: "https://github.com/JasonMarks22/Marks-Financial-Services" }
    ],
    shots: [
      { src: "assets/app-market.jpg", label: "marks-financial-services.vercel.app", alt: "Market Trends dashboard with live index performance chart" },
      { src: "assets/app-montecarlo.jpg", label: "/tools/monte-carlo", alt: "Monte Carlo simulator running 1,000 simulated outcomes" },
      { src: "assets/app-stock.jpg", label: "/stock/NVDA", alt: "Stock detail page with one-year price chart and key stats" }
    ]
  }

  // ,{
  //   title: "Next project",
  //   status: "In progress",
  //   dates: "2027",
  //   summary: "What it does in one sentence.",
  //   features: [["Key feature", "detail"]],
  //   tech: ["Python"],
  //   links: [{ label: "Source", url: "https://github.com/JasonMarks22/..." }],
  //   shots: []
  // }
];
