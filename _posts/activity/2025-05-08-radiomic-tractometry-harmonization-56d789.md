---
layout: activity_post
type: conference
title: '다기관 Radiomic Tractometry 데이터 편차 보정을 위한 Harmonization 파이프라인'
date: 2025-05-08 00:00:00
author: '한유진, 신항식'
extra_info: '제65회 대한의용생체공학회 춘계학술대회'
video_url: 'https://youtu.be/5rE83GCGj0k'
file_url: 'https://drive.google.com/file/d/1xYyOd8tnCWZu5LbwTk-j9LkxMPeJ7Xkw/view?usp=sharing'
views: 0
comments: true
---

In multi-institutional neuroimaging-based schizophrenia classification, inter-institutional distributional differences can adversely affect the generalization performance of machine learning models. To address this issue, we propose a Balanced ComBat pipeline that combines propensity score matching with undersampling. To ensure independence of the test data, ComBat was trained using data excluding the test center during the training phase, and applied to the full dataset during the test phase. While the application of ComBat alone reduced external AUC to 0.60, the proposed Balanced ComBat approach recovered performance to around 0.70, demonstrating the effectiveness of applying data adjustment techniques to Balanced ComBat.
