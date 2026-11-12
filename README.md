# Mi7 National Group | Conversion Focused Website Demo

**Demo website built by Business Hustle.**

This is a concept demonstration of an upgraded website for Mi7 National Group. It is not the
official Mi7 National Group website. All company information, statistics, prices, reviews,
photographs and logos in this demo belong to Mi7 National Group and were sourced from the
official website, mi7national.co.za, and the company's official Facebook page. They are used
here purely to demonstrate a lead generation concept to the Mi7 team.

---

## The purpose of this demo

The entire point of this rebuild is to help Mi7 capture more leads and help visitors make a
decision faster. Every screen answers three questions within seconds: Can I trust this company,
what exactly will I get, and how do I get it now.

## Why the current site loses leads

Measurements from a Lighthouse audit of mi7national.co.za (mobile, 12 November 2026):

| Metric | Current site | What it means |
| --- | --- | --- |
| Speed Index | 10.2 s | Visitors stare at a blank or moving page for over 10 seconds |
| Largest Contentful Paint | 7.9 s | The main message lands late; most bounce before it appears |
| Time to Interactive | 7.9 s | Buttons do not respond for almost 8 seconds |
| Unused CSS | 206 KiB | The phone pays for styling the visitor never sees |
| Uncompressed images | 539 KiB wasted | Slow connections pay a heavy tax before content arrives |

Behind those numbers sit structural problems: the quote form loads only after JavaScript
spinner gates, prices are not shown anywhere, the 24 hour emergency number is small, and nine
service pages bury the strongest selling points in long paragraphs.

## What this demo does differently

**1. Speed to value.** The hero states the promise, proves it with real awards, and offers two
instant actions: get a free quote, or call the toll free control room. Nothing else competes
for attention.

**2. Prices up front.** The real subscription packages (Household R449, Pensioners R359,
Business R599, Panic Alert R249) are displayed with their actual feature lists. Transparent
pricing is the single fastest way to help a visitor decide.

**3. A two minute quote wizard.** Four steps: what do you need, what property, how do we reach
you, review and send. Progress is visible, validation is instant, and the enquiry lands
directly on Mi7's official WhatsApp line with every answer prefilled. No databases, no logins,
no friction.

**4. WhatsApp as the conversion channel.** Every call to action can end in a WhatsApp message
to Mi7's official line (061 549 6195, published on the Mi7 Security Hyperstore). South African
customers already live on WhatsApp; the demo meets them there.

**5. Trust everywhere.** KZN Top Brand 2023 and 2024, the Standard Bank KZN Top Business Award,
PSIRA accreditation, the 4 minute response target, and nine real community reviews with real
names and dates are woven through the journey instead of being hidden on one page.

**6. A permanent emergency path.** The 24 hour toll free number 0800 647 911 sits in the top
bar, the hero, the mobile action bar and the footer. A visitor in distress never hunts for it.

**7. Mobile first conversion.** On phones, a persistent bottom bar offers Call, WhatsApp and
Free Quote on every screen, with safe area support.

**8. Performance discipline.** The demo is a modern Next.js 16 build: optimised images in
modern formats, fonts subset locally, no jQuery layers, no page builder bloat, and content
served from small typed data files. The target is sub two second loads on 4G.

**9. Simple, professional English.** Copy is short, scannable and free of jargon and dashes,
so it works for every reader.

## What is inside

| Route | Purpose |
| --- | --- |
| `#/` | Hero, real stats band, why Mi7, all 12 divisions, medical spotlight, packages, quote wizard, reviews, awards and news |
| `#/services` | Hub listing every division with real photography |
| `#/services/<slug>` | Detail pages, including all eight Armed Response units with their vehicles |
| `#/packages` | The four real subscription packages and their full feature lists |
| `#/quote` | The quote wizard, with package or division preselected from links |
| `#/about` | Founding story, timeline, leadership, gallery |
| `#/contact` | Offices, hotline, email, WhatsApp line and a quick enquiry form |

## Running it

```bash
bun install
bun run dev
```

Open the preview in your browser. For a production build, run `bun run build` and then
`bun run start`.

## Configuring it for the real business

All contact points live in one file: `src/config/site.ts`.

- `whatsappNumber`: currently Mi7's official Hyperstore assistance line 061 549 6195. If Mi7
  supplies a dedicated sales WhatsApp line, change this one value and every call to action
  updates automatically.
- Hotline, email, addresses and social links are already the real published details.

## Where the content comes from

- Home, about, services, packages and contact text: mi7national.co.za
- Statistics (1 million plus alarm signals, 132 cameras, 205 community groups, 120 to 170
  medical cases per month, 26 908 incident reports in January 2022): official service pages
- Prices and package features: the official Subscription Packages page
- Reviews: the public testimonial carousel on the official home page
- News headlines: the official media updates feed
- All photographs and the logo: the official Mi7 National Group website and media library

Nothing on this demo is invented. Where the official site did not publish a detail, this demo
does not invent one either.

## Recommended next steps for the real build

1. Point the quote wizard at a real lead inbox or CRM webhook and record every enquiry.
2. Add LocalBusiness structured data and Google Business Profile links for map pack rankings.
3. Publish the four package pages as separate landing pages for Google Ads on searches like
   "armed response Pietermaritzburg".
4. Connect the wizard to the Network Command Centre's suburb data so patrol coverage shows
   before the visitor commits.
5. Add monthly reporting: calls, WhatsApp opens, wizard starts, wizard completions.

---

Copyright 2026 Mi7 National Group for all company content and imagery. Demo concept and code
built by Business Hustle.
