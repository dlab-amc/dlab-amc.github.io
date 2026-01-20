---
layout: activity_post
type: ai_seminar
title: 'A comparative analysis of gradient boosting algorithms'
date: 2025-10-13 00:00:00
author: '한유진'
video_url: 'https://youtu.be/8nx1BeEAKtA'
file_url: 'https://drive.google.com/file/d/10TIAo74uCOBrWI56W3vM23npKgNP1Djf/view?usp=drive_link'
ref_url: 'https://link.springer.com/article/10.1007/s10462-020-09896-5'
views: 0
comments: true
---

이 발표는 Gradient Boosting 계열 트리 앙상블(RF, GBM, XGBoost, LightGBM, CatBoost) 을 성능(Accuracy/AUC)·학습속도·하이퍼파라미터 민감도 관점에서 28개 데이터셋으로 종합 비교하고, 특히 튜닝 공간을 줄여도 성능 손실 없이 시간을 크게 줄일 수 있는 전략(고정할 파라미터 vs 반드시 튜닝할 파라미터)을 정리합니다.

앙상블·비교 목적
- 앙상블 3종: Boosting(순차 보정) / Bagging(병렬 평균/투표) / Stacking(메타모델 결합)
- 비교 대상 5모델: Random Forest, GBM, XGBoost, LightGBM(GOSS), CatBoost
- 목표 1: XGB/LGBM/CatBoost vs GBM/RF 성능(Accuracy/AUC)·학습속도 비교
- 목표 2: 하이퍼파라미터 튜닝 영향을 정량화해서 “튜닝이 필요한 부분”을 분리

모델별 핵심 차별점(키워드)
- Random Forest
- 부트스트랩 샘플 + 랜덤 피처 선택 → 안정적 일반화
- 디폴트 성능이 강하고 튜닝 이득이 작음
- GBM
- 손실 기울기 기반 순차 보정(Additive training)
- learning rate/depth/subsample 등으로 과적합 제어
- XGBoost
- 목적함수에 정규화(γ, λ) 포함, 2차 미분(Hessian) 활용
- 컬럼/데이터 샘플링, monotonic/interaction constraint 등 제약 가능
- LightGBM
- leaf-wise 성장(빠르고 정확도↑ 가능, 과적합 위험)
- GOSS(큰 gradient 샘플 우선) 로 속도 개선, EFB는 비교에서 제외
- CatBoost
- Ordered boosting 으로 prediction shift(데이터 누수) 완화
- target encoding도 ordered 방식 가능(비교에선 제외)
- 디폴트가 강력(학습률 자동 조정 영향)

실험 설계
- 데이터: 28개 분류 데이터셋(인스턴스/피처/결측/클래스 수 다양)
- 평가: Stratified CV, 정확도 기준(불균형은 AUC 기준)
- 설정: 트리 수 200, 공정 비교 위해 결측은 평균대체(일부 자체 결측처리 기능은 OFF)
- 비교 모델: 디폴트 vs Grid-search 튜닝 포함 총 10개 버전 비교

주요 결과(성능)
- 평균 정확도 상위: 튜닝 GBM, 튜닝 XGB, 디폴트 CatBoost
- Random Forest: 튜닝/디폴트 차이가 거의 없음(대부분 0.5%~5% 미만)
- LightGBM: 디폴트 편차 큼(저성능 데이터셋 존재) → 튜닝 시 75% 데이터셋에서 개선
- 불균형(AUC) 순위 경향: CatBoost > XGB > GBM > RF > LGBM
- 전체 평균 순위는 차이가 크진 않아 통계적으로 “압도적 1등”은 없음(근소 차)

학습시간(효율)
- 단일 학습 속도: LightGBM, XGBoost 빠름 / CatBoost 가장 느림
- 튜닝 시간은 대부분 Grid 탐색 비용이 지배
- 다중 클래스에서는 GBM 계열이 RF보다 느려질 수 있음

하이퍼파라미터 분석 결론(무엇을 튜닝할 것인가)
- 공통 핵심: learning rate는 고정하면 성능 하락 → 튜닝 필요성이 큼
- XGBoost
- 추천 디폴트 제안(예시): lr 0.05, γ 0.2, depth 6, colsample=sqrt, subsample=0.75
- 랜덤마이제이션(colsample/subsample) 고정해도 성능 손실 작고, 때로는 향상
- LightGBM(GOSS)
- lr 고정은 성능 하락
- GOSS 관련(α, b)은 큰 값이 유리한 경향
- CatBoost
- 전반적으로 민감도 낮아 안정적, 일부 정규화 계수는 디폴트(3)보다 1이 더 나을 수 있음

튜닝 공간 축소 전략(핵심 메시지)
- 랜덤마이제이션 파라미터는 고정 + 나머지만 튜닝해도 성능 유지/개선 가능
- XGB: 랜덤 관련 파라미터 튜닝 생략 시 학습 시간 최대 ~16배 단축
- CatBoost: 그리드 범위 축소로 ~7배 단축, 여전히 상대적으로 느림
- 결론: “튜닝을 해야 하는 모델/파라미터”와 “고정해도 되는 파라미터”를 구분하면 비용 대비 효율 최적화 가능
