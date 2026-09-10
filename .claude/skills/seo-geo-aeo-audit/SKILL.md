---
name: seo-geo-aeo-audit
description: Audit a website for SEO (search engine optimization), GEO (generative engine optimization / AI search readiness), and AEO (answer engine optimization / featured snippets, voice search) signals, then produce a scored, evidence-based report with prioritized recommendations. Use when the user asks for an SEO audit, GEO audit, AEO audit, "how is my site doing in search/AI search", or wants a breakdown of a site against SEO/GEO/AEO criteria.
source: https://github.com/SNLabat/SEO-GEO-AEO-Skill
---

# SEO / GEO / AEO Audit Skill — Full Instructions

This is a comprehensive web audit tool that analyzes sites for Search Engine Optimization, Generative Engine Optimization (AI search readiness), and Answer Engine Optimization (featured snippets/voice search).

## Workflow Overview

**Step 1: Confirm scope** — Always ask the user whether they want a Quick Audit (1-2 min, top priorities) or Full Audit (5-10 min, comprehensive analysis) *before* fetching anything. Skip only if they've already stated a clear preference.

**Step 2: Fetch and analyze data**
- Retrieve homepage HTML with all meta tags, schema, headings, links
- Extract site structure from navigation, internal links, robots.txt, sitemap.xml
- For Quick Audits: fetch homepage + up to 6 key pages
- For Full Audits: crawl all meaningful pages (About, Services, Case Studies, Blog posts, Contact, FAQ, etc.) — skip only privacy/terms/login/thank-you pages

**Step 3: Evaluate signals across three dimensions**
- **SEO**: Title tags, meta descriptions, heading hierarchy, URL structure, canonical tags, alt text, internal links, schema markup, content depth, keyword signals, freshness
- **GEO**: E-E-A-T signals (author credentials, About page, contact info, trust signals), content for AI synthesis (factual density, clear claims, source citation, originality), technical GEO (rich schema, HTTPS, crawlability, entity links)
- **AEO**: Featured snippet patterns (direct answer paragraphs, definitions, lists, tables), FAQ/HowTo schema, question-phrased headings, voice search readiness, local signals

**Step 4: Score each dimension 1-10** using: 1-3 (critical), 4-5 (below average), 6-7 (decent), 8-9 (strong), 10 (exemplary).

**Step 5: Generate downloadable report** as `.docx` and `.pdf` with premium agency-quality design (navy/blue color scheme, structured sections, evidence-based findings).

## Report Design

- **Cover page**: Navy background, domain/scores prominent, centered
- **Executive Summary**: Light-blue shaded box, scores table with color-coded status
- **Pages Audited**: Table listing all fetched URLs
- **Analysis sections** (SEO, GEO, AEO): Signal-by-signal tables with color-coded status
- **Priority Recommendations**: Matrix ranked by criticality and effort
- **What's Working Well**: Strengths with evidence
- **Headers/Footers**: Domain, page numbers, attribution

## Key Principles

- **Audit the whole site**, not just the starting URL — only flag items as "missing" after confirming they don't exist
- **Be specific**: Reference actual findings, quote text, name specific pages
- **Be honest**: Name external tools (PageSpeed Insights, SEMrush) for signals beyond HTML fetch
- **Calibrate tone**: Don't manufacture problems if the site is solid; communicate urgency if issues are genuine
