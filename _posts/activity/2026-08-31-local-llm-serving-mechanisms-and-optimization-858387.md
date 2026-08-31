---
layout: activity_post
type: ai_seminar
title: 'Local LLM Serving: Mechanisms and Optimization'
date: 2026-08-31 00:00:00
author: '김영돈'
video_url: 'https://youtu.be/8PFEtqHdtJg'
ref_url: 'https://orca3.github.io/llm-model-inference/'
views: 0
comments: true
---

이 발표는 프라이버시 보호와 데이터 통제를 위해 로컬 환경에서 대규모 언어 모델(LLM)을 서빙(Serving)할 때 발생하는 성능 병목의 원인(메모리 대역폭, KV 캐시 등)을 분석하고, 이를 최적화하기 위한 다양한 기술(PagedAttention, Quantization 등)과 서빙 엔진별 특징을 비교 설명합니다.

로컬 LLM 서빙의 필요성 및 범위
- 도입 배경: 민감한 의료 및 연구 데이터의 외부 유출 방지, API 비용 절감, 외부 서비스 의존성 탈피 등 데이터 통제 목적
- 서빙의 범위: 단순 1회성 모델 실행(Inference)을 넘어, 기관 내부 인프라에서 다중 요청 스케줄링, 메모리 관리, API 제공을 총괄하는 운영 계층

LLM 인퍼런스 단계별 병목 현상
- 프리필(Prefill) 단계: 프롬프트 전체를 한 번에 처리하여 KV 캐시를 생성하는 과정으로 연산 집약적(Compute-intensive) 특징
- 디코드(Decode) 단계: 다음 토큰을 하나씩 생성하며 가중치와 KV 캐시를 반복 참조하므로 메모리 대역폭(Memory Bandwidth)에 크게 의존하는 병목 발생
- 핵심 성능 지표: TTFT(최초 토큰 생성 시간, 레이턴시), TPOT/ITL(토큰 간 지연 시간), TPS(초당 토큰 수), 스루풋(서버 전체 처리량)

메모리 및 스케줄링 최적화 기술
- 페이지드 어텐션(PagedAttention): KV 캐시를 작은 블록으로 분할 할당하여, 메모리 단편화를 방지하고 VRAM 활용도를 극대화하는 서빙 메모리 관리 기술
- 연속 배치(Continuous Batching): 고정된 정적 배치가 아닌, 생성이 완료된 요청은 즉시 내보내고 대기 요청을 동적으로 투입하여 GPU 유휴 시간을 최소화
- 프리픽스 캐싱(Prefix Caching): 시스템 프롬프트 등 반복되는 입력 부분의 KV 캐시를 한 번만 계산하여 다수 요청에서 재사용
- 청크드 프리필(Chunked Prefill): 긴 프롬프트를 작은 청크로 분할 처리하여, 기존 생성 중인 디코드 작업의 심각한 지연 현상 방지

양자화(Quantization) 및 커널 최적화
- 양자화 목적: 모델 가중치(Weight), 활성화(Activation), KV 캐시의 숫자 표현 정밀도를 낮춰(FP32/16 → INT8/4 등) 메모리 사용량 및 트래픽 대폭 절감
- 양자화 방식: 액티베이션 통계를 활용해 핵심 가중치 채널을 보호하는 AWQ, 에러 최적화 관점의 GPTQ, 활성화 아웃라이어를 완화하는 SmoothQuant 적용
- 플래시 어텐션(FlashAttention): 계산 근사가 아닌 어텐션 계산을 작은 타일로 나누어 온칩 SRAM에서 수행함으로써, GPU HBM과의 메모리 I/O 트래픽을 혁신적으로 줄인 커널 최적화

주요 서빙 엔진 비교 및 선택 가이드
- Ollama: 쉬운 설치와 로컬 API 제공으로 개인 PC 및 프로토타입 개발에 적합한 로컬 런타임 플랫폼
- llama.cpp: CPU, Apple Silicon, 다양한 GPU 등 넓은 하드웨어 호환성을 지원하는 경량 런타임
- vLLM: PagedAttention 등 최적화 기술을 내장하여, 공용 GPU 서버 환경에서 높은 스루풋을 목적으로 범용적으로 사용하기 좋은 프레임워크
- SGLang: RAG/에이전트 환경처럼 공유 프롬프트(Shared Prefix)가 많은 구조화된 워크로드에서 초저지연 및 고스루풋을 내는 데 강점
- TensorRT-LLM: NVIDIA 하드웨어 인프라에서 궁극의 최적화를 제공하나, 설정 및 튜닝 난이도가 높은 프로덕션 레벨 프레임워크
