---
layout: activity_post
type: ai_seminar
title: 'AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applicationsand Challenges'
date: 2025-12-01 00:00:00
author: '김영돈'
video_url: 'https://youtu.be/v22eeursPs0'
ref_url: 'https://arxiv.org/pdf/2505.10468'
views: 0
comments: true
---

이 발표는 2025년 Information Fusion에 출판된 “AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applicationsand Challenges”를 기반으로, AI Agents와 Agentic AI를 정의·구조·적용 범위로 구분하고 핵심 차이(멀티에이전트·오케스트레이션·공유 메모리) 및 한계/해결방향/미래 로드맵을 키워드 중심으로 정리합니다.

개념 정리(3단계 진화)
- Generative AI: 단일턴 생성(프롬프트→응답)
- AI Agents: 단일 에이전트가 툴 호출로 멀티스텝 수행
- Agentic AI: 다중 전문 에이전트 협업 + 오케스트레이션 + 지속/공유 메모리로 장기 목표 수행

AI Agents 특징(단일 테스크 자동화)
- Autonomy: 최소 개입 자율 실행
- Task-specificity: 좁고 명확한 작업 최적화
- Reactivity: 입력/환경 변화에 즉각 반응
- 예: 뉴스 요약, 이메일 분류, 일정 관리, 고객지원

Agentic AI 특징(시스템 단위 문제 해결)
- 멀티에이전트 분업: 역할별 전문 에이전트
- Shared/Persistent Memory: 컨텍스트 유지·공유
- Orchestration Layer: 목표 분해·역할 배정·충돌 해결·진행 관리
- 예: 연구 자동화, 다중 로봇 협업, 의료 의사결정 지원 워크플로우

한계/리스크
- AI Agents 한계 : 인과추론 부족, 환각/편향 상속, 장기 계획 약함, 중간단계 검증 어려움
- Agentic AI 리스크 : 오류 증폭, 조정 병목/데드락, 이머전트 행동(무한루프), 디버깅·설명가능성 난이도, 보안 공격면 확대, 책임/거버넌스 불명확, 표준 미성숙

해결 방향(논문 제안 키워드)
- RAG로 근거 기반 강화/환각 감소
- Tool integration으로 기능 위임·정확도 향상
- ReAct 루프(추론-행동-관찰-재평가)로 안정성 확보
- 인과추론 강화, 역할 분리+오케스트레이션, 로깅/검증 프레임워크, 보안/권한관리/거버넌스 필요

미래 방향
- AI Agents: 능동적 지능, 도구 중심 통합, 인과추론 강화, 지속 학습/메모리, 검증 가능한 운영
- Agentic AI: 멀티에이전트 스케일링, 통합 오케스트레이션, 지속 메모리, 시뮬레이션 기반 검증, 윤리 거버넌스, 도메인 특화
- AJR(Self-play): 외부 데이터 의존을 줄이고 스스로 문제를 만들고 푸는 자기발전형 추론 패러다임 제시
