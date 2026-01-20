---
layout: activity_post
type: ai_seminar
title: '(Part 1) The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs: An Exhaustive Review of Technologies, Research, Best Practices, Applied Research Challenges and Opportunities'
date: 2025-11-10 00:00:00
author: '정성연'
video_url: 'https://youtu.be/PeBMYc_hDCw'
file_url: 'https://docs.google.com/presentation/d/1zjGqbK4aBa_cGvR596-EtuZY_Xl-ctNd/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://arxiv.org/pdf/2408.13296'
views: 0
comments: true
---

이 발표는 “Ultimate guide to fine-tuning LLMs”의 1부로, LLM 파인튜닝 리포트를 바탕으로, LLM 발전 흐름(통계→신경망→Transformer→정렬)과 파인튜닝 파이프라인 7단계 중 앞 3단계(데이터 준비→모델 선택/초기화→훈련 셋업)를 실무 관점에서 핵심 키워드로 정리합니다.

LLM 배경(발전 흐름)
- n-gram 기반 전통 LM 한계(희귀어/복잡패턴/과적합) → Transformer+Self-Attention으로 장거리 의존성 학습
- Pretrain→Finetune 패러다임(GPT/BERT) + 정렬 기법으로 선호 반영

파인튜닝 개념/유형
- 목표: 도메인·태스크 성능 극대화(사전학습 지식 전이 + 소량 데이터 미세조정)
- 유형 3가지: 비지도(도메인 적응) / 지도(입력-레이블 학습) / 지시튜닝(프롬프트 기반 수행 학습)

RAG 개요
- 파라미터 기억 한계로 생기는 환각 보완 → 청킹·인덱싱→검색→프롬프트 결합→생성

파인튜닝 1단계: 데이터 준비
- 불균형 대응: 리샘플링(오버/언더/계층), 클리닝, 가중치 조정
- 데이터 분할: 랜덤/계층 + K-fold/LOO 교차검증
- 데이터 부족: 반자동 라벨링, 증강(치환/역번역/오타 등), LLM 합성(생성→정제 반복)

파인튜닝 2~3단계: 모델 초기화 & 훈련 셋업
- 모델 선택 기준: 태스크 적합성/리소스/사전학습 데이터/편향
- 핵심 하이퍼파라미터: LR, batch, epoch
- 옵티마이저 흐름: SGD→모멘텀→Adam/AdamW(Weight decay로 일반화 개선)
- 과적합 방지: L2/드롭아웃/증강, 과소적합 완화: 모델·epoch 증가
