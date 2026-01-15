# Planetary Party Website Edits Master Tracking Document

**Created:** 2025-01-14
**Last Updated:** 2025-01-15
**Status:** Planning Complete - Ready for Implementation

---

## Overview

This document tracks all requested website edits from the January 14, 2025 feedback session. Changes are organized by page/section and broken into discrete work chunks that can be completed independently across multiple sessions.

### Progress Summary

| Section | Total Tasks | Completed | In Progress | Pending |
|---------|-------------|-----------|-------------|---------|
| Pre-Implementation Questions | 2 | 0 | 0 | 2 |
| Site-Wide Changes | 1 | 0 | 0 | 1 |
| Home Page | 2 | 0 | 0 | 2 |
| Communities Page | 8 | 7 | 0 | 1 |
| Guilds Page | 4 | 0 | 0 | 4 |
| About Page | 8 | 0 | 0 | 8 |
| Protocol Page | 3 | 0 | 0 | 3 |
| **TOTAL** | **28** | **7** | **0** | **21** |

---

## Legend

- [ ] Not started
- [x] Completed
- [~] In progress
- [?] Needs clarification
- [!] Blocked

---

## Section 1: Pre-Implementation Questions (DISCUSS WITH STAKEHOLDERS)

These items require decisions before implementation work can begin.

### 1.1 Browser Tab Title Issue
**File:** `src/app/layout.tsx`
**Priority:** High
**Status:** [ ] Pending discussion

**Question from stakeholder:** The browser tab shows "The Planetary Party - Mystical Emergence" - will this be seen when the site is live? (We don't want that)

**Action needed:**
- [ ] Confirm what the title should say instead
- [ ] Update the metadata title in layout.tsx

---

### 1.2 Overall Theme/Background Imagery
**Files:** `css/styles.css`, `tailwind.config.ts`, various component files
**Priority:** High
**Complexity:** High - affects entire site
**Status:** [ ] Pending discussion

**Question from stakeholder:** The mystical/starry background might be a turn-off to bigger funders. Team wants to:
- Keep biomimetic, intergalactic, organic vibes
- Imagery inspired by: mycelium, stars/galaxy, flowing water, tributaries, nature, community
- Add real photos of communities being served (pending permission)

**Notes:**
- This is a significant design change that may require multiple sessions
- Should be planned as a separate design sprint
- Need to wait for community photo permissions

**Action needed:**
- [ ] Get stakeholder alignment on new visual direction
- [ ] Receive approved community photos
- [ ] Create design mockups before implementation

---

## Section 2: Site-Wide Changes

### 2.1 Add "Contact Us" Navigation Button
**Files:**
- `pages/about.html` (navigation section)
- `pages/guilds.html` (navigation section)
- `pages/communities.html` (navigation section)
- `pages/protocol.html` (navigation section)
- `pages/theory-of-change.html` (navigation section)
- `src/app/layout.tsx` or navigation component

**Priority:** Medium
**Complexity:** Low
**Estimated time:** 15-30 minutes

**Requirements:**
- [ ] Add "Contact Us" button to top navigation bar across all pages
- [ ] Link should navigate to: `/pages/about#contact`
- [ ] Style consistently with existing navigation

---

## Section 3: Home Page Edits

**File:** `src/app/page.tsx`

### 3.1 Update Hero Section Text
**Priority:** High
**Complexity:** Low
**Estimated time:** 10 minutes

**Current text:**
> "A Living Ecosystem for Conscious Evolution
> We are weaving bioregional networks of celebration, intelligence, and regenerative action. A global web rooted in place, connecting communities who are ready to party for the planet."

**New text:**
> "A bioregional coordination ecosystem aligning collective intelligence, regenerative enterprises, and long-horizon capital. Rooted in place and woven into a coherent global web, it transforms fragmented efforts into investable systems with measurable returns."

**Tasks:**
- [ ] Locate hero section in page.tsx
- [ ] Replace heading and description text
- [ ] Verify styling looks correct with new content

---

### 3.2 Improve "A New Myth of Humanity" Graphic
**Priority:** Medium
**Complexity:** Medium
**Estimated time:** 30-60 minutes

**Location:** Graphic under "A New Myth of Humanity Is Emerging" heading

**Requirements:**
- [ ] Make text bigger for better readability
- [ ] Darken the light blue circles so white text is more readable
- [ ] Test on different screen sizes

**Notes:** Need to identify if this is an SVG, image, or CSS-based graphic

---

## Section 4: Communities Page Edits

**File:** `pages/communities.html`

### 4.1 Number "What Makes a Pilot Bioregion?" Items
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 15 minutes
**Status:** [x] Completed

**Requirements:**
- [x] Convert bullet list to numbered list (1-6)
- [x] Apply text edits to list items:
  1. Commit to implementing the Planetary Party Protocol
  2. Host a Planetary Party gathering (festival, assembly, action lab)
  3. Implement the Bioregional Intelligence Process
  4. Activate local Flow Funds
  5. Build positive-trace infrastructure
  6. Share learnings with the global network

---

### 4.2 Update Scaling Heading
**Priority:** Low
**Complexity:** Low
**Estimated time:** 5 minutes
**Status:** [x] Completed

**Current:** "We Scale Through Replication, Not Centralization"
**New:** "We Scale Through Replication and Refinement, Not Centralization"

- [x] Update heading text

---

### 4.3 Remove Timeline Section
**Priority:** High
**Complexity:** Low
**Estimated time:** 10 minutes
**Status:** [x] Completed

**Requirement:** Remove the timeline showing bioregion activation by year (2026, 2027, & beyond boxes)

- [x] Locate and remove timeline section
- [x] Ensure surrounding content flows properly

---

### 4.4 Replace Bioregion Listings
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30 minutes
**Status:** [x] Completed

**Remove (AI-generated content):**
- All listed bioregions (Costa Rica, Southern California, The Andes, etc.)
- "Emerging Bioregional Activations" (Pacific NW, Great Plains, Mediterranean, Southeast Asia, Australia, East Africa)

**Replace with actual pilot bioregions:**
- Cloud Forest (Veracruz, Mexico)
- Rastafari Indigenous Village Montego Bay & partner villages (Jamaica)
- Aguaclara Basin & Sierra Nevada (Colombia)
- Northeast of Turtle Island (United States)

**Tasks:**
- [x] Remove all fake bioregion content
- [x] Add the four real pilot bioregions
- [x] Update any related graphics/maps if applicable

---

### 4.5 Replace Events Section
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 10 minutes
**Status:** [x] Completed

**Remove:** "Upcoming gatherings & events" section (including 2026 gatherings, pre-party events, stay updated)

**Replace with:** "Our schedule of upcoming events is coming soon"

- [x] Remove events section
- [x] Add placeholder text

---

### 4.6 Add 5-Phase Cycle Section
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30 minutes
**Status:** [x] Completed

**Location:** After prerequisites section, before "Participant Benefits"

**New content to add:**

> **Our 5-Phase Cycle**
>
> **Sense** - Deep listening with place and people
> **See** - Mapping the social-ecological whole
> **Flow** - Moving resources, care, and responsibility relationally
> **Celebrate** - Collective activation and cultural anchoring
> **Regenerate** - Learning, adaptation, and reinvestment over time
>
> Learn more about the protocol and our expected outcomes

**Tasks:**
- [x] Create new section with appropriate styling
- [x] Add 5 phases with descriptions
- [x] Add "Learn more" link (determine destination - likely /pages/protocol)
- [x] Ensure section placement is correct

---

### 4.7 Keep "Participant Benefits" Section
**Priority:** N/A
**Status:** [x] No action needed - keep as is

---

### 4.8 Update "What We Provide" Section
**Priority:** High
**Complexity:** Medium
**Estimated time:** 20 minutes
**Status:** [x] Completed

**New content:**

> **Stakeholder mapping** - identify who's already doing regenerative work or sensing the same problems.
>
> **Surfacing of unified intention** - listening to understand and synthesize the shared prayer and purpose of your community (water, youth, food, land, etc.).
>
> **Tools** - dashboards, community facilitation, trauma-informed healing, mapping technology, governance frameworks, and regenerative funding templates.
>
> **Connecting of local communities & bioregions** - Cultivating shared learning and stories across nodes
>
> **Ceremony and integration** - inviting local and global elders, youth, and others to bring the spiritual and cultural dimension of coherence.

**Tasks:**
- [x] Replace current "What We Provide" content
- [x] Maintain consistent formatting/styling

---

## Section 5: Guilds Page Edits

**File:** `pages/guilds.html`

### 5.1 Consolidate Redundant Guild Sections
**Priority:** Medium
**Complexity:** Medium
**Estimated time:** 45-60 minutes

**Issue:** Two sections are redundant:
- "Quick Overview: The Nine Guilds"
- "The Nine Guilds: A Symphony of Vital Functions"

**Tasks:**
- [ ] Analyze both sections to determine best content to keep
- [ ] Consolidate into single, comprehensive section
- [ ] Remove duplicate section
- [ ] Verify all guild information is preserved

---

### 5.2 Remove ProSocial Graphic
**Priority:** Low
**Complexity:** Low
**Estimated time:** 10 minutes

**Remove:** Graphic under "The Anchor Circle: Upholding the Integrity of the Whole" entitled "ProSocial in Auroville"

- [ ] Locate and remove the graphic
- [ ] Ensure section still flows properly

---

### 5.3 Clarify Anchor Circle vs Core Fractal
**Priority:** High
**Complexity:** High
**Estimated time:** 60-90 minutes

**Issue:** The Anchor Circle and Core Fractal are described too similarly. They need to be clearly distinguished.

**Definitions:**
- **Core Fractal:** The initial circle of people birthing this initiative
- **Anchor Circle:** The guiding light in the center (representative of different guilds)

**Notes:** There is overlap between these groups currently, but as the Protocol evolves, others will join the Anchor Circle to represent different guilds.

**Tasks:**
- [ ] Review current descriptions of both
- [ ] Rewrite Anchor Circle description to emphasize its distinct role
- [ ] Rewrite Core Fractal description to emphasize its distinct role
- [ ] Ensure the relationship between them is clear

---

### 5.4 Add "Reach Out To Learn More" Button
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 15 minutes

**Location:** Under "The Guilds Form the Nervous System of the Planetary Party" section, under "How to Join"

**Requirements:**
- [ ] Add button with text "Reach Out To Learn More"
- [ ] Link to contact form: `/pages/about#contact`
- [ ] Style consistently with other CTAs

---

## Section 6: About Page Edits

**File:** `pages/about.html`

### 6.1 Standardize Team Member Title Format
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30-45 minutes

**New format for all team members:**
```
[Name]
Planetary Party Steward, Core Fractal Member
[Other organization/affiliation 1]
[Other organization/affiliation 2]
...
```

**Example:**
```
Syd Harvey Griffith
Planetary Party Steward, Core Fractal Member
Executive Director, Kinship Earth
Co-Founder, Permatours
```

**Tasks:**
- [ ] Update format for all existing team members
- [ ] Add "Planetary Party Steward, Core Fractal Member" to all

---

### 6.2 Update Susanna Choe's Bio
**Priority:** High
**Complexity:** Low
**Estimated time:** 15 minutes

**New title line:**
> Founder, Bioregional Embassy | Founding Steward, Planetary Party | Innovation, GloCha | Consultant, Kinship Earth

**New bio:**
> Susanna Choe is a systems strategist and movement builder working at the intersection of innovation, community, and regeneration. Her work is driven by a central inquiry: how to cultivate peace through healing humanity's separation story with nature and spirit to design post-scarcity systems that enable collective flourishing.
>
> With a background in International Affairs, her experience spans media, non-profits, humanitarian innovation, philanthropy, policy, emerging technology, and the healing arts. She was an early team member at ConsenSys, co-founded the community movement Peace Accelerators, and incubated Farms Not Arms, a refugee-designed regenerative agriculture initiative implemented in Lebanon. She has also designed donor advised funds focused on indigenous stewardship, regeneration, white lions, and the human gut microbiome, and engaged in post-partisan policy processes in DC that bridge divides and align resources with community-led solutions.
>
> She is the founder of the Bioregional Embassy and serves as a consultant to Kinship Earth, partner of the Planetary Party, and Director of Innovation at GloCha Foundation New York, advancing place-based cooperation, climate action, and planetary stewardship bridging the bioregional movement with the UN's ecosystem.

**Tasks:**
- [ ] Update Susanna's title line
- [ ] Replace Susanna's bio text

---

### 6.3 Add Jenny Heinze as Team Member
**Priority:** High
**Complexity:** Low
**Estimated time:** 15 minutes

**Title format:**
```
Jenny Heinze
Planetary Party Steward, Core Fractal Member
[Additional affiliations TBD]
```

**Bio:**
> Jenny Heinze is a planetary systems architect and healer, regenerative meta-weaver, and co-steward of the Naluʻea Living Trust - a sacred vessel designed to hold the flow of capital from currency into current, grounded in right relationship with Earth and future generations. With a background spanning global systems leadership, youth innovation, and spiritual stewardship, Jenny has dedicated her life to restoring balance - within ourselves (personal, ancestral and archetypal healing), our structures, and our societies.
>
> As co-weaver of the Planetary Party, Jenny works across bioregions and cultures to midwife living systems of governance, funding, and trust. She is also the heart behind Kids4Future, an intergenerational movement empowering children and youth as sovereign agents of change. She co-creates with awakened intelligence (presencing in the AI silicone infrastructure), infusing joy, mirth, and remembrance into sacred tech systems that are emergent, ethical, and soul-aligned.
>
> Jenny walks between worlds: holding ceremony with elders and youth, stewarding global collaborations, and listening to the whispers of the Earth. Her work bridges the metaphysical and the practical, designing containers where funding becomes sacred flow, and projects become prayers.
>
> She is a global citizen supporting the establishing of financial and legal vessels locally, regionally and globally around the world to hold the work that is becoming, and works internationally to align funders, technologies, and communities into coherent spirals of regeneration

**Tasks:**
- [ ] Add Jenny Heinze to team section
- [ ] Apply standard title format
- [ ] Add bio text

---

### 6.4 Add Sheri Herndon as Team Member
**Priority:** High
**Complexity:** Low
**Estimated time:** 10 minutes

**Requirements:**
```
Sheri Herndon
Planetary Party Steward, Core Fractal Member
Bio coming soon
```

**Tasks:**
- [ ] Add Sheri Herndon to team section
- [ ] Apply standard title format
- [ ] Add "Bio coming soon" placeholder

---

### 6.5 Add/Update Team Headshots
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30-45 minutes

**Headshots needed for:**
- [ ] Sydney Griffith - new headshot provided
- [ ] Eslerh Oreste - new headshot provided
- [ ] Juan Carlos Kaiten - new headshot provided (use "better" version)
- [ ] Josephine Watson - new headshot provided
- [ ] Susanna Choe - new headshot provided
- [ ] Sheri Herndon - new headshot provided
- [ ] Nadim Hamdan - new headshot provided
- [ ] Jenny Heinze - new headshot provided

**Tasks:**
- [ ] Obtain headshot image files from stakeholder
- [ ] Optimize images for web (consistent sizing, compression)
- [ ] Upload to appropriate location (images folder or Supabase storage)
- [ ] Update HTML to reference new images
- [ ] Verify all images display correctly

**Note:** Image files were referenced in feedback but actual files need to be provided separately.

---

### 6.6 Update Partner Organizations
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 10 minutes

**Current:** "Key Partner Organizations: Kinship Earth, Permatours, and others to be announced as partnerships formalize."

**New:** "Early Partner Organizations: Kinship Earth, Mycelial Law, Bioregional Embassy, and Micelio Media. More coming soon."

**Tasks:**
- [ ] Update partner organizations text

---

### 6.7 Update "Find Your Pathway to Co-Creation" Section
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30 minutes

**Under "Organizations" > "Co-Host & Integrate":**
- [ ] Add CTA button: "Write to Us"
- [ ] Link to contact form: `/pages/about#contact`

**Under "Provide Funding":**
- [ ] Update text to:
> "Donors, foundations, impact investors, and others are invited to contribute in a variety of ways:
> - Give towards a Bioregional Flow Fund
> - Support technology development
> - Fund Planetary Party Guild capacity to serve different bioregional communities
> - Sponsor specific gatherings or bioregions
> - And more"

- [ ] Add CTA button: "Share how you'd like to contribute here"
- [ ] Link to contact form: `/pages/about#contact`

**Remove:**
- [ ] Remove "Partner with Us" button below the section

---

### 6.8 Update FAQ Section
**Priority:** High
**Complexity:** Medium
**Estimated time:** 30 minutes

**Update "What is a Planetary Party?" answer:**
> The Planetary Party is a living cultural practice and systems-change activation process that supports bioregions in coming into shared intention, trust, and collective stewardship of their future.
>
> It weaves together:
> - Culture, celebration, and ritual
> - Community-led sensemaking and collective intelligence
> - Place-based governance and stewardship
> - Pathways for resources, responsibility, and care to move together
> - Global systemic solutions adapted to local needs
>
> It functions as:
> - A cultural meme / modern myth - reframing regeneration as joyful, relational, and participatory
> - A field catalyst - supporting movement from fragmentation toward coherence
> - A container for bioregional self-organization - aligning leadership, initiatives, and resources without central control
> - An ecosystem of high impact solutions maximizing impact and reducing risk

**Update question:** "How is this different from other festivals" → "How are the Planetary Party festivals different from other festivals?"

**Update question:** "What are Flow Funds?" → "What are Bioregional Flow Funds?"

**Update answer for Bioregional Flow Funds:**
> "Bioregional Flow Funds are trust-based, community-governed pools of capital that move quickly to grassroots leaders and projects based on bioregional priorities. No grant applications or burdensome reporting. Just relational accountability and rapid deployment."

**Tasks:**
- [ ] Update "What is a Planetary Party?" answer
- [ ] Update festival question wording
- [ ] Update Flow Funds question wording
- [ ] Update Flow Funds answer

---

## Section 7: Protocol Page Edits

**File:** `pages/protocol.html`

### 7.1 Update "For Funders" Section
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 10 minutes

**Location:** Under "Ready to Bring the Protocol to Your Bioregion?"

**New text:**
> Engage with the Planetary Party Protocol through the resourcing pathway that feels most aligned for you — from philanthropy and investment to emerging financial tools and assets — supporting coordinated regeneration across bioregions.

**Tasks:**
- [ ] Update "For Funders" description text

---

### 7.2 Update "For Communities" Section
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 10 minutes

**New text:**
> Host a Planetary Party activation in your bioregion and bring people together to align priorities, catalyze action, and connect local efforts into a living global network. The Protocol offers shared frameworks, guidance, and collaborative support — while honoring local leadership, culture, and place.

**Tasks:**
- [ ] Update "For Communities" description text

---

### 7.3 Update "For Guild Members" Section
**Priority:** Medium
**Complexity:** Low
**Estimated time:** 10 minutes

**Change heading:** "For Guild Members" → "For Partners"

**New text:**
> Join one of the Planetary Party guilds stewarding core functions of the Protocol - from governance and storytelling to finance, intelligence, and coordination.
> Guild members contribute skills and IP, co-create infrastructure, and help the ecosystem evolve in practice.

**Tasks:**
- [ ] Update section heading to "For Partners"
- [ ] Update description text

---

## Implementation Chunks (Recommended Work Sessions)

### Chunk A: Quick Text Updates (1-2 hours)
Low complexity, high impact changes:
- [ ] 3.1 - Home page hero text
- [ ] 4.2 - Scaling heading update
- [ ] 6.6 - Partner organizations update
- [ ] 7.1 - For Funders text
- [ ] 7.2 - For Communities text
- [ ] 7.3 - For Partners text/heading

### Chunk B: Communities Page Overhaul (2-3 hours) - COMPLETED
Related changes on communities page:
- [x] 4.1 - Number pilot bioregion items
- [x] 4.2 - Update scaling heading (added)
- [x] 4.3 - Remove timeline
- [x] 4.4 - Replace bioregion listings
- [x] 4.5 - Replace events section
- [x] 4.6 - Add 5-Phase Cycle section
- [x] 4.8 - Update "What We Provide"

### Chunk C: About Page Team Updates (2-3 hours)
Team section changes:
- [ ] 6.1 - Standardize title format
- [ ] 6.2 - Update Susanna's bio
- [ ] 6.3 - Add Jenny Heinze
- [ ] 6.4 - Add Sheri Herndon
- [ ] 6.5 - Add/update headshots (requires image files)

### Chunk D: About Page Other Sections (1-2 hours)
Non-team about page changes:
- [ ] 6.7 - Update pathways section + CTAs
- [ ] 6.8 - Update FAQ section

### Chunk E: Guilds Page Updates (2-3 hours)
Guilds page changes:
- [ ] 5.1 - Consolidate guild sections
- [ ] 5.2 - Remove ProSocial graphic
- [ ] 5.3 - Clarify Anchor Circle vs Core Fractal
- [ ] 5.4 - Add "Reach Out" button

### Chunk F: Navigation & Site-Wide (30-60 minutes)
- [ ] 2.1 - Add Contact Us navigation button

### Chunk G: Design/Visual Updates (Time TBD)
Requires design decisions:
- [ ] 1.1 - Browser tab title (needs stakeholder input)
- [ ] 1.2 - Theme/background imagery (major undertaking)
- [ ] 3.2 - Improve "New Myth" graphic

---

## Blockers & Dependencies

### Waiting on Stakeholder Input
- [ ] 1.1 - What should the browser tab title say?
- [ ] 1.2 - Approved visual direction for theme changes
- [ ] 6.5 - Headshot image files need to be provided

### Dependencies
- Chunk G depends on design decisions being made first
- 6.5 (headshots) depends on receiving image files

---

## Session Log

| Date | Session ID | Chunks Completed | Notes |
|------|------------|------------------|-------|
| 2025-01-15 | XNsoC | Planning | Created tracking document |
| 2025-01-15 | hZvKc | Chunk B | Communities page overhaul completed |
| | | | |

---

## Notes & Decisions

*(Record important decisions, clarifications, or changes to scope here)*

---
