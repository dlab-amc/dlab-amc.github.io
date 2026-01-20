---
layout: activity_post
type: ai_seminar
title: ' TabNet:Attentive Interpretable Tabular Learning'
date: 2025-11-24 00:00:00
author: '한유진'
video_url: 'https://youtu.be/NuNubxUjE9Q'
file_url: 'https://docs.google.com/presentation/d/10RrZgCQ8SIkakFnW7ISuuGvF_M3b88qz/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://arxiv.org/pdf/1908.07442'
views: 0
comments: true
---

이 발표는 TabNet을 통해 태블러 데이터에서 트리 모델이 강한 이유(피처 선택·해석성)를 정리하고, 시퀀셜 어텐션 기반 피처 선택 + decision step 누적으로 성능과 해석가능성(로컬/글로벌)을 동시에 확보하는 태블러 전용 딥러닝 아키텍처를 소개합니다.

태블러에서 딥러닝이 약한 이유
- 피처 순서 없음, 수치/범주 타입 다양, 샘플별 중요 피처가 다름
- CNN/RNN은 태블러에 맞는 귀납적 편향 부족 → 비효율/성능 저하
- 트리는 결정경계 표현이 효율적이고 학습 빠름 + 해석 용이

TabNet 핵심 설계
- Sequential Attention: 단계마다 중요한 피처만 소프트 선택(마스크)
- 희소성 유도(Sparsemax/정규화): 불필요 피처 억제
- Decision step 누적: 각 step 출력 합산해 최종 예측
- Prior scale: 이미 많이 본 피처는 다음 step에서 덜 선택

해석가능성 + 사전학습
- 마스크 기반 로컬/글로벌 피처 중요도 제공
- 마스크 복원 self-supervised pretrain → 수렴 빨라지고 데이터 적을수록 효과 큼

실험 요약
- 합성/실데이터 분류·회귀에서 트리/기존 DL과 경쟁력
- 하이퍼파라미터 민감도는 상대적으로 낮다고 보고
