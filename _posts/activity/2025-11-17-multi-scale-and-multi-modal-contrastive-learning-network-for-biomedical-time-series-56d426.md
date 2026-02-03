---
layout: activity_post
type: ai_seminar
title: 'Multi-Scale and Multi-Modal Contrastive Learning Network for Biomedical Time Series'
date: 2025-11-17 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/6qTCakqUuwE'
ref_url: 'https://arxiv.org/pdf/2312.03796'
views: 0
comments: true
---

이 발표는 M2CL(Multi-scale & Multi-modal Contrastive Learning)을 통해 멀티모달 바이오메디컬 시계열(MBTS)의 모달 분포 차이 + 다중 스케일 구조 문제를 해결하고, 증강 없이 크로스모달 포지티브 페어로 강건한 사전학습 프레임워크를 제시합니다.

MBTS 문제 정의
- 모달 분포 차이: PPG/SPO2/ACC 등 진폭·주파수·구조가 달라 단일 인코더 학습 시 표현 오류 발생
- 다중 스케일: 심박(고주파)·호흡(저주파)·모션노이즈(중간대역) 등 한 신호 내 여러 패턴 공존
- 기존 CL 한계: jitter/scale/crop 증강이 생체신호 의미(peak/amp/long-term) 훼손 가능

M2CL 핵심 설계(3모듈)
- Inter-modal Grouping: 유사 모달끼리 그룹화 후 그룹별 인코더 학습(t-SNE 거리 기반)
- Multi-scale Temporal Extraction: 코스/미디엄/파인 패치로 분해 + 스케일별 마스킹 강도 조절 → 멀티스케일 TCN으로 특징 추출
- Cross-modal Contrastive Loss: 같은 사람의 서로 다른 모달(그룹) 표현을 positive, 다른 사람은 negative로 InfoNCE 학습(증강 불필요)

다운스트림 성능(요약)
- 호흡수 추정(RR): MAE 감소(저주파 트렌드 학습 유리)
- 운동 심박수(HR): RMSE 감소(모션 아티팩트 상황에서 크로스모달 정렬 효과)
- 활동 인식(HAR): 정확도 증가(ACC+PPG/SPO2 동시 활용)
- 수면무호흡 탐지(PSG/스마트링): AUC/F1 개선(리얼월드 노이즈·미싱에도 강건)

분석/어블레이션
- t-SNE 시각화: 모달/태스크별 임베딩 분리 확인
- Ablation: 그룹핑/멀티스케일/크로스모달 로스 중 하나만 빠져도 성능 하락 → 결합 효과 입증

한계 및 향후 과제
- 그룹핑이 데이터 분포 의존적 → 자동/도메인-어웨어 그룹핑 필요
- 모달 수↑ → 인코더 수↑로 연산비용 증가(파라미터 효율화 필요)
- 특정 모달 지배(도미넌스) 가능 → 모달 밸런싱/정렬 제어 필요
