# SECONROB – DGZfP 2026

Scientific results web page for the SECONROB project, presented at the
[DGZfP Annual Conference 2026](https://www.dgzfp.de).

👉 **Live page:** `https://<your-org-or-username>.github.io/seconrob_dgzfp_2026/`  
(enable GitHub Pages on the `main` branch, root folder – see [Deploy to GitHub Pages](#deploy-to-github-pages) below)

---

## How to add content

### Edit text

Open **`index.html`** in any text editor.  
Each topic is wrapped in a `<section>` block:

```html
<section id="my-topic">
  <h2>My Topic Heading</h2>
  <p>First paragraph of text.</p>
  <p>Second paragraph.</p>
</section>
```

- Change the text between `<p>…</p>` tags.
- Add more `<p>` tags for additional paragraphs.
- The navigation bar is built automatically from every `<section id="…">` + `<h2>`.

### Add a new section

Copy the following template and paste it **inside `<main>`**, before the
`</main>` closing tag:

```html
<section id="new-section-id">
  <h2>New Section Title</h2>
  <p>Your text goes here.</p>
</section>
```

### Add an image

1. Copy your image file (`.png`, `.jpg`, `.svg`, …) into the **`images/`** folder.
2. Insert a `<figure>` block where you want the image to appear:

```html
<figure>
  <img src="images/your-file.png" alt="Short description of the image" />
  <figcaption>Fig. X – Caption text shown below the image.</figcaption>
</figure>
```

Until the image file is present, a clearly labelled placeholder is shown
automatically so the page layout is preserved during editing.

### Side-by-side images (two columns)

```html
<div class="figure-row">
  <figure>
    <img src="images/left.png" alt="Left image" />
    <figcaption>Fig. A – Left caption.</figcaption>
  </figure>
  <figure>
    <img src="images/right.png" alt="Right image" />
    <figcaption>Fig. B – Right caption.</figcaption>
  </figure>
</div>
```

### Highlight metric cards

```html
<div class="metrics">
  <div class="metric-card">
    <span class="metric-value">42 %</span>
    <span class="metric-label">Improvement in X</span>
  </div>
</div>
```

---

## File structure

```
index.html        ← main page (edit this to add content)
css/style.css     ← all styling
js/main.js        ← navigation & scroll spy (no changes needed)
images/           ← put your image files here
README.md         ← this file
```

---

## Deploy to GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Source: **Deploy from a branch**.
3. Branch: `main` · Folder: `/ (root)`.
4. Click **Save**.

Your page will be live at
`https://<your-org-or-username>.github.io/seconrob_dgzfp_2026/`
within a minute.
