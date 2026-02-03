---
layout: activity_post
type: ai_seminar
title: 'XGBoost:A Scalable Tree Boosting System'
date: 2025-09-01 00:00:00
author: '한유진'
video_url: 'https://youtu.be/GYlV-LGRMAM'
ref_url: 'https://arxiv.org/pdf/1603.02754'
views: 0
comments: true
---

이 발표는 XGBoost(Extreme Gradient Boosting)를 대규모 태블러 데이터에서 빠르고 확장 가능하게 학습시키기 위해, 정규화된 목적함수 + 근사 스플릿 + 희소/분산/Out-of-core 최적화를 통합한 2016년 논문 리뷰입니다.

왜 XGBoost인가(배경/필요성)
- 의료 EHR·검사결과처럼 구조화(tabular) 데이터가 여전히 핵심
- 캐글 등에서 강력한 베이스라인으로 널리 사용됨(속도·성능·확장성)

핵심 기여 4가지(논문이 주장하는 차별점)
- End-to-end 스케일러블 트리 부스팅 시스템 구현
- Weighted Quantile Sketch로 빠른 분할 후보 계산
- 희소 데이터 최적화 + 병렬 학습 지원
- 캐시/디스크 최적화(Out-of-core) 로 초대형 데이터 학습 가능

모델 관점: GBM → XGBoost로의 업그레이드
- 기본 GBM: 이전 트리 오차를 다음 트리가 보정(gradient boosting)
- XGBoost 추가 요소
- 정규화 항(리프 수, 리프 weight) 로 과적합 억제
- learning rate + column subsampling 으로 일반화/속도 개선

목적함수 최적화(핵심 수식 아이디어)
- 2차 테일러 근사: 손실을 gradient + hessian 기반으로 단순화
- split 판단 기준: 스플릿 전/후 gain(손실 감소) 최대가 되도록 분기 선택

스플릿 탐색 가속(정확도 vs 속도 트레이드오프)
- Exact greedy: 모든 후보 탐색 → 정확하지만 매우 느림
- Approximate(분위수 기반 버킷): 후보를 quantile bucket으로 제한 → 빠르고 병렬화 쉬움
- Weighted Quantile Sketch: 샘플 중요도(hessian 가중치)를 반영해 후보 지점 배치 최적화

희소/결측 처리(sparsity-aware)
- 결측값을 임의 대체하지 않음
- 각 노드에서 default direction(보낼 방향) 을 학습해 최적 처리

시스템 최적화(대규모 학습이 가능한 이유)
- Columnar storage(CSC): 열 기준 저장 → 스캔 기반 분할 탐색/병렬 처리 유리
- Cache-aware block: 비연속 메모리 접근으로 생기는 cache miss를 줄이도록 블록 단위 처리
- Out-of-core 학습: 디스크 압축 저장 + 병렬 로딩(sharding)으로 RAM 초과 데이터 학습

실험 결과(성능/속도/확장성)
- 분류(task): 기존 GBM 대비 성능 우수 + 10배 이상 빠름
- 랭킹(task): 최고 성능 시스템과 유사한 성능을 더 짧은 시간에 달성
- 초대형/분산 환경: out-of-core로 17억 샘플까지 처리, 여러 머신으로 확장 시 선형적 속도 향상 경향 확인

결론(한 줄 정리)
- XGBoost는 알고리즘 개선(정규화·근사·희소처리) 과 시스템 최적화(캐시·디스크·분산) 를 결합해, 태블러 대규모 학습의 표준 베이스라인이 된 모델이다.
