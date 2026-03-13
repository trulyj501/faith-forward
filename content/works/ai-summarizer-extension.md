---
title: "AI Context Porter"
slug: "ai-summarizer-extension"
excerpt: "웹페이지 컨텍스트를 버튼 하나로 제미나이·챗GPT·클로드에 바로 전달하는 나만의 크롬 확장 프로그램"

publishedDate: "2026-03-13"
tags: ["chrome-extension", "javascript", "AI", "productivity"]
image: "/images/ai-summarizer-extension.webp"
url: ""
label: "크롬 확장 프로그램"
---

### 발견한 문제
그동안 참 번거롭지 않으셨나요?
해외의 유익한 아티클이나 방대한 영문 자료를 마주할 때마다 우리는 일종의 '통행세'를 내야 했습니다. 주소를 복사하고, AI 탭을 열고, 내용을 붙여넣고, 요약해달라고 타이핑하는 다섯 단계의 번거로움이죠.

정작 내용을 읽기도 전에 이 사소한 마찰들이 쌓여 정보를 소화하려는 흐름을 끊고 있었습니다. 웹 브라우저와 AI 사이의 이 작은 단절이 우리가 더 넓은 세상의 지식을 흡수하는 습관을 방해하고 있었던 셈입니다.

### 기술로 돕다: 마찰을 제로로 만드는 설계
복잡한 과정 대신 단 한 번의 클릭으로 맥락을 연결하는 크롬 확장 프로그램을 설계했습니다.

**우클릭 한 번으로 즉시 연결**
기사 제목에서 오른쪽 버튼을 눌러 바로 한국어 요약을 시작합니다. 일일이 복사할 필요가 없습니다.

**복사·붙여넣기 없는 자동 입력**
제미나이와 클로드의 입력창에 요약할 내용을 AI가 알아서 받아 적어줍니다. 이제 사용자는 빈 입력창을 마주할 필요가 없습니다.

**내 입맛에 맞는 맞춤 설정**
팝업 창에서 요약 결과물을 받을 언어(한국어·영어·일본어)와 평소 선호하는 AI를 자유롭게 선택할 수 있습니다.

### 함께 경험하다: 공기처럼 자연스러운 기술
정보의 홍수 속에서 나에게 진짜 필요한 것만 골라내는 능력은 이제 필수입니다. AI Context Porter는 AI를 별도의 서비스가 아닌, 내가 쓰는 브라우저의 일부처럼 느끼게 해줍니다.

기술은 복잡할 필요가 없습니다. 필요한 순간에 조용히 있다가, 버튼 하나로 응답하면 됩니다. 코딩을 몰라도 괜찮습니다.

---

### 5분 안에 설치하고 바로 사용하기

> - [📦 AI Context Porter 다운로드](/AIContextPorter.zip)

**1단계: 파일 준비**
내려받은 압축 파일(AIContextPorter.zip)을 풀고 폴더를 기억하기 쉬운 곳에 두세요.

**2단계: 개발자 모드 켜기**
크롬 주소창에 `chrome://extensions/` 를 입력해 이동한 뒤, 오른쪽 상단의 개발자 모드 스위치를 파란색으로 켭니다.

**3단계: 프로그램 불러오기**
왼쪽 상단의 **압축해제된 확장 프로그램을 로드합니다** 버튼을 누르고, 아까 준비한 폴더 자체를 선택하세요.

**4단계: 아이콘 고정하기**
크롬 우측 상단의 퍼즐 모양 아이콘을 눌러 AI Context Porter 옆의 핀 아이콘을 클릭하세요. 이제 주소창 옆에서 언제든 바로 꺼내 쓸 수 있습니다.

![AI Context Porter 크롬 확장 프로그램 팝업 - 웹페이지 AI 요약 도구 사용 화면](/images/ai-context-porter-chrome-extension-demo.png)

> 이 확장 프로그램은 직접 파일을 불러오는 방식입니다. 크롬 업데이트 등으로 비활성화될 경우 `chrome://extensions/` 에서 다시 로드해 주세요.

---

### 직접 파일을 만들어 설치하기

다운로드 없이 코드를 직접 작성하고 싶은 분들을 위해 전체 소스 코드를 공개합니다. 빈 폴더를 하나 만들고, 아래 파일 4개를 같은 폴더 안에 저장한 뒤 위와 동일한 방법으로 크롬에 로드하면 됩니다.

#### 파일 1: `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "AI 웹페이지 요약기",
  "version": "1.0",
  "description": "원하는 AI와 언어를 선택해 현재 웹페이지를 요약합니다.",
  "permissions": ["activeTab", "clipboardWrite", "scripting", "contextMenus", "tabs"],
  "host_permissions": [
    "https://gemini.google.com/*",
    "https://claude.ai/*"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_title": "AI 요약기 팝업 열기"
  },
  "background": {
    "service_worker": "background.js"
  }
}
```


#### 파일 2: `popup.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { width: 280px; padding: 15px; font-family: 'Malgun Gothic', sans-serif; }
    h3 { margin-top: 0; font-size: 16px; text-align: center; }
    .section { margin-bottom: 15px; }
    label { font-size: 14px; cursor: pointer; display: block; margin-bottom: 5px; }
    select { width: 100%; padding: 8px; font-size: 14px; }
    button { width: 100%; margin-bottom: 10px; padding: 10px; font-size: 14px;
             cursor: pointer; border: none; border-radius: 5px; color: white; }
    #btn-gpt    { background-color: #10a37f; }
    #btn-gemini { background-color: #1a73e8; }
    #btn-claude { background-color: #d97757; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <h3>웹페이지 요약하기</h3>

  <div class="section">
    <label><input type="radio" name="mode" value="url" checked> 링크(URL)만 보내기</label>
    <label><input type="radio" name="mode" value="text"> 텍스트 추출해서 보내기</label>
  </div>

  <div class="section">
    <select id="lang-select">
      <option value="한국어">한국어로 요약</option>
      <option value="영어">영어로 요약</option>
      <option value="일본어">일본어로 요약</option>
    </select>
  </div>

  <button id="btn-gpt">ChatGPT로 요약</button>
  <button id="btn-gemini">Gemini로 요약</button>
  <button id="btn-claude">Claude로 요약</button>

  <script src="popup.js"></script>
</body>
</html>
```


#### 파일 3: `popup.js`

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const langSelect = document.getElementById('lang-select');

  function executeSummary(aiName) {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const lang = langSelect.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];

      if (mode === 'url') {
        const promptText = `다음 웹페이지를 ${lang}로 요약해줘: ${tab.url}`;
        openAI(aiName, promptText, mode);
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => document.body.innerText
        }, (results) => {
          if (results && results[0] && results[0].result) {
            const pageText = results[0].result;
            const promptText = `다음 텍스트를 ${lang}로 요약해줘:\n\n${pageText}`;
            openAI(aiName, promptText, mode);
          } else {
            alert('텍스트를 추출할 수 없는 페이지입니다.');
          }
        });
      }
    });
  }

  function openAI(aiName, promptText, mode) {
    if (aiName === 'chatgpt' && mode === 'url') {
      const gptUrl = `https://chatgpt.com/?q=${encodeURIComponent(promptText)}`;
      chrome.tabs.create({ url: gptUrl });
    } else {
      chrome.runtime.sendMessage({
        action: 'open_and_fill',
        aiName: aiName,
        promptText: promptText
      });
    }
  }

  document.getElementById('btn-gpt').addEventListener('click', () => executeSummary('chatgpt'));
  document.getElementById('btn-gemini').addEventListener('click', () => executeSummary('gemini'));
  document.getElementById('btn-claude').addEventListener('click', () => executeSummary('claude'));
});
```


#### 파일 4: `background.js`

```javascript
// 우클릭 메뉴 생성
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'summarize-link-gemini',
    title: '제미나이로 한국어로 요약하기',
    contexts: ['link']
  });
});

// 우클릭 메뉴 클릭 처리
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'summarize-link-gemini') {
    const promptText = '다음 링크의 내용을 한국어로 요약해줘: ' + info.linkUrl;
    handleAutoFill('gemini', promptText);
  }
});

// 팝업에서 보낸 메시지 처리
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === 'open_and_fill') {
    handleAutoFill(request.aiName, request.promptText);
  }
});

// 새 탭을 열고 자동 입력하는 핵심 함수
async function handleAutoFill(aiName, promptText) {
  let targetUrl = '';
  if (aiName === 'gemini') targetUrl = 'https://gemini.google.com/app';
  if (aiName === 'claude') targetUrl = 'https://claude.ai/new';

  const newTab = await chrome.tabs.create({ url: targetUrl });

  chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
    if (tabId === newTab.id && changeInfo.status === 'complete') {
      chrome.tabs.onUpdated.removeListener(listener);
      chrome.scripting.executeScript({
        target: { tabId: newTab.id },
        func: injectAutoFill,
        args: [promptText, aiName]
      });
    }
  });
}

// AI 사이트 화면에서 실행되는 자동 타이핑 스크립트
function injectAutoFill(text, aiName) {
  setTimeout(() => {
    let inputBox;
    if (aiName === 'gemini') {
      inputBox = document.querySelector('rich-textarea div[contenteditable="true"]')
               || document.querySelector('.ql-editor');
    } else if (aiName === 'claude') {
      inputBox = document.querySelector('div.ProseMirror[contenteditable="true"]');
    }

    if (inputBox) {
      inputBox.focus();
      document.execCommand('insertText', false, text);

      if (aiName === 'gemini') {
        setTimeout(() => {
          const sendBtn = document.querySelector('.send-button')
                       || document.querySelector('button[aria-label="Send message"]');
          if (sendBtn) sendBtn.click();
        }, 500);
      }
    } else {
      // 입력창을 못 찾을 경우 클립보드에 복사해서 안내
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('자동 입력에 실패했습니다. 사이트 구조가 변경되었을 수 있습니다.\n내용이 복사되었으니 붙여넣기(Ctrl+V) 해주세요.');
    }
  }, 2500);
}
```

> **주의:** 이 확장 프로그램은 AI 사이트의 DOM 구조를 직접 조작하는 방식입니다. 각 서비스가 화면 구조를 업데이트하면 자동 입력 기능이 일시적으로 작동하지 않을 수 있으며, 이 경우 코드를 소폭 수정하여 재적용하면 됩니다.
>

> **💡 친애하는 AI와의 숙제**
>
> 현재 구현된 텍스트 추출 기능은 페이지의 글자 수가 너무 많은 경우 브라우저나 AI 사이트의 제한으로 인해 정상적으로 동작하지 않을 수 있습니다. 이 부분을 더욱 완벽하게 수정하는 것은 여러분의 유능한 AI 친구와 함께 해결할 즐거운 숙제로 남겨두었습니다. 혹은 여러분이 직접 코드를 수정해 보며 도구를 업그레이드해 보시는 것도 추천합니다!

