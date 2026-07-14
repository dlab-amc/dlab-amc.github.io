---
layout: activity_post
type: ai_seminar
title: 'Early prediction of circulatory failure in the intensive care unit using machine learning'
date: 2026-07-13 00:00:00
author: '최예은'
video_url: 'https://youtu.be/L1LruSCTpYE'
ref_url: 'https://www.nature.com/articles/s41591-020-0789-4'
views: 0
comments: true
---

이 발표는 중환자실(ICU) 환경에서 발생하는 데이터 과부하 및 알람 피로 문제를 해결하기 위해, 순환기 부전(Circulatory Failure) 발생을 8시간 전에 예측하는 머신러닝 기반의 조기 경보 시스템(Early Warning System)을 제안하고 그 임상적 유용성을 검증한 네이처 메디슨 게재 논문을 리뷰합니다.

ICU 임상 현장의 문제 정의
- 데이터 오버로드: 수많은 생체 신호 데이터로 인해 의료진이 환자의 점진적인 악화를 조기에 인지하지 못함
- 알람 피로(Alarm Fatigue): 개별 신호에 의존하는 과도하고 비특이적인 알람 발생으로 의료진의 집중력 저하 초래
- 타겟 질환: 지연 대처 시 예후가 급격히 나빠지는 순환기 부전(저혈압 및 승압제 투여, 젖산 증가 상태)의 조기 예측 필요

데이터 및 전처리 기법
- 데이터셋: 스위스 베른대학교 병원의 HIRID 데이터베이스 (5분 단위 맵핑, 고해상도 시계열 데이터)
- 환자 중심 결측치 보간(Patient-centric Imputation): 단순 값 대체가 아닌, 측정 간격의 중앙값/사분위수를 활용하여 기록의 유무와 간격(측정 빈도) 정보를 모델 학습에 반영하는 기법 적용
- 상태 정의: MAP(평균동맥압), 젖산(Lactate), 승압제/강압제 투여 여부를 기준으로 정상, 순환기 부전, 모호 구간으로 세분화하여 라벨링

모델 훈련 및 알람 평가 체계
- 머신러닝 모델: LightGBM 활용 (풀 모델 및 SHAP 기반 중요 변수를 추린 콤팩트 모델 구축)
- 이벤트와이즈 평가(Event-wise Evaluation): 단순 시간 단위 예측 정확도가 아닌, 이벤트 발생 8시간 전 예측 구간에 기반한 실용적인 알람 평가 방식 도입
- 알람 억제 정책(Silencing Policy): 알람 피로 방지를 위해 한 번 알람이 울리면 이후 30분간 중복 알람을 차단(사일런싱)하는 로직 적용

연구 결과 및 임상적 의의
- 모델 성능: 풀 모델(AUROC 0.940) 및 콤팩트 모델(AUROC 0.939) 모두 우수한 예측 성능 달성
- 외부 검증: MIMIC-III 데이터셋 적용 시 리캘리브레이션(Recalibration/Fine-tuning)을 통해 지역적 데이터 특성을 반영하여 성능 유지 및 향상 증명
- 신뢰성 확보: SHAP을 통한 모델의 임상적 판단 근거 제시 및 환자군(기저질환, 나이 등), 시간대별(Temporal) 다양한 서브그룹 분석을 통한 강건성 검증
