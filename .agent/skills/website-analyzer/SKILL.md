---
name: website-analyzer
description: Analyzes a target website's functionality, technology stack, and design system from a URL, and generates a detailed design document for replication. Use this skill when the user asks to "clone", "replicate", "analyze" a website, or requests "web page analysis and design".
---

# Website Analyzer

This skill guides you through the process of analyzing a website and designing a plan to replicate it.

## Process

### 1. Investigation using Tools
Use `read_url_content` (or `browser_subagent` if interaction/visuals are complex) to fetch the website content.
Analyze the returned HTML/Markdown to identify:
- **Meta Tags & Scripts**: Look for generator tags (Next.js, Gatsby), library scripts (React, Vue, jQuery), and analytics.
- **CSS Classes**: Identify CSS frameworks (Tailwind `text-xl`, Bootstrap `btn-primary`, BEM `block__element`).
- **Structure**: Determine the layout strategy (Flexbox, Grid, semantic HTML).

### 2. Analysis Report
Provide a structured analysis of the target website:

#### A. Global Information
- **Title & Description**: From meta tags.
- **Purpose**: What does the site do?

#### B. Technology Stack (Inferred)
- **Frontend Framework**: React, Vue, Svelte, or Vanilla JS?
- **Styling**: Tailwind CSS, CSS Modules, Styled Components, Bootstrap?
- **Build Tools**: Vite, Next.js, Webpack?
- **State/Data**: Apollo, Redux, React Query? (if visible in global state window vars)

#### C. Design System & UX
- **Color Palette**: Primary, Secondary, Background, Text colors. inferred from CSS variables or common classes.
- **Typography**: Font families (Google Fonts links), Heading styles.
- **Layout**: Sidebar? Header/Footer? Grid/Flex?
- **Components**: List reusable UI components (e.g., "Hero Card", "Feature List", "Pricing Table").

### 3. Replication Design Document (RDD)
Based on the analysis, create a plan to build the clone.

#### A. Project Setup
- Recommended `npx` init command (e.g., `npx create-next-app@latest`).
- Dependency installation list.

#### B. Component Hierarchy
- Tree structure of components.
  - `Layout`
    - `Header`
    - `Main`
      - `HeroSection`
      - `FeaturesSection`
    - `Footer`

#### C. Data Structure
- Mock data schemas if the site is dynamic.

#### D. Implementation Roadmap
1.  **Setup**: Init project + install libs.
2.  **Styles**: Config tailwind/theme.
3.  **Components**: Build atoms/molecules.
4.  **Pages**: Assemble pages.

## Example Use Case
User: "Clone this site https://example.com"
Agent:
1. `read_url_content("https://example.com")`
2. Analyzes output.
3. Produces "Analysis & Design Plan".
