# Humanizer rules

Patterns that mark text as machine-written. Copied from `8move-landing/src/lib/ai/humanizer.ts`, so this skill works without that file.

## Content

- Significance inflation: "serves as a testament to", "marks a pivotal moment", "underscores its vital role".
- Vague attributions: "experts argue", "industry observers note". Name the source or remove the claim.
- Superficial -ing tails: "…, highlighting…", "…, reflecting…", "…, contributing to…". Make a separate sentence.
- Promotional language: "vibrant", "nestled", "groundbreaking", "breathtaking", "must-visit".

## Language

- AI vocabulary: crucial, pivotal, delve, underscore, landscape, tapestry, testament, vibrant, nestled, groundbreaking, showcasing, fostering, intricate, garner, additionally, enhance, cultivate, leverage, streamline.
- Copula avoidance: "serves as / stands as / boasts". Write is / are / has.
- Negative parallelisms: "It's not just X, it's Y".
- Forced rule of three: lists of three only because three sounds complete.
- Synonym cycling: one thing gets one name. Do not rotate "platform / solution / system" for the same product.

## Style

- Em dash overuse. Use commas, full stops or brackets. One em dash per paragraph at most; none is better.
- Excessive bold.
- Inline-header lists (bold label + colon at the start of every bullet).
- Title Case Headings. Use sentence case: "What we build", not "What We Build".

## Communication

- Chatbot artefacts: "Let's dive in", "I hope this helps", "Great question!".
- Signposting: "Here's what you need to know".
- Generic positive endings: "the future looks bright", "exciting times lie ahead", "continues to thrive".
- Excessive hedging: "could potentially possibly".

## Second pass

After the rewrite, ask: "What still makes this read as AI-generated?" Fix what remains.
