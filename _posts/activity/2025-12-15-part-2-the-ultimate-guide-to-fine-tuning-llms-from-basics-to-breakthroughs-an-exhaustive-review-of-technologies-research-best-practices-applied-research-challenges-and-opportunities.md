---
layout: activity_post
type: ai_seminar
title: '(Part 2) The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs: An Exhaustive Review of Technologies, Research, Best Practices, Applied Research Challenges and Opportunities'
date: 2025-12-15 00:00:00
author: '정성연'
video_url: 'https://youtu.be/ONA6Hd_kCRw'
ref_url: 'https://arxiv.org/pdf/2408.13296'
views: 0
comments: true
---

이 발표는 “Ultimate guide to fine-tuning LLMs”의 2부로, 전이학습(transfer learning) 개념을 정리한 뒤 파인튜닝 실행 단계와 핵심 파인튜닝 기법(PFT/부분학습, HFT/백본학습, MoE, 정렬(Alignment), 프루닝)을 체계적으로 정리합니다.

전이학습(Transfer Learning) 재정리
- 핵심 개념: 제너럴리스트(사전학습) → 스페셜리스트(어댑테이션).
- 왜 필요한가: 스크래치 학습은 비용·시간이 너무 큼.
- 구성: 사전학습(pre-training) + 어댑테이션(adaptation).
- 어댑테이션 종류: 도메인 어댑테이션(DAPT) vs 테스크 어댑테이션(SFT).
- 인퍼런스타임 적응: 파라미터 업데이트 없이 ICL/RAG로 보완 가능.

파인튜닝 실행 단계(프로세스)
- 모델/토크나이저 초기화: 입력을 토큰화하고 베이스 모델을 선택.
- 출력층 수정: 분류면 헤드 교체 등으로 출력 구조 변경.
- 전략 선택: 테스크 스페시픽 vs 도메인 스페시픽, PFT vs HFT 결정.
- 학습 루프: loss 계산→역전파→업데이트 반복, 조기 종료/스케줄링 활용.
- 멀티테스크 대응: 멀티 어댑터 또는 MoE로 확장 가능.
- 검증/모니터링: 검증 지표 추적 + 하이퍼파라미터 튜닝.
- 최적화/가지치기: Alignment 적용 후 Pruning으로 경량화.
- 반복 개선: 벤치마크와 피드백 기반 재조정.

전략 비교: 테스크 vs 도메인
- 테스크 스페시픽: 요약/분류/QA처럼 작업 요구에 맞춰 모델 선택.
- 도메인 스페시픽: 의료·금융처럼 전문성 강화를 위해 도메인 학습 수행.
- 예시: 의료(Med-PaLM2), 금융(FinGPT) 등.

PFT(부분 파라미터 학습) 핵심
- 목표: 전체 업데이트 대신 일부만 학습해 비용을 줄임.
- 장점: 메모리 절감, 학습 효율 증가, 망각 완화.
- 대표 기법
- Adapter: 백본 고정 + 작은 모듈만 학습(저장 효율↑, 추론 지연 가능).
- LoRA: 업데이트를 저랭크(BA)로 학습(구조 변경 적음).
- QLoRA: 4-bit 양자화 + LoRA로 대형 모델도 단일 GPU 학습 가능.
- DoRA: 크기/방향 분해 후 튜닝(성능↑ 가능, 복잡도↑).

HFT / 메모리 튜닝
- HFT: 백본 자체를 직접 업데이트하는 방식.
- 특징: PFT보다 변경 폭이 크고 지식 복구에 유리할 수 있음.
- 메모리 튜닝: 질문에 맞는 “메모리 전문가”를 선택해 사실 인출을 강화.

MoE vs MoA
- MoE: 토큰마다 일부 전문가만 활성화해 효율적으로 용량 확장.
- MoA: 여러 LLM 에이전트가 역할 분담 후 답을 통합하는 구조.

Alignment(언라인먼트)
- 목표: 사실성뿐 아니라 안전·선호·행동 기준에 맞추기.
- PPO: RLHF 핵심. 보상모델 기반 강화학습(안정적이지만 구현 복잡).
- DPO: 보상모델 없이 선호 데이터를 loss에 직접 반영(단순·빠름).
- ORPO: SFT에 패널티를 추가해 비선호 응답 확률을 억제.

Pruning(프루닝)
- 목표: 성능 손상 최소로 파라미터를 제거해 경량화.
- Unstructured: 개별 weight 제거.
- Structured: 뉴런/채널/헤드/레이어 단위 제거.

발표 결론
- 파인튜닝은 “학습 범위(PFT/HFT) + 정렬(Alignment) + 경량화(Pruning)”까지 포함하는 설계 문제.
- 다음 파트는 평가·배포·모니터링 중심으로 확장됨.
