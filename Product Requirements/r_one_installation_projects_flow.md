
# R-One Mobile (Field) — Installation Projects Flow & Feature Spec (EU)

> **Purpose:** Implementation-ready requirements for field technicians to execute installation **projects** (per station), complete **checklists**, and manage status through **Assigned → Working → Under Review → Completed**, including **Forwarded** and **Returned for Rework** paths.  
> **Audience:** Product, Design, Mobile Engineering, Backend/API, QA, Compliance.

---

## 1. Scope & Roles

- **Primary user:** Field technician (assignee)  
- **Secondary:** Site lead, regional coordinator, back-office reviewer (approve/return)  
- **In scope objects:** **Project (Station)**, **Checklist**, **Checklist Item**, **Comments**, **Activities**

---

## 2. Core Concepts & Entities

### 2.1 Project (Station/Site)
- **Required fields:**  
  - `projectId`, `name`, `address`, `program`, `customer`  
  - `coordinates` (**mandatory**): `latitude`, `longitude`  
  - `scheduledWindow`: start–end  
  - `assignedTeams` (ids)
- **Derived/managed:**  
  - `status` (from checklist roll-up), `%progress`, `lastUpdatedAt`
- **Field UI:**
  - **Header chips:** Station name, address, progress, **Navigate** button  
  - **Open in Maps:**  
    - Android: `geo:<lat>,<lng>?q=<lat>,<lng>(<Station Name>)`  
    - iOS: `http://maps.apple.com/?ll=<lat>,<lng>&q=<Station Name>`  
    - Web fallback: universal map link

### 2.2 Checklist
- **Fields:**  
  `checklistId`, `title`, `workflowId/workgroup`, `priority`, `assignedBy`, `assignedTo (user/team)`, `scheduledAt`, `status`, `%complete`, `lastUpdatedAt`, `attachmentsCount`, `commentsCount`, flags `{blocked, atRisk}`
- **Status values:**  
  `Assigned → Working → Under Review → Completed`  
  Side buckets: `Forwarded`, `Returned for Rework`

### 2.3 Checklist Item
- **All items mandatory** to complete  
- **Fields:**  
  `itemId`, `seq`, `description`, `type`, `unit`, `min`, `max`, `hint`, `evidenceRequired` (true for media type)  
  - **Types & UI:**
    - `text`: single/multi-line; length limit  
    - `number`: numeric with unit suffix; localized decimal  
    - `media`: photo/video capture first; multi-select; annotation; **evidence required**  
    - `files`: picker (PDF/DOC/etc.)  
    - `3-phase voltage`: inputs for **L–N, L–L, N–E** (V), auto-compute min/max/ΔV/% imbalance
- **State:** `valid`, `done`, `lastUpdatedAt`, `updatedBy`

### 2.4 Comments
- Text + optional media/files, `author`, `createdAt`, soft-deletable (grace period), fully auditable  
- **Visible to all project members**

### 2.5 Activities (Immutable Audit)
- System & user events with `actor`, `timestamp`, `type`, `payload (deltas)`; read-only.

---

## 3. Status Model & Transitions (Checklist)

- **Assigned**  
  - Actions: `Start Work`, `Forward`
- **Working**  
  - Actions: edit items, add evidence, `Submit for Review`, `Forward` (auto-unassign)
- **Under Review**  
  - Field: view-only for items; can comment  
  - Back office: `Accept` → **Completed** or `Return for Rework` → **Working**
- **Completed**  
  - Items locked; comments allowed
- **Forwarded**  
  - Ownership removed; original assignee keeps read-only reference
- **Returned for Rework**  
  - Reviewer notes shown; items unlocked; status auto-set to **Working** (entire checklist)

**Rules**
- Submit only if **all items** are valid & marked done  
- Media-type items require at least one evidence file before marking done  
- Forwarding requires **no recipient selection**; system auto-unassigns  
- Under Review/Completed: items locked; comments allowed  
- All transitions logged in Activities

---

## 4. Mobile IA & Navigation

### 4.1 Home
- Segments/tabs: `My Work`, `Forwarded`, `Under Review`, `Completed`
- Each list supports **search**, **filter chips**, and **sort** (see §10)

### 4.2 Project Detail (Station)
- Header: Name, address, **Navigate** (maps), scheduled window, overall progress  
- Sections:  
  - **My Checklists** (editable based on status/permissions)  
  - **All Checklists** (optional, view-only)

### 4.3 Checklist Detail
- Header: Title, status pill, assigned-by, priority  
- Primary actions: `Start Work/Resume`, `Forward`, `Submit` (eligible state)  
- Body: Progress bar, **Items list**, **Comments drawer**, **Activity timeline**

### 4.4 Forward Flow
- Tap `Forward` → confirmation modal → auto-unassign → checklist disappears from `My Work`, moves to `Forwarded`

### 4.5 Submit Flow
- Pre-submission validator sheet → shows unmet validations; blocked until resolved  
- On success: status → **Under Review**, items locked, reviewer notified

---

## 5. Item Type UX & Validation

- **Text**  
  - Inline field; max length (e.g., 500 chars); disallow whitespace-only  
  - Validation on blur; helper text for hints
- **Number**  
  - Numeric keypad; optional `[min, max]` bounds; unit suffix; localized decimals  
  - Error messaging tied to input
- **Media**  
  - Camera-first; multiple captures; thumbnails; annotate & caption  
  - At least one evidence required; EXIF stripped server-side
- **Files**  
  - Allowed types/size; progress & retry; virus check server-side
- **3-phase voltage**  
  - Inputs: **L–N**, **L–L**, **N–E** (V)  
  - Computed chips: `Min`, `Max`, `ΔV`, `% Imbalance`  
  - Thresholds (configurable) for each type; imbalance warnings if exceeded  
  - Out-of-range → warning banner + **required justification** note

---

## 6. Business Rules

- All items are **mandatory**  
- Media items cannot be marked done without evidence  
- **Forward** immediately unassigns; no recipient selection  
- Rework always returns the **entire checklist**  
- Comments visible to all project members  
- No SLA calculations anywhere in the flow

---

## 7. EU-Ready Standards & Best Practices

- **GDPR/Data Protection:**  
  - Lawful basis: legitimate interest; DPIA recommended  
  - Data minimization: capture only needed PII; blur toggle for faces; avoid personal imagery  
  - Privacy: EXIF stripped; only station coordinates stored  
  - Security: EU data residency; encryption at rest & in transit  
  - Right to rectification: allowed while in **Working**; audit preserved
- **Accessibility:** WCAG 2.1 A/AA  
  - Touch targets ≥ 44×44 pt; high contrast; proper labels for all inputs  
  - Logical focus order; error messages programmatically associated
- **Localization:** 24-hour time; metric units; locale-aware numbers; multi-language strings (EN fallback)
- **Health & Safety:**  
  - Electrical hazard notice if voltage readings breach thresholds; require acknowledgment

---

## 8. Offline-First & Sync

- **Offline editing** for assigned projects/checklists  
- Media queued; thumbnail + `Pending upload` state  
- Sync indicators: `Synced`, `Pending`, `Error`; manual **Sync now** + auto-retry  
- Conflict handling: last-write-wins at field level; merge for comments  
- Media compression on device; Wi-Fi-only upload toggle

---

## 9. Permissions & Security

- **RBAC:**  
  - Field tech: edit only assigned checklists; read Forwarded references; cannot approve  
  - Leads/Reviewers: view all in project; approve/return  
- **Device security:** App PIN/biometric; auto-lock; remote logout  
- **Audit:** immutable Activities for all transitions and edits

---

## 10. Lists — Search / Sort / Filter (Standard Story Rules)

- **Search:** keyword across station name, checklist title, ID; dynamic; min 1 character; timeout toast on delays  
- **Sort:** dataset-wide; toggle order asc → desc → none; refresh clears sort  
- **Filters as chips:** Project, Workflow, Status, Priority; removable; **Reset Filters**  
- **Persistence:** filters/search persist until cleared; pagination aware  
- **Delete actions:** **soft delete** with confirmation modal

---

## 11. Error States & Edge Cases

- Start Work with no network → allow offline start; queue event  
- Submit blocked → scroll to first invalid; inline error + summary sheet  
- Forward → auto-unassign; checklist disappears from My Work  
- Large media failure → keep item tentatively done; show retry/replace  
- Voltage out of range → warning + justification required  
- Checklist returned during editing → banner; unlock items; require re-submit  
- Assignee changed by back office → toast; move to Forwarded or remove from My Work

---

## 12. Analytics & Observability

- Time to first action (assignment → start), time in each status  
- Media capture success/fail, upload latency, offline duration  
- Forward reason distribution (system-tracked auto-unassign events)  
- Bottleneck checklists, reviewer turnaround

---

## 13. Acceptance Criteria Summary

- **AC1:** Station **coordinates are mandatory**; **Navigate** opens native maps with exact lat/long  
- **AC2:** Only **assigned** checklists appear under **My Work**; **Forwarded** and **Under Review** appear in separate tabs  
- **AC3:** All items must be completed; media items require at least one evidence file before submission  
- **AC4:** Submit is disabled until all items are valid & done; pre-submission validator lists unmet requirements  
- **AC5:** **Forward** instantly unassigns; no recipient prompt; activity logged  
- **AC6:** 3-phase voltage UI captures **L–N**, **L–L**, **N–E**; computes metrics; shows warnings outside thresholds; justification required if configured  
- **AC7:** Offline create/edit works; sync conflicts resolve per policy; user sees sync state  
- **AC8:** Lists follow Search/Sort/Filter standard rules; deletes are soft with confirmation  
- **AC9:** Audit trail captures all transitions, edits, forwards, and submissions with user, device, UTC time
