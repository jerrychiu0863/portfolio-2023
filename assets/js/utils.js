function splitText(target) {
  const texts = target.text().trim(" ").split("");
  target.contents().remove();

  for (let t of texts) {
    const html = String.raw;
    const el = html`<div class="d-inline-block overflow-hidden">
      <span class="d-inline-block char">${t === " " ? `&nbsp;` : t}</span>
    </div>`;
    target.append(el);
  }
}
