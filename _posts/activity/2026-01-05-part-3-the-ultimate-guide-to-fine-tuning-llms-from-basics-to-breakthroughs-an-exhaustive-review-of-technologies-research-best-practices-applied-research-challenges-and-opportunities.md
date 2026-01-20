---
layout: activity_post
type: ai_seminar
title: '(Part 3) The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs: An Exhaustive Review of Technologies, Research, Best Practices, Applied Research Challenges and Opportunities'
date: 2026-01-05 00:00:00
author: '정성연'
video_url: 'https://youtu.be/2i_R2DqhJ8o'
file_url: 'https://docs.google.com/presentation/d/1YBOiGHbkmPfy4kY3j0QZIZS-83r1Va0B/edit?usp=drive_link&ouid=100241011738859459601&rtpof=true&sd=true'
ref_url: 'https://arxiv.org/pdf/2408.13296'
views: 0
comments: true
---

이 발표는 “Ultimate guide to fine-tuning LLMs”의 3부로, LLM 파인튜닝 이후 단계(평가·검증→배포→모니터링)를 체계적으로 정리하고, 멀티모달 LLM(VLM/오디오 LLM) 개요와 향후 연구 과제(효율·데이터·윤리/보안)를 키워드 중심으로 제시합니다.

모델 평가·검증(파인튜닝 직후)
- 평가지표 설정: 크로스엔트로피 등으로 예측 분포 vs 실제 분포 차이를 정량화.
- 손실 곡선 해석: 과소적합(손실 감소 없음), 과적합(훈련↓/검증↑), 변동(학습률 과대·노이즈) 패턴을 진단.
- 검증 루프: epoch마다 검증셋 평가→지표 기록→개선 없으면 early stopping.
- 지표 모니터링/해석: 훈련·검증 지표 동반 개선=일반화 양호, 괴리=과적합/발산 가능성.
- 하이퍼파라미터 튜닝: learning rate, batch size, epoch, optimizer(예: Paged Adam) + dropout/weight decay/warmup 조정, 데이터 클린업(중복/노이즈 제거) 강조.

벤치마킹·안전성 평가
- 표준 벤치마크: GLUE, SuperGLUE, HellaSwag 등으로 객관 비교.
- 안전성 평가 방식
- 벤치마크 기반: 도메인·태스크에 맞춰 공격/위험 출력 점검 및 안전장치 적용.
- 모델 기반: LlamaGuard(유해 카테고리 분류), ShieldGemma(적대 프롬프트/필터링), WildGuard(의도·위험·거절 적절성 평가) 같은 가드레일 모델 활용.

배포(Deployment)
- 배포 절차: 모델 저장 → 인프라 설정(클라우드 vs 자체호스팅 비용/관리 트레이드오프) → API 구성 → 프로덕션 배포.
- 추론 최적화/전략
- 온프레미스 GPU(보안 강점, 초기 투자 필요): 로드밸런싱/폴백 라우팅/병렬화.
- 분산 LLM(여러 저사양 GPU 연결, 예: Petals).
- WebGPU/WebLLM(브라우저 로컬 추론).
- 양자화(메모리 절감, 로컬/서버 추론 효율화).
- vLLM(캐시·스케줄링 최적화, PagedAttention 기반).

모니터링·유지보수(Production 이후)
- 기준선 설정: 정확도·지연시간·처리량·오류율 등 초기 베이스라인 기록.
- 운영 모니터링: 성능/정확도/오류/로그/경고(슬랙·이메일 연동)/사용자 피드백/보안 감시.
- 드리프트 감지: 입력 분포·성능 변화 통계적으로 탐지, 홀드아웃으로 정기 재평가.
- 버전 관리: 모델 반복 버전별 성능 추적, 최적 버전 유지.
- 지식 업데이트: 주기적 또는 임계값 트리거로 재학습(파인튜닝, 액티브/컨티뉴어스/트랜스퍼/메타 러닝 등).

멀티모달 LLM 개요
- VLM(비전-언어): 이미지+텍스트 인코더 + 퓨전(대조학습 중심), VQA/캡셔닝/OCR/문서이해로 확장.
- 오디오·스피치 LLM: 연속 신호를 토큰화(음향+의미 토큰 등), 자기회귀 디코더/자기지도 학습, 다양한 파인튜닝 방식 소개.
- 대조학습(Contrastive): CLIP처럼 이미지-텍스트 임베딩 유사도를 학습해 제로샷 분류/검색에 활용.

의료 VLM 사례(MedVQA)
- 비전 인코더(EVA) + 리니어 프로젝션 + LLM(Llama2-7B) 구조.
- LoRA로 캡셔닝(ROCO)과 VQA 데이터셋 각각 파인튜닝.

향후 과제/연구 방향
- 효율·확장성: sparse fine-tuning, DEFT, 하드웨어-알고리즘 공동설계.
- 데이터 효율: 데이터 가지치기, few-shot 학습(인플루언스/임포트 스코어 기반).
- 윤리/보안: 공정성(대표성 데이터·제약), 프라이버시(차등프라이버시·연합학습), 보안(적대적 훈련·감사), 투명성(문서화/보고).
- 응용 확장: IoT/엣지 기반 실시간 시스템, 웨어러블 기반 개인맞춤 의료, 실시간 의사결정 지원 + 규제/거버넌스 필요.
