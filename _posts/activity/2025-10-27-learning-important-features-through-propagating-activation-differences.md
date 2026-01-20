---
layout: activity_post
type: ai_seminar
title: 'Learning Important Features Through Propagating Activation Differences'
date: 2025-10-27 00:00:00
author: '최예은'
video_url: 'https://youtu.be/bKdCc5tNzss'
file_url: 'https://docs.google.com/presentation/d/1zOxnwQwYItQhPucSPRy_123pudsEmqQE/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://arxiv.org/pdf/1704.02685'
views: 0
comments: true
---

이 발표는 DeepLIFT(2017, ICML/JMLR)를 통해 딥러닝 예측을 레퍼런스 대비 변화량(Δ) 으로 분해하고, 양/음 기여도를 분리해 기존 그라디언트 기반 XAI의 한계(포화·불연속·min/max 문제)를 개선하는 방법을 소개합니다.

기존 중요도 계산 방법과 한계
- 섭동(순전파): 입력 마스킹/변형으로 출력 변화 관찰 → 연산량 큼, 포화 구간 해석 어려움
- 그라디언트(역전파): saliency/Deconv/GuidedBP/Grad×Input/LRP → 음의 기여 누락, 포화 문제 지속, threshold artifact 발생
- Integrated Gradients: 스케일링 경로 적분 → 역전파 반복 필요, min/max 구조에서 중요도 왜곡 가능

DeepLIFT 핵심 아이디어
- 레퍼런스 입력(보통 0벡터) 대비 출력 변화(Δt) 를 중간 뉴런들의 기여도로 분해
- Σ CΔxi→Δt = Δt (Summation-to-Delta)
- 기여도 = Multiplier × Δx (한 번의 역전파로 계산 가능, chain rule 적용)
- 양/음 기여 분리(positive/negative contribution)로 신호 손실 최소화
- 규칙
- Linear rule: 선형층은 가중치 기반으로 분배
- Rescale rule: 비선형층에서 Δ 비율로 분배
- RevealCancel rule: min/max 같은 상쇄 구조에서 양/음 경로를 따로 계산해 왜곡 완화

실험 결과(요약)
- MNIST: 클래스 간 점수 차이에 기여한 픽셀을 지웠을 때 DeepLIFT가 가장 큰 성능 저하 → 중요한 영역을 더 정확히 찾음
- 유전체(모티프 삽입 데이터): 기대되는 모티프 중요도 패턴을 가장 잘 재현, min/max로 인한 음수 기여 오류 감소

정리
- DeepLIFT = “레퍼런스 대비 변화량 기반 + 양/음 기여 분리” 설명기법
- 포화/불연속/상쇄(min-max) 문제를 완화하며, SHAP DeepExplainer의 기반이 됨
