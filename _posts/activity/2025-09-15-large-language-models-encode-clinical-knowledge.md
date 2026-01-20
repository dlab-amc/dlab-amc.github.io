---
layout: activity_post
type: ai_seminar
title: 'Large Language Models Encode Clinical Knowledge'
date: 2025-09-15 00:00:00
author: '김영돈'
video_url: 'https://youtu.be/ecspPQi1OK8'
ref_url: 'https://www.nature.com/articles/s41586-023-06291-2'
views: 0
comments: true
---

이 발표는 의료 분야에서 LLM이 가진 임상 지식의 성능·안전성 한계를 검증하기 위해, MultiMedQA 벤치마크를 구축하고 Flan-PaLM→Med-PaLM으로 안전 정렬(instruction prompt tuning)**하여 의사 수준의 사실성·안전성을 달성한 2023년 Nature 논문 리뷰입니다.

연구 목적(핵심 질문)
- 의료 LLM을 임상 현장에 안전하게 적용할 수 있는가?
- 객관식 정답률이 아니라 사실성·추론·안전성까지 포함해 평가해야 한다

Step 1. 평가 기반 구축(MultiMedQA)
- 기존 한계: 객관식 정확도 중심 → 임상적 유용성/위험성 평가 불충분
- MultiMedQA 구성
- 전문 시험형(임상 추론/기초의학): MedMCQA, MedQA, MMLU 등
- 논문 이해형: PubMedQA
- 소비자 질문형: LiveQA, MedicationQA, HealthSearchQA 등

Step 2. 베이스라인 모델 평가(Flan-PaLM)
- 모델 차이
- PaLM: 대규모 LM: Flan-PaLM: instruction tuning으로 지시 수행 능력 강화
- 추론 프롬프팅 전략: few-shot + chain-of-thought + self-consistency로 성능 최대화 성능 USMLE 계열에서 67.6% 수준 달성
- 불확실 시 답변 보류하면 남은 답변 정확도 **82.5%**까지 상승

Step 3. 한계 발견(임상 상담 안전성 문제)
- 장문/상담형 답변에서 문제 발생
- 과학적 합의 불일치 약 40%
- 잠재적 위험 답변 약 30%
- 결론
- 범용 LLM을 그대로 의료에 쓰기엔 위험도가 높다

Step 4. 해결책: 안전 정렬(Med-PaLM, instruction prompt tuning)
- 핵심 아이디어: 모델 전체를 다시 학습하는 것이 아니라 의료 전문가 모범답안 65개로 “소프트 프롬프트”만 학습해 정렬
- 효과(인간 평가)
- 과학적 합의 부합: 61.9% → 92.6%
- 잠재적 위험: 29.7% → 5.9%
- 올바른 지식 인출: 76.3% → 95.3%
- 인간 평가 프레임워크(정답률 외 평가)
- 전문가 패널(의사 9명): 사실성, 위험성, 편향 등 전문 항목 평가
- 일반인 패널(5명): 이해도, 도움 여부 중심 평가

결론 및 남은 과제
- 결론: MultiMedQA로 “제대로 평가”하고, prompt tuning으로 “안전 정렬”하면 의사 수준에 근접 가능
- 한계: 근거(출처) 제시 부족 등은 여전히 남음
- 다음 단계: 더 강화된 정렬·검색을 포함한 Med-PaLM 2로 발전 흐름 연결
