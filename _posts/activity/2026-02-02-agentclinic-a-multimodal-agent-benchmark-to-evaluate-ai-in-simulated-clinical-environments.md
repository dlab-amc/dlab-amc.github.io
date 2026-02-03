---
layout: activity_post
type: ai_seminar
title: 'AgentClinic: a multimodal agent benchmark to evaluate AI in simulated clinical environments'
date: 2026-02-02 00:00:00
author: '김대엽'
video_url: 'https://youtu.be/fxT9KpMWvjo'
ref_url: 'https://arxiv.org/abs/2405.07960'
views: 0
comments: true
---

이 논문은 AgentClinic을 제안하여, 기존 의료 벤치마크(MedQA/USMLE형 정적 Q&A)와 실제 진료(대화·검사 선택·순차 의사결정·멀티모달 정보) 사이의 평가 갭을 OSCE 스타일 임상 시뮬레이션으로 메우는 벤치마크와 분석 결과를 정리합니다.

연구 배경: 기존 벤치마크-실제 임상 간 평가 갭
- 기존 의료 AI 평가: 단일 질문–단일 정답, 정적 텍스트 Q&A 중심(의학 지식 측정 편중)
- 실제 진료 요소: 환자 대화 기반 병력 수집, 검사 선택, 순차 의사결정, 영상/검사수치 등 멀티모달 통합

AgentClinic 목표(설계 요구사항 5종)
- OSCE 스타일 시뮬레이션, 멀티에이전트 워크플로우, 멀티모달 환경, 바이어스 시뮬레이션, 환자 중심 지표·다국어·전문의 케이스 포함

OSCE 기반 평가 프레임
- 4단 구성: 병력 대화(정보 수집) → 검사 선택(요청) → 순차 의사결정(가설 갱신) → 최종 진단/판단
- 단순 정답 맞히기 대비: “진단 과정” 중심 평가 관점

멀티에이전트 구조(진료 워크플로우 모사)
- Doctor agent: 질문·검사 요청·가설 업데이트·최종 진단
- Patient agent / Measurement agent / Moderator agent: 환자 응답, 검사 결과 제공, 정답 비교·채점

추론 보조 도구(Agent2 기반 변형)
- CoT 계열: 단계적 임상 추론 영향 비교
- Reflection/CoT: 초기 가설 재검토 효과
- Notebook: 경험(기억) 누적 효과(임상 경험 축적 모사)
- Adaptive RAG: 외부 지식 검색 시점의 “모델 자율 결정”과 의사결정 전략 평가

도구 실험 결과 요지(모델-도구 상호작용)
- Claude 3.5: Notebook 조건 최고 성능(예: 56.1%)
- GPT-4: Adaptive RAG에서 향상 폭 최대
- GPT-3.5: 도구 적용 시 성능 악화 사례
- Llama 70B: Notebook/Reflection에서 개선 관찰
- 결론 포인트: 도구 만능론 부정, 기본 추론 능력·정렬 상태 의존

바이어스 시뮬레이션(현실성 강화)
- Cognitive bias: Doctor(고착/최근성), Patient(자가진단) 프롬프트 주입
- Implicit bias: 성별/문화/교육수준 등 사회 요인 기반 상호작용 변화(검사 선택·신뢰도 영향)

바이어스 영향(정확도 외 붕괴 지점)
- 대화 흐름 고정, 환자 신뢰 저하, 정보 제공 축소, 상호작용 품질 저하
- 모델별 차이: GPT-4 상대적 안정 vs Mixtral 7B 큰 하락(Confidence/Compliance 등)

데이터 구성(3 소스 → 5 데이터셋)
- 소스: MedQA(USMLE형), MIMIC-IV(EHR), NEJM(영상 포함 케이스)
- 파생: 멀티모달(NEJM), 텍스트 중심(MedQA/MIMIC), 9개 전문과(Specialty), 7개 언어(Multilingual)

평가 프로토콜(제약 조건)
- 상호작용 한도: 최대 20턴(질문+검사 요청 포함)
- 전략 중요 요소: 질문 순서, 검사 선택, 정보 통합 방식

평가 지표(정답+환자 중심)
- Diagnosis accuracy: 최종 진단 텍스트-정답 질병 매칭(동의어/표현 차이 고려)
- Patient confidence / Compliance: 환자 에이전트 반응 기반 자동 산출
- Consultation rating: 대화 흐름·상호작용 품질 종합 점수
- 논문 보고 관행: 비교 가능성·안정성 이유로 Accuracy 중심 보고 비중

핵심 결과(요지)
- EHR(MIMIC) 환경: 전반적 저정확도(대다수 30% 전후), Claude 3.5 상위권 → “시험형 벤치마크 대비 고난도 임상 통합” 신호
- 상호작용 포함 환경: Claude 3.5 약 62% 수준, GPT-4 약 51% 수준(의사 평균 근접), Mixtral/GPT-3.5 30%대 정체
- 멀티모달(NEJM): 이미지 제공 여부와 무관하게 30% 이하 중심, “검사 요청 시점 결정”에서 추가 하락, 피부/조직처럼 패턴 뚜렷한 영역 상대 우세 vs X-ray/MRI 취약
- 전문과별: 내과/이비인후과/산부인과 상대 고성능, 정신과/응급의학과 전반적 저성능(대화·맥락 해석 비중 반영)
- 다국어: 영어 대비 큰 성능 저하(Claude 3.5도 비영어 40% 이하 구간 다수), 번역 문제를 넘어 “언어·문화 표현 민감한 임상 추론 정책” 취약성 시사

결론(이 논문이 남기는 메시지)
- 정적 Q&A 대비: 상호작용·검사 선택·환자 반응을 포함한 임상형 벤치마크 필요성
- 성능 결정 요인: 모델 지식량 단독이 아니라 질문 전략, 도구 사용 정책, 환자 응답 품질, 바이어스 내성
- 병목 지점: “언제 어떤 검사를 요청할지” 결정(행동 정책)과 멀티모달 통합, 다국어 임상 상호작용 적합성
