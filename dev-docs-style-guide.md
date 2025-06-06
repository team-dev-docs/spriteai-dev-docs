# 🛠 Developer Documentation Style Guide

## 📚 Overview of Documentation Types

The Diátaxis framework categorizes documentation into four types, each serving a distinct purpose and audience:

| Type             | Purpose                        | Audience Need            | Character                     |
|------------------|--------------------------------|---------------------------|-------------------------------|
| **Tutorial**     | Learning through practice      | "I want to get started"   | Practical, guided, friendly   |
| **How-To Guide** | Solving specific problems      | "I want to accomplish X"  | Task-oriented, step-by-step   |
| **Reference**    | Describing technical details   | "I need to look this up"  | Accurate, comprehensive, concise |
| **Explanation**  | Understanding concepts         | "I want to understand"    | Clarifying, in-depth, discursive |

## ✨ Guidelines for Tutorials

### 🎯 Objective: Instill Confidence

- Assume minimal prior knowledge from the reader.
- Focus on achieving practical and meaningful outcomes.
- Prioritize hands-on experience over theoretical explanations.

### 📐 Structure

1. **Title**  
   Employ action-oriented titles.  
   Examples:  
   - "Getting Started with SpriteAI"  
   - "Create Your First Sprite in 10 Minutes"

2. **Introduction**  
   Clearly state the tutorial's objective and its relevance.

3. **Prerequisites**  
   Enumerate required tools, versions, and necessary background knowledge.

4. **Procedure**  
   Provide clear, sequential, and unambiguous instructions. Include:
   - Code blocks with proper syntax highlighting
   - Command-line instructions
   - Visual aids (where applicable)

5. **Outcome**  
   Demonstrate the expected result, such as a screenshot or functional description.

6. **Further Resources**  
   Suggest relevant How-To Guides, Explanations, or Reference documentation.

### 🗣 Tone and Language

- Utilize second-person pronouns ("you") and active voice.
- Maintain a professional yet approachable tone.
- Use contractions judiciously (e.g., "you'll", "let's", "don't").
- Provide explicit instructions:
  
  ✅ "Execute the following command:"  
  ❌ "You may want to consider running..."

### 💡 Code Examples

- Implement appropriate syntax highlighting.
- Include comments to elucidate complex sections.
- Ensure all code is functional and can be copied directly.

Example:

```bash
# Install SpriteAI globally
npm install -g spriteai
```

```javascript
// Initialize a new SpriteAI project
const spriteAI = require('spriteai');
const project = spriteAI.createProject('myGame');
project.initialize();
```

### ⚠️ Common Pitfalls to Avoid

- Refrain from extensive theoretical discussions or architectural overviews.
- Avoid requiring users to navigate multiple documents simultaneously.
- Ensure all steps are specific and well-defined.

## 🧭 Guidelines for Other Documentation Types

### 📌 How-To Guides

- Address a single, specific issue.
- Assume foundational knowledge.
- Provide concise, actionable instructions.

Examples:
- "Deploying a SpriteAI Project to Cloud Platforms"
- "Optimizing Sprite Generation for Performance"

### 🧾 Reference Documentation

- Provide comprehensive details on APIs, schemas, and commands.
- Ensure information is current, complete, and unambiguous.
- Utilize structured formats such as tables and lists for clarity.

### 📖 Explanations

- Elucidate the underlying principles and mechanisms.
- Employ analogies, diagrams, and contextual information.
- Cater to both newcomers and advanced users seeking deeper understanding.

## ✅ Tutorial Quality Assurance Checklist

- [ ] Does the tutorial result in a practical, useful outcome?
- [ ] Are the steps presented in a logical, executable sequence?
- [ ] Can the code examples be directly copied and used?
- [ ] Are explanations concise and practically focused?
- [ ] Is the overall tone professional yet encouraging?
- [ ] Are additional resources or next steps provided?

---

This style guide aims to ensure consistency and quality across all SpriteAI documentation, enhancing the developer experience and facilitating efficient use of our tools and APIs.
