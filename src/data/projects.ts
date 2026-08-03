export type PortfolioProject = {
  slug: string;
  title: string;
  href: string;
  dates: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  presentationUrl?: string;
  showOnHome: boolean;
  order: number;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  dates: string;
  role: string;
  projectType: string;
  summary: string;
  coverImage?: string;
  githubUrl?: string;
  demoUrl?: string;
  demoVideo?: string;
  presentationUrl?: string;
  technologies: string[];
  href: string;
  mdx: string;
};

export const portfolioProjects = [
  {
    slug: "pv-insight",
    title: "RGB·열화상 기반 태양광 패널 관리 플랫폼",
    href: "/projects/pv-insight",
    dates: "2026년 5월 ~ 2026년 7월",
    description:
      "RGB·열화상 이미지를 분석해 태양광 패널의 이상 후보 구역과 유지보수 우선순위를 제공하는 관리 플랫폼입니다. 분석 결과와 점검 이력을 한곳에서 관리할 수 있습니다.",
    technologies: [
      "PyTorch",
      "YOLOv26s-seg",
      "Instance Segmentation",
      "ONNX Runtime",
      "FastAPI",
      "Spring Boot",
      "AWS SQS",
      "AWS S3",
      "Docker Compose",
    ],
    image: "/projects/pv-insight/pv-insight-thumbnail.png",
    githubUrl: "",
    demoUrl: "",
    showOnHome: true,
    order: 1,
  },
  {
    slug: "industrial-ai-platform",
    title: "산업 이미지 이상 탐지·설비 점검 플랫폼",
    href: "/projects/industrial-ai-platform",
    dates: "2026년 4월 ~ 2026년 5월",
    description:
      "제조 이미지의 정상·불량·재검사를 판정하고 이상 위치를 시각화하는 설비 점검 플랫폼입니다. 탐지 결과와 관련 문서를 바탕으로 점검 가이드를 제공합니다.",
    technologies: [
      "PyTorch",
      "Anomalib",
      "PatchCore",
      "PaDiM",
      "EfficientAD",
      "WideResNet50",
      "MobileNetV3",
    ],
    image:
      "/projects/industrial-ai-platform/industrial-ai-platform-thumbnail.png",
    githubUrl: "",
    demoUrl: "",
    showOnHome: true,
    order: 2,
  },
  {
    slug: "car-damage-rag-assistant",
    title: "차량 손상 탐지 및 대응 가이드 시스템",
    href: "/projects/car-damage-rag-assistant",
    dates: "2026년 7월",
    description:
      "차량 이미지에서 손상 유형과 위치를 탐지·분할하고 대응 가이드를 제공하는 시스템입니다. 추가 촬영, 수리 전 점검, 보험 준비 정보를 함께 안내합니다.",
    technologies: [
      "LangGraph",
      "FAISS",
      "YOLOv26n-seg",
      "multilingual-e5-small",
      "Instance Segmentation",
      "RAG",
      "Ollama",
      "Streamlit",
    ],
    image:
      "/projects/car-damage-rag-assistant/car-damage-rag-assistant-thumbnail.png",
    githubUrl: "",
    demoUrl: "",
    showOnHome: true,
    order: 3,
  },
] satisfies PortfolioProject[];