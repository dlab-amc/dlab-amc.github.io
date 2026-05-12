---
layout: activity_post
type: ai_seminar
title: ' Building 17 Agentic Al Patternsand Their Role in Large-Scale Al Systems'
date: 2026-05-11 00:00:00
author: '한유진'
video_url: 'https://youtu.be/G0EAokN9CSo'
ref_url: 'https://levelup.gitconnected.com/building-17-agentic-ai-patterns-and-their-role-in-large-scale-ai-systems-f4915b5615ce'
views: 0
comments: true
---

이 발표는 랭그래프(LangGraph) 기반의 에이전틱 AI 설계 패턴 중 단일 에이전트(Single Agent) 모델의 4가지 핵심 구조(Reflection, Tool Use, ReAct, Planning)를 분석하고, 각 패턴의 작동 방식과 적용 사례를 요약합니다.

랭그래프 및 에이전트 기본 개념
- 에이전틱 AI: LLM의 메모리와 툴을 결합해 스스로 판단하고 행동하는 자율적 AI 시스템
- 랭그래프 구성 요소: 실행 단위인 노드(Node), 실행 흐름을 결정하는 엣지(Edge), 컨텍스트를 공유하는 스테이트(State)로 구성
- 파이단틱(Pydantic) 활용: LLM 출력을 정형 데이터로 변환하고 노드 간 일관된 데이터 흐름 보장

리플렉션 (Reflection) 패턴
- 개념: LLM 스스로 생성 결과를 평가하고 결함을 수정하여 품질을 향상시키는 구조
- 작동 방식: 초기 초안 생성(Generate) → 자체 비평 및 오류 검토(Critic) → 피드백 기반 최종 수정(Refine)
- 적용 사례: 복잡한 코드 생성 및 상세 기술 보고서 작성 등 고품질 결과물이 요구되는 작업

툴 유즈 (Tool Use) 패턴
- 개념: LLM의 내부 지식 한계를 극복하기 위해 외부 도구 및 최신 정보를 스스로 선택하고 호출하는 방식
- 작동 방식: 사용자 요청 분석 → 도구 사용 필요성 판단 → 적절한 도구 호출 및 결과 확인 → 최종 답변 통합 생성
- 적용 사례: 실시간 정보 검색 및 외부 API 연동 등 근거 기반의 데이터 조회가 필요한 환경

리액트 (ReAct) 패턴
- 개념: 다단계 문제 해결을 위해 내부 추론(Reason)과 도구 실행(Act)을 반복하는 순환형 에이전트 구조
- 작동 방식: 목표 확인 → 다음 행동 추론 → 도구 실행 및 결과 관찰 → 최종 답 도출 시까지 과정 반복
- 적용 사례: 동적 사고와 다단계 추론이 필요한 복잡한 의사결정 및 연쇄적인 정보 탐색 문제

플래닝 (Planning) 패턴
- 개념: 복잡한 과제 수행 전 전체 작업 계획을 수립하고 순차적으로 실행하여 결과를 종합하는 구조
- 작동 방식: 하위 작업 리스트 생성(Planner) → 순차적 작업 및 도구 실행(Executor) → 모든 결과 통합 및 최종 답변 생성(Synthesizer)
- 적용 사례: 수행 순서가 명확한 다단계 검색 작업 및 파이프라인 형태의 순차적 데이터 수집·분석 작업
