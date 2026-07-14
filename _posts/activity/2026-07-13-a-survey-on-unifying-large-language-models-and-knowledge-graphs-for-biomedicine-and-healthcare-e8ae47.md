---
layout: activity_post
type: ai_seminar
title: 'A Survey on Unifying Large Language Models and Knowledge Graphs for Biomedicine and Healthcare'
date: 2026-07-13 00:00:00
author: '한유진'
video_url: 'https://youtu.be/oYlmnlUvmjk'
ref_url: 'https://dl.acm.org/doi/10.1145/3711896.3736556'
views: 0
comments: true
---

이 발표는 ACM 학술대회에 발표된 서베이 논문을 바탕으로, 의료 헬스케어 분야에서 지식 그래프(KG)와 대형 언어 모델(LLM)이 상호 보완적으로 결합하여 신뢰성 있는 AI 시스템을 구축하는 'BioMed-KLM' 프레임워크의 개념과 활용 방안을 소개합니다.

의료 도메인 내 LLM과 지식 그래프(KG)의 개념 및 한계
- LLM 한계: 고품질 의료 데이터 접근 제한, 복잡한 의학 질문에 대한 신뢰성 부족 및 환각(Hallucination) 현상으로 인한 환자 안전 위협 우려
- KG 정의: 질병, 약물, 환자 상태 등의 개념(Entity)과 관계(Relation)를 명시적이고 통제 가능한 트리플(주어-술어-목적어) 구조로 연결한 지식 네트워크
- KG 한계: 기관별 코딩 체계 및 데이터 구조 차이로 인한 고품질 지식 추출 및 통합의 어려움

LLM을 활용한 바이오메디컬 KG 강화 (LLM for KG)
- KG 통합(Integration): LLM의 자연어 이해 능력을 활용하여 서로 다른 KG 간의 엔티티 중의성을 해소하고 표준화된 의미 관계로 자동 정렬(Alignment)
- KG 보완 및 확장: 광범위한 사전 지식을 바탕으로 수작업 라벨링 없이 KG 내 누락된 연결을 추론하고 새로운 지식 트리플을 생성
- 멀티모달 KG 구축: 임상 텍스트뿐만 아니라 의료 이미지(VLM 활용) 등 다중 양식 데이터에서 관계 지식을 추출하여 텍스트 기반 KG로 확장

KG를 활용한 LLM 성능 향상 (KG for LLM)
- 플래닝(Planning): 복잡한 의료 질문을 KG 내 관계 경로(Relation Path)로 분해하여 체계적인 근거 검색 계획(Query Planning) 수립 (예: RoG 프레임워크)
- 리즈닝(Reasoning): LLM의 디코딩 과정을 KG 내 실제 존재하는 인덱스 트리(Prefix Tree)로 제약하여 환각 없는 정확하고 구조화된 추론 유도
- 검증(Verification): LLM이 생성한 추론 결과(Chain-of-Thought)와 KG에서 검색된 추론 경로의 일치 여부를 비교하여 사후 사실성 검증

BioMed-KLM 프레임워크의 임상 응용 분야
- 임상 의사 결정 지원(CDS): 환자의 전자의무기록(EMR)과 질병 KG를 매칭하여 유사 환자 정보 및 간별 진단 근거를 포함한 프롬프트로 정확한 추론 제공 (예: GraphCare)
- 신약 개발(Drug Discovery): 분자 구조의 그래프 특성을 KG와 연결하여 약물 후보 물질 발굴 및 타겟 예측에 활용
- 지식 관리 및 통합: 병원별로 분산된 임상 가이드라인과 연구 문헌을 일관된 구조의 지식 베이스로 취합 및 관리
