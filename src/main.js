const capabilities = [
  {
    title: 'Data Engineering',
    description: 'Designing reliable data products, orchestration patterns, and scalable analytics foundations.',
    accent: '95%',
  },
  {
    title: 'Machine Learning',
    description: 'Shipping practical ML workflows with production-minded experimentation, deployment, and monitoring.',
    accent: '88%',
  },
  {
    title: 'Azure Cloud',
    description: 'Architecting secure, cost-aware cloud platforms across storage, compute, networking, and governance.',
    accent: '92%',
  },
  {
    title: 'Databricks & Spark',
    description: 'Improving batch and streaming pipelines with lakehouse patterns and performance tuning.',
    accent: '90%',
  },
];

const projects = [
  {
    title: 'Enterprise Lakehouse Modernization',
    summary:
      'Led the design of a modern analytics architecture using Azure and Databricks to simplify ingestion, improve governance, and accelerate reporting.',
    impact: ['Unified siloed data sources', 'Improved pipeline observability', 'Enabled scalable BI consumption'],
    tag: 'Architecture',
  },
  {
    title: 'ML Delivery Enablement',
    summary:
      'Supported ML teams with production-ready patterns for feature engineering, experimentation, and deployment workflows that reduced handoff friction.',
    impact: ['Clearer model promotion paths', 'Reusable engineering standards', 'Better cross-team collaboration'],
    tag: 'Machine Learning',
  },
  {
    title: 'Cloud Data Platform Governance',
    summary:
      'Established governance guardrails, environment strategy, and operational practices for a multi-team Azure data platform.',
    impact: ['Stronger security posture', 'More predictable deployments', 'Lower operational risk'],
    tag: 'Platform Engineering',
  },
];

const articles = [
  {
    title: "Orchestration with Apache Airflow — a beginner's guide for project-based learning",
    description:
      'A practical walkthrough of workflow orchestration fundamentals, DAG design, and how to build intuition through project-based learning.',
    href: 'https://medium.com/analytics-vidhya/orchestration-with-apache-airflow-a-beginners-guide-for-project-based-learning-77c6c31d6323',
    meta: 'Apache Airflow • Data Engineering',
  },
  {
    title: 'Data Lifecycle of Machine Learning Project',
    description:
      'An overview of how machine learning initiatives move from data collection to deployment, iteration, and operational maturity.',
    href: 'https://medium.com/analytics-vidhya/data-lifecycle-of-machine-learning-project-f2b83ac81c38',
    meta: 'Machine Learning • Delivery',
  },
  {
    title: 'More writing on Medium',
    description:
      'Additional articles on data engineering, analytics, and cloud architecture for practitioners who value applied learning.',
    href: 'https://medium.com/@saurabh2mishra',
    meta: 'Medium • Knowledge sharing',
  },
];

const capabilityGrid = document.querySelector('#capability-grid');
const projectGrid = document.querySelector('#project-grid');
const articleGrid = document.querySelector('#article-grid');
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const copyEmailButton = document.querySelector('.copy-email');

function renderCapabilities() {
  capabilityGrid.innerHTML = capabilities
    .map(
      (item) => `
        <article class="surface reveal capability-card">
          <div class="capability-card__header">
            <h3>${item.title}</h3>
            <span>${item.accent}</span>
          </div>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join('');
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="surface reveal project-card">
          <p class="project-card__tag">${project.tag}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <ul>
            ${project.impact.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </article>
      `,
    )
    .join('');
}

function renderArticles() {
  articleGrid.innerHTML = articles
    .map(
      (article) => `
        <article class="surface reveal article-card">
          <p class="article-card__meta">${article.meta}</p>
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.href}" target="_blank" rel="noreferrer">Read article</a>
        </article>
      `,
    )
    .join('');
}

function initTheme() {
  const storedTheme = localStorage.getItem('portfolio-theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme ?? (preferredDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;

  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  });
}

function initNavigation() {
  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initReveal() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initCopyEmail() {
  copyEmailButton?.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = 'Email copied';
      setTimeout(() => {
        copyEmailButton.textContent = 'Copy email address';
      }, 1600);
    } catch {
      copyEmailButton.textContent = email;
    }
  });
}

function initFooterYear() {
  document.querySelector('#year').textContent = new Date().getFullYear();
}

renderCapabilities();
renderProjects();
renderArticles();
initTheme();
initNavigation();
initReveal();
initCopyEmail();
initFooterYear();
