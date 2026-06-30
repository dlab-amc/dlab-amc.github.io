---
layout: activity_post
type: ai_seminar
title: 'Development and Validation of a Prediction Model Using Sella Magnetic Resonance Imaging–Based Radiomics and Clinical Parameters for the Diagnosis of Growth Hormone Deficiency and Idiopathic Short Stature: Cross-Sectional, Multicenter Study'
date: 2026-06-29 00:00:00
author: '김민소'
video_url: 'https://youtu.be/cFKXVL3Xi20'
ref_url: 'https://www.jmir.org/2024/1/e54641/'
views: 0
comments: true
---

이 발표는 소아 저신장 환자에서 성장 호르몬 결핍증(GHD)과 특발성 저신장(ISS)을 감별하기 위해 임상 정보와 셀라(Sella) MRI 기반 레디오믹스(Radiomics) 특징을 결합한 머신러닝 예측 모델의 개발 및 외부 검증 결과를 제시합니다.

연구 배경 및 목적
- 침습적이고 시간 소모가 큰 기존 성장 호르몬(GH) 유발 검사를 보조할 비침습적 스크리닝 도구의 필요성 대두
- 일반적인 MRI 판독으로 식별하기 어려운 뇌하수체의 미세한 기능적·구조적 이질성을 레디오믹스 기술로 정량화
- 임상 변수 단독, 레디오믹스 단독, 둘을 결합한 모델의 GHD 및 ISS 감별 성능 비교 및 외부 검증 수행

연구 대상 및 데이터 추출
- 훈련 세트(세브란스 병원 소아 293명) 및 외부 검증 세트(용인세브란스 병원 47명)로 구성된 후향적 다기관 연구
- 임상 변수: 성별, 신장 SDS, 체질량지수(BMI) SDS, 역연령과 골연령의 차이(CA-BA), IGF-I 지표 등 활용
- 영상 변수: T2WI 및 조영 증강 T1WI MRI 영상 전처리 후 뇌하수체 영역을 분할하여 총 186개의 레디오믹스 피처(형태, 1차 통계, 텍스처 등) 추출

예측 모델 개발 및 성능 (XGBoost 알고리즘 활용)
- 임상 모델(Clinical model): 성장 상태 및 골연령 지연 지표 기반 예측 (외부 검증 AUC 0.684)
- 레디오믹스 모델(Radiomics model): 뇌하수체 내부 신호 패턴 및 텍스처 정보 기반 예측 (외부 검증 AUC 0.691)
- 결합 모델(Combined model): 임상 정보와 영상 정보의 상호 보완적 결합으로 최상의 예측 성능 및 뛰어난 일반화 달성 (외부 검증 AUC 0.830)

SHAP 분석을 통한 모델 해석
- 주요 임상 피처: 역연령-골연령 차이(CA-BA), 체중 및 BMI 관련 지표 등 임상적 성장 상태 반영
- 주요 레디오믹스 피처: 뇌하수체의 단순한 크기보다는 내부 신호의 미세한 이질성을 나타내는 텍스처(GLCM 등) 및 인텐시티(Intensity) 피처
- 해석 결과: 임상적 생물학 정보와 영상의 미세 질감 정보가 결합 시 시너지를 내어 모델 성능 향상에 기여함 입증

임상적 의의 및 한계점
- 기존 침습적 검사 전, 기촬영된 셀라 MRI를 활용하여 GHD 고위험군을 사전 선별하는 유용한 보조적 스크리닝 툴로 활용 기대
- 한계점 및 향후 과제: 후향적 연구 설계, 단일 인종 데이터 한정, 비교적 소규모인 외부 검증 세트로 인한 대규모 전향적 검증 필요
