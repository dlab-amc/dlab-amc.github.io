---
layout: activity_post
type: ai_seminar
title: 'Transformer-based time-series GAN for data augmentation in bridge digital twins'
date: 2025-09-29 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/vITAVnNz-sE'
ref_url: 'https://www.sciencedirect.com/science/article/pii/S0926580525002481'
views: 0
comments: true
---

이 발표는 교량 SHM(구조물 모니터링) 디지털 트윈에서 시계열 데이터 부족 문제를 해결하기 위해, Transformer 기반 WGAN-GP로 합성 데이터를 생성하고 시간/주파수 영역 유사도로 검증한 논문 리뷰입니다.

문제 배경(왜 필요한가)
- 교량 센서 데이터 수집은 비용·시간이 크고, 손상 전/후 라벨 확보가 특히 어렵다
- 데이터 부족/클래스 불균형 때문에 AI 기반 디지털 트윈 학습이 제한된다

기존 증강 기법의 한계
- ROS/SMOTE/ADASYN은 복잡·고차원 시계열에서 과적합·일반화 저하가 발생할 수 있다
- 모든 데이터셋에 안정적으로 적용되기 어렵다

제안 방법(TTS-WGAN-GP)
- WGAN-GP 기반으로 학습 안정성을 확보한다
- Generator/Critic에 Transformer를 적용해 시계열 패턴을 더 잘 학습한다

전처리 및 생성 파이프라인
- 전처리
- 1초 단위 segmentation → normalization → 이미지 입력 형태로 reshape → shuffle/batch
생성/판별
- 노이즈→Generator(Transformer)→합성 신호 생성
- 리얼/페이크를 Critic(Transformer)이 스코어링하며 학습 반복

평가 방법(리얼과 얼마나 비슷한가)
- 시간 영역
- Cosine similarity, FID 등으로 분포/파형 유사도 비교
- 주파수 영역
- PSD, 주파수 에너지 분포 등 스펙트럼 특성 비교
- 추가 지표
- AE 기반 reconstruction error(SDP)로 리얼/페이크 구분 가능성 평가

실험 및 결과(교량 센서 케이스)
- 전반적으로 리얼과 구분이 어려울 정도로 유사한 합성 신호 생성
- 일부 센서는 패턴이 덜 맞거나 센서별 성능 편차가 존재

한계 및 향후 과제
- 50Hz 이하/200Hz 이상 대역에서 스펙트럼 차이가 남는다
- 노이즈가 많은 신호에서 성능이 불안정할 수 있어 추가 검증이 필요하다

시사점(의료/생체신호로 확장)
- 동일한 시계열 구조이므로 생체신호 데이터 증강에도 적용 가능성이 있다
- 실제 다운스트림 모델 성능 개선 여부까지 실험이 필요하다
