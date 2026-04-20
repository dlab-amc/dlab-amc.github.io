---
layout: activity_post
type: ai_seminar
title: '(Part 3) A Survey of Large Language Models'
date: 2026-04-20 00:00:00
author: '류가연'
video_url: 'https://youtu.be/jDOXUSkgj24'
ref_url: 'https://arxiv.org/pdf/2303.18223'
views: 0
comments: true
---

이 발표는 “A survey of Large Language Models”의 3부로, 대형 언어 모델(LLM)을 효과적으로 제어하는 활용 기법, 모델의 핵심 능력과 평가 방법, 주요 응용 분야 및 향후 발전 방향을 체계적으로 제시합니다.

LLM 활용(Utilization) 기법
- Prompting: 작업에 대한 구체적인 설명이나 프롬프트 최적화를 통해 모델의 다운스트림 태스크 성능을 극대화
- In-Context Learning (ICL): 별도의 파라미터 업데이트 없이 프롬프트 내의 시연(Demonstration) 예제만으로 새로운 작업을 학습
- Chain-of-Thought (CoT): 복잡한 문제의 중간 추론 단계를 명시적으로 전개하게 하여 논리적 문제 해결 능력을 향상
- Planning: LLM을 에이전트의 두뇌로 활용하여 복잡한 작업을 하위 작업으로 계획하고, 피드백을 통해 실행 과정을 수정

성능 및 평가(Capacity and Evaluation)
- 언어 및 코드 생성: 유창한 텍스트 및 코드 합성이 가능하지만, 전문 도메인에서의 성능 편차와 생성물 평가의 변별력 한계 존재
- 지식 활용: 방대한 사전학습 지식을 활용하나, 정보의 최신성 부족 및 사실과 다른 내용을 생성하는 환각(Hallucination) 현상 발생
- 복잡한 추론: 기호학적, 수학적 추론 능력을 보이지만 추론 과정의 일관성 및 수치 계산 정확도에서 여전히 오류 노출
- 고급 능력 평가: 인간의 가치관 및 지시와 일치하는지(Alignment)와 외부 도구(API 등)를 조작할 수 있는지에 대한 평가 지표 필요

응용 분야(Applications)
- 전통적 NLP 과제: 텍스트 요약, 기계 번역, 정보 추출 등 다양한 언어 처리 과제에서 범용적인 문제 해결사로 기능
- 정보 검색(IR): 텍스트 생성 능력을 결합하여 검색 후 재순위화(Retrieve-then-Rerank)를 수행하거나 생성형 검색 모델로 활용
- 추천 시스템: 사용자의 선호도를 텍스트 형태로 이해하고 도메인에 구애받지 않는 설명 가능한 추천 결과 생성

결론 및 향후 과제(Conclusion and Future Directions)
- 이론적 원리 규명: 파라미터 확장에 따라 갑작스럽게 나타나는 창발적 능력(Emergent Abilities)의 본질과 메커니즘 해석 필요
- 아키텍처 혁신: 막대한 연산 비용과 메모리 소모를 줄이기 위해 기존 트랜스포머 모델을 대체할 효율적인 네트워크 탐구
- 신뢰성 및 정렬: 환각 현상 최소화, 데이터 편향 완화, 안전성 강화 및 인간의 의도와 완전히 부합하는 AI 정렬(Alignment) 달성
