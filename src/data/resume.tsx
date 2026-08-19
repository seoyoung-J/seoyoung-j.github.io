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
  url: "https://seoyoung-j.github.io/",
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
    모델 실험과 성능 개선을 중심으로 추론 결과를 서비스에 적용하는 AI 개발 역량을 쌓아왔습니다.{" "}
    정형 데이터 기반 회귀부터 인스턴스 세그멘테이션과 이미지 이상 탐지까지 서로 다른 유형의 모델링 문제를 다뤘습니다.{" "}
    <span className="font-semibold text-foreground underline decoration-1 underline-offset-4">
      인스턴스 세그멘테이션에서 입력 해상도와 라벨 품질을 조정해 작은 결함 탐지 성능을 개선하고, 이상 탐지 모델의 Feature Layer를 최적화해 유사한 성능을 유지하면서 GPU 메모리 사용량을 약 63% 절감
    </span>
    했습니다.{" "}
    모델 성능 개선에 그치지 않고 ONNX Runtime 기반 추론 모듈과 LangGraph 기반 RAG 파이프라인을 구현해 실제 서비스 흐름까지 구성했습니다.
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
        "Instance Segmentation",
        "Anomaly Detection",
        "Anomalib",
        "OpenCV",
      ],
    },
    {
      title: "Serving / Backend",
      skills: [
        "ONNX Runtime",
        "FastAPI",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "AWS S3",
        "AWS SQS",
      ],
    },
    {
      title: "RAG / LLM",
      skills: [
        "RAG",
        "LangGraph",
        "FAISS",
      ],
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
