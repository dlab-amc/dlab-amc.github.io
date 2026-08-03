---
layout: activity_post
type: ai_seminar
title: 'Retrieval augmented generation for 10 large language models and its generalizability in assessing medical fitness'
date: 2026-08-03 00:00:00
author: '류가연'
video_url: 'https://youtu.be/uoNHJBmVrB4'
ref_url: 'https://doi.org/10.1038/s41746-025-01519-z'
views: 0
comments: true
---

이 발표는 10개의 대형 언어 모델(LLM)에 검색 증강 생성(RAG)을 적용하여 수술 전 환자의 의학적 적합성 평가 및 지침 제공에 대한 정확도, 일관성, 안전성을 검증한 연구를 제시합니다.

연구 배경 및 목적
- LLM의 임상 적용 잠재력과 도메인 특화 지식 부족의 한계 극복 필요성 대두
- 환자의 수술 적합성 판별 및 수술 전 지침 제공을 위한 LLM-RAG 파이프라인 개발 및 평가
- 35개의 지역 가이드라인과 23개의 국제 가이드라인을 통합한 맞춤형 지식 기반 활용

연구 방법
- GPT, Gemini, Llama, Claude 등 10개의 LLM 기반 RAG 모델 테스트 진행
- 14개의 다양한 임상 시나리오를 바탕으로 3234개의 LLM 응답과 448개의 인간(의사) 응답 비교 분석
- Llamaindex 프레임워크 및 Auto-Merging Retrieval 기능 적용을 통한 검색 품질 최적화
- S.C.O.R.E. (안전성, 합의성, 객관성, 재현성, 설명성) 프레임워크를 통한 LLM 응답의 정성적 평가 수행

주요 결과
- 국제 가이드라인을 적용한 GPT-4 RAG 모델(GPT4_international)의 수술 적합성 예측 정확도 96.4% 달성 (인간 평가자 86.6% 대비 유의미한 우수성 확보)
- 인간 평가자 대비 평균 응답 생성 시간 대폭 단축 (인간 평균 10분 소요 vs LLM-RAG 20초 이내 완료)
- GPT-4 기반 모델의 높은 재현성 및 안전한 지침 생성 확인
- Llama2 모델을 제외한 대부분의 모델에서 0~2.9% 수준의 낮은 환각(Hallucination) 비율 기록

결론 및 한계점
- GPT-4 기반 LLM-RAG 시스템의 수술 전 의학적 적합성 평가 도구로서의 높은 임상적 가치 및 일관성 입증
- 인간 전문가를 완전히 대체하기보다는 의료진의 업무 부담을 줄이는 보조 도구(Human-in-the-loop)로서의 활용 권장
- 시뮬레이션된 임상 시나리오 기반 연구로 인한 실제 임상 환경으로의 일반화 제약
- 대규모 검색 및 생성 모델 결합으로 인한 컴퓨팅 자원 및 지연 시간(Latency) 증가 한계
