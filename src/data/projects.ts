export type ProjectDecision = {
  title: string;
  reasoning: string[];
  alternatives: string[];
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectExperiment = {
  name: string;
  condition: string;
  result: string;
  decision: string;
};

export type ProjectTroubleshooting = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  section?: string;
};

export type ProjectCaseStudy = {
  overview?: string[];
  problem?: string[];
  constraints?: string[];
  approach?: string[];
  decisions?: ProjectDecision[];
  systemFlow?: string[];
  modeling?: {
    description?: string[];
    experiments?: ProjectExperiment[];
  };
  serviceIntegration?: string[];
  techStack?: string[];
  metrics?: ProjectMetric[];
  resultDescription?: string[];
  troubleshooting?: ProjectTroubleshooting[];
  learnings?: string[];
  additionalContext?: string[];
  images?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  featured: boolean;
  period: string;
  summary: string;
  highlight: string;
  role: string;
  teamSize: string;
  projectType: string;
  impact: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  caseStudy: ProjectCaseStudy;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: [];
  video: string;
};

export const projects: Project[] = [
  {
    slug: "solar-panel",
    title: "태양광 패널 결함 탐지 및 평가 플랫폼",
    status: "Featured",
    featured: true,
    period: "2026.05.26 - 2026.07.05",
    summary:
      "RGB·열화상 이미지 분석부터 ONNX 기반 추론, SQS 비동기 작업 처리와 결과 조회까지의 서비스 흐름을 구현했습니다.",
    highlight:
      "세그멘테이션 모델을 ONNX 기반 추론 흐름과 비동기 분석 서비스에 연동",
    role: "AI Engineer",
    teamSize: "2명",
    projectType: "팀 프로젝트",
    impact:
      "RGB·열화상 이미지를 분석해 이상 후보 구역과 유지보수 조치 우선순위를 제공하는 유지보수 지원 플랫폼입니다.",
    techStack: [
      "YOLO",
      "PyTorch",
      "ONNX Runtime",
      "FastAPI",
      "Spring Boot",
      "AWS",
    ],
    image: "/projects/solar-panel.svg",
    githubUrl: "",
    demoUrl: "",
    caseStudy: {
      overview: [
        "RGB 이미지와 열화상 이미지를 각각 분석해 태양광 발전소의 이상 후보 구역을 선별하고, 청소·재촬영·현장 점검·교체 검토 우선순위를 제공하는 유지보수 지원 플랫폼입니다.",
        "저는 RGB 세그멘테이션 모델 실험과 ONNX 변환, FastAPI 기반 추론 모듈, Spring Boot 분석 Job 생성 및 결과 조회 흐름을 구현했습니다.",
      ],
      problem: [
        "태양광 발전소는 넓은 구역에 다수의 패널이 설치되어 있어 모든 패널을 자주 정밀 검사하기 어렵습니다.",
        "RGB 이미지와 열화상 이미지에서 확인할 수 있는 이상 유형이 다르며, 모델의 탐지 결과만으로는 관리자가 청소, 재촬영, 현장 점검, 교체 검토 중 어떤 조치를 먼저 수행해야 하는지 판단하기 어렵습니다.",
      ],
      constraints: [
        "RGB 이미지와 열화상 이미지를 각각 독립적으로 분석해야 함",
        "CPU 기반 운영 환경에서도 실행 가능한 모델 형식이 필요함",
        "이미지 분석 요청을 사용자 HTTP 요청과 분리된 비동기 작업으로 처리해야 함",
        "AI 분석 결과를 Spring Boot 서비스의 결과 조회 구조와 연결해야 함",
        "운영 모델 교체 시 모델 파일과 Manifest의 정합성을 검증해야 함",
      ],
      approach: [
        "RGB와 열화상 이미지를 하나의 Fusion 입력으로 강제하지 않고 이미지 유형별 단건 분석 구조를 적용했습니다.",
        "RGB 모델은 패널 외관의 broken, bitki, dusty, missing, shading 영역을 세그멘테이션하고, 열화상 모델은 발열 이상 후보를 별도로 분석하도록 구성했습니다.",
        "학습된 PyTorch 모델은 ONNX 형식으로 변환한 뒤 FastAPI AI Worker에서 실행하고, Spring Boot Backend가 생성한 분석 Job을 SQS를 통해 비동기로 처리하도록 연결했습니다.",
      ],
      decisions: [
        {
          title: "RGB와 열화상 이미지를 독립적인 단건 분석으로 처리",
          reasoning: [
            "두 이미지 유형은 입력 특성과 탐지 대상이 다르며, 항상 RGB와 열화상이 동시에 업로드된다는 보장이 없습니다.",
            "이미지별로 독립적인 Job을 생성하면 한 이미지의 분석 실패가 다른 이미지의 상태와 결과에 영향을 주지 않습니다.",
          ],
          alternatives: [
            "RGB와 열화상 이미지 Pair를 필수로 구성하는 방식",
            "Fusion 모델로 두 이미지를 동시에 처리하는 방식",
          ],
        },
        {
          title: "PyTorch 모델을 Raw FP32 ONNX 형식으로 변환",
          reasoning: [
            "학습 환경과 서비스 추론 환경을 분리하고 FastAPI AI Worker에서 ONNX Runtime 기반의 일관된 추론 흐름을 구성하기 위해 ONNX 형식을 적용했습니다.",
            "변환 후 원본 PyTorch 모델과 ONNX 모델의 출력 정합성을 검증했습니다.",
          ],
          alternatives: [
            "PyTorch 가중치를 서비스 컨테이너에서 직접 로딩",
            "초기 단계부터 양자화 모델을 운영 모델로 사용",
          ],
        },
        {
          title: "AI 분석을 SQS 기반 비동기 Job으로 처리",
          reasoning: [
            "모델 추론 시간이 사용자 HTTP 요청 시간과 직접 결합되지 않도록 분석 요청과 실행을 분리했습니다.",
            "Job 상태를 QUEUED, RUNNING, SUCCEEDED, FAILED로 관리해 사용자가 분석 진행 상태와 실패 원인을 확인할 수 있도록 했습니다.",
          ],
          alternatives: [
            "Backend 요청 안에서 동기적으로 모델 추론 실행",
            "Frontend가 FastAPI AI Worker를 직접 호출",
          ],
        },
      ],
      systemFlow: [
        "사용자 이미지 업로드",
        "Spring Boot Backend 메타데이터 저장",
        "분석 Job 생성 및 SQS 메시지 발행",
        "FastAPI AI Worker 메시지 수신",
        "S3 원본 이미지 조회",
        "ONNX Runtime 추론",
        "결과 이미지와 메타데이터 저장",
        "Frontend 결과 조회",
      ],
      modeling: {
        description: [
          "RGB 이미지는 broken, bitki, dusty, missing, shading의 5개 클래스를 대상으로 인스턴스 세그멘테이션 모델을 학습했습니다.",
          "베이스라인 이후 입력 해상도, Epoch, 라벨 정제 정책과 Fine-tuning 조건을 비교했습니다.",
        ],
        experiments: [
          {
            name: "Baseline",
            condition: "1024",
            result: "0.4156",
            decision: "비교 기준",
          },
          {
            name: "Resolution",
            condition: "1280",
            result: "0.4307",
            decision: "성능 향상",
          },
          {
            name: "Fine-tuning",
            condition: "1280",
            result: "0.4373",
            decision: "최종 후보 검토",
          },
        ],
      },
      serviceIntegration: [
        "PyTorch 모델을 ONNX로 변환하고 출력 정합성 검증",
        "FastAPI에서 전처리·추론·후처리 모듈 구현",
        "Spring Boot에서 분석 Job 생성과 SQS 메시지 발행",
        "AI Worker에서 Job 상태를 조건부로 갱신",
        "S3에 원본 및 결과 이미지 저장",
        "PostgreSQL에 분석 결과와 상태 메타데이터 저장",
        "Frontend에서 분석 상태와 결과 조회",
      ],
      techStack: [
        "Python",
        "PyTorch",
        "YOLO",
        "ONNX Runtime",
        "FastAPI",
        "Spring Boot",
        "PostgreSQL",
        "AWS S3",
        "AWS SQS",
        "Docker",
      ],
      metrics: [
        {
          value: "Validation Mask mAP50 0.677 → 0.707",
          label: "MODEL PERFORMANCE",
        },
        {
          value: "약 29% 감소",
          label: "MODEL ARTIFACT SIZE",
        },
        {
          value: "QUEUED → RUNNING → SUCCEEDED / FAILED",
          label: "ASYNC JOB FLOW",
        },
      ],
      resultDescription: [
        "모델 실험에서 끝나지 않고 이미지 업로드, 비동기 분석, ONNX 추론, 결과 저장과 화면 조회까지의 서비스 흐름을 연결했습니다.",
        "모델 Manifest와 SHA256 검증을 적용해 운영 모델 교체 과정에서 파일 정합성과 정상 로딩 여부를 확인할 수 있도록 했습니다.",
      ],
      troubleshooting: [
        {
          title: "동일 분석 Job의 중복 처리 가능성",
          problem:
            "SQS는 동일 메시지를 중복 전달할 수 있으며 여러 Worker가 하나의 Job을 동시에 처리할 가능성이 있었습니다.",
          solution:
            "QUEUED 상태의 Job만 RUNNING으로 변경할 수 있도록 조건부 Update를 적용했습니다. 이미 RUNNING, SUCCEEDED, FAILED 상태인 Job은 다시 처리하지 않도록 했습니다.",
          result: "동일 Job에 대한 중복 추론과 결과 중복 저장 가능성을 줄였습니다.",
        },
        {
          title: "PyTorch와 ONNX 출력 정합성 확인",
          problem:
            "모델 변환이 성공하더라도 PyTorch와 ONNX Runtime의 출력이 동일하다는 보장이 필요했습니다.",
          solution:
            "동일 입력에 대한 출력 shape와 주요 결과를 비교하고 Manifest 및 smoke test를 통해 정상 로딩 여부를 검증했습니다.",
          result:
            "서비스에 배포되는 모델 파일의 변환 오류와 파일 불일치 가능성을 사전에 확인할 수 있도록 했습니다.",
        },
      ],
      learnings: [
        "모델 성능뿐 아니라 추론 환경과 서비스 연결 조건을 함께 고려해야 했습니다.",
        "비동기 분석 구조에서는 모델 추론뿐 아니라 Job 상태와 재처리 정책이 중요했습니다.",
        "모델 파일만 교체하는 것보다 Manifest와 해시 검증을 포함한 배포 계약이 필요했습니다.",
      ],
      additionalContext: [
        "현재 RGB와 열화상 이미지는 각각 독립적인 단건 모델로 분석하며, 두 이미지 결과를 결합하는 Fusion 분석은 운영 범위에 포함하지 않았습니다.",
        "GPU 학습 환경에서 확인한 추론 속도와 실제 EC2 CPU ONNX 추론 속도는 다를 수 있으므로 운영 환경 기준의 별도 벤치마크가 필요합니다.",
      ],
      images: [],
    },
    href: "/projects/solar-panel",
    dates: "2026.05.26 - 2026.07.05",
    active: true,
    description:
      "RGB·열화상 이미지 분석부터 ONNX 기반 추론, SQS 비동기 작업 처리와 결과 조회까지의 서비스 흐름을 구현했습니다.",
    technologies: [
      "YOLO",
      "PyTorch",
      "ONNX Runtime",
      "FastAPI",
      "Spring Boot",
      "AWS",
    ],
    links: [],
    video: "",
  },
  {
    slug: "anomaly-detection",
    title: "산업 이미지 이상 탐지 및 설비 점검 가이드 플랫폼",
    status: "In Progress",
    featured: false,
    period: "2026.04.17 - 2026.05.15",
    summary:
      "제조 이미지의 이상 위치를 탐지하고 문서 기반 설비 점검 가이드를 제공하는 플랫폼",
    highlight:
      "Object·Texture 특성에 따라 이상 탐지 모델의 성능과 처리 효율을 비교해 적용 기준 수립",
    role: "AI Engineer",
    teamSize: "2명",
    projectType: "팀 프로젝트",
    impact: "상세 Case Study는 추후 실제 구현 내용과 함께 확장할 예정입니다.",
    techStack: [
      "PatchCore",
      "PaDiM",
      "EfficientAD",
      "Anomalib",
      "PyTorch",
      "FastAPI",
    ],
    image: "/projects/anomaly-detection.svg",
    githubUrl: "",
    demoUrl: "",
    caseStudy: {},
    href: "/projects/anomaly-detection",
    dates: "2026.04.17 - 2026.05.15",
    active: true,
    description:
      "제조 이미지의 이상 위치를 탐지하고 문서 기반 설비 점검 가이드를 제공하는 플랫폼",
    technologies: [
      "PatchCore",
      "PaDiM",
      "EfficientAD",
      "Anomalib",
      "PyTorch",
      "FastAPI",
    ],
    links: [],
    video: "",
  },
  {
    slug: "car-damage-rag",
    title: "차량 손상 탐지 및 대응 가이드 시스템",
    status: "In Progress",
    featured: false,
    period: "2026.05 - 2026.07",
    summary:
      "차량 손상 탐지 결과를 LangGraph 기반 RAG와 연결해 대응 가이드를 제공하는 시스템",
    highlight:
      "YOLO 손상 탐지 결과와 E5·FAISS 문서 검색 및 LangGraph 답변 흐름 연결",
    role: "AI Engineer",
    teamSize: "2명",
    projectType: "팀 프로젝트",
    impact: "상세 Case Study는 추후 실제 구현 내용과 함께 확장할 예정입니다.",
    techStack: ["YOLO", "LangGraph", "FAISS", "E5", "Ollama", "Streamlit"],
    image: "/projects/car-damage-rag.svg",
    githubUrl: "",
    demoUrl: "",
    caseStudy: {},
    href: "/projects/car-damage-rag",
    dates: "2026.05 - 2026.07",
    active: true,
    description:
      "차량 손상 탐지 결과를 LangGraph 기반 RAG와 연결해 대응 가이드를 제공하는 시스템",
    technologies: ["YOLO", "LangGraph", "FAISS", "E5", "Ollama", "Streamlit"],
    links: [],
    video: "",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined };
  }

  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return {
    previous: projects[previousIndex],
    next: projects[nextIndex],
  };
}
