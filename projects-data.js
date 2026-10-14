const projectsData = [
  // --- Generative AI & Autonomous Agents ---
  {
    id: "autonomous-research-rag",
    title: "Autonomous Research & Multi-Agent RAG System",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Multi-agent autonomous research system featuring web search integration, iterative query planning, source citation, and vector-backed RAG synthesis powered by LangChain and Groq LLMs.",
    tags: ["LangChain", "Groq LLaMA 3", "Multi-Agent", "RAG", "ChromaDB", "Python"],
    github: "https://github.com/tasneemibrahim-ai/Autonomous-Research-and-RAG-System",
    demo: null,
    featured: true,
    highlights: [
      "Autonomous iterative search and query decomposition",
      "Vector embeddings with ChromaDB and semantic similarity reranking",
      "Fact-checked citations and synthesis via Groq LLaMA-3"
    ]
  },
  {
    id: "llama-react-search-agent",
    title: "Llama 3 ReAct Search & Reasoning Agent",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Production implementation of the ReAct (Reasoning + Acting) paradigm using LLaMA-3. Features dynamic tool dispatch, real-time web querying, and transparent multi-step reasoning traces.",
    tags: ["ReAct Agent", "LangChain", "LLaMA 3", "Tool Calling", "DuckDuckGo API"],
    github: "https://github.com/tasneemibrahim-ai/Llama-ReAct-Search-Agent",
    demo: null,
    featured: true,
    highlights: [
      "Transparent Thought-Action-Observation multi-step reasoning loop",
      "Zero-shot tool selection and error recovery mechanisms",
      "Sub-second inference powered by Groq LPU engine"
    ]
  },
  {
    id: "text-to-sql-system",
    title: "Natural Language to Database Query System (Text-to-SQL)",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Enterprise natural language database querying interface. Translates complex English prompts into schema-aware SQL with zero-trust safety guardrails, interactive Streamlit dashboard, and CSV export.",
    tags: ["Streamlit", "LangChain", "Groq LLaMA 3", "SQLite", "Zero-Trust Security"],
    github: "https://github.com/tasneemibrahim-ai/Natural-Language-to-Database-Query-System",
    demo: null,
    featured: true,
    highlights: [
      "Multi-table relational schema querying (Users, Products, Orders)",
      "Strict regex and token security blocking destructive DDL/DML",
      "Streamlit UI with live schema viewer and CSV download"
    ]
  },
  {
    id: "news-summarizer-rag",
    title: "Real-Time News Summarizer & Analyst RAG",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Retrieval-Augmented Generation pipeline ingesting live global news feeds, indexing semantic vectors, and answering analytical queries with verifiable attribution.",
    tags: ["LangChain", "ChromaDB", "News API", "Groq", "RAG Pipeline"],
    github: "https://github.com/tasneemibrahim-ai/News-Summarizer-RAG",
    demo: null,
    featured: false,
    highlights: [
      "Live API ingestion of international breaking news",
      "Dense vector storage in Chroma with chunk overlap optimization",
      "Attributed analytical summaries reducing hallucinations"
    ]
  },
  {
    id: "ai-support-resume-screening",
    title: "AI Customer Support & Resume Screening System",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Dual-purpose enterprise intelligence platform: automated customer ticket routing and sentiment analysis paired with an ATS resume scoring and candidate ranking engine.",
    tags: ["NLP", "Resume Ranking", "Sentiment Analysis", "LangChain", "Groq"],
    github: "https://github.com/tasneemibrahim-ai/AI-Customer-Support-and-Resume-Screening",
    demo: null,
    featured: false,
    highlights: [
      "ATS keyword and skill vector similarity candidate scoring",
      "Automated ticket priority tagging and sentiment classification",
      "Executive summary reports for recruitment and HR teams"
    ]
  },
  {
    id: "daily-cinematic-video-generator",
    title: "Daily Cinematic AI Video Generator",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "End-to-end automated multimedia pipeline synthesizing cinematic story scripts, voiceovers, visual scene generation, and video composition.",
    tags: ["Generative AI", "Multimedia Pipeline", "Video Synthesis", "Python"],
    github: "https://github.com/tasneemibrahim-ai/Daily-Cinematic-Video-Generator",
    demo: null,
    featured: false,
    highlights: [
      "Automated prompt-to-storyboard generation",
      "Synchronized audio narration and visual sequencing",
      "High-definition video rendering pipeline"
    ]
  },
  {
    id: "educational-nlp-assistant",
    title: "Educational NLP Assistant & Tutor",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Interactive conversational tutor designed for academic curricula, offering conceptual explanations, automated flashcard generation, and knowledge evaluation.",
    tags: ["NLP", "Education AI", "Transformers", "Python", "Interactive UI"],
    github: "https://github.com/tasneemibrahim-ai/Educational-NLP-Assistant",
    demo: null,
    featured: false,
    highlights: [
      "Socratic learning dialogues tailored to user comprehension",
      "Automated assessment question generation",
      "Domain-specific knowledge curation"
    ]
  },
  {
    id: "litrai",
    title: "LitrAI: Intelligent Literature Analysis Suite",
    category: "genai",
    categoryLabel: "Generative AI & Agents",
    description: "Natural language processing workbench for literary text deconstruction, stylistic profiling, sentiment trajectory mapping, and character relationship graphing.",
    tags: ["NLP", "Literature Mining", "Text Analytics", "Python"],
    github: "https://github.com/tasneemibrahim-ai/LitrAI",
    demo: null,
    featured: false,
    highlights: [
      "Emotional arc extraction and narrative pacing analysis",
      "Entity co-occurrence graph generation",
      "Stylometric author identification"
    ]
  },

  // --- Machine Learning & Computer Vision ---
  {
    id: "emotion-activity-detection",
    title: "Emotion & Activity Detection System",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Real-time computer vision system integrating facial emotion recognition with human pose/activity estimation from streaming video feeds.",
    tags: ["OpenCV", "Deep Learning", "CNN", "Pose Estimation", "Real-Time CV"],
    github: "https://github.com/tasneemibrahim-ai/Emotion-And-Activity-Detection",
    demo: null,
    featured: true,
    highlights: [
      "Facial keypoint detection and micro-expression classification",
      "Skeletal landmark tracking for real-time action identification",
      "Optimized pipeline achieving >30 FPS on edge hardware"
    ]
  },
  {
    id: "movie-genre-classifier",
    title: "Multi-Modal Movie Genre Classifier",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Predicts multi-label film genres by analyzing textual synopsis semantics, poster visual cues, and categorical production metadata using neural network architectures.",
    tags: ["Scikit-Learn", "NLP", "Multi-Label Classification", "Feature Engineering"],
    github: "https://github.com/tasneemibrahim-ai/Movie-Genere-Classifier",
    demo: null,
    featured: false,
    highlights: [
      "TF-IDF and dense embeddings for narrative overview modeling",
      "Evaluation using Hamming Loss, Micro/Macro F1 metrics",
      "Ensemble prediction strategies for overlapping genres"
    ]
  },
  {
    id: "digit-recognizer",
    title: "Deep Convolutional Digit Recognizer (MNIST)",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "High-accuracy handwritten digit recognition engine trained on MNIST with data augmentation, batch normalization, and dropout regularization.",
    tags: ["PyTorch / TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    github: "https://github.com/tasneemibrahim-ai/Digit-Recognizer",
    demo: null,
    featured: false,
    highlights: [
      "Custom CNN architecture achieving >99% test set accuracy",
      "Interactive drawing canvas for live digit classification",
      "Activation map visualization for model interpretability"
    ]
  },
  {
    id: "secure-sight",
    title: "SecureSight: AI Video Surveillance & Anomaly Detection",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Intelligent security surveillance application detecting perimeter breaches, unauthorized object presence, and behavioral anomalies in live camera feeds.",
    tags: ["Computer Vision", "Anomaly Detection", "Object Tracking", "OpenCV"],
    github: "https://github.com/tasneemibrahim-ai/Secure-Sight",
    demo: null,
    featured: false,
    highlights: [
      "Temporal motion vector analysis for anomaly scoring",
      "Automated alerting and bounding-box event logging",
      "False-positive suppression in dynamic lighting"
    ]
  },
  {
    id: "image-processor",
    title: "Advanced Image Processing & Spatial Filtering Engine",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Custom digital signal processing application implementing spatial convolution kernels, frequency domain transforms, edge detectors, and image restoration algorithms.",
    tags: ["Digital Signal Processing", "OpenCV", "Spatial Filters", "Python"],
    github: "https://github.com/tasneemibrahim-ai/Image-Processor",
    demo: null,
    featured: false,
    highlights: [
      "Sobel, Prewitt, Canny edge detection operators",
      "Fourier Transform (FFT) high-pass and low-pass filtering",
      "Morphological transformations and histogram equalization"
    ]
  },
  {
    id: "ames-housing-inference",
    title: "Ames Housing Price Prediction & Statistical Inference",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Rigorous statistical analysis and predictive regression modeling on the Ames Housing dataset, featuring hypothesis testing, multicollinearity treatment, and regularized regression (Lasso/Ridge/XGBoost).",
    tags: ["Statistical Inference", "XGBoost", "Ridge / Lasso", "EDA", "Python"],
    github: "https://github.com/tasneemibrahim-ai/ames-housing-statistical-inference",
    demo: null,
    featured: false,
    highlights: [
      "Comprehensive exploratory data analysis and outlier diagnosis",
      "Target encoding, Box-Cox transformations, and PCA",
      "Robust cross-validated regression models minimizing RMSE"
    ]
  },
  {
    id: "market-basket-analysis",
    title: "Retail Market Basket Analysis & Association Rules",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Unsupervised data mining system discovering transactional purchase associations using Apriori and FP-Growth algorithms to maximize cross-selling revenue.",
    tags: ["Association Mining", "Apriori", "FP-Growth", "Pandas", "Retail Analytics"],
    github: "https://github.com/tasneemibrahim-ai/Market-Basket-Analysis",
    demo: null,
    featured: false,
    highlights: [
      "Support, Confidence, and Lift metric tuning for rule pruning",
      "Interactive heatmaps showing product co-occurrence affinities",
      "Category bundle recommendation generation"
    ]
  },
  {
    id: "ecommerce-recommender",
    title: "Multi-Approach E-Commerce Recommender System",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Hybrid recommendation platform combining collaborative filtering (matrix factorization / SVD), content-based item embeddings, and popularity fallback for cold-start mitigation.",
    tags: ["Recommender Systems", "Collaborative Filtering", "SVD", "Cosine Similarity"],
    github: "https://github.com/tasneemibrahim-ai/Multi-Approach-Intelligent-Ecommerce-Recommender-System",
    demo: null,
    featured: true,
    highlights: [
      "Hybrid ensemble balancing user personalization and catalog diversity",
      "Matrix factorization resolving matrix sparsity challenges",
      "Real-time top-N recommendation generation"
    ]
  },
  {
    id: "students-perceptions-ai",
    title: "Empirical Analysis of Student Perceptions of AI in Education",
    category: "ml-cv",
    categoryLabel: "Machine Learning & CV",
    description: "Quantitative empirical study evaluating university student adoption, ethical attitudes, and academic impact of generative AI through inferential statistics and clustering.",
    tags: ["Statistical Modeling", "Hypothesis Testing", "Survey Analytics", "K-Means"],
    github: "https://github.com/tasneemibrahim-ai/Students-Perceptions-of-AI-in-Education",
    demo: null,
    featured: false,
    highlights: [
      "Chi-square, ANOVA, and Mann-Whitney U test validations",
      "Latent persona segmentation using K-Means clustering",
      "Publication-grade demographic visualizations"
    ]
  },

  // --- Data Engineering & Systems ---
  {
    id: "etl-data-warehouse",
    title: "Enterprise ETL Pipeline & Data Warehouse",
    category: "data-eng",
    categoryLabel: "Data Engineering & DB",
    description: "End-to-end modern data warehouse architecture modeled with dimensional Kimball methodology (Fact & Dimension tables), automated staging, cleaning, and SCD tracking.",
    tags: ["Data Warehousing", "ETL Pipelines", "Kimball Modeling", "SQL", "Python"],
    github: "https://github.com/tasneemibrahim-ai/ETL_Data_Warehouse",
    demo: null,
    featured: true,
    highlights: [
      "Star schema design with surrogate key management",
      "Automated extraction, schema sanitization, and bulk loading",
      "Analytical aggregations enabling sub-second executive reporting"
    ]
  },
  {
    id: "aiu-coursera-db",
    title: "AIU Coursera Enterprise Course Management DB",
    category: "data-eng",
    categoryLabel: "Data Engineering & DB",
    description: "Production-grade relational database architecture managing enterprise e-learning enrollments, certifications, instructor assignments, and progress analytics.",
    tags: ["PostgreSQL / MySQL", "Database Design", "Stored Procedures", "Normalization 3NF"],
    github: "https://github.com/tasneemibrahim-ai/AIU-Coursera-Course-Management-DB",
    demo: null,
    featured: false,
    highlights: [
      "Third Normal Form (3NF) relational design with ACID guarantees",
      "Complex stored procedures, triggers, and analytical views",
      "Indexing and query optimization for high-concurrency read loads"
    ]
  },
  {
    id: "cairo-transport-optimization",
    title: "Cairo Smart City Transport Network Optimization",
    category: "data-eng",
    categoryLabel: "Data Engineering & DB",
    description: "Geospatial graph algorithm platform modeling Cairo's public transportation network to identify transit bottlenecks, optimize route scheduling, and compute shortest multi-modal paths.",
    tags: ["Graph Theory", "Dijkstra / A*", "Geospatial", "NetworkX", "Smart City"],
    github: "https://github.com/tasneemibrahim-ai/Cairo-Transport-Optimization",
    demo: null,
    featured: true,
    highlights: [
      "Multi-modal transit graph with weighted delay heuristics",
      "Dynamic path calculation with congestion avoidance",
      "Geospatial visualization of hub centrality and coverage"
    ]
  },
  {
    id: "graph-properties-analyzer",
    title: "Graph Theory & Network Properties Analyzer",
    category: "data-eng",
    categoryLabel: "Data Engineering & DB",
    description: "Computational discrete mathematics engine analyzing structural network properties: Eulerian/Hamiltonian circuits, chromatic numbers, articulation points, and centrality metrics.",
    tags: ["Graph Algorithms", "Network Analysis", "Python", "Discrete Math"],
    github: "https://github.com/tasneemibrahim-ai/graph-properties-analyzer",
    demo: null,
    featured: false,
    highlights: [
      "Tarjan's strongly connected components and biconnectivity",
      "Network diameter, clustering coefficients, and spectral analysis",
      "Graph isomorphism detection algorithms"
    ]
  },
  {
    id: "amazon-services",
    title: "Amazon Cloud Services Integration Architecture",
    category: "data-eng",
    categoryLabel: "Data Engineering & DB",
    description: "Cloud-native microservice architecture demonstrating AWS service integration, resilient message queuing, object storage management, and serverless compute triggers.",
    tags: ["Cloud Architecture", "AWS", "Microservices", "REST API", "Python"],
    github: "https://github.com/tasneemibrahim-ai/Amazon-Services",
    demo: null,
    featured: false,
    highlights: [
      "Decoupled asynchronous workflow with message brokers",
      "Automated cloud storage lifecycle policies",
      "Secure credential isolation and IAM policy configuration"
    ]
  },

  // --- Software Engineering & Systems ---
  {
    id: "chatting-room-fx",
    title: "JavaFX Multi-Threaded Real-Time Chat Platform",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Concurrent client-server desktop messaging suite featuring socket programming, multi-threaded connection pooling, private channels, and an intuitive JavaFX user interface.",
    tags: ["Java", "JavaFX", "Socket Programming", "Multi-Threading", "Networking"],
    github: "https://github.com/tasneemibrahim-ai/Chatting-Room-Application_fx",
    demo: null,
    featured: true,
    highlights: [
      "Non-blocking TCP socket communication with connection threads",
      "Broadcast, direct message, and room-based routing protocols",
      "Sleek modern JavaFX GUI with real-time status indicators"
    ]
  },
  {
    id: "data-structure-library-java",
    title: "High-Performance Java Data Structures Library",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Comprehensive implementation of fundamental and advanced data structures in pure Java: self-balancing AVL trees, open-addressing Hash Maps, Priority Heaps, and Graph structures.",
    tags: ["Java", "Data Structures", "Algorithms", "AVL Trees", "Algorithm Design"],
    github: "https://github.com/tasneemibrahim-ai/Data-Structure-Library-Management_System-Java",
    demo: null,
    featured: false,
    highlights: [
      "Rigorous time complexity guarantees (O(log n) self-balancing)",
      "Generic typing and memory-efficient node allocation",
      "Unit-tested edge-case handling across all operations"
    ]
  },
  {
    id: "oop-library-management",
    title: "OOP Enterprise Library Management System",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Desktop information system built with strict Object-Oriented Design principles (Encapsulation, Polymorphism, Factory & Singleton patterns) for automated asset tracking.",
    tags: ["Java", "OOP Design Patterns", "Desktop Software", "Software Architecture"],
    github: "https://github.com/tasneemibrahim-ai/OOP-Library-Management-System",
    demo: null,
    featured: false,
    highlights: [
      "Clean separation of concerns with Model-View-Controller (MVC)",
      "Role-based access control for patrons and librarians",
      "Automated fine calculation and overdue reservation queues"
    ]
  },
  {
    id: "software-design-fitness",
    title: "Fitness Tracker Application Architecture",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Modular personal health and workout tracker application engineered adhering strictly to SOLID principles, dependency injection, and clean architectural boundaries.",
    tags: ["Software Design", "Clean Architecture", "SOLID Principles", "Java / Python"],
    github: "https://github.com/tasneemibrahim-ai/Software-Design-Fitness-Tracker",
    demo: null,
    featured: false,
    highlights: [
      "Extensible metric calculation plugins (calories, heart rate, distance)",
      "Decoupled persistence layer allowing seamless DB swaps",
      "Comprehensive UML class, sequence, and component diagrams"
    ]
  },
  {
    id: "course-registration-system",
    title: "University Course Registration & Scheduling System",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Academic enrollment software handling prerequisite dependency validation, timetable conflict detection, waitlist management, and transcript auditing.",
    tags: ["Java", "Software Engineering", "Business Logic", "Relational DB"],
    github: "https://github.com/tasneemibrahim-ai/Course-Registration-System",
    demo: null,
    featured: false,
    highlights: [
      "Graph-based prerequisite chain validation",
      "Atomic transactional enrollment preventing over-subscription",
      "Academic standing and GPA calculation module"
    ]
  },
  {
    id: "car-race-game",
    title: "2D Arcade Car Racing Game Engine",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Interactive arcade racing game featuring custom 2D collision physics, dynamic obstacle spawning, parallax scrolling backgrounds, and real-time score tracking.",
    tags: ["Game Development", "2D Physics", "Java / Python", "GUI Programming"],
    github: "https://github.com/tasneemibrahim-ai/Car-Race-Game",
    demo: null,
    featured: false,
    highlights: [
      "Axis-Aligned Bounding Box (AABB) collision detection",
      "Frame-rate independent animation loop (60 FPS)",
      "Progressive difficulty scaling and high-score persistence"
    ]
  },
  {
    id: "whumpus-game",
    title: "Hunt the Wumpus: AI Propositional Logic Game",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Implementation of the classic AI Wumpus World featuring propositional logic deduction, probabilistic risk evaluation, and an interactive CLI/GUI game environment.",
    tags: ["Artificial Intelligence", "Knowledge Representation", "Propositional Logic", "Python"],
    github: "https://github.com/tasneemibrahim-ai/whumpus-game",
    demo: null,
    featured: false,
    highlights: [
      "Logical inference engine reasoning through stench, breeze, and glitter",
      "Automated solver exploring hidden grid states safely",
      "Configurable cave dimensions and hazard frequencies"
    ]
  },
  {
    id: "rsa-encryption-tool",
    title: "RSA Cryptography & Digital Signature Suite",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Pure mathematical implementation of the RSA public-key cryptographic algorithm, featuring Miller-Rabin primality testing, Extended Euclidean Algorithm, and OAEP padding.",
    tags: ["Cryptography", "Information Security", "RSA", "Number Theory", "Python"],
    github: "https://github.com/tasneemibrahim-ai/RSA-Encryption-Tool",
    demo: null,
    featured: false,
    highlights: [
      "Large prime generation via Miller-Rabin probabilistic tests",
      "Modular exponentiation and multiplicative inverse calculation",
      "Digital signature generation and cryptographic verification"
    ]
  },
  {
    id: "smart-home-packet-tracer",
    title: "Smart Home IoT Network Topology Simulation",
    category: "software",
    categoryLabel: "Software Systems",
    description: "Comprehensive Cisco Packet Tracer network architecture connecting smart home IoT sensors, gateways, home servers, and VLAN security segmentation.",
    tags: ["Networking", "IoT", "Cisco Packet Tracer", "VLAN", "Network Security"],
    github: "https://github.com/tasneemibrahim-ai/Smart-Home-Packet-Tracer",
    demo: null,
    featured: false,
    highlights: [
      "VLAN segregation for guest, IoT, and administrative subnets",
      "Automated sensor thresholds triggering environmental actuators",
      "Secure remote access via VPN and firewall ACL rules"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
