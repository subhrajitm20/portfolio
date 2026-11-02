// All site copy lives here. Edit this file to update the portfolio;
// the components only handle layout.
import portrait from "../assets/heroImage-sjm.png";
import samsungLogo from "../assets/logos/samsung.png";
import eversanaLogo from "../assets/logos/eversana.png";
import multimodalImg from "../assets/portfolio/ugp2.png";
import uavImg from "../assets/portfolio/uav-ugv.svg";
import rlImg from "../assets/portfolio/rl5.png";
import mlImg from "../assets/portfolio/ml4.png";

const publicFile = (name) => `${process.env.PUBLIC_URL}/${name}`;

export const profile = {
  name: "Subhrajit Mishra",
  availability: "Open to new opportunities",
  eyebrow: "M.S. CSE @ UC San Diego · Samsung Research · B.Tech EE @ IIT Kanpur",
  headline:
    "Building efficient Neural Networks for Computer Vision.",
    // "I build efficient neural networks for video compression and computer vision, from model architecture down to SIMD-optimized decoders.",
  summary:
    "After graduating from the Indian Institute of Technology Kanpur, and working for two years at Samsung Research on next-generation video coding (H.267), with 8 filed patents and codec work integrated on Samsung flagship devices. Now pursuing an M.S. in Computer Science at UC San Diego.",
  location: "San Diego, CA",
  email: "s6mishra@ucsd.edu",
  photo: portrait,
  resume: publicFile("Subhrajit_Resume_UCSD_v7.pdf"),
  cv: publicFile("Subhrajit_academic_CV_v0_3.pdf"),
  github: "https://github.com/subhrajitm20",
  linkedin: "https://www.linkedin.com/in/subhrajit-mishra-a0b851210/",
  contactFormAction: "https://getform.io/f/ebpdqxzb",
};

export const stats = [
  { value: "8", label: "patents filed in neural video coding" },
  { value: "60–70%", label: "faster APV & EVC decoding with SIMD" },
  { value: "<500", label: "FLOPs/pixel neural in-loop filter" },
  { value: "7 → 1", label: "intra models unified into one CNN" },
];

export const about = {
  tagline: "Turning pixels into intelligence.",
  paragraphs: [
    "I like making neural networks fast enough to matter. At Samsung Research I spent two years on next-generation video compression: designing compact CNNs for intra prediction and in-loop filtering that fit strict per-pixel compute budgets, and hand-optimizing codec decoders with SIMD intrinsics.",
    "My path into ML started with computer vision for autonomous drones on IIT Kanpur's Aerial Robotics team, which I went on to lead. Since then I've worked across deep learning, reinforcement learning and multimodal learning, and I'm now going deeper at UC San Diego with coursework in probabilistic reasoning, parallel computation and robotics.",
    "I'm happiest where research meets engineering: taking a modeling idea and turning it into something measurable, hardware-friendly and ready to ship.",
  ],
  facts: [
    { label: "Now", value: "M.S. CSE, UC San Diego" },
    { label: "Previously", value: "Senior Engineer (Research), Samsung Research" },
    { label: "Focus", value: "Efficient deep learning · Computer vision · Neural compression · ML systems" },
    { label: "Education", value: "B.Tech EE, IIT Kanpur · CPI 9.2/10" },
    { label: "Based in", value: "San Diego, CA" },
  ],
};

export const experience = [
  {
    company: "Samsung Research",
    logo: samsungLogo,
    logoClass: "bg-black",
    role: "Senior Engineer (Research)",
    team: "Next-Generation Video Compression",
    type: "Full-time",
    period: "Jul 2024 – Aug 2026",
    location: "Bengaluru, India",
    summary:
      "Researched and built neural-network coding tools for the next video standard (H.267 / post-VVC), and worked on production codec engineering for Advanced Professional Video (APV) and MPEG-5 EVC.",
    workstreams: [
      {
        title: "AI in-loop filter for H.267",
        metric: "<500 FLOPs/pixel · >3% BD-rate savings",
        description:
          "Designed a hardware-integrable neural in-loop filter that combines artifact-aware handcrafted filters with custom attention blocks to suppress compression and banding artifacts. Integrated into the VVC Test Model with dedicated signalling, running in parallel with the deblocking filter.",
        tags: ["PyTorch", "Attention", "VTM", "C++"],
      },
      {
        title: "Neural intra prediction",
        metric: "~1 KFLOPs/pixel · 7 models → 1",
        description:
          "Led the design of a unified, configurable CNN that predicts coding units of every size through custom pre- and post-processing blocks, reaching state-of-the-art BD-rate gains. Integrated alongside the classical predictors in post-VVC with C++ inference, replacing seven separate model variants.",
        tags: ["CNN", "PyTorch", "C++ inference", "H.266 / VVC"],
      },
      {
        title: "Advanced Professional Video (APV)",
        metric: "Open source · NAB demo",
        description:
          "Contributed core algorithms to APV, an open-source, perceptually lossless professional video codec. Integrated it on Samsung flagship devices and in Adobe Premiere Pro for the National Association of Broadcasters (NAB) demo.",
        tags: ["Codec design", "On-device", "Premiere Pro"],
        links: [{ label: "OpenAPV on GitHub", href: "https://github.com/AcademySoftwareFoundation/openapv" }],
      },
      {
        title: "Codec performance engineering",
        metric: "60–70% faster decoding",
        description:
          "Accelerated the APV and MPEG-5 EVC decoders by roughly 60 to 70% with SIMD intrinsics (ARM NEON, SSE, AVX), alongside open-source codec development, FFmpeg integration and on-device deployment.",
        tags: ["SIMD", "ARM NEON", "SSE / AVX2", "FFmpeg"],
        links: [{ label: "MPEG-5 EVC on GitHub", href: "https://github.com/mpeg5" }],
      },
    ],
    recognition: [
      "Inventor on 8 filed patents (2 as first inventor)",
      "Star IP Award",
      "Best Research-to-Development Award (Q3)",
      "AI Expert & Software Pro certification",
      "Multiple Spot Awards",
    ],
  },
  {
    company: "EVERSANA",
    logo: eversanaLogo,
    logoClass: "bg-white",
    role: "Intern",
    team: "Digital & Data Solutions",
    type: "Internship",
    period: "May 2023 – Jul 2023",
    location: "Mumbai, India",
    summary:
      "Data-driven strategy work for a client's medical-consumables business, from customer segmentation to a working prototype.",
    bullets: [
      "Built a stakeholder “typing tool” that classifies physicians and hospitals into behavioral cohorts and surfaces persona-based insights to raise Willingness-to-Recommend (WTR) and Intent-to-Pay (ITP).",
      "Identified the drivers of WTR and ITP and designed cohort-specific interventions, delivering a client-ready proposal and a dashboard demo.",
    ],
    tags: ["Customer segmentation", "Clustering", "Healthcare analytics", "Dashboards"],
    links: [
      { label: "Project repo", href: "https://github.com/subhrajitm20/EVERSANA_intern" },
      { label: "Tool write-up", href: "https://docs.google.com/document/d/1DrWs7rwFmNBb0Nu4jLkKuYiSGhbo5dwDiSgskTSHohE/edit" },
    ],
  },
];

export const patentAreas = {
  intra: { label: "Intra prediction", className: "border-accent-400/30 bg-accent-400/10 text-accent-200" },
  filter: { label: "In-loop filtering", className: "border-violet-400/30 bg-violet-400/10 text-violet-200" },
};

export const patents = [
  {
    area: "intra",
    title: "Methods and system for AI-based pixel-block prediction for video codec",
    description:
      "A unified, hardware-efficient network for intra prediction that uses reference lines to predict coding units of variable sizes.",
  },
  {
    area: "intra",
    title: "NN-based reference sample enhancement for intra prediction",
    description:
      "An enhancement network that improves the input to intra prediction by refining already-decoded reference pixels.",
  },
  {
    area: "intra",
    title: "Inverted-L-scan method for AI-based intra-frame prediction in video codec",
    description:
      "A pre- and post-processing method that prepares neighboring pixels for a unified NN-based intra prediction model.",
  },
  {
    area: "filter",
    title: "Adaptive visual artifact removal in video codec using AI in-loop filters",
    description:
      "Content-based partitioning of a Mixture of Experts for NN loop filtering, improving both subjective and objective quality.",
  },
  {
    area: "filter",
    title: "Dynamic AI-based multiplexing for combining NN and classical loop filters",
    description:
      "Scalar and patch-level multiplexing of classical loop filters with an NN-based loop filter to remove compression artifacts.",
  },
  {
    area: "filter",
    title: "On-the-fly kernel adaptation using affine transform in AI loop filtering",
    description:
      "Uses the quantization parameter as a prior for routing inside the network and dynamically updates its weights.",
  },
  {
    area: "filter",
    title: "Methods and systems for adaptable multi-filter refinement loop filtering",
    description:
      "A learned combination of relevant classical filters and a trainable filter that forms an edge-refinement block.",
  },
  {
    area: "filter",
    title: "Dynamic local patch modulation in AI-based in-loop filtering in video codec",
    description:
      "A spatial-attention-inspired design that learns how much weight to give each patch's local neighborhood.",
  },
];

export const projects = [
  {
    title: "Multimodal contrastive learning for medical diagnosis",
    context: "B.Tech project · Advisor: Dr. Tushar Sandhan",
    period: "Dec 2023 – May 2024",
    image: multimodalImg,
    description:
      "A generalizable SimCLR-based multimodal contrastive framework (InfoNCE loss) that fuses imaging (X-ray, MRI, CT) with tabular patient data to diagnose myocardial infarction and coronary artery disease. Extended to FDA/CDSCO medical-equipment classification from images and text, benchmarked against a unimodal BERT baseline.",
    tags: ["Contrastive learning", "SimCLR", "Multimodal", "BERT"],
    links: [
      { label: "Code", href: "https://github.com/subhrajitm20/Multimodal-Learning" },
      { label: "Slides", href: "https://docs.google.com/presentation/d/1w2MyJn9HPaaSV_WUI6EsZbESoax0solTMI4opp406LI/edit" },
    ],
  },
  {
    title: "UAV-guided UGV navigation",
    context: "Inter IIT Tech Meet 10.0 · DRDO Challenge",
    period: "Feb 2022 – Mar 2022",
    badge: "Silver medal",
    image: uavImg,
    description:
      "A hovering drone guides a ground vehicle over mountainous terrain. Segmented drone camera frames to find the road and the vehicle's heading, then drove it with a PID velocity controller and pure-pursuit steering. Autonomous take-off and mean-path extraction kept the UGV within 5 m of the road center.",
    tags: ["Segmentation", "PID control", "Pure pursuit", "Autonomy"],
    links: [
      { label: "Code", href: "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv" },
      { label: "Report", href: "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv/blob/main/MP_DR_T10_MID.pdf" },
    ],
  },
  {
    title: "Deep reinforcement learning for Atari",
    context: "Advisor: Dr. Subrahmanya Swamy Peruru",
    period: "Mar 2024 – Apr 2024",
    image: rlImg,
    description:
      "Implemented DQN and Double DQN agents for CartPole and Atari Breakout and Pong that beat the baseline agent and reach maximum-reward convergence, then extended them to an LSTM-based DRQN that matches published results under partial observability.",
    tags: ["DQN", "Double DQN", "DRQN / LSTM", "Atari"],
    links: [
      { label: "Code", href: "https://github.com/subhrajitm20/EE675-Reinforcement_Learning" },
      { label: "Report", href: "https://drive.google.com/drive/folders/1xa2A_B49D1-IBbBvnun66UW_GuToNvaF" },
    ],
  },
  {
    title: "Breaking PUFs and solving word games with ML",
    context: "Intro to Machine Learning · Advisor: Dr. Purushottam Kar",
    period: "Jan 2023 – Apr 2023",
    image: mlImg,
    description:
      "Broke simple and advanced XOR ring-oscillator PUFs with over 99% accuracy using linear models (Linear SVC, logistic regression), and built a decision-tree agent for a Hangman–Wordle hybrid that wins every game in 3.99 queries on average using max-information-gain splits.",
    tags: ["scikit-learn", "Linear models", "Decision trees", "Information gain"],
    links: [{ label: "Code", href: "https://github.com/subhrajitm20/CS771-Assignments" }],
  },
];

export const moreProjects = [
  {
    title: "mmWave antenna design",
    description:
      "Horn antennas for 75–110 GHz with frequency-selective surfaces, and an X-band monopulse conical feed for a LEO satellite ground station.",
    period: "2024",
    href: "https://github.com/PanditG-SS/Horn-Antenna",
  },
  {
    title: "Air-quality sensor calibration",
    description: "Calibrated an electrochemical air-quality sensor with Elastic Net and Extra Trees regressors.",
    period: "2023",
    href: "https://github.com/subhrajitm20/CS771-Assignments",
  },
  {
    title: "Image processing",
    description: "Classical image-processing assignments in Python and OpenCV, from filtering to enhancement.",
    period: "2023",
    href: "https://github.com/subhrajitm20/EE604-Image-Processing",
  },
  {
    title: "Web3 and blockchain",
    description: "Blockchain coursework assignments, including a loan system written in C++.",
    period: "2022",
    href: "https://github.com/subhrajitm20/Web3.0",
  },
];

export const skills = [
  {
    group: "Machine learning & vision",
    icon: "ml",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NumPy", "Pandas"],
  },
  {
    group: "Performance & video coding",
    icon: "perf",
    items: ["SIMD intrinsics", "ARM NEON", "SSE / AVX2", "H.266 / VVC", "MPEG-5 EVC", "APV", "FFmpeg", "Neural codecs"],
  },
  {
    group: "Languages",
    icon: "code",
    items: ["C++", "Python", "C", "MATLAB", "SQL"],
  },
  {
    group: "Tools & platforms",
    icon: "tools",
    items: ["Linux", "Git", "Bash", "Visual Studio", "ROS", "Gazebo", "LaTeX"],
  },
];

export const education = [
  {
    school: "University of California San Diego",
    degree: "M.S. in Computer Science and Engineering",
    period: "Sep 2026 – Mar 2028 (expected)",
    location: "San Diego, CA",
    highlights: [],
    focus: [
      "Efficient deep learning",
      "Computer vision",
      "Multimodal representation learning",
      "Neural compression",
      "ML systems",
      "Robot vision",
    ],
    coursesLabel: "Current coursework",
    courses: [
      "Probabilistic Reasoning in AI",
      "Parallel Computation",
      "Introduction to Robotics",
      "Unsupervised Learning (audit)",
    ],
  },
  {
    school: "Indian Institute of Technology Kanpur",
    degree: "B.Tech. in Electrical Engineering · Minor in Computer Science (Machine Learning)",
    period: "Jul 2020 – May 2024",
    location: "Kanpur, India",
    highlights: ["CPI 9.2 / 10", "Academic Excellence Award, 2021 · 2023 · 2024"],
    coursesLabel: "Relevant coursework",
    courses: [
      "Deep Learning",
      "Reinforcement Learning",
      "Linear Algebra",
      "Stochastic Processes",
      "Data Structures & Algorithms",
      "Signal Processing",
      "Computer Organization",
    ],
  },
];

export const honors = [
  { title: "Star IP Award", meta: "Samsung Research · for patent contributions" },
  { title: "Best Research-to-Development Award (Q3)", meta: "Samsung Research · plus multiple Spot Awards" },
  { title: "AI Expert & Software Pro", meta: "Samsung · 2025 · deep learning and software development" },
  { title: "Academic Excellence Award", meta: "IIT Kanpur · 2021, 2023 and 2024" },
  { title: "Silver Medal, Inter IIT Tech Meet 10.0", meta: "DRDO challenge: UAV-guided UGV navigation · 2022" },
  { title: "KVPY & NTSE Scholarships", meta: "Government of India · 2018–20" },
  { title: "Competitive programming", meta: "700+ problems solved · peak rating 1703" },
];

export const leadership = [
  {
    role: "Team Head, Aerial Robotics",
    org: "IIT Kanpur",
    period: "2021 – 2023",
    description:
      "Led a 30-member, two-tier team at national and international competitions, including the Inter IIT Tech Meets. Recruited and mentored 25 juniors and guided a swarm-robotics mini-project.",
  },
  {
    role: "Secretary, Entrepreneurship Cell",
    org: "IIT Kanpur",
    period: "2021 – 2022",
    description:
      "Ran a 100-student, three-tier team to deliver E-Summit 2022, and closed sponsorship deals and MoUs with partner companies.",
  },
  {
    role: "Project Mentor, Stamatics Society",
    org: "IIT Kanpur",
    period: "2023",
    description: "Mentored about 100 undergraduates in image-processing algorithms for computer vision.",
  },
  {
    role: "Academic Mentor, Counselling Service",
    org: "IIT Kanpur",
    period: "2021 – 2022",
    description: "Taught PHY102 sessions to around 600 students and guided 20+ freshmen through their first year.",
  },
];

export const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "patents", label: "Patents" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
