/*
  PROJECTS — edit this list to add, change, or reorder projects on the site.
  Newest or best project first. Copy one block, paste it, and change the values.

  Fields (only title and summary are required):
    title      Project name
    status     "Live", "In progress", or "Complete"
    dates      e.g. "Jul 2026 – now"
    summary    One or two sentences (shown larger)
    description  Optional list of paragraphs explaining the project
    features   List of [what, detail] pairs shown as rows
    note       Optional small line under the features
    tech       List of tools / languages (shown as tags)
    techDetails  Optional list of [area, details] rows shown as a grid
    links      List of { label, url } — the first one is the main (dark) button
    shots      Up to 3 screenshots { src, label, alt } — put images in /assets
    caseStudy  Optional link to a longer write-up page, e.g. "projects/marks.html"
*/
window.PROJECTS = [
  {
    title: "Marks Investment Analytics",
    status: "Live",
    dates: "Jul 2026 – now",
    description: [
      "Visitors can look up any stock, ETF, or mutual fund, build a portfolio and backtest it on real historical prices, and plan ahead with calculators for mortgages, budgets, debt payoff, and retirement. A Monte Carlo simulator runs 1,000 possible futures to show the range of outcomes instead of a single guess."
    ],
    note: "Built with AI coding tools; I made the product and architecture decisions and reviewed every change.",
    techDetails: [
      ["Frontend", "Next.js · React · TypeScript"],
      ["Backend", "Next.js API routes; server-side Yahoo Finance data layer"],
      ["Database & auth", "Supabase (Postgres) with row-level security"],
      ["Analytics engine", "TypeScript modules: Monte Carlo, backtesting, calculators"],
      ["Charts", "Recharts"],
      ["Hosting & CI/CD", "Vercel, auto-deploys from GitHub"]
    ],
    links: [
      { label: "Open the app", url: "https://marks-financial-services.vercel.app" },
      { label: "Read the code", url: "https://github.com/JasonMarks22/Marks-Financial-Services" }
    ],
    shots: [
      { src: "assets/app-market.jpg", label: "marks-financial-services.vercel.app", alt: "Market Trends dashboard with live index performance chart" }
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
