---
layout: activity_post
type: ai_seminar
title: 'A survey of Large Language Models'
date: 2026-01-19 00:00:00
author: '류가연'
video_url: 'https://youtu.be/pfvFcD1vK4U'
file_url: 'https://drive.google.com/file/d/1ziKaH4Rn5R6SzVVEHC33xXItbrb1Mx86/view?usp=drive_link'
ref_url: 'https://arxiv.org/abs/2303.18223'
views: 0
comments: true
---

이 발표는 A Survey of Large Language Models 논문을 기반으로 Introduction ~ Pre-training을 정리하며, 언어 모델이 SLM → 신경망 LM → PLM → LLM로 발전한 흐름과 핵심 기술을 구조적으로 설명합니다.

언어 모델 발전 흐름
- SLM(n-gram): 짧은 문맥만 보고 예측하며, 데이터가 다양해지면 성능이 급격히 떨어집니다.
- 신경망 LM: 임베딩으로 단어 관계를 학습해 일반화 성능을 높였습니다.
- PLM(BERT, GPT1/2): 문맥 기반 표현 학습과 Pretrain→Finetune 패러다임을 확립했습니다.
- LLM(GPT3~): 스케일 확장으로 창발적 능력이 등장하며 범용 문제 해결사로 확장됩니다.

PLM vs LLM 핵심 차이
- 창발적 능력: ICL·추론 능력이 임계점 이후 비선형적으로 나타납니다.
- 프롬프트 중심: 파인튜닝보다 지시 프롬프트로 직접 수행합니다.
- 연구 구조 변화: 대규모 연산·분산학습·협업이 필수 조건이 됩니다.

LLM 핵심 기술 개념
- Transformer 어텐션: 긴 문맥을 효율적으로 반영해 문맥 표현을 생성합니다.
- 스케일링 법칙: Kaplan은 “모델 확대”, Chinchilla는 “모델+데이터 균형”을 강조합니다.
- 창발 능력 3종: ICL, Instruction tuning, Chain-of-Thought 추론이 핵심입니다.

LLM 성공 요인(5가지)
- 스케일 업(모델·데이터·연산) + 분산학습(DeepSpeed/Megatron)
- 능력 도출(ICL/Instruction/Reasoning) + RLHF 얼라인먼트
- 외부 도구 활용(검색·계산 등)로 한계를 보완합니다.

논문은 LLM이 스케일링·창발 능력·데이터 설계·정렬·도구 사용의 결합으로 발전했음을 정리하며, 마지막으로 효율적 학습·안정적 정렬·투명한 공개·평가 고도화를 향후 연구 방향으로 제시합니다.
