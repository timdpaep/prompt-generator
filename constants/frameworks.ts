import type { Framework } from "../types";

/**
 * --- FRAMEWORK MANAGEMENT ---
 * To add, edit, or remove a prompt framework, modify the array below.
 * Each framework is an object with the following properties:
 *
 * - id: A unique string identifier (e.g., 'risen').
 * - name: The display name of the framework (e.g., 'RISEN').
 * - description: A short description shown in the selector.
 * - fields: An array of objects, where each object represents a form field.
 *   - id: A unique string identifier for the field (e.g., 'role').
 *   - label: The text displayed above the textarea (e.g., 'Role').
 *   - placeholder: The hint text inside the textarea.
 * - example: (Optional) A string containing a complete example prompt for the framework.
 *
 * Simply follow this structure to manage the frameworks available in the app.
 */
export const FRAMEWORKS: Framework[] = [
  {
    id: "basic",
    name: "Basic Prompt",
    description: "The fundamental ingredients for a good prompt.",
    fields: [
      {
        id: "role",
        label: "Role",
        placeholder:
          "e.g., You are a senior export financing advisor for EU startups.",
      },
      {
        id: "task",
        label: "Task",
        placeholder: "e.g., Write a city guide for business travelers.",
      },
      {
        id: "context",
        label: "Context",
        placeholder:
          "e.g., The reader is in Paris for the first time and has 48 hours...",
      },
      {
        id: "constraints",
        label: "Constraints",
        placeholder: "e.g., Max 500 words. Use British English.",
      },
      {
        id: "output",
        label: "Output Format",
        placeholder: "e.g., Bulleted itinerary with timestamps.",
      },
      {
        id: "tone",
        label: "Tone",
        placeholder: "e.g., Light-hearted, formal,...",
      },
      {
        id: "examples",
        label: "Examples",
        placeholder: "e.g., Add example input and example output.",
      },
    ],
    example: `## ROLE
You are a senior product marketing manager at Apple.

## TASK
Write an e-mail to your boss, Tim Cook, sharing the positive news.

## CONTEXT
You have just unveiled the latest Apple product in collaboration with Tesla, the Apple Car and received 12000 pre-orders, which is 200% higher than the target.

## CONSTRAINTS
The email should include a tl;dr (tool long, didn't read) section, project background (why this product came into existence), business results section (quantifiable business metrics), and end with a section thanking the product and engineering teams.

## OUTPUT FORMAT
Plain text that I can copy paste into my mail client. Don't add extra formatting.

## TONE
Use clear and concise language and write in a confident yet friendly tone.`,
  },
  {
    id: "risen",
    name: "RISEN",
    description: "Role, Input, Steps, Evaluation, Narrowing",
    fields: [
      { id: "role", label: "Role", placeholder: "Enter value for Role..." },
      { id: "input", label: "Input", placeholder: "Enter value for Input..." },
      { id: "steps", label: "Steps", placeholder: "Enter value for Steps..." },
      {
        id: "evaluation",
        label: "Evaluation",
        placeholder: "Enter value for Evaluation...",
      },
      {
        id: "narrowing",
        label: "Narrowing",
        placeholder: "Enter value for Narrowing...",
      },
    ],
    example: `## ROLE
Je bent een onderwijskundige AI-coach die lesmateriaal ontwerpt voor hbo-studenten (2e jaar, informatica).

## INPUT
Ik geef op 3 november een gastcollege “AI-ethiek in praktijk” van 90 minuten. De studenten kennen basis-LLM’s, maar niet de valkuilen (bias, privacy, intellectueel eigendom).

## STEPS
1) Formuleer leerdoelen op “begrijpen/toepassen”.
2) Ontwerp een sessieflow met tijdsindeling (minuten) en actieve werkvormen.
3) Voeg 2 korte casussen toe (NL/BE-context) met bespreekvragen.
4) Ontwerp 1 micro-assessment (5 quizvragen) met antwoordsleutel.

## EVALUATION
Output is toetsbaar (observeerbaar gedrag), realistisch in 90 min, met bronvermelding waar relevant.

## NARROWING
Schrijf in het Nederlands, max. 800 woorden, gebruik kopjes en lijstjes.`,
  },
  {
    id: "costar",
    name: "COSTAR",
    description: "Context, Objective, Style, Tone, Audience, Response",
    fields: [
      {
        id: "context",
        label: "Context",
        placeholder: "Enter value for Context...",
      },
      {
        id: "objective",
        label: "Objective",
        placeholder: "Enter value for Objective...",
      },
      { id: "style", label: "Style", placeholder: "Enter value for Style..." },
      { id: "tone", label: "Tone", placeholder: "Enter value for Tone..." },
      {
        id: "audience",
        label: "Audience",
        placeholder: "Enter value for Audience...",
      },
      {
        id: "response",
        label: "Response",
        placeholder: "Enter value for Response...",
      },
    ],
    example: `## CONTEXT
Ik lanceer in januari in Gent een workshop “LLM-automations voor docenten”.

## OBJECTIVE
Schrijf een LinkedIn-post die inschrijvingen triggert en leeruitkomsten concreet maakt.

## STYLE
Informatief, concreet, korte alinea's, geen hype.

## TONE
Vriendelijk, deskundig, geloofwaardig.

## AUDIENCE
Hogeronderwijsdocenten en opleidingscoördinatoren in NL/BE.

## RESPONSE
1) Hook; 2) drie concrete resultaten; 3) mini-case; 4) duidelijke CTA met datum/locatie; 5) vijf relevante hashtags.`,
  },
  {
    id: "care",
    name: "CARE",
    description: "Context, Action, Result, Example",
    fields: [
      {
        id: "context",
        label: "Context",
        placeholder: "Enter value for Context...",
      },
      {
        id: "action",
        label: "Action",
        placeholder: "Enter value for Action...",
      },
      {
        id: "result",
        label: "Result",
        placeholder: "Enter value for Result...",
      },
      {
        id: "example",
        label: "Example",
        placeholder: "Enter value for Example...",
      },
    ],
    example: `## CONTEXT
Ik wil studenten leren om “prompt-redeneren” toe te passen in plaats van losse vragen te stellen.

## ACTION
Ontwerp een oefenopdracht waarin studenten met een LLM een datastrategie-memo genereren, inclusief beoordelingsrubric.

## RESULT
Stap-voor-stap opdracht (±45 min) met inlevercriteria en reflectievragen.

## EXAMPLE
### Voorbeeld van sterke studentoutput (samenvatting)
**Titel:** Datastrategie voor Studierendement Dashboard (Hogeschool X)
**Kernbeslissingen:**
- **Doel:** Verhoog de retentie in jaar 1 met 8% in AY 2025–26.
- **Kern-KPI's:** Uitval %, herkansingsratio, studiepunten per blok (SP/B), aanwezigheid in week 1–6.
- **Databronnen:** Studentinformatiesysteem (SIS), LMS-logs, roosterdata, mentorgesprekken (geanonimiseerd).`,
  },
  {
    id: "ape",
    name: "APE",
    description: "Action, Purpose, Expectation",
    fields: [
      {
        id: "action",
        label: "Action",
        placeholder: "Enter value for Action...",
      },
      {
        id: "purpose",
        label: "Purpose",
        placeholder: "Enter value for Purpose...",
      },
      {
        id: "expectation",
        label: "Expectation",
        placeholder: "Enter value for Expectation...",
      },
    ],
    example: `## ACTION
Genereer 10 examenvragen (mix open/meerkeuze) over transformer-architectuur en contextvensters.

## PURPOSE
Geschikt voor 2e-jaars AI-vak; toets zowel begrip als toepassing.

## EXPECTATION
Per vraag: leerdoel, moeilijkheid (1–5), correct antwoord, één veelgemaakte fout. Output als Markdown-tabel, max. 400 woorden.`,
  },
  {
    id: "tag",
    name: "TAG",
    description: "Task, Action, Goal",
    fields: [
      { id: "task", label: "Task", placeholder: "Enter value for Task..." },
      {
        id: "action",
        label: "Action",
        placeholder: "Enter value for Action...",
      },
      { id: "goal", label: "Goal", placeholder: "Enter value for Goal..." },
    ],
    example: `## TASK
Schrijf een e-mail aan opleidingshoofden om een gratis lunch-&-learn “Agentic workflows met LLM's" te boeken.

## ACTION
Drie alinea's: (1) probleemherkenning; (2) wat leren ze; (3) logistiek/voorstel. Voeg onderwerpregel en PS met kalenderlink-placeholder toe.

## GOAL
Noem drie concrete benefits en sluit af met één simpele CTA (antwoord met voorkeursdatum). Taal: NL, toon: professioneel.`,
  },
  {
    id: "rtf",
    name: "RTF",
    description: "Role, Task, Format",
    fields: [
      { id: "role", label: "Role", placeholder: "Enter value for Role..." },
      { id: "task", label: "Task", placeholder: "Enter value for Task..." },
      {
        id: "format",
        label: "Format",
        placeholder: "Enter value for Format...",
      },
    ],
    example: `## ROLE
Senior Python-mentor.

## TASK
Review onderstaand FastAPI-endpoint op performance en veiligheid; refactor waar nodig.
[PLAK HIER DE CODE]

## FORMAT
1) High-level review (bulletpoints); 2) refactor-codeblok; 3) korte load-testsuggesties. Max. 350 woorden.`,
  },
  {
    id: "clear",
    name: "CLEAR",
    description: "Challenge, Limitation, Effect, Action, Result",
    fields: [
      {
        id: "challenge",
        label: "Challenge",
        placeholder: "Enter value for Challenge...",
      },
      {
        id: "limitation",
        label: "Limitation",
        placeholder: "Enter value for Limitation...",
      },
      {
        id: "effect",
        label: "Effect",
        placeholder: "Enter value for Effect...",
      },
      {
        id: "action",
        label: "Action",
        placeholder: "Enter value for Action...",
      },
      {
        id: "result",
        label: "Result",
        placeholder: "Enter value for Result...",
      },
    ],
    example: `## CHALLENGE
Mijn les "prompt-engineering basics” levert inconsistente leerresultaten.

## LIMITATION
90 minuten, gemengde instroom, geen voorafgaande Python-kennis.

## EFFECT
Studenten raken verward door framework-jargon en missen evaluatiecriteria.

## ACTION
Herontwerp de les als "practice-first” met drie mini-sprints (10–15 min): doel, voorbeeld, opdracht, peer-check.

## RESULT
Nieuw draaiboek met tijdsindeling, meetbare leeruitkomsten en een exit-ticket (drie vragen). Max. 600 woorden.`,
  },
  {
    id: "bab",
    name: "BAB",
    description: "Before, After, Bridge",
    fields: [
      {
        id: "before",
        label: "Before",
        placeholder: "Enter value for Before...",
      },
      { id: "after", label: "After", placeholder: "Enter value for After..." },
      {
        id: "bridge",
        label: "Bridge",
        placeholder: "Enter value for Bridge...",
      },
    ],
    example: `## BEFORE
Opleidingshoofden worstelen met versnipperde AI-initiatieven zonder meetbare impact.

## AFTER
Een 6-weekse traject met agentic workflows reduceert administratie met 20% en levert herbruikbare AI-assets voor docenten.

## BRIDGE
Schrijf een landingspagina-tekst (hero, social proof, drie value-blocks met bewijs, korte FAQ, CTA) in helder NL, max. 300 woorden.`,
  },
  {
    id: "rodes",
    name: "RODES",
    description: "Role, Objective, Details, Examples, Sense-check",
    fields: [
      { id: "role", label: "Role", placeholder: "Enter value for Role..." },
      {
        id: "objective",
        label: "Objective",
        placeholder: "Enter value for Objective...",
      },
      {
        id: "details",
        label: "Details",
        placeholder: "Enter value for Details...",
      },
      {
        id: "examples",
        label: "Examples",
        placeholder: "Enter value for Examples...",
      },
      {
        id: "sense_check",
        label: "Sense-check",
        placeholder: "Enter value for Sense-check...",
      },
    ],
    example: `## ROLE
Didactisch ontwerper gespecialiseerd in AI-vaardigheden voor docenten.

## OBJECTIVE
Bouw een 4-weken micro-cursus “LLM-automations in het onderwijs” (4×2 uur) met huiswerk en evaluatie.

## DETAILS
Theorie 30% / praktijk 70%; tools: ChatGPT, lokale RAG, no-code automatisering; toon nuchter; taal NL; inclusief toegankelijkheid (WCAG-tips).

## EXAMPLES
[Twee voorbeeldopdrachten met voorbeeldantwoorden (goed/matig).]

## SENSE-CHECK
Controleer haalbaarheid (tijd, voorkennis, middelen) en noteer aannames/risico's + mitigatie`,
  },
];
