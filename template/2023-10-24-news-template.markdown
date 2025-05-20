---
layout: post
title: '뉴스 제목입니다'
date: 2023-10-24 16:46:23
featured-img: '/images/logo/new_logo.jpg'
short-content: '간단하게 표시할 내용입니다. '
---

<br>

<span class="image featured"><img src="{{ site.baseurl }}/images/logo/new_logo.jpg" alt=""></span>

[Digital Medicine LAB](https://ydon1111.github.io/) 홈페이지를 위한 뉴스 템플릿 입니다.

<br>

**목차**

1. [1.뉴스의 목적](#1-뉴스의-목적)
2. [2.뉴스 탬플릿 이용 방법](#2-뉴스-탬플릿-이용-방법)

<br>

## 1. 뉴스의 목적

- 연구실에서 진행 중인 프로젝트, 실험, 학술 발표, 행사 등의 활동을 공유합니다.
- 최신 연구 성과나 논문 출판에 관한 소식을 나누어 연구 커뮤니티에 알립니다.
- 관련된 분야의 최신 동향이나 기술적 발전에 대한 정보를 제공하여 연구원들이 항상 최신 정보에 접근할 수 있도록 합니다.
- 연구원들 간의 소통을 촉진하고 아이디어 교환의 기회를 제공합니다.
- 기업, 기관, 기타 이해관계자들에게 연구실의 활동과 성과를 알리고 협력 기회를 모색합니다.

<br>

### 1.1. 어떻게 뉴스 글을 쓸 수 있나요?

- [github 페이지](https://github.com/ydon1111/ydon1111.github.io)에서 `/_posts`내의 `.markdown` 파일을 직접 작성합니다.
- Markdown 으로 이루어진 문법을 다룰 줄 아는 사람이라면 모두 가능합니다.

<br>

### 1.2. 어떤 글을 써야 할까요?

- **다양한 주제 다루기**
- 연구 성과 외에도 연구원 소개, 인터뷰, 행사 리뷰 등 다양한 주제를 다루어 흥미로운 콘텐츠를 제공합니다.
- **시각적 콘텐츠 활용**
- 그림, 차트, 비디오 등을 활용하여 뉴스를 시각적으로 풍부하게 만듭니다.
- **일정한 업데이트 주기**
- 정기적으로 업데이트하여 최신 정보를 제공하고 연구원들에게 꾸준한 소식을 전달합니다.
- **읽기 쉬운 글쓰기**
- 전문 용어를 최소화하고 일반인도 이해할 수 있는 언어로 작성하여 넓은 관중에게 접근성을 제공합니다.

<br>

## 2. 뉴스 탬플릿 이용 방법

<br>

### 2.1 카드에 표시되는 내용을 작성합니다.

.markdown파일에서

- title : 뉴스의 제목
- date : 작성중인 날짜(수동으로. 자동입력 시도 중)
- featured-img : 뉴스의 메인 이미지 경로
- short-content : 카드에 표시되는 간단한 요약 문구

```
---
layout: post
title:  "뉴스 제목입니다"
date:   1999-04-16 16:46:23
featured-img: "/images/logo/new_logo.jpg"
short-content: "간단하게 표시할 내용입니다. "
---
```

를 작성합니다.

<br>

### 2.2 뉴스 컨텐츠를 작성합니다.

<br>

#### 2.2.1 뉴스 제목이 아래와 같은 형식으로 나옵니다. 소제목을 적기 위해서는 `###`을 사용합니다.

```
## 뉴스 제목
```

## 뉴스 제목

```
### 뉴스 템플릿
```

### 뉴스 템플릿

<br>

#### 2.2.2 뉴스 이미지는 /image 폴더에 첨부 한 후 아래와 같이 이미지 경로를 설정합니다.

```
<span class="image featured"><img src="{{ site.baseurl }}/images/logo/new_logo.jpg" alt=""></span>
```

<span class="image featured"><img src="{{ site.baseurl }}/images/logo/new_logo.jpg" alt=""></span>

<br>

#### 2.2.3 뉴스 컨텐츠를 자유롭게 작성합니다.

<br>

그냥 바탕에 글을 쓰게 된다면 이렇게 나옵니다.

<br>

`block` 안에 글을 쓸 수 있습니다.

```
block 안에 글을 쓰기 위해서는 ' 따온표가 아닌, ` 3개 사이에 놓습니다.
하지만 block 안에서는 서식이 적용되지 않아,
**굵은글자** 표기가 그대로 나타나게 됩니다.
```

<br>

`들여쓰기`를 하고 싶다면, 글자 앞에 `-`를 붙여보세용.

```
- 안녕하세요 들여쓰기 입니다.
```

- 안녕하세요 들여쓰기 입니다.

```
- - 들여쓰기는 여러번 가능합니다.
```

- - 들여쓰기는 여러번 가능합니다.

<br>

`checkbox`는 이렇게 만들 수 있습니다.

```
- [x] complete item
- [ ] incomplete item
```

- [x] complete item
- [ ] incomplete item

<br>

`글 서식`은 이렇게 가능합니다.

```
__bold 굵게__
**bold 굵게**
_italic 기울여쓰기_
*italic 기울여쓰기*
~~cancelline 취소선~~
<u>underline - 밑줄</u>
```

**bold 굵게**  
**bold 굵게**  
_italic 기울여쓰기_  
_italic 기울여쓰기_  
~cancelline 취소선~  
~~cancelline 취소선~~  
<u>underline - 밑줄</u>

_italic 기울여쓰기_
