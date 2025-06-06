# 🛠 Developer Documentation Style Guide

## 📚 Overview of Documentation Types

The Diátaxis framework categorizes documentation into four distinct types, each serving a unique purpose and audience:

| Type             | Purpose                        | Audience Need            | Characteristics               |
|------------------|--------------------------------|---------------------------|-------------------------------|
| **Tutorial**     | Learning through practice      | "I want to get started"   | Practical, guided, engaging   |
| **How-To Guide** | Solving specific problems      | "I need to accomplish X"  | Task-oriented, step-by-step   |
| **Reference**    | Providing technical details    | "I need to look this up"  | Accurate, comprehensive, concise |
| **Explanation**  | Understanding concepts         | "I want to understand"    | Clarifying, in-depth, contextual |

## 📝 Style Guide for Tutorials

### 🎯 Objective: Cultivate Confidence

- Assume minimal prior knowledge from the reader.
- Focus on achieving practical, meaningful outcomes.
- Maintain a balance between theory and hands-on practice.

### 📐 Structure

1. **Title**  
   Employ action-oriented, descriptive titles.  
   Examples:  
   - "Getting Started with SpriteAI"  
   - "Create Your First Sprite in 10 Minutes"

2. **Introduction**  
   Clearly state the tutorial's objectives and their relevance.

3. **Prerequisites**  
   Specify required tools, versions, and any necessary background knowledge.

4. **Step-by-Step Instructions**  
   Provide clear, sequential, and unambiguous steps, incorporating:
   - Code blocks with syntax highlighting
   - Terminal commands
   - Visual aids (screenshots or diagrams) where applicable

5. **Outcome**  
   Demonstrate the expected result, such as a functional sprite or completed project.

6. **Further Resources**  
   Suggest related documentation, including How-To Guides, Explanations, or Reference materials.

### 🗣 Communication Style

- Utilize second-person pronouns ("you") and active voice.
- Maintain a professional yet approachable tone.
- Use contractions judiciously to enhance readability.
- Provide explicit instructions:
  
  ✅ "Execute the following command:"  
  ❌ "You may want to consider running..."

### 💡 Code Examples and Output

- Implement appropriate syntax highlighting for code blocks.
- Include explanatory comments for complex code segments.
- Ensure all code examples are functional and can be copied directly.

Example:

```javascript
// Initialize the SpriteAI application
const spriteAI = require('spriteai');
const app = spriteAI.createApp();

// Generate a basic sprite
app.generateSprite('character', 32, 32);
```

### ⚠️ Common Pitfalls to Avoid

- Refrain from extensive theoretical discussions or architectural deep-dives.
- Minimize the need for readers to navigate between multiple documents.
- Avoid ambiguous or open-ended instructions.

## 🧭 Guidelines for Other Documentation Types

### 📌 How-To Guides

- Address one specific task or problem.
- Assume fundamental knowledge of the subject.
- Provide concise, actionable information.

Examples:
- "How to Export Sprites for Unity"
- "Configuring SpriteAI for Web Applications"

### 🧾 Reference Documentation

- Detail APIs, schemas, and commands comprehensively.
- Ensure information is current, complete, and unambiguous.
- Organize content in easily scannable formats (e.g., lists, tables).

### 📖 Explanations

- Elucidate the underlying principles and mechanisms.
- Utilize analogies, diagrams, and contextual information.
- Cater to both newcomers and advanced users seeking deeper understanding.

## ✅ Tutorial Writing Checklist

- [ ] Does the tutorial result in a practical, useful outcome?
- [ ] Are the steps presented in a logical, executable sequence?
- [ ] Can code snippets be copied and used without modification?
- [ ] Are explanations concise and directly relevant to the task?
- [ ] Does the overall tone encourage and support the reader?
- [ ] Are additional resources or next steps provided for further learning?

By adhering to these guidelines, we can create documentation that is not only informative but also accessible and engaging for our diverse user base.
