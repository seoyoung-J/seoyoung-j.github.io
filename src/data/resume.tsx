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

  about:
    "데이터 특성에 맞는 모델을 실험하고, 운영 환경을 고려해 실제 서비스에 연결하는 AI 엔지니어를 목표로 경험을 쌓아왔습니다. 객체 탐지·인스턴스 세그멘테이션·이미지 이상 탐지 프로젝트에서 실험 조건을 설계하고 성능과 오류 사례를 분석했습니다. 또한 ONNX Runtime, FastAPI, Spring Boot와 비동기 분석 구조를 활용해 이미지 등록부터 추론, 결과 저장·조회까지 연결했습니다.",

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
    email: "",
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
