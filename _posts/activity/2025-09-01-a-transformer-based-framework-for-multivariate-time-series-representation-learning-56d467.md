---
layout: activity_post
type: ai_seminar
title: 'A Transformer-based Framework for Multivariate Time Series Representation Learning'
date: 2025-09-01 00:00:00
author: '최예은'
video_url: 'https://youtu.be/26rh_oVi-kQ'
ref_url: 'https://arxiv.org/pdf/2010.02803'
views: 0
comments: true
---

이 발표는 KDD 2021 Time Series Transformer(TST) 논문을 리뷰하며, 멀티변량 시계열(MTS) 에서 Transformer Encoder + 비지도(마스킹 복원) 사전학습으로 분류/회귀 성능을 추가 데이터 없이 개선하는 프레임워크를 정리합니다.

연구 배경(왜 필요한가)
- 의료 바이탈처럼 멀티변량 시계열(MTS) 은 흔하지만 레이블 데이터는 부족
- 시계열 분야는 CV/NLP 대비 딥러닝이 항상 우세하지 않음 → 강한 범용 프레임워크 필요

핵심 아이디어(TST가 제안하는 것)
- Transformer Encoder만 사용해 표현학습 후, 헤드만 교체해 분류/회귀 모두 대응
- 비지도 사전학습을 “추가 데이터 없이” 동일 데이터 재사용만으로 성능 개선 가능함을 강조

NLP Transformer vs 시계열 Transformer 차이
- 입력 형태: NLP는 단어 시퀀스, 시계열은 시간축 × 피처벡터(멀티변량)
- 차원 정렬: 시계열 피처를 Linear projection(또는 1D conv) 으로 model dimension D에 맞춤

모델 구조(아키텍처)
- 입력 전처리: BatchNorm 적용(이상치 완화, 길이 변동이 작아 BN이 유리하다고 주장)
- 임베딩/인코딩: Linear projection → 학습 가능한 positional encoding → Transformer Encoder
- 다운스트림: 출력 representation을 linear head에 연결해 classification/regression 수행

비지도 사전학습 방식(마스킹 복원)
- 목적: 입력 일부를 0으로 마스킹하고 원래 값을 복원(denoising) 하도록 학습
- 마스킹 설계: 연속 구간(segment) 마스킹 + 피처별 독립 마스크, 길이는 기하분포(geometric) 기반

실험 세팅
- 데이터: UEA/UCR 계열 회귀 6개 + 분류 11개 데이터셋
- 학습: train/test = 8:2, 데이터셋별 하이퍼파라미터 튜닝, 옵티마이저는 RAdam

주요 결과(논문 결론)
- 정규화 비교: BatchNorm이 LayerNorm보다 분류/회귀 모두에서 일관되게 성능 우수
- 사전학습 활용: Static(동결) 은 빠르지만 성능 제한, Fine-tuning 은 성능↑ 대신 시간↑/과적합 위험
- 마스킹 전략: 피처별 separate + 기하분포 segment 마스킹 조합이 전반적으로 최상
- 비지도 사전학습 효과: 레이블이 적을수록 이득↑, 다수 데이터셋에서 RMSE/Accuracy 개선, 회귀 6개 중 4개/분류 11개 중 7개 최고 성능

한계/확장 방향
- 분류/회귀 외에도 forecasting, missing value imputation 등으로 확장 가능
- 실제 적용은 데이터/태스크별 튜닝 의존성이 존재
