<script>
/* AUTO SEO SYSTEM — ScanLink Studio */

/* PAGE-WISE SEO MAP */
const SEO_DATA = {
  "index.html": {
    title: "ScanLink Studio - 50+ Free Online Tools",
    desc: "ScanLink Studio offers 50+ online tools including QR Scanner, QR Generator, Password Generator, Image Tools, Text Tools & more. Free, fast & secure.",
  },

  /* QR Tools */
  "qr-scanner-pro.html": {
    title: "QR Scanner Pro Online - Fast Camera QR Reader",
    desc: "Scan any QR code using your camera or image upload. Works on all devices. No app needed."
  },
  "qr-generator.html": {
    title: "QR Code Generator - Create Free QR Codes",
    desc: "Generate QR codes for text, links, WiFi, vCard and more in one click."
  },
  "batch-qr.html": {
    title: "Bulk QR Code Generator - Create Multiple QR Codes",
    desc: "Create multiple QR codes at once and download as ZIP."
  },
  "vcard-qr.html": {
    title: "vCard QR Generator - Contact QR Code Creator",
    desc: "Create QR codes for contact details, phone, WhatsApp & email."
  },
  "wifi-qr.html": {
    title: "WiFi QR Code Generator - Share WiFi Easily",
    desc: "Generate WiFi QR codes for fast network sharing."
  },
  "image-qr-scanner.html": {
    title: "Image QR Scanner - Decode QR from Image",
    desc: "Upload an image and extract QR content instantly."
  },

  /* Image Tools */
  "background-remover-touch.html": {
    title: "Background Remover Online - Touch Remove Editor",
    desc: "Remove background by touching points on image. 100% browser based."
  },
  "image-resize.html": {
    title: "Image Resizer Online - Resize JPG, PNG",
    desc: "Resize images to exact width and height instantly."
  },
  "image-compress.html": {
    title: "Image Compressor Online - Reduce Image Size",
    desc: "Compress JPG/PNG images without losing quality."
  },
  "jpg-to-png.html": {
    title: "JPG to PNG Converter - Convert Image Format",
    desc: "Convert JPG images to PNG online for free."
  },
  "png-to-jpg.html": {
    title: "PNG to JPG Converter - Online Photo Converter",
    desc: "Convert PNG images to JPG with one click."
  },
  "pdf-to-image.html": {
    title: "PDF to Image Converter - Extract Images",
    desc: "Convert your PDF pages into PNG/JPG images for free."
  },

  /* Text Tools */
  "password-generator.html": {
    title: "Password Generator - Create Strong Passwords",
    desc: "Generate secure, random passwords instantly."
  },
  "text-compare.html": {
    title: "Text Compare Tool - Compare Two Texts",
    desc: "Compare any two paragraphs or files instantly."
  },
  "encrypt-decrypt.html": {
    title: "Encrypt/Decrypt Tool - Secure Text Online",
    desc: "Encrypt or decrypt text using AES-256."
  },
  "json-formatter.html": {
    title: "JSON Formatter - Beautify & Validate JSON",
    desc: "Format, beautify, minify or validate JSON online."
  },

  /* Dev Tools */
  "calculator.html": {
    title: "Advanced Calculator Online",
    desc: "Scientific & basic calculator in your browser."
  },
  "color-picker.html": {
    title: "Color Picker Online - HEX, RGB, HSL",
    desc: "Pick colors and generate color codes."
  },
  "gradient-generator.html": {
    title: "Gradient Generator Online",
    desc: "Create CSS gradients with live preview."
  },
  "unit-converter.html": {
    title: "Unit Converter - Convert Any Unit",
    desc: "Convert length, weight, speed, temperature & more."
  },

  /* Default fallback */
  "_default": {
    title: "ScanLink Studio Tool",
    desc: "Use this free online tool from ScanLink Studio."
  }
};

/* DETECT CURRENT PAGE */
const page = window.location.pathname.split("/").pop() || "index.html";
const seo = SEO_DATA[page] || SEO_DATA["_default"];

/* APPLY SEO */
document.title = seo.title;

/* Description */
let d = document.querySelector('meta[name="description"]');
if (!d) {
  d = document.createElement("meta");
  d.name = "description";
  document.head.appendChild(d);
}
d.content = seo.desc;

/* Canonical */
let c = document.querySelector('link[rel="canonical"]');
if (!c) {
  c = document.createElement("link");
  c.rel = "canonical";
  document.head.appendChild(c);
}
c.href = "https://scanlinkstudio.online/" + page;

/* OG Tags Auto Apply */
function applyOG(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
}

applyOG("og:title", seo.title);
applyOG("og:description", seo.desc);
applyOG("og:url", c.href);
applyOG("og:image", "https://scanlinkstudio.online/og-image.png");

</script>
