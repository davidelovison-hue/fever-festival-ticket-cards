# Configurable Ticket Cards – Plan View Standardization

## 1. Overview, Problem and Opportunity

Ticket cards (session-highlight modules displayed above the ticket selector on the Plan View) have previously demonstrated measurable revenue uplift in specific implementations (Rock in Rio +8% revenue). However, these implementations required engineering setup per Plan, preventing scalable adoption across Marketplace and WhL.

This initiative standardizes ticket cards as a reusable Plan View capability configurable entirely from our backoffice (Feverzone). The objective is to transform a previously custom implementation into a scalable, operationally autonomous feature.

**Existing examples:**
- https://feverup.com/m/371468?session_ids=227757762 → cards horizontal (mobile)
- https://feverup.com/m/498560 → cards horizontal (mobile)
- https://feverup.com/m/147816 → cards vertical (mobile)
- https://feverup.com/m/474974 → cards vertical (mobile)

---

## 2. Objective

Scale configurable ticket cards across Marketplace and WhL Plans by enabling Backoffice/FZ configuration and reusable card templates.

Specifically:
- Remove per-Plan engineering setup.
- Standardize rendering and behavior.
- Enable reuse across multiple Plan IDs.
- Maintain a fixed Design System component.
- Support Translations

---

## 3. Hypothesis

For Plans with multiple sessions or differentiated ticket tiers, structured visual cards improve clarity and guide session selection compared to relying solely on the ticket selector.

---

## 4. Applicability & Assumptions

Cards can be applied to any Plan where session differentiation benefits from visual emphasis.

- No system-enforced minimum session requirement.
- No restriction by vertical.

**Core assumptions:**
- Cards link only to sessions within the same Plan.
- Ticket selector remains the source of truth.
- Card design and layout are fixed.

---

## 5. UX & Rendering Logic

### 5.1 Rendering Placement (TBC)

For the first iteration, cards can be positioned:
- At the top of the Plan description, or
- At the bottom of the Plan description

Final placement will be confirmed as part of the PRD review and remain consistent across Marketplace and WhL.

### 5.2 Display Rules (TBC)

**Mobile**

| # Cards | Behavior |
|--------|----------|
| 1 | Full width |
| 2 | Stacked vertically |
| ≥3 | Horizontal swipe carousel |

**Desktop**

| # Cards | Behavior |
|--------|----------|
| 1 | Centered |
| 2 | Side-by-side |
| ≥3 | Horizontal carousel |

Design and spacing follow the existing Design System.

### 5.3 Interaction Flow

1. Plan View loads.
2. If configuration exists → cards render.
3. User clicks a card.
4. The mapped session is pre-selected in the ticket selector.
5. Selected card is visually highlighted.
6. User continues purchase flow.

If configuration is missing or invalid:
- Cards do not render.
- Ticket selector functions normally.

### 5.4 Session State Handling

| Session State | Card Behavior |
|---------------|---------------|
| Available | Clickable |
| Sold Out | Visible but disabled (TBC) |
| Hidden / Unpublished | Not rendered |
| Deleted | Not rendered |

*Open:* With this approach, if a new session replaces the old one due to a new tier (early bird → Tier 1), the card will no longer render. Can we automate it based on some parameters (at session type level maybe)?

---

## 6. Configuration approach (TBC)

We propose introducing a **Cards Configuration** section in Backoffice.

### Step 1 – Create Card Template

Backoffice users create a reusable **Card Template ID** containing:

| Field | Required |
|-------|----------|
| card_title | Yes |
| card_body | Yes |
| card_image | Yes |
| card_CTA_label | Yes |
| card_CTA_status (on/off) | Yes |

The template defines content and structure, not session mapping.

### Step 2 – Assign Template to Plan

Under each Plan:
- Assign one or multiple Card Template IDs.
- Map each card to a specific session_id.
- Define card order/position in the plan view.

This allows:
- Reuse of templates across multiple Plans.
- Independent session mapping per Plan.
- No hardcoded HTML.
- Consistent rendering across Marketplace and WhL.

**Card Assignment Fields (Per Plan)**

| Field | Required | Description | Notes |
|-------|----------|-------------|-------|
| plan_id | Yes | Parent Plan | |
| template_id | Yes | Reusable template | |
| session_id | No | Must belong to Plan | In this case, will just render on the plan view |
| card_order | Yes | Integer ordering | |

**Validation Rules**
- session_id must belong to plan_id.
- No duplicate session mapping within a Plan (TBC)
- Template must exist before assignment.
- Required template fields must be complete.

---

## 7. Analytics

- **card_impression:** plan_id, session_id, template_id, card_order
- **card_click:** plan_id, session_id, template_id, card_order
- **purchase_completed:** selected_session_id, card_selected (boolean)

---

## 8. Permissions

Backoffice access limited to:
- Sales Ops
- Content Managers

---

## 9. Out of Scope

- Layout customization per Plan.
- Styling overrides.
- Seat map integration.
- Cross-Plan session mapping.
- Ticket selector redesign.
- Dynamic pricing logic.

---

## 10. Open points

- Define standardized card design and FE UX. Based on that, we can draw the final card configuration fields.
- Define card mgmt model and backoffice configuration: Template creation and later planID assignment vs Template creation and planID assignment altogether.
- Define behaviour when session rules exist (e.g. publication of new tier price, with new sessionID).
