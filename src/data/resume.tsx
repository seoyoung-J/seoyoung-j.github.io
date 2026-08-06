import { Icons } from "@/components/icons";
import { FolderKanban, HomeIcon } from "lucide-react";
import type React from "react";

type WorkItem = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type HackathonItem = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  icon?: string;
  win?: string;
  mlh?: string;
  links: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "Seoyoung Jo",
  initials: "SJ",
  url: "https://github.com/seoyoung-J",
  location: "Seoul, Korea",
  locationLink: "https://www.google.com/maps/place/seoul",
  description:
    "모델을 실험하고 서비스 흐름까지 구현하는 AI 엔지니어 조서영입니다.",
  avatarUrl: "",

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
      dock: true,
    },
    {
      href: "/#projects",
      icon: FolderKanban,
      label: "Projects",
      dock: true,
    },
  ],

  about: (
    <>
      데이터 특성에 맞는 모델을 실험하고, 운영 환경을 고려해 실제 서비스에 적용하는 경험을 쌓았습니다. 객체 탐지·인스턴스 세그멘테이션·이상 탐지 프로젝트를 수행하며 모델을 비교하고 파라미터를 최적화했습니다.{" "}
      <span className="font-semibold text-foreground underline decoration-1 underline-offset-4">
        모델 실험을 통해 작은 결함 탐지 성능을 개선하고, 속도형 이상 탐지 모델의 GPU 메모리 사용량을 기존 구성 대비 약 63% 절감했습니다.
      </span>{" "}
      또한 탐지 결과를 반영한 RAG 파이프라인을 설계하고, 추론부터 결과 조회까지 이어지는 서비스 흐름을 구현했습니다.
    </>
  ),
  skills: [
    {
      title: "ML / DL",
      skills: [
        "Python",
        "PyTorch",
        "Scikit-Learn",
        "TensorFlow",
      ],
    },
    {
      title: "Computer Vision",
      skills: [
        "YOLO",
        "Image Segmentation",
        "Anomaly Detection",
        "Anomalib",
        "OpenCV",
        "ONNX Runtime",
      ],
    },
    {
      title: "Backend / Infra",
      skills: [
        "FastAPI",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
    },
    {
      title: "RAG / LLM",
      skills: ["RAG", "LangGraph", "FAISS"],
    },
  ],

  contact: {
    email: "syjo2510@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/seoyoung-J",
        icon: Icons.github,
        navbar: true,
      },
    },
  },

  work: [] as WorkItem[],
  education: [] as EducationItem[],
  hackathons: [] as HackathonItem[],
} as const;
