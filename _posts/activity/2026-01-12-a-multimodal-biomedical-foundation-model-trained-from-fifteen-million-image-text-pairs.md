---
layout: activity_post
type: ai_seminar
title: 'A Multimodal Biomedical Foundation Model Trained from Fifteen Million Image–Text Pairs'
date: 2026-01-12 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/HIHp0NmCBpE'
file_url: 'https://docs.google.com/presentation/d/1_DQnF5DPuhKBUjxy-1XGRKBA30DOSUsC/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://ai.nejm.org/doi/pdf/10.1056/AIoa2400640'
views: 0
comments: true
---

이 논문은 PubMed Central에서 추출한 1,500만 규모의 이미지–텍스트 쌍(PMC-15M)으로 바이오메디컬 멀티모달 파운데이션 모델(BiomedCLIP)을 학습하고, 공개 데이터 기반으로 의료 비전-언어 성능을 크게 끌어올릴 수 있음을 제시합니다.

연구 배경
- 바이오메디컬 데이터는 이미지+텍스트가 섞인 멀티모달이라 수동 큐리에이션이 비싸고 확장성이 낮습니다.
- 기존 의료 비전-언어 모델은 비공개 사전학습 데이터, 작은 데이터 규모, 흉부 X-ray 편중 등 다양성 부족이 한계였습니다.

데이터셋 기여
- PMC-15M: 300만+ 공개 논문에서 Figure–Caption을 직접 추출해 1,500만 쌍을 구축했습니다.
- PMC Fine-grained 46M: 복합 Figure를 서브패널 단위로 분해해 4,600만 쌍까지 확장했습니다(본 실험 학습에는 미사용).

모델 설계(BiomedCLIP)
- CLIP 방식의 대조학습으로 이미지–텍스트 공동 임베딩을 학습합니다.
- 비전 인코더는 ViT, 텍스트 인코더는 PubMedBERT 기반으로 구성됩니다.

평가 설정
- 크로스모달 검색: 이미지→캡션, 캡션→이미지 검색 성능을 평가합니다.
- 이미지 분류: Pcam, LC25000, TCG, RSNA Pneumonia 등에서 제로샷/퓨샷/풀샷 성능을 비교합니다.
- 의료 VQA: VQA-RAD, SLAKE에서 개방형/폐쇄형 질문 정확도를 평가합니다.

핵심 결과
- 크로스모달 검색에서 BiomedCLIP이 Top-1/5/10 모두 최고 성능을 보였고, Top-10은 90% 수준으로 보고되었습니다.
- 이미지 분류에서는 특히 제로샷 성능이 기존 CLIP/FundusCLIP 대비 크게 우수했습니다.
- VQA에서도 전반적으로 기존 의료 특화 모델보다 높은 정확도를 보였습니다.

추가 제안: 프라이버시 보존 프록시 데이터
- 비공개 환자 데이터를 직접 쓰지 않고, PMC-15M에서 유사 이미지를 검색해 대체 평가하는 시나리오를 제시했습니다.
- 임상 리포트와 논문 캡션 표현 차이 때문에 일부 항목은 성능이 낮게 나타났습니다.

한계 및 향후 방향
- Fine-grained 46M을 구축했지만 실제 학습에는 사용하지 않았습니다.
- 비전 인코더 규모와 336 해상도 제한으로 계산 효율·성능에 제약이 있습니다.
- 향후 Fine-grained 데이터 활용, 복합 Figure 분해 정교화, 유전자/시퀀스 등 모달리티 확장을 목표로 합니다.
