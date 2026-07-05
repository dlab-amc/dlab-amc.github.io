---
layout: activity_post
type: ai_seminar
title: 'Biosignal Fingerprinting: A Cross-Modal PPG-ECG Foundation Model'
date: 2026-06-01 00:00:00
author: '진재욱'
video_url: 'https://www.youtube.com/watch?v=gkzyod4MzB0'
ref_url: 'https://arxiv.org/pdf/2605.09579'
views: 0
comments: true
---

이 발표는 심전도(ECG)와 광용적맥파(PPG) 신호를 동시에 학습하여 상호 보완적인 심혈관 상태의 요약 벡터인 '바이오시그널 핑거프린트(Biosignal Fingerprint)'를 추출하고, 누락된 모달리티(Missing Modality) 상황에서도 견고하게 동작하는 멀티모달 파운데이션 모델을 제안합니다.

연구 배경 및 문제 정의
- 웨어러블 기기 확산으로 생체 신호 데이터는 급증했으나, 기기별 센서 종류 및 측정 신호의 형식적 이질성 존재
- ECG(높은 진단력, 단기 측정)와 PPG(높은 편의성, 노이즈 취약)의 상호 보완적 통합 필요성 대두
- 실제 환경에서는 두 신호 중 하나만 존재하는 경우가 많아 누락된 모달리티(Missing Modality)에 강건한 통합 표현(Representation) 요구

모델 아키텍처 및 핵심 설계
- 듀얼 인코더(Dual Encoder): 전기 신호(ECG)와 혈류 신호(PPG)의 다른 특성을 학습하기 위해 10초 세그먼트 패치를 각각의 인코더로 분리 처리
- 상호 보완적 마스킹(Complementary Masking): 한쪽 신호의 특정 부분을 가리면 다른 쪽 신호에서 해당 부분을 살려두어, 누락된 정보를 상대 모달리티로부터 유추하도록 강제하는 MAE 기법 적용
- 바이오시그널 핑거프린트 추출: 듀얼 인코더의 출력을 셰어드 보틀넥(Shared Bottleneck)으로 결합 후 평균 풀링(Mean Pooling)하여 콤팩트한 심혈관 요약 벡터 생성
- 대조 학습 및 복원(Contrastive & Reconstruction): 동일인 기반의 크로스 모달 데이터 및 증강 신호를 포지티브(Positive) 쌍으로 한 대조 학습과 각 신호를 다시 복원하는 디코더 학습 동시 수행

다운스트림 태스크 성능 (요약)
- 크로스 모델 복원: 인코더 파인튜닝 없이도 ECG를 통해 PPG를, PPG를 통해 ECG를 높은 수준의 파형 형태(Morphology)로 상호 복원 성공
- 심혈관 질환 분류: ECG 단독 5개 클래스 분류 및 PPG 단독 3개 클래스 분류에서 기존 특화 모델들과 대등하거나 압도하는 핑거프린트 임베딩 성능 확인
- 임상 결과 예측: 단일 10초 ECG/PPG만으로 모탈리티(사망률)와 하이퍼텐션(고혈압 여부) 예측에서 가장 우수한 군집화 및 성능 지표 달성
- 인구 통계학적 예측: 나이(Age) 회귀 분석 및 성별(Gender) 분류에서 베이스라인을 뛰어넘으며, 핑거프린트에 생물학적 노화 및 특징이 포함됨을 증명

한계점 및 향후 방향
- 검증 한계: 실제 웨어러블 환경에서의 밸리데이션 부재 및 페어링된 ECG-PPG 대규모 데이터셋 확보의 어려움
- 민감 정보 이슈: 프라이버시 보존을 표방했으나 연령, 성별 등의 민감 정보가 핑거프린트 내에 내포되어 프라이버시 이슈 발생 가능성
- 모달리티 확장 필요성: ECG, PPG 외에도 혈압(ABP), 수치형 임상 데이터(Numeric) 등을 포함하는 다중 모달리티 결합으로의 연구 고도화 필요
