---
layout: activity_post
type: ai_seminar
title: 'Toward expert-level medical question answering with large language models'
date: 2025-10-27 00:00:00
author: '김영돈'
video_url: 'https://youtu.be/3I1nPRPjj0Q'
ref_url: 'https://arxiv.org/pdf/2305.09617'
views: 0
comments: true
---

이 발표는 Nature Medicine(2025) Med-PaLM 2가 Med-PaLM 1의 사실성·안전성 한계를 해결하기 위해 기반모델(PaLM2) 업그레이드 + 자기평가(ER) + 문헌검색(COR) + 의사피드백 정렬(DPO) 을 결합해 임상형 장문 답변 품질을 크게 끌어올린 과정을 정리합니다.

Med-PaLM 1 한계
- 베이스: Flan-PaLM + few-shot/CoT/self-consistency + 소프트 프롬프트 튜닝
- 성능: USMLE 67% 통과
- 문제: 장문 사실성 61%, 위험 정보 29% 포함 → 안전성 부족

Med-PaLM 2 핵심 업그레이드
- 베이스 모델: PaLM → PaLM 2(추론·코딩·다국어·효율 개선)
- 정렬: SFT + 의사 선호 기반 DPO
- 추론/생성: ER(앙상블+자기평가 정제) + COR(문헌 검색·인용 기반 생성)

파이프라인(4단계)
- Candidate generation: 다중 답 생성
- Ensemble refinement(ER): 자기평가로 재작성/정제
- Chain-of-retrieval(COR): PubMed/Wikipedia medical 검색 → 근거문장 선별 → 인용 포함 답변
- Selection loop: 9개 축(사실성/추론/안전/편향/포괄성 등) 품질평가로 반복 업데이트

데이터·평가 고도화
- MultiMedQA v2: 기존 + adversarial long 질문 + bedside consultation 20문항
- 지표: 단일 정확도 → 의사 참여 9축 품질평가(블라인드)

성능 변화(요약)
- 객관식(MedQA): 67.2% → 85.4%
- 위험 낮은 비율: 79.4% → 90.6%
- 장문 사실성: 68% → 83%
- 의사 선호: 9축 중 3축 우세 → 8축 우세
- bedside(전문의 비교): 일반의 대비 65% 선호, 전문의 대비는 모델 40% vs 전문의 60%

한계 및 다음 단계
- 한계: 텍스트 QA 중심, 영어권 편향, 실사용 책임/가이드라인 부족
- 방향: Med-PaLM M(멀티모달 통합) + 근거·경로 설명 강화 + 임상 워크플로(CDS) 연동
