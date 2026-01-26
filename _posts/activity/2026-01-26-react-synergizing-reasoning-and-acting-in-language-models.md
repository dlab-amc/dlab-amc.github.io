---
layout: activity_post
type: ai_seminar
title: 'ReAct: Synergizing Reasoning and Acting in Language Models'
date: 2026-01-26 00:00:00
author: '한유진'
video_url: 'https://youtu.be/PTiG9azppl8'
ref_url: 'https://arxiv.org/abs/2210.03629'
views: 0
comments: true
---

이 논문은 ReAct(Reason+Act) 를 제안하여, 언어모델이 “생각(추론)–행동(도구/환경 상호작용)”을 번갈아 수행하도록 만들어 지식추론·팩트체크·의사결정 에이전트 성능과 해석가능성을 동시에 높이는 프레임워크를 정리합니다.

연구 배경(왜 필요한가)
- 인간 문제 해결은 행동(환경 변화) 과 내적 언어추론(계획/수정/상황정리) 을 결합함
- 기존 연구는 행동 중심(계획/추적 약함) 과 추론 중심(CoT: 외부 단절/환각 위험) 으로 분리되어 한계가 존재

핵심 아이디어(ReAct)
- 행동 공간을 언어 공간(Thought) 까지 확장해 “명시적 추론”을 행동 사이에 삽입
- Thought → Action → Observation 반복으로 계획 생성·유지·수정 + 외부정보 통합 가능

방법(프롬프팅 설정)
- 파라미터 고정 LLM(예: PaLM 540B) 기반 in-context prompting으로 구현
- 프롬프트 형식 비교: Reasoning-only(CoT) / Act-only / ReAct(생각+행동+관찰 교차)

지식 추론 태스크(위키 기반 QA/팩트체크)
- 단순 위키 API 3종으로 환경 구성: Search / Lookup / Finish
- 비교 기법: Standard prompting, CoT, Self-consistency, Act-only, ReAct + ReAct↔CoT 결합 전략

결과 및 분석(무엇이 좋아졌나)
- ReAct는 Act-only보다 우수 → “행동을 가이드하는 추론” 효과 확인
- CoT 대비 팩트체크에서 강점(환각 억제), 다단계 QA에서는 CoT가 유리한 경우도 존재
- 실패 모드 차이: CoT=환각 기반 성공 가능 / ReAct=검색 실패·추론 연결 실패(루프) 가 주요 원인

소형 모델 확장(파인튜닝)
- 소형 모델은 ReAct 프롬프팅만으로 절차를 잘 못 따라 성능이 낮음
- 대형 모델의 성공 궤적을 수집해 ReAct 스타일로 파인튜닝하면 성능이 크게 개선

상호작용 의사결정 태스크(환경이 변하는 과제)
- ALFWorld(집안일 텍스트 게임): 장기 계획/상태 추적이 핵심
- WebShop(온라인 쇼핑 탐색): 브라우징·조건 필터링 능력이 핵심이며 ReAct가 성공률/점수 개선

한계 및 향후 과제
- 복잡 과제일수록 예시가 많이 필요 → 컨텍스트 길이 한계에 걸릴 수 있음
- 방향: ReAct 데이터 파인튜닝으로 프롬프팅 의존 감소, 강화학습 결합 가능성 제시
