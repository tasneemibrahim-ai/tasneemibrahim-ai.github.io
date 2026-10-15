/**
 * Tasneem Ibrahim Portfolio Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  const featuredGrid = document.getElementById("featured-grid");
  const allProjectsGrid = document.getElementById("all-projects-grid");
  const searchInput = document.getElementById("project-search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  // Modal Elements
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalHighlights = document.getElementById("modal-highlights");
  const modalTags = document.getElementById("modal-tags");
  const modalGithub = document.getElementById("modal-github");

  let currentCategory = "all";
  let searchQuery = "";

  // 1. Update Category Counts
  function updateCategoryCounts() {
    const counts = {
      all: projectsData.length,
      genai: 0,
      "ml-cv": 0,
      "data-eng": 0,
      software: 0
    };

    projectsData.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    document.getElementById("count-all").textContent = counts.all;
    document.getElementById("count-genai").textContent = counts.genai;
    document.getElementById("count-ml-cv").textContent = counts["ml-cv"];
    document.getElementById("count-data-eng").textContent = counts["data-eng"];
    document.getElementById("count-software").textContent = counts.software;
  }

  // 2. Render Featured Projects
  function renderFeatured() {
    const featured = projectsData.filter(p => p.featured);
    featuredGrid.innerHTML = featured.map(p => `
      <article class="featured-card" data-id="${p.id}">
        <div class="card-top">
          <span class="card-category-pill">${p.categoryLabel}</span>
          <span style="font-size: 0.8rem; color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span> Production
          </span>
        </div>
        
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        
        <ul class="card-highlights">
          ${p.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>

        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>

        <div class="card-footer">
          <button class="btn btn-secondary details-btn" data-id="${p.id}" style="padding: 0.45rem 1rem; font-size: 0.82rem;">
            Deep Dive
          </button>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </article>
    `).join("");
  }

  // 3. Render Filtered & Searched Projects
  function renderAllProjects() {
    const q = searchQuery.toLowerCase().trim();

    const filtered = projectsData.filter(p => {
      const matchesCategory = (currentCategory === "all" || p.category === currentCategory);
      if (!matchesCategory) return false;

      if (!q) return true;

      const titleMatch = p.title.toLowerCase().includes(q);
      const descMatch = p.description.toLowerCase().includes(q);
      const tagMatch = p.tags.some(t => t.toLowerCase().includes(q));
      const categoryMatch = p.categoryLabel.toLowerCase().includes(q);

      return titleMatch || descMatch || tagMatch || categoryMatch;
    });

    if (filtered.length === 0) {
      allProjectsGrid.innerHTML = `
        <div class="empty-state">
          <p style="font-size: 1.25rem; font-weight: 600; color: #f8fafc; margin-bottom: 0.5rem;">No matching projects found</p>
          <p>Try searching for a different keyword or resetting your filter category.</p>
        </div>
      `;
      return;
    }

    allProjectsGrid.innerHTML = filtered.map(p => `
      <article class="project-card" data-id="${p.id}">
        <div class="project-card-header">
          <h4 class="project-card-title">${p.title}</h4>
          <span class="card-category-pill" style="font-size: 0.7rem; padding: 0.2rem 0.6rem;">${p.categoryLabel.split("&")[0]}</span>
        </div>
        
        <p class="project-card-desc">${p.description}</p>

        <div class="card-tags" style="margin-bottom: 1.25rem;">
          ${p.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("")}
          ${p.tags.length > 4 ? `<span class="tag">+${p.tags.length - 4}</span>` : ""}
        </div>

        <div class="card-footer" style="padding-top: 1rem;">
          <button class="btn btn-secondary details-btn" data-id="${p.id}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
            Quick View
          </button>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-github" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </article>
    `).join("");

    attachModalEvents();
  }

  // 4. Modal Handlers
  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalCategory.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    
    modalHighlights.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join("");
    modalTags.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join("");
    modalGithub.href = project.github;

    modal.classList.add("open");
  }

  function closeModal() {
    modal.classList.remove("open");
  }

  function attachModalEvents() {
    document.querySelectorAll(".details-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openModal(id);
      });
    });
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // 5. Category Filter Click Events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderAllProjects();
    });
  });

  // 6. Search Event
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderAllProjects();
  });

  // Initial Execution
  updateCategoryCounts();
  renderAllProjects();
  attachModalEvents();
});
