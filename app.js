const data = window.SHOWCASE_DATA;

const caseGrid = document.getElementById("case-grid");
const catalog = document.getElementById("catalog");
const catalogSummary = document.getElementById("catalog-summary");
const viewButtons = document.querySelectorAll("[data-view]");
const heroButtons = document.querySelectorAll("[data-hero-view]");
const heroPreview = document.getElementById("hero-preview");

let activeView = "product";

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
  if (work.label) return work.label;
  if (work.format === "video") return "视频作品 / Video";
  if (work.format === "html") return "脚本页面 / Script";
  return "图文作品 / Image";
};

const renderWorkMedia = (work, poster = "") => {
  if (work.format === "video") {
    return `
      <button
        class="case-media case-media--video js-video-loader"
        type="button"
        style="--work-ratio:${getRatioValue(work)}"
        data-video-src="${work.src}"
        data-video-poster="${poster || "./assets/work-video-placeholder.svg"}"
        data-video-title="${escapeAttribute(work.title)}"
      >
        <img src="${poster || "./assets/work-video-placeholder.svg"}" alt="${escapeAttribute(work.title)} video cover" loading="lazy" />
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
    <div class="case-media case-media--image" style="--work-ratio:${getRatioValue(work)}">
      <img src="${work.src}" alt="${escapeAttribute(work.title)}" loading="lazy" />
      <span class="case-media__label">查看 / View</span>
    </div>
  `;
};

const getDisplayWorks = (category) => {
  const works = category.works || [];

  if (activeView === "image") {
    return works.filter((work) => work.format === "image");
  }

  if (activeView === "aigc") {
    return works.filter((work) => work.format === "video");
  }

  return works.slice(0, 1);
};

const renderProductCase = (product) => `
  <article class="product-gallery__card ${product.media ? "product-gallery__card--media" : ""}" style="--accent:${product.accent}">
    ${
      product.media
        ? `<div class="product-gallery__media ${product.media.layout === "portrait" ? "product-gallery__media--portrait" : ""}">
            ${renderWorkMedia(product.media, product.media.poster)}
          </div>`
        : ""
    }
    <div class="product-gallery__copy">
      <p class="product-gallery__tag">${product.tag}</p>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      ${product.media ? `<span>${product.media.title} · ${product.media.duration}</span>` : ""}
    </div>
  </article>
`;

const renderCategoryCase = (category) => {
  const displayWorks = getDisplayWorks(category);
  if (!displayWorks.length) return "";
  const landscapeWorks = displayWorks.filter((work) => !work.width || !work.height || work.width >= work.height);
  const portraitWorks = displayWorks.filter((work) => work.width && work.height && work.width < work.height);
  const renderGroup = (label, works, orientation) => {
    if (!works.length) return "";

    return `
      <section class="collection-group">
        ${landscapeWorks.length && portraitWorks.length ? `<p class="collection-group__label">${label}</p>` : ""}
        <div class="collection-grid collection-grid--${orientation}" style="--item-count:${works.length}">
          ${works.map((work) => `
            <div class="collection-card">
              ${renderWorkMedia(work, work.poster || category.previewImage)}
              <div class="collection-card__caption">
                <strong>${work.title}</strong>
                <span>${work.source || category.source || getWorkTypeLabel(work)}</span>
                ${formatDuration(work.duration) ? `<small>${formatDuration(work.duration)}</small>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  };

  return `
    <article class="collection-section" style="--accent:${category.accent}">
      <header class="collection-section__head">
        <h3>${category.title}</h3>
      </header>
      ${renderGroup("横屏 / Landscape", landscapeWorks, "landscape")}
      ${renderGroup("竖屏 / Portrait", portraitWorks, "portrait")}
      ${category.processImage ? `
        <figure class="collection-process">
          <img src="${category.processImage.src}" alt="${escapeAttribute(category.processImage.alt)}" loading="lazy" />
          <figcaption>${category.processImage.caption}</figcaption>
        </figure>
      ` : ""}
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

  const view = data.views[activeView];
  catalogSummary.innerHTML = `
    <p>${view.eyebrow}</p>
    <h2>${view.title}</h2>
    <span>${view.subtitle}</span>
  `;

  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === activeView);
  });

  caseGrid.classList.toggle("case-grid--product", activeView === "product");
  caseGrid.innerHTML = getCasesForView().join("");

  if (scroll) {
    catalog.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
  const loader = event.target.closest(".js-video-loader");
  if (!loader) return;

  const player = document.createElement("div");
  player.className = loader.className.replace("js-video-loader", "").trim();
  player.classList.add("is-playing");
  player.style.cssText = loader.style.cssText;

  const video = document.createElement("video");
  video.src = loader.dataset.videoSrc;
  video.poster = loader.dataset.videoPoster;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = "auto";
  video.setAttribute("aria-label", loader.dataset.videoTitle || "Portfolio video");
  player.append(video);
  loader.replaceWith(player);
  video.play().catch(() => {
    video.controls = true;
  });
});

setActiveView(activeView);
