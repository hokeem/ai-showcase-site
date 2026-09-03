const data = window.SHOWCASE_DATA;

const caseGrid = document.getElementById("case-grid");
const catalog = document.getElementById("catalog");
const catalogSummary = document.getElementById("catalog-summary");
const viewButtons = document.querySelectorAll("[data-view]");
const heroButtons = document.querySelectorAll("[data-hero-view]");
const lightbox = document.getElementById("media-lightbox");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxNote = document.getElementById("lightbox-note");
const lightboxMedia = document.getElementById("lightbox-media");
const lightboxProof = document.getElementById("lightbox-proof");
const heroPreview = document.getElementById("hero-preview");

let activeView = "product";
let visibleWorks = [];

if (heroPreview && data.heroImage) {
  heroPreview.src = data.heroImage;
}

const formatDuration = (duration) => duration || "";

const getRatioValue = (item) => {
  if (!item?.width || !item?.height) return "16 / 9";
  return `${item.width} / ${item.height}`;
};

const escapeAttribute = (value = "") => String(value).replace(/"/g, "&quot;");

const getWorkTypeLabel = (work) => {
  if (work.format === "video") return "视频作品 / Video";
  if (work.format === "html") return "脚本页面 / Script";
  return "图文作品 / Image";
};

const renderWorkMedia = (work, poster = "", index = 0) => {
  const commonAttrs = `data-work-index="${index}"`;

  if (work.format === "video") {
    return `
      <button class="case-media case-media--video" type="button" ${commonAttrs} style="--work-ratio:${getRatioValue(work)}">
        <img src="${poster || "./assets/work-video-placeholder.svg"}" alt="${escapeAttribute(work.title)} video poster" loading="lazy" />
        <span class="case-media__play" aria-hidden="true">▶</span>
        <span class="case-media__label">播放 / Play</span>
      </button>
    `;
  }

  if (work.format === "html") {
    return `
      <a class="case-media case-media--html" href="${work.src}" target="_blank" rel="noreferrer" style="--work-ratio:4 / 3">
        <img src="${poster || "./assets/work-image-placeholder.svg"}" alt="${escapeAttribute(work.title)} preview" loading="lazy" />
        <span class="case-media__label">打开脚本 / Open Script</span>
      </a>
    `;
  }

  return `
    <button class="case-media case-media--image" type="button" ${commonAttrs} style="--work-ratio:${getRatioValue(work)}">
      <img src="${work.src}" alt="${escapeAttribute(work.title)}" loading="lazy" />
      <span class="case-media__label">查看 / View</span>
    </button>
  `;
};

const renderProductCase = (product) => `
  <article class="showcase-case showcase-case--product" style="--accent:${product.accent}">
    <div class="showcase-case__main">
      <p class="showcase-case__tag">${product.tag}</p>
      <h3>${product.title}</h3>
      <p class="showcase-case__description">${product.description}</p>
      <div class="product-card__methods">
        ${product.methods.map((method) => `<span>${method}</span>`).join("")}
      </div>
    </div>
    <div class="showcase-case__side">
      <div class="product-detail__headline">
        <p>我的角色 / Role</p>
        <strong>${product.role}</strong>
      </div>
      <div class="product-detail__headline">
        <p>项目结果 / Outcome</p>
        <strong>${product.outcome}</strong>
      </div>
      <div class="product-detail__sections">
        ${product.sections
          .map(
            (section) => `
              <section>
                <h4>${section.title}</h4>
                <p>${section.body}</p>
              </section>
            `
          )
          .join("")}
      </div>
    </div>
  </article>
`;

const renderCategoryCase = (category) => {
  const works = category.works || [];
  const candidateWorks = activeView === "image"
    ? works.filter((work) => work.format === "image")
    : activeView === "video"
      ? works.filter((work) => work.format === "video")
      : works;
  const featuredWork = candidateWorks[0];

  if (!featuredWork) return "";

  const index = visibleWorks.push({ category, work: featuredWork }) - 1;

  return `
    <article class="showcase-case" style="--accent:${category.accent}">
      <div class="showcase-case__main">
        <p class="showcase-case__tag">${category.tag}</p>
        <h3>${category.title}</h3>
        <p class="showcase-case__description">${category.description}</p>
        <div class="case-work">
          ${renderWorkMedia(featuredWork, featuredWork.poster || category.previewImage, index)}
          <div class="case-work__caption">
            <strong>${featuredWork.title}</strong>
            <span>${getWorkTypeLabel(featuredWork)}${formatDuration(featuredWork.duration) ? ` · ${formatDuration(featuredWork.duration)}` : ""}</span>
          </div>
        </div>
      </div>
      <div class="showcase-case__side">
        <div class="case-process">
          <h4>制作流程 / Workflow</h4>
          <ol>
            ${(category.workflow || []).map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>
        <div class="case-result">
          <h4>作品成果 / Result</h4>
          <p>${category.result || "已整理为可直接展示的内容案例。"}</p>
        </div>
      </div>
    </article>
  `;
};

const getCasesForView = () => {
  if (activeView === "product") {
    return [
      ...data.products.map(renderProductCase),
      ...data.categories
        .filter((category) => category.views?.includes("product"))
        .map(renderCategoryCase)
    ];
  }

  return data.categories
    .filter((category) => category.views?.includes(activeView))
    .map(renderCategoryCase);
};

const setActiveView = (nextView, { scroll = false } = {}) => {
  activeView = nextView;
  visibleWorks = [];

  const view = data.views[activeView];
  catalogSummary.innerHTML = `
    <p>${view.eyebrow}</p>
    <h2>${view.title}</h2>
    <span>${view.subtitle}</span>
  `;

  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === activeView);
  });

  caseGrid.innerHTML = getCasesForView().join("");

  if (scroll) {
    catalog.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const openLightbox = (category, work) => {
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  lightboxCategory.textContent = category.title;
  lightboxTitle.textContent = work.title;
  lightboxNote.textContent = [work.description, work.note, formatDuration(work.duration)]
    .filter(Boolean)
    .join(" · ");

  lightboxMedia.className = `lightbox__media lightbox__media--${work.format}`;
  lightboxMedia.innerHTML = work.format === "video"
    ? `<video src="${work.src}" controls autoplay playsinline preload="auto"></video>`
    : `<img src="${work.src}" alt="${escapeAttribute(work.title)}" />`;

  if (work.highlight || work.proofs?.length) {
    lightboxProof.innerHTML = `
      ${work.highlight ? `<div class="lightbox__highlight">${work.highlight}</div>` : ""}
      ${
        work.proofs?.length
          ? `<div class="lightbox__proof-grid">
              ${work.proofs
                .map(
                  (proof) => `
                    <figure class="lightbox__proof-card">
                      <img src="${proof.image}" alt="${escapeAttribute(proof.caption)}" loading="lazy" />
                      <figcaption>${proof.caption}</figcaption>
                    </figure>
                  `
                )
                .join("")}
            </div>`
          : ""
      }
    `;
  } else {
    lightboxProof.innerHTML = "";
  }
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxMedia.className = "lightbox__media";
  lightboxMedia.innerHTML = "";
  lightboxProof.innerHTML = "";
  document.body.style.overflow = "";
};

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveView(button.dataset.view);
  });
});

heroButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveView(button.dataset.heroView, { scroll: true });
  });
});

caseGrid.addEventListener("click", (event) => {
  const mediaButton = event.target.closest("[data-work-index]");
  if (!mediaButton) return;

  const item = visibleWorks[Number(mediaButton.dataset.workIndex)];
  if (!item) return;
  openLightbox(item.category, item.work);
});

lightbox.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-lightbox]")) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

setActiveView(activeView);
