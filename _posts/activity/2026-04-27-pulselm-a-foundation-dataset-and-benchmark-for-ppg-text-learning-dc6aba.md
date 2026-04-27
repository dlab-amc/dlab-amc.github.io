---
layout: activity_post
type: ai_seminar
title: 'PulseLM: A Foundation Dataset and Benchmark for PPG-Text Learning'
date: 2026-04-27 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/3AYjd71Ok2U'
ref_url: 'https://doi.org/10.48550/arXiv.2603.03331'
views: 0
comments: true
---

이 발표는 여러 환경에서 수집된 15개의 공개 PPG 데이터셋을 통합하여 대규모 질문-답변(QA) 형태의 벤치마크를 구축하고, 생체 신호와 텍스트를 결합한 멀티모달 파운데이션 모델의 가능성을 제시한 PulseLM논문을 소개합니다.

연구 배경 및 기존 PPG 모델의 한계
- 광센서 기반 혈류량 측정으로 심박수(HR), 혈압(BP), 수면 장애 등 다양한 생리 상태 추론
- 단일 테스크(HR, BP 등) 특화 모델 위주 및 텍스트 결합 데이터셋(PPG-Text) 부재
- 측정 위치, 샘플레이트, 레이블 정의 불일치로 인한 통합 한계 및 생체 신호의 자연어 학습 구조 부재
- 다중 테스크 통합을 위한 폐쇄형(Closed-ended) QA 프레임워크 제안

PulseLM 데이터셋 구축 및 정제 과정
- 15개 공개 PPG 데이터셋 통합 (약 315만 개 QA 페어 및 131만 개 10초 세그먼트 구축)
- 125Hz 리샘플링, 저주파 통과 필터(8Hz), DC 컴포넌트 제거, Min-Max 스케일링을 통한 신호 표준화
- 수치형 레이블의 범주형 공통 레이블 통일 (Ground Truth Harmonization)
- LLM 패러프레이징 기반 다양한 질문 생성 및 확정적 규칙(Deterministic rule) 기반 정답 레이블링

멀티모달 모델 아키텍처 및 퓨전 기법
- 10초 분할 PPG 파형 신호 및 자연어 질문(Question) 텍스트 동시 입력
- PPG 인코더(PaPaGei) 임베딩과 LLM 텍스트 토큰 차원 일치를 위한 프로젝션 레이어(Mapper) 적용
- 차원 통합된 PPG 토큰과 질문 토큰 병합(Concat) 및 LLM 디코더 기반 멀티모달 퓨전 진행
- LoRA 활용 LLM 일부 파인튜닝 및 셀프 어텐션 기반 최종 정답 도출

실험 결과 및 향후 과제
- 뚜렷한 리듬 패턴 테스크(심방세동, 부정맥 등)에서의 대형 모델(4B, 8B) 고성능 확인
- 심박수(HR)의 높은 일반화 성능 및 파형 형태에 민감한 혈압(BP)의 도메인 시프트(Domain Shift) 취약성 확인
- 질문 자동 생성에 따른 언어적 편향(Linguistic bias) 존재 및 폐쇄형 구조의 임상 진단 대체 한계
- 향후 개방형(Open-ended) 리포트 생성, 전문가 검증 어노테이션 도입, 멀티모달 표현 학습(Representation Learning)으로의 확장 계획
