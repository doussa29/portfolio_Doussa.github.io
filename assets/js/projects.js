/* =========================================================
   Données des projets (cartes et fenêtres de détail).
   Pour ajouter un projet : copier un bloc { ... } et remplir les champs fr ET en.
   categories : "bi" (Data Analyst / BI), "eng" (Data Engineering), "ds" (IA & Data Science)
   image      : chemin d'une capture (assets/img/projets/nom.png) ou URL d'une image ;
                le texte alternatif se met dans imageAlt, en fr ET en en
   github     : lien du dépôt, ou null (pas de lien affiché)
   ongoing    : true affiche l'étiquette "En cours"
   ========================================================= */

const PROJECTS = [
  {
    id: "mdm",
    year: "2026",
    categories: ["bi", "eng"],
    ongoing: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=75", // TODO : remplacer par la vraie capture (Rapport Power BI MDM) dans assets/img/projets/
    github: null, // TODO : ajouter le lien GitHub du projet s'il existe
    tools: ["PostgreSQL", "SQL", "Power BI", "MDM", "Architecture médaillon", "Modèle en étoile"],
    fr: {
      title: "Master Data Management : fiabilisation d'un SI universitaire",
      imageAlt: "Baies de serveurs dans un centre de données",
      type: "Projet de groupe, terminé",
      summary: "Référentiel étudiant unique sous PostgreSQL : 31 sources CSV consolidées, 3 050 fiches dédoublonnées en 3 000 étudiants uniques.",
      context: "Les données étudiantes d'un système d'information universitaire étaient réparties dans de nombreux fichiers, avec des doublons. Le projet consistait à concevoir une démarche MDM et une preuve de concept pour fiabiliser ce référentiel.",
      did: [
        "Rédaction des fiches MOA et MOE, du dictionnaire de données et du mapping.",
        "Preuve de concept sous PostgreSQL en architecture médaillon (Bronze, Silver, Gold).",
        "Contrôles qualité automatiques et transmission des cas à traiter aux Data Stewards.",
        "Modèle en étoile et rapport Power BI avec les KPI avant et après fiabilisation.",
        "Plan de recette pour valider la solution."
      ],
      results: [
        "31 sources CSV consolidées.",
        "3 050 fiches dédoublonnées en 3 000 étudiants uniques.",
        "16 contrôles qualité automatiques, 60 cas transmis aux Data Stewards.",
        "Modèle en étoile de 10 dimensions et 5 tables de faits.",
        "Plan de recette de 12 tests, rapport Power BI de 6 pages."
      ]
    },
    en: {
      title: "Master Data Management: making a university information system reliable",
      imageAlt: "Server racks in a data centre",
      type: "Team project, completed",
      summary: "A single student master record in PostgreSQL: 31 CSV sources consolidated, 3,050 records deduplicated into 3,000 unique students.",
      context: "Student data in a university information system was spread across many files and contained duplicates. The goal was to design an MDM approach and a proof of concept to make this master data reliable.",
      did: [
        "Wrote the business and technical specifications, the data dictionary and the data mapping.",
        "Built a proof of concept in PostgreSQL with a medallion architecture (Bronze, Silver, Gold).",
        "Automated quality checks and handed the cases to review to the Data Stewards.",
        "Designed a star schema and a Power BI report with before and after KPIs.",
        "Wrote a test plan to validate the solution."
      ],
      results: [
        "31 CSV sources consolidated.",
        "3,050 records deduplicated into 3,000 unique students.",
        "16 automated quality checks, 60 cases sent to the Data Stewards.",
        "Star schema with 10 dimensions and 5 fact tables.",
        "Test plan of 12 tests, 6-page Power BI report."
      ]
    }
  },
  {
    id: "azure",
    year: "2026",
    categories: ["eng"],
    ongoing: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75", // Image d'illustration Unsplash. TODO : remplacer par une capture du projet si possible
    github: null, // TODO : ajouter le lien GitHub du projet s'il existe
    tools: ["Azure", "Terraform", "Docker", "Azure Container Registry", "GitHub Actions", "Key Vault", "Azure Monitor"],
    fr: {
      title: "Application web déployée sur Microsoft Azure",
      imageAlt: "Vue de la Terre la nuit avec les lumières des villes reliées",
      type: "Projet de groupe, cours de Cloud Computing, rendu le 7 décembre 2026",
      summary: "Infrastructure en Terraform, conteneurs Docker, intégration continue avec GitHub Actions et sécurité gérée avec Key Vault et RBAC.",
      context: "Projet du cours de Cloud Computing : déployer une application web sur Azure avec une infrastructure décrite en code, automatisée et sécurisée.",
      // TODO : décrire en une phrase ce que fait l'application déployée.
      did: [
        "Infrastructure en Terraform, organisée en modules, avec un état distant (remote state).",
        "Images Docker publiées dans Azure Container Registry.",
        "Intégration continue avec GitHub Actions et tests automatisés.",
        "Secrets dans Key Vault, identité managée et contrôle d'accès RBAC.",
        "Alertes configurées dans Azure Monitor."
      ],
      results: [] // TODO : ajouter les résultats une fois le projet rendu
    },
    en: {
      title: "Web application deployed on Microsoft Azure",
      imageAlt: "Night view of the Earth with connected city lights",
      type: "Team project, Cloud Computing course, due 7 December 2026",
      summary: "Infrastructure as code with Terraform, Docker containers, continuous integration with GitHub Actions, and security with Key Vault and RBAC.",
      context: "Cloud Computing course project: deploy a web application on Azure with infrastructure described as code, automated and secured.",
      did: [
        "Terraform infrastructure organised in modules, with a remote state.",
        "Docker images published to Azure Container Registry.",
        "Continuous integration with GitHub Actions and automated tests.",
        "Secrets in Key Vault, managed identity and RBAC access control.",
        "Alerts set up in Azure Monitor."
      ],
      results: []
    }
  },
  {
    id: "amazon",
    year: "2026",
    categories: ["bi"],
    ongoing: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75", // TODO : remplacer par la vraie capture (dashboard Power BI Amazon) dans assets/img/projets/
    github: "https://github.com/doussa29/amazon-reviews-dashboard",
    tools: ["Airbyte", "PostgreSQL", "SQL", "Power BI"],
    fr: {
      title: "Pipeline ELT et dashboard Power BI : Amazon Sales & Reviews",
      imageAlt: "Tableau de bord avec des graphiques de données",
      type: "Projet personnel",
      summary: "Ingestion avec Airbyte dans PostgreSQL, modélisation en SQL et dashboard Power BI connecté en direct pour étudier l'effet des prix et des promotions.",
      context: "Projet personnel pour mettre en place une chaîne ELT complète sur un jeu de données de ventes et d'avis Amazon.",
      did: [
        "Ingestion des données avec Airbyte dans une base PostgreSQL.",
        "Modélisation et transformations en SQL.",
        "Dashboard Power BI connecté en direct à la base.",
        "Analyse de l'effet des prix et des promotions."
      ],
      results: [] // TODO : ajouter un ou deux résultats chiffrés (volume de données, enseignement principal)
    },
    en: {
      title: "ELT pipeline and Power BI dashboard: Amazon Sales & Reviews",
      imageAlt: "Dashboard with data charts",
      type: "Personal project",
      summary: "Ingestion with Airbyte into PostgreSQL, SQL modelling and a live Power BI dashboard to study the effect of prices and discounts.",
      context: "Personal project to build a complete ELT pipeline on an Amazon sales and reviews dataset.",
      did: [
        "Loaded the data into PostgreSQL with Airbyte.",
        "Modelling and transformations in SQL.",
        "Power BI dashboard with a live connection to the database.",
        "Analysis of the effect of prices and discounts."
      ],
      results: []
    }
  },
  {
    id: "airbnb",
    year: "2025",
    categories: ["ds"],
    ongoing: false,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=75", // Image d'illustration Unsplash. TODO : remplacer par une capture du projet si possible
    github: "https://github.com/doussa29/nyc2025-11-10",
    tools: ["R", "Tidyverse", "Leaflet", "Régression linéaire", "Arbre de décision"],
    fr: {
      title: "Analyse et modélisation prédictive : Airbnb New York",
      imageAlt: "Vue aérienne de New York",
      type: "Projet académique",
      summary: "48 884 annonces analysées sous R, carte interactive Leaflet, régression et arbre de décision comparés par RMSE pour prédire le prix.",
      context: "Projet académique sur le marché Airbnb de New York : comprendre les facteurs du prix d'une annonce et le prédire.",
      did: [
        "Préparation et analyse exploratoire des données sous R (Tidyverse).",
        "Carte interactive des annonces avec Leaflet.",
        "Modélisation du prix par régression et par arbre de décision.",
        "Comparaison des deux modèles avec le RMSE."
      ],
      results: [
        "48 884 annonces analysées."
        // TODO : ajouter la valeur du RMSE de chaque modèle et le modèle retenu
      ]
    },
    en: {
      title: "Analysis and predictive modelling: Airbnb New York",
      imageAlt: "Aerial view of New York",
      type: "Academic project",
      summary: "48,884 listings analysed in R, an interactive Leaflet map, and a regression and a decision tree compared by RMSE to predict price.",
      context: "Academic project on the New York Airbnb market: understand what drives the price of a listing and predict it.",
      did: [
        "Data preparation and exploratory analysis in R (Tidyverse).",
        "Interactive map of the listings with Leaflet.",
        "Price modelling with a regression and a decision tree.",
        "Compared the two models using RMSE."
      ],
      results: [
        "48,884 listings analysed."
      ]
    }
  },
  {
    id: "comfyui",
    year: "2025 - 2026",
    categories: ["ds"],
    ongoing: false,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=75", // Image d'illustration Unsplash. TODO : remplacer par une capture du projet si possible
    github: null, // TODO : ajouter le lien GitHub du projet s'il existe
    tools: ["ComfyUI", "Python", "CUDA", "ReActor", "LivePortrait"],
    fr: {
      title: "Pipeline d'IA générative sous contrainte (ComfyUI)",
      imageAlt: "Illustration abstraite sur l'intelligence artificielle",
      type: "Projet d'équipe, 5 étudiants",
      summary: "Workflows de génération d'avatars parlants sous ComfyUI, avec des contraintes de mémoire GPU. 30 % de temps de calcul gagné.",
      context: "Projet d'équipe de 5 étudiants : générer des avatars parlants avec ComfyUI sur des ressources GPU limitées.",
      did: [
        "Développement de workflows Video-to-Video (ReActor) et Image-to-Video (LivePortrait).",
        "Diagnostic des contraintes GPU : erreurs de mémoire (CUDA OOM) et conflits de dépendances.",
        "Optimisation des paramètres de diffusion."
      ],
      results: [
        "30 % de temps de calcul gagné."
      ]
    },
    en: {
      title: "Generative AI pipeline under constraints (ComfyUI)",
      imageAlt: "Abstract illustration of artificial intelligence",
      type: "Team project, 5 students",
      summary: "ComfyUI workflows to generate talking avatars under GPU memory constraints. 30% less compute time.",
      context: "Team project of 5 students: generate talking avatars with ComfyUI on limited GPU resources.",
      did: [
        "Built Video-to-Video (ReActor) and Image-to-Video (LivePortrait) workflows.",
        "Diagnosed GPU constraints: out-of-memory errors (CUDA OOM) and dependency conflicts.",
        "Tuned the diffusion parameters."
      ],
      results: [
        "30% less compute time."
      ]
    }
  }
];

/* Noms d'outils traduits dans la fenêtre de détail (les autres restent identiques) */
const TOOL_TRANSLATIONS = {
  "Architecture médaillon": "Medallion architecture",
  "Modèle en étoile": "Star schema",
  "Régression linéaire": "Linear regression",
  "Arbre de décision": "Decision tree"
};
