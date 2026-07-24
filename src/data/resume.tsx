import { Icons } from "@/components/icons";
import { projects } from "@/data/projects";
import { FolderKanban, HomeIcon, UserRound } from "lucide-react";
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
  initials: "JS",
  url: "https://github.com/seoyoung-J",
  location: "Seoul, Korea",
  locationLink: "https://www.google.com/maps/place/seoul",
  description:
    "모델을 실험하고 서비스 흐름까지 구현하는 AI 엔지니어 조서영입니다.",
  avatarUrl: "",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", dock: true },
    { href: "#about", icon: UserRound, label: "About", dock: true },
    { href: "#projects", icon: FolderKanban, label: "Projects", dock: true },
    { href: "#skills", icon: UserRound, label: "Skills", dock: false },
  ],
  about:
    "데이터 특성에 맞는 모델을 실험하고, 운영 환경을 고려해 실제 서비스에 적용하는 AI 엔지니어를 목표로 경험을 쌓아왔습니다.컴퓨터 비전 기반 객체 탐지와 이미지 이상 탐지, 제조 공정 데이터 기반 예측 프로젝트를 수행하며 실험 조건 설정, 성능 비교와 오류 분석 과정을 경험했습니다. 모델 학습에 그치지 않고 FastAPI, ONNX Runtime, 비동기 분석 구조와 결과 조회 기능을 통해 모델이 서비스 안에서 사용되는 전체 흐름을 구현해 왔습니다.",
  skills: [
    {
      title: "AI / ML",
      skills: ["Python", "PyTorch", "TensorFlow/Keras", "scikit-learn"],
    },
    {
      title: "Computer Vision",
      skills: [
        "YOLO",
        "OpenCV",
        "Anomalib",
        "Object Detection",
        "Instance Segmentation",
        "Anomaly Detection",
      ],
    },
    {
      title: "Backend & Infrastructure",
      skills: ["Spring Boot", "PostgreSQL", "Docker", "AWS"],
    },
    {
      title: "RAG & AI Serving",
      skills: ["LangGraph", "FAISS", "FastAPI", "ONNX Runtime"],
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
  projects,
} as const;
