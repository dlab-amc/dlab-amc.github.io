---
layout: activity_post
type: ai_seminar
title: 'Towards a General Time Series Forecasting Model with Unified Representation and Adaptive Transfer'
date: 2026-08-17 00:00:00
author: '이건'
video_url: 'https://youtu.be/jeSIlPkIuvw'
ref_url: 'https://arxiv.org/abs/2405.17478'
views: 0
comments: true
---

이 발표는 다중 도메인 시계열 데이터로 사전 학습된 경량 파운데이션 모델인 'ROSE'를 소개하며, 주파수 기반 마스킹과 도메인 특화 레지스터를 통해 기존 대형 모델들의 연산 비용 한계를 극복하고 시계열 예측(Forecasting)에서 뛰어난 일반화 성능을 달성하는 프레임워크를 제시합니다.

기존 모델의 한계 및 문제 정의
- 확장성 위주의 한계: 기존 시계열 파운데이션 모델(Chronos, Timer 등)은 데이터 및 모델 크기 확장에만 집중하여 학습 및 추론 비용이 크게 증가함
- 시간 도메인 학습의 한계: 기존 마스킹 기법들은 주로 시간 도메인에서만 학습하여 시계열 데이터에 중첩된 복잡한 주파수 성분(고주파/저주파)의 이질적인 특징을 놓침

ROSE 핵심 설계 (2가지 모듈)
- Decomposed Frequency Learning (주파수 분해 학습): 임계값($\tau$)과 무작위 확률($\mu$)을 통해 고주파 및 저주파 성분을 선택적으로 다중 마스킹하여, 다양한 장단기 변동 등 일반화된 공통 패턴 학습 유도
- Time Series (TS) Register: 사전 학습 시 입력 데이터와 가장 가까운 도메인 클러스터 중심을 학습하고, 파인튜닝 시 탑-K(Top-K) 벡터의 평균과 로우 랭크 매트릭스(Low-rank Matrix) 보정을 통해 도메인 특화 정보를 어댑티브 트랜스퍼(Adaptive Transfer)함

다운스트림 성능 (요약)
- 풀샷(Full-shot): 전체 데이터 활용 시 6개 SOTA 및 베이스라인 모델 대비 MSE 평균 15% 감소 달성
- 퓨샷(Few-shot): 전체 데이터의 1~10%만 사용하는 희소 환경에서도 풀샷 학습 모델 성능을 능가하며 완만한 성능 저하(견고성) 입증
- 제로샷(Zero-shot): 미학습 도메인에서도 기존 파운데이션 모델(Timer, Moirai, Moment 등) 대비 9%~43% 수준의 오차 개선
- 연산 효율성: 7.4M 파라미터의 초경량 사이즈로, 제로샷 성능 1위를 기록하면서 추론 시간은 기존 모델 대비 10% 수준으로 단축

한계 및 향후 과제
-확장성 한계: 8.8억 개의 포인트를 사용했으나 더 넓은 도메인으로의 데이터셋 확장 필요성 존재
- 과업의 제약: 포캐스팅(Forecasting)에만 최적화되어 있어 향후 분류(Classification) 등 타 과업으로의 확장 필요
- 리소스 제약: 컴퓨팅 자원의 제약으로 인해 더 큰 파라미터 사이즈를 가진 모델과의 심층적인 실험 및 성능 한계점 검증 부족
