---
layout: activity_post
type: ai_seminar
title: 'Magma: A Foundation Model for Multimodal AI Agents'
date: 2025-12-15 00:00:00
author: '진재욱'
video_url: 'https://youtu.be/4bL4YucZ4kU'
file_url: 'https://docs.google.com/presentation/d/1q_ZbeXSsx5Gke5GXBNzTzODobCllz_U5/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://arxiv.org/pdf/2502.13130'
views: 0
comments: true
---

이 논문은 Microsoft의 비전-언어-행동(VLA) 파운데이션 모델 Magma가 “멀티모달 이해(VQA/추론)”와 “행동 수행(로봇/GUI 조작)”을 동시에 잘하기 위해, 연속 좌표 행동을 마크 토큰(SOM/TOOM)으로 바꿔 학습하는 표현 변환 전략을 제시합니다.

연구 배경
- 기존 LMM(예: GPT-4V, MiniGPT)은 이미지·비디오 이해와 추론은 강하지만 행동 출력(좌표/제어)이 불가능합니다.
- 기존 VLA(OpenVLA 등)는 로봇 행동은 가능하지만 로봇 데이터에 특화되며 일반 멀티모달 이해(VQA 등)가 저하됩니다.
- 원인으로 입력(텍스트 토큰=discrete) vs 출력(좌표/포즈=continuous) 간 표현 간극이 지목됩니다.

핵심 기여: 행동 레이블 자동 생성(서로게이트 테스크)
- 로봇 비디오/이미지에는 보통 행동 레이블이 없기 때문에, 이를 자동으로 생성해 VLA 학습 데이터로 변환하는 접근을 제안합니다.

모델 설계(Magma)
- SOM(Set-of-Mark): 이미지/프레임에 “행동 가능한 후보 지점”을 번호로 마킹해, 좌표 예측 대신 “몇 번 마크를 클릭/이동”하는 이산 토큰 예측 문제로 변환합니다.
- TOM(Trace-of-Mark): 마크가 프레임 간 어떻게 이동하는지 추적해 행동 시퀀스 + 미래 변화(temporal)까지 학습합니다.
- 학습 구조: SOM/TOOM/행동을 모두 언어 토큰처럼 변환해 LLM이 end-to-end로 지시 이해→행동 생성까지 수행(비전: ConvNeXt, 언어: Llama3).

평가 설정(적용 태스크)
- UI 내비게이션: 화면 조작(클릭/스와이프/입력) 형태의 행동 수행.
- 로봇 매니퓰레이션: 영상 기반 물체 이동·조작.
- 멀티모달 이해: 이미지 기반 질의응답(VQA), 위치 지목 등.

핵심 결과
- UI 내비게이션과 제로샷 VideoQA 등에서 GPT-4V 계열 및 기타 베이스라인 대비 우수 성능을 보고합니다.
- 어블레이션에서 SOM 또는 TOOM만 사용 시 성능 하락, SOM+TOOM 동시 사용이 최고 성능을 보였습니다.
- 결론적으로 “새 알고리즘”보다 행동을 학습 가능한 표현으로 바꾸는 설계(SOM/TOOM)가 핵심이라고 주장합니다.

추가 제안: 의료/헬스케어 응용 아이디어
- 의료에서 SOM = 지금 가능한 처치 후보(행동 선택지), TOOM = 처치 후 상태 변화 예측으로 대응 가능.
- 입력을 생체신호/EMR/투약력으로 두고, 출력은 “어떤 개입을 할지”와 “그 결과가 어떻게 변할지”를 함께 제시하는 임상 의사결정 에이전트로 확장 가능하다고 제안합니다(예: 저혈압 시 vasopressor 용량 선택 + 10~30분 후 MAP/HR 변화 예측).

한계 및 향후 방향
- 명시적 관찰→행동→관찰 반복 루프(에이전트 루프)가 없고,
- 장기 메모리, 자기반성(self-reflection), 툴 오케스트레이션이 없어 “완전한 에이전트”라기보다 에이전트 파운데이션 모델의 초기 형태로 정리됩니다.
