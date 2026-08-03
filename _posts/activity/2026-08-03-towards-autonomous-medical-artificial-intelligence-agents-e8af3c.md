---
layout: activity_post
type: ai_seminar
title: 'Towards autonomous medical artificial intelligence agents'
date: 2026-08-03 00:00:00
author: '김민소'
video_url: 'https://youtu.be/osUb2MNK-PQ'
ref_url: 'https://doi.org/10.1038/s41586-026-10675-5'
views: 0
comments: true
---

이 발표는 2024년 6월 Nature에 게재된 "Autonomous Medical Artificial Intelligence Agents" 논문을 바탕으로, 단편적인 의학 지식 응답을 넘어 환자 문진, 검사 처방, 진단, 입원 결정까지 실제 임상의의 연속적인 워크플로우(Encounter-level workflow)를 시뮬레이션 환경에서 검증한 통합 AI 에이전트 시스템(AMIE/MIRA)을 소개합니다.

연구 배경 및 목표
- 기존 한계: 단순 의료 질의응답(QA)이나 기능 단위의 모델은 검사, 처방, 입원 결정으로 이어지는 실제 임상의 전체 워크플로우와 안전성을 평가하지 못함
- 목표 1: EHR 시스템 내에서 응급실 워크플로우를 실행하는 피지션(Physician) 에이전트 구축
- 목표 2: 환자 시뮬레이션(Patient Agent) 및 도구 관측(Tool Observation)이 실제 의료 기록을 벗어나지 않도록 그라운딩(Grounding)
- 목표 3: 의사와 동일한 정보 및 도구 조건에서 통합 시스템의 성능, 안전성, 강건성 비교 검증

AMIE(MIRA) 에이전트 시스템 아키텍처
- 시스템 구성: 사전 학습된 GPT-4 기반에 시스템 프롬프트, 11개의 도구(Tool), FHIR 샌드박스, 코딩 매핑, 런타임 안전 장치를 결합한 파운데이션 모델 활용 구조 (※ MIMIC-IV 데이터로 별도 파인튜닝하지 않음)
- 페이션트 에이전트(Patient Agent): MIMIC-IV 기록 기반으로 제한된 병력(HPI)만 대화형으로 제공하며, 없는 정보는 지어내지 않는 시뮬레이터 역할 수행
- 툴 호출 및 EHR 연동: 에이전트의 자연어 요청을 FHIR 리소스 등 표준화된 코드로 변환 후, 샌드박스(EHR Execution Layer)에서 실행하여 관측 결과(Observation)를 다시 문맥에 업데이트하는 반복적 추론 루프 구성

성능 및 안전성 평가 결과
- 진단 성능: 574개 케이스 중 88.9%의 정확도 달성, 의사와의 매칭 비교(311건)에서 에이전트(87.8%)가 전문의(78.1%)보다 통계적으로 유의미하게 높은 진단율 기록
- 처방 및 입원 안전성: 중증 약물 상호작용 및 알레르기 등 고위험 처방 오류 미발생 (일부 중복 처방 존재), 필요 입원 환자 누락(False Negative) 없이 100% 입원 조치 달성 (일부 과잉 입원 경향 존재)
- 강건성(Robustness): 환자의 불안, 다른 언어 사용 등 6가지 프롬프트 섭동(Perturbation) 조건에서도 진단 정확도의 유의미한 성능 저하 미발생

한계 및 향후 과제
- 평가 한계: 실제 임상 현장의 라이브(Live) 배포가 아닌 통제된 샌드박스 후향적 시뮬레이션 환경에서의 검증
- 데이터 편향 우려: MIMIC-IV 데이터 및 8개 특정 질환에 국한되어 외부 타당성(External Validity) 제한, 베이스 모델이 훈련 과정에서 해당 데이터를 학습했을 가능성 배제 불가
- 임상 적용 과제: 실제 환자 아웃컴(Outcome) 평가, 희귀 이벤트 배제 불가, 다기관 일반화 및 전향적 모니터링 체계 구축 필요
