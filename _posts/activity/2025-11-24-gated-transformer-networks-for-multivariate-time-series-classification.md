---
layout: activity_post
type: ai_seminar
title: 'Gated Transformer Networks for Multivariate Time Series Classification'
date: 2025-11-24 00:00:00
author: '최예은'
video_url: 'https://youtu.be/wpXMWc36hF4'
ref_url: 'https://arxiv.org/pdf/2103.14438'
views: 0
comments: true
---

이 발표는 Gated Transformer Networks(GTN)로 다변량 시계열 분류에서 “시간 의존성(temporal)”과 “채널 상호작용(channel)”을 분리 학습하고, 게이팅으로 두 정보를 상황별로 가중 결합하는 투-타워 트랜스포머 구조를 소개합니다.

연구 배경
- 다변량 시계열은 정보는 풍부하지만 시간 패턴 + 채널 상관관계를 동시에 모델링해야 해서 어려움.
- CNN: 로컬 패턴은 강하지만 장거리 의존성/채널 상호작용 반영 한계.
- RNN: 계산비용 크고 병렬화 불리 → 트랜스포머 채택.

핵심 아이디어(GTN)
- Two-tower Self-Attention
- Time-step tower: 시간축 의존성 학습(포지션 인코딩 + 마스킹)
- Channel-wise tower: 채널 간 상호작용 학습(채널 순서 의미 없음 → 포지션 인코딩 없음)
- Gating fusion
- 두 타워 출력(시간 S, 채널 C)을 샘플별로 가중치 계산해 최종 표현을 구성.

모델 구조(요약)
- 입력을 time-step / channel 각각 임베딩(linear projection + tanh).
- 각 타워에 Transformer encoder(FFN + LayerNorm) 적용.
- 마스킹으로 패딩 무시 및(필요 시) 미래 참조 제한.
- 게이팅으로 결합 → Softmax 분류.

평가 및 결과
- 13개 다변량 시계열 데이터셋에서 9개 모델과 비교.
- 성능은 FCN/ResNet 대비 큰 우위 없음(통계적으로 유의 X).
- Ablation
- 마스킹: 전반 성능 향상(패딩/불필요 attention 차단).
- 채널 타워 단독이 더 좋은 경우 많음 → 채널 상관관계가 핵심일 수 있음.
- 단순 concat은 항상 이득 아님, 게이팅이 더 안정적.

해석/시각화 인사이트
- 어텐션 맵에서 유사한 패턴을 가진 채널/구간에 높은 attention이 나타남.
- 단순 거리(L2)와 어텐션은 완전 일치하지 않음 → “분류에 유의미한 패턴” 중심으로 선택.

한계 및 향후 방향
- 과적합에 민감 → validation 기반 검증으로 완화.
- 게이팅을 더 샘플-적응적으로 정교화, 트랜스포머 계산 효율 개선 방향 제안.
