const data = window.SHOWCASE_DATA;

const categoryGrid = document.getElementById("category-grid");
const catalogSummary = document.getElementById("catalog-summary");
const viewButtons = document.querySelectorAll("[data-view]");
const drawer = document.getElementById("category-drawer");
const drawerTitle = document.getElementById("drawer-title");
const drawerTag = document.getElementById("drawer-tag");
const drawerDescription = document.getElementById("drawer-description");
const drawerWorks = document.getElementById("drawer-works");
const lightbox = document.getElementById("media-lightbox");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxNote = document.getElementById("lightbox-note");
const lightboxMedia = document.getElementById("lightbox-media");
const lightboxProof = document.getElementById("lightbox-proof");
const heroPreview = document.getElementById("hero-preview");
let activeView = "content";

if (heroPreview && data.heroImage) {
  heroPreview.src = data.heroImage;
}

const formatDuration = (duration) => duration || "";

const getRatioValue = (item) => {
  if (!item?.width || !item?.height) return "16 / 9";
  return `${item.width} / ${item.height}`;
};

const getMediaLabel = (work) => {
  if (work.format === "video") return "播放预览 / Play Preview";
  if (work.format === "html") return "细看脚本 / View Script";
  return "查看预览 / View Preview";
};

const renderThumb = (category, index) => {
  const { thumb: src, thumbFormat: format, title, previewImage } = category;
  if (format === "video") {
    return `
      <div class="category-card__thumb-media">
        <img
          src="${previewImage || src}"
          alt="${title} preview"
          loading="${index < 4 ? "eager" : "lazy"}"
          fetchpriority="${index < 2 ? "high" : "auto"}"
        />
        <div class="category-card__thumb-badge">
          <span>封面预览 / Preview</span>
        </div>
      </div>
    `;
  }

  if (format === "html") {
    return `
      <div class="category-card__thumb-html">
        <img
          src="${previewImage || "./assets/work-image-placeholder.svg"}"
          alt="${title} preview"
          loading="${index < 4 ? "eager" : "lazy"}"
          fetchpriority="${index < 2 ? "high" : "auto"}"
        />
        <div class="category-card__thumb-badge">
          <span>脚本预览 / Script Preview</span>
        </div>
      </div>
    `;
  }

  return `<img src="${previewImage || src}" alt="${title} preview" loading="${index < 4 ? "eager" : "lazy"}" fetchpriority="${index < 2 ? "high" : "auto"}" />`;
};

const renderWorkPreview = (work, { lightbox = false, poster = "" } = {}) => {
  if (work.format === "video") {
    return lightbox
      ? `<video src="${work.src}" controls autoplay playsinline preload="metadata"></video>`
      : `
          <div class="work-card__video-poster">
            <img src="${poster || "./assets/work-video-placeholder.svg"}" alt="${work.title} video poster" loading="lazy" />
            <span class="work-card__play" aria-hidden="true">▶</span>
          </div>
        `;
  }

  if (work.format === "html") {
    return lightbox
      ? `<iframe src="${work.src}" title="${work.title}" loading="lazy"></iframe>`
      : `
          <div class="work-card__html-preview">
            <iframe src="${work.src}" title="${work.title}" loading="lazy" tabindex="-1"></iframe>
            <div class="work-card__html-overlay">
              <span>脚本缩略预览 / Script Preview</span>
              <strong>${work.title}</strong>
              <small>点击下方按钮细看完整脚本 / Use the button below to open the full script</small>
            </div>
          </div>
        `;
  }

  return `<img src="${work.src}" alt="${work.title}" loading="lazy" />`;
};

const categoryCardTemplate = (category, index) => `
  <article class="category-card" data-category-id="${category.id}" style="--accent:${category.accent}">
    <p class="category-card__tag" style="color:${category.accent}">${category.tag}</p>
    <h3>${category.title}</h3>
    <p>${category.description}</p>
    <div class="category-card__thumb">
      ${renderThumb(category, index)}
    </div>
    <div class="category-card__footer">
      点击进入看完整预览 / Browse Works
      <span>→</span>
    </div>
  </article>
`;

const workCardTemplate = (category, work, index) => `
  <article class="work-card">
    <div
      class="work-card__media work-card__media--${work.format}"
      style="--work-ratio:${getRatioValue(work)}"
      data-open-media
      data-category-id="${category.id}"
      data-work-index="${index}"
    >
      ${renderWorkPreview(work, { poster: work.poster || category.previewImage })}
    </div>
    <div class="work-card__meta">
      <p>${category.title}${formatDuration(work.duration) ? ` · ${formatDuration(work.duration)}` : ""}</p>
      <h4>${work.title}</h4>
      <span>${work.description || ""}</span>
      <span>${work.note || ""}</span>
      ${work.highlight ? `<strong class="work-card__highlight">${work.highlight}</strong>` : ""}
    </div>
    <div class="work-card__actions">
      <button
        class="action-chip action-chip--primary"
        type="button"
        data-open-media
        data-category-id="${category.id}"
        data-work-index="${index}"
      >
        ${getMediaLabel(work)}
      </button>
      <a class="action-chip" href="${work.src}" target="_blank" rel="noreferrer">
        新标签打开 / Open in New Tab
      </a>
    </div>
  </article>
`;

const productCardTemplate = (product) => `
  <article class="product-card" data-product-id="${product.id}" style="--accent:${product.accent}">
    <p class="product-card__tag" style="color:${product.accent}">${product.tag}</p>
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <div class="product-card__meta">
      <span>我的角色</span>
      <strong>${product.role}</strong>
    </div>
    <div class="product-card__outcome">${product.outcome}</div>
    <div class="product-card__methods">
      ${product.methods.map((method) => `<span>${method}</span>`).join("")}
    </div>
    <div class="category-card__footer">
      查看产品 case / View Case
      <span>→</span>
    </div>
  </article>
`;

const openDrawer = (category) => {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawerTag.textContent = category.tag;
  drawerTitle.textContent = category.title;
  drawerDescription.textContent = category.description;

  if (!category.works?.length) {
    drawerWorks.innerHTML = `<div class="empty-state">这个分类已预留，后续可以继续补充素材。 This category is reserved and ready for future uploads.</div>`;
    return;
  }

  drawerWorks.innerHTML = category.works
    .map((work, index) => workCardTemplate(category, work, index))
    .join("");
};

const openProductDrawer = (product) => {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawerTag.textContent = product.tag;
  drawerTitle.textContent = product.title;
  drawerDescription.textContent = product.description;
  drawerWorks.innerHTML = `
    <article class="product-detail">
      <div class="product-detail__headline">
        <p>我的角色</p>
        <strong>${product.role}</strong>
      </div>
      <div class="product-detail__headline">
        <p>结果</p>
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
      <div class="product-card__methods">
        ${product.methods.map((method) => `<span>${method}</span>`).join("")}
      </div>
    </article>
  `;
};

const closeDrawer = () => {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  if (!lightbox.classList.contains("is-open")) {
    document.body.style.overflow = "";
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
  lightboxMedia.innerHTML = renderWorkPreview(work, { lightbox: true });

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
                      <img src="${proof.image}" alt="${proof.caption}" loading="lazy" />
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
  if (!drawer.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
};

const renderCatalog = () => {
  if (activeView === "product") {
    catalogSummary.innerHTML = `
      <p>PRODUCT CASES</p>
      <h2>把内容经验产品化的 AI 项目</h2>
    `;
    categoryGrid.classList.add("category-grid--products");
    categoryGrid.innerHTML = data.products.map(productCardTemplate).join("");
    return;
  }

  catalogSummary.innerHTML = `
    <p>CONTENT CASES</p>
    <h2>已验证的 AIGC 内容样本</h2>
  `;
  categoryGrid.classList.remove("category-grid--products");
  categoryGrid.innerHTML = data.categories.map(categoryCardTemplate).join("");
};

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    viewButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderCatalog();
  });
});

renderCatalog();

categoryGrid.addEventListener("click", (event) => {
  const productCard = event.target.closest("[data-product-id]");
  if (productCard) {
    const product = data.products.find((item) => item.id === productCard.dataset.productId);
    if (product) openProductDrawer(product);
    return;
  }

  const card = event.target.closest("[data-category-id]");
  if (!card) return;
  const category = data.categories.find((item) => item.id === card.dataset.categoryId);
  if (!category) return;
  openDrawer(category);
});

drawer.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-drawer]")) {
    closeDrawer();
    return;
  }

  const button = event.target.closest("[data-open-media]");
  if (!button) return;

  const category = data.categories.find((item) => item.id === button.dataset.categoryId);
  const work = category?.works?.[Number(button.dataset.workIndex)];
  if (!category || !work) return;

  openLightbox(category, work);
});

lightbox.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-lightbox]")) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeDrawer();
  }
});
