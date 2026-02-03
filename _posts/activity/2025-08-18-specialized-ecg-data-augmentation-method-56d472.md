---
layout: activity_post
type: ai_seminar
title: 'Specialized ECG data augmentation method'
date: 2025-08-18 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/HqiUvjeRW_0'
ref_url: 'https://link.springer.com/article/10.1007/s13534-024-00455-3'
views: 0
comments: true
---

이 발표는 ECG(심전도) 데이터에서 리드 부착 위치 오차(lead placement variation) 를 모사하기 위해, 흉부 리드(V2–V5)를 벡터 덧셈으로 합성하는 SIMVA(Simple Vector Addition) 기반 증강을 제안하고, 다양한 증강법과 비교해 AUROC/F1 성능 개선을 보인 논문 리뷰입니다.

연구 배경(왜 필요한가)
- 딥러닝으로 부정맥/STEMI/고칼륨혈증 등 ECG 기반 진단 성능이 확장되고 있음
- 의료/ECG 데이터는 수집·레이블링이 어렵고 특정 질환 데이터가 부족 → 증강 필요

기존 증강의 한계(ECG에 부적합한 이유)
- 이미지/언어처럼 color jitter, flip/rotate, back-translation은 ECG에 그대로 적용 불가
- 단순 신호 변형(shift/crop)이나 노이즈 추가는 의미가 약하거나 ST/T/QRS 등 핵심 파형 왜곡 위험

제안 방법: SIMVA / SIMVA-H(논문 핵심)
- 임상에서 흔한 흉부 리드 부착 위치 편차에 착안 → 리드 벡터가 달라지는 현상을 증강으로 반영
- V2–V5만 증강 가능(V1/V6는 양옆 인접 리드 조합이 불가)
- SIMVA: 인접 리드 조합으로 합성 리드 생성(스케일 계수 α로 크기 조절)
- SIMVA-H: β 가중치 추가로 “어느 방향으로 더 치우쳤는지”를 반영(현실적 위치 오차 모사)
- 학습 시 원본 리드 vs 합성 리드를 확률적으로 랜덤 선택해 입력 다양성 확보

비교한 증강 기법(베이스라인 포함)
- Baseline: 원신호만 학습(데이터 부족이 문제)
- Random augmentation: cut/shift 등 단순 변형(해석 어려움/효과 제한)
- Gaussian noise: 구현 쉬우나 파형 왜곡 가능
- Graph 기반(12-lead / predefined rule): 리드 관계 반영 가능하지만 구현 복잡·유연성 낮음
- SIMVA: 임상 오류 기반 + 단순 연산으로 효율적이지만 적용 리드가 제한됨(V2–V5)

데이터셋/전처리/학습 세팅
- 데이터: 3개 ECG 공개 데이터셋(10초 세그먼트 또는 장시간 기록을 10초로 crop)
- 태스크: 질환별 이진 분류(정상 vs 특정 질환) 반복 수행
- 전처리/학습: band-pass filtering, resampling, dropout, AdamW, learning rate/weight decay 조정
- 모델: ResNet 계열 CNN 기반
- 평가 지표: AUROC, F1-score

결과(핵심 성능 결론)
- 대부분 데이터셋·질환에서 SIMVA 계열이 AUROC/F1 최고
- 학습 시간은 기존 증강 대비 크게 증가하지 않으면서 성능 이득을 확보

논의(왜 의미 있는가)
- 리드 위치 편차를 반영해 ECG 진단 모델의 robustness 향상 가능
- ST/QRS 등 미세 파형이 중요한 질환에서는 “새 리드 생성” 방식이 부적합할 수 있다는 점도 함께 언급

한계 및 향후 과제
- 최신 모델(Transformer/Vision Transformer 등) 적용은 미진 → 향후 확장 예정
- 증강 품질 자체(리얼리즘)를 직접 평가하지 못하고 다운스트림 성능으로만 검증 → 정량 평가 방법 필요

시사점(확장 가능성)
- ECG뿐 아니라 1D 의료 시계열 전반에서 “센서 위치/측정 오차”를 반영한 증강으로 응용 가능
- 향후 파운데이션/트랜스포머 기반 모델 학습 시 데이터 부족 해결 옵션으로 활용 가치 있음
