"use strict";
var next_sutta = $("#next-sutta").attr("title", "Kinh Tiếp"),
  previous_sutta = $("#previous-sutta").attr("title", "Kinh Trước");

$("li.nextprev").append(previous_sutta).append(next_sutta);
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const rawSuttas = document.querySelectorAll(".raw_sutta");





  // Run the lookup initializer
  if (typeof enablePaliLookup === "function") {
    enablePaliLookup();
  }
});

 function openRandomSutta3() {
  const randomIndex = Math.floor(Math.random() * suttaFiles.length);
  const selectedFile = suttaFiles[randomIndex];

  // Get root path of your site 
  const currentPath = location.pathname;
  const rootPath = currentPath.split("/").slice(0, -1).join("/") + "/";

  // Redirect to the correct file
  window.location.href = rootPath + selectedFile;
}

 function openRandomSutta2() {
  const randomIndex = Math.floor(Math.random() * suttaFiles.length);
  const selectedFile = suttaFiles[randomIndex];

  // Get root path of your site 
  const currentPath = location.pathname;
  const rootPath = currentPath.split("/").slice(0, -2).join("/") + "/";

  // Redirect to the correct file
  window.location.href = rootPath + selectedFile;
}
function openRandomSutta() {
  // Example: /bw2_20250319/dn/dn1.htm
  const currentPath = location.pathname;

  // Extract the folder name (e.g., "dn")
  const parts = currentPath.split("/");
  const currentFolder = parts[parts.length - 2]; // second-to-last segment

  // Filter suttaFiles to only those inside the same folder
  const sameFolderFiles = suttaFiles.filter(file => file.startsWith(currentFolder + "/"));

  // Pick a random file from that filtered list
  const randomIndex = Math.floor(Math.random() * sameFolderFiles.length);
  const selectedFile = sameFolderFiles[randomIndex];

  // Build root path (strip last two segments)
  const rootPath = parts.slice(0, -2).join("/") + "/";

  // Redirect
  window.location.href = rootPath + selectedFile;
}



    document.addEventListener("DOMContentLoaded", function () {
      if (typeof enablePaliLookup === "function") {
        enablePaliLookup();
      } else {
        console.error("enablePaliLookup is not defined");
      }
    });




 // Script to open and close sidebar
 	function w3_open() {
 	document.getElementById("mySidebar").style.display = "block";
 	}
 		function w3_close() {
 		document.getElementById("mySidebar").style.display = "none";
 	}

function toggle_light_mode() {
 			var app = document.getElementsByTagName("BODY")[0];
 				if (localStorage.lightMode == "dark") {
 			localStorage.lightMode = "light";
 			app.setAttribute("light-mode", "light");
 		} else {
 					localStorage.lightMode = "dark";
 					app.setAttribute("light-mode", "dark");
 	}
 		}
 
 		window.addEventListener("storage", function () {
 			if (localStorage.lightMode == "dark") {
 				app.setAttribute("light-mode", "dark");
 				} else {
 				app.setAttribute("light-mode", "light");
 		}
 		}, false);
		

 		var app = document.getElementsByTagName("BODY")[0];
 		if (localStorage.lightMode == "dark") {
 			app.setAttribute("light-mode", "dark");
 	}
 
 

 		function toggle_light_mode() {
 			var app = document.getElementsByTagName("BODY")[0];
 				if (localStorage.lightMode == "dark") {
 			localStorage.lightMode = "light";
 			app.setAttribute("light-mode", "light");
 		} else {
 					localStorage.lightMode = "dark";
 					app.setAttribute("light-mode", "dark");
 	}
 		}
 
 		window.addEventListener("storage", function () {
 			if (localStorage.lightMode == "dark") {
 				app.setAttribute("light-mode", "dark");
 				} else {
 				app.setAttribute("light-mode", "light");
 		}
 		}, false);
		
function toggleVi() {
      const btn = document.getElementById('toggleViBtn');
      const hidden = !document.body.classList.contains('vi-hidden');

      if (hidden) {
        // Hide Vietnamese
        document.body.classList.add('vi-hidden');
        btn.textContent = 'Pali';
        btn.classList.add('hidden');
        localStorage.setItem('viHidden', 'true');

        document.querySelectorAll('p.vi').forEach(p => {
          const children = Array.from(p.childNodes);
          for (let node of children) {
            if (node.nodeType === Node.TEXT_NODE) {
              node._originalText = node.textContent;
              node.textContent = '';
            } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
              node.style.display = 'none';
            }
          }
        });

        showPali();

      } else {
        // Show Vietnamese
        document.body.classList.remove('vi-hidden');
        btn.textContent = 'Pali';
        btn.classList.remove('hidden');
        localStorage.setItem('viHidden', 'false');

        document.querySelectorAll('p.vi').forEach(p => {
          const children = Array.from(p.childNodes);
          for (let node of children) {
            if (node.nodeType === Node.TEXT_NODE && node._originalText !== undefined) {
              node.textContent = node._originalText;
            } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
              node.style.display = '';
            }
          }
        });
      }
    }

    function togglePali() {
      const paliTexts = document.querySelectorAll('.pali');
      const btn = document.getElementById('togglePaliBtn');
      const anyHidden = Array.from(paliTexts).some(el => el.style.display === 'none');
      const hideNext = !anyHidden;

      paliTexts.forEach(span => {
        span.style.display = hideNext ? 'none' : '';
      });

      btn.textContent = hideNext ? 'Việt' : 'Việt';
      btn.classList.toggle('hidden', hideNext);
      localStorage.setItem('paliHidden', hideNext ? 'true' : 'false');

      if (hideNext) {
        showVi();
      }
    }

    function showVi() {
      document.body.classList.remove('vi-hidden');
      const btn = document.getElementById('toggleViBtn');
      btn.textContent = 'Pali';
      btn.classList.remove('hidden');

      document.querySelectorAll('p.vi').forEach(p => {
        const children = Array.from(p.childNodes);
        for (let node of children) {
          if (node.nodeType === Node.TEXT_NODE && node._originalText !== undefined) {
            node.textContent = node._originalText;
          } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('pali')) {
            node.style.display = '';
          }
        }
      });
    }

    function showPali() {
      const paliTexts = document.querySelectorAll('.pali');
      paliTexts.forEach(span => span.style.display = '');
      const btn = document.getElementById('togglePaliBtn');
      btn.textContent = 'Việt';
      btn.classList.remove('hidden');
    }

    // Restore state on page load
    window.addEventListener('DOMContentLoaded', () => {
      const viHidden = localStorage.getItem('viHidden') === 'true';
      const paliHidden = localStorage.getItem('paliHidden') === 'true';

      if (viHidden) {
        toggleVi();
      }
      if (paliHidden) {
        togglePali();
      }
    });

function togglePaliLookup(enabled){
  if(enabled){
    enablePaliLookup();
    localStorage.setItem('paliLookupEnabled', 'true');
  } else {
    disablePaliLookup();
    localStorage.setItem('paliLookupEnabled', 'false');
  }
}

// 🔹 Restore state on page load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('paliLookupEnabled');

  // If no saved value, default to enabled
  const lookupEnabled = saved === null ? true : saved === 'true';

  // set checkbox state to match
  const checkbox = document.getElementById('paliSwitch');
  checkbox.checked = lookupEnabled;

  // apply the state
  togglePaliLookup(lookupEnabled);
});

	function openSuttaTopic() {
    window.location.href = "../tn/tn.html";
  }
  
  function SuttaQuotes() {
    window.location.href = "../congcu/trichdan.html";
  }
  
const searchInput = document.getElementById('searchpage');
const form = document.getElementById('form');
const resultInfo = document.getElementById('result-info');

let currentHighlight = null;
let highlights = [];
let currentIndex = -1;

function clearHighlights() {
    document.querySelectorAll('.page-search-highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    document.querySelectorAll('.page-search-current').forEach(el => el.classList.remove('page-search-current'));
    highlights = [];
    currentIndex = -1;
}

function highlightText(searchTerm) {
    const formEl = document.getElementById('form');
    const closeBtn = document.getElementById('close-float');

    if (!searchTerm.trim()) {
        clearHighlights();
        resultInfo.textContent = '';
        formEl.classList.remove('float-search');
        formEl.classList.add('inline-search');
        closeBtn.style.display = 'none';
        return;
    }

    clearHighlights();

    const startEl = document.querySelector('p[lang="vi"].vi') || document.body;

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: node => {
                // Loại bỏ node trong script/style/form
                if (node.parentNode.closest && (
                    node.parentNode.closest('script') ||
                    node.parentNode.closest('style') ||
                    node.parentNode.closest('#form')
                )) {
                    return NodeFilter.FILTER_REJECT;
                }

                // Chỉ lấy text node nằm trong hoặc sau startEl theo thứ tự tài liệu
                if (!(startEl.contains(node) ||
                      (startEl.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING))) {
                    return NodeFilter.FILTER_REJECT;
                }

                return node.textContent.toLowerCase().includes(searchTerm.toLowerCase())
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        }
    );

    const nodesToHighlight = [];
    let node;
    while (node = walker.nextNode()) {
        nodesToHighlight.push(node);
    }

    nodesToHighlight.forEach(textNode => {
        const parent = textNode.parentNode;
        const text = textNode.textContent;
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);

        parts.forEach(part => {
            if (regex.test(part)) {
                const span = document.createElement('span');
                span.textContent = part;
                span.className = 'page-search-highlight';
                highlights.push(span);
                parent.insertBefore(span, textNode);
            } else {
                parent.insertBefore(document.createTextNode(part), textNode);
            }
        });
        parent.removeChild(textNode);
    });

    if (highlights.length > 0) {
        currentIndex = 0;
        highlights[0].classList.add('page-search-current');
        highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        resultInfo.textContent = `${currentIndex + 1}/${highlights.length}`;
    } else {
        resultInfo.textContent = 'Không tìm thấy';
    }

    formEl.classList.remove('inline-search');
    formEl.classList.add('float-search');
    closeBtn.style.display = 'inline-block';
}


// Điều hướng kết quả (Next / Previous)
function navigate(direction) {
    if (highlights.length === 0) return;

    highlights[currentIndex].classList.remove('page-search-current');
    
    currentIndex = (currentIndex + direction + highlights.length) % highlights.length;
    
    highlights[currentIndex].classList.add('page-search-current');
    highlights[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    resultInfo.textContent = `${currentIndex + 1}/${highlights.length}`;
}

// Submit form
form.addEventListener('submit', e => {
    e.preventDefault();
    highlightText(searchInput.value.trim());
});

// Nhấn Enter trong input cũng tìm luôn
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
        clearHighlights();
        resultInfo.textContent = '';
    }
});

// Phím tắt: Ctrl+F hoặc chỉ nhấn Enter đã có, thêm phím mũi tên lên/xuống để điều hướng
document.addEventListener('keydown', e => {
    if (e.key === 'F3' ) {
        e.preventDefault();
        searchInput.focus();
    }
    if (highlights.length > 0 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        if (!searchInput.matches(':focus')) {
            e.preventDefault();
            navigate(e.key === 'ArrowDown' ? 1 : -1);
        }
    }
    if (e.key === 'Escape') {
        searchInput.blur();
    }
});

// CSS để làm nổi bật đẹp hơn
const style = document.createElement('style');
style.textContent = `
    .page-search-highlight {
        background-color: #ffeb3b !important;
        padding: 0 2px;
        border-radius: 2px;
    }
    .page-search-current {
        background-color: #ff9800 !important;
        color: white !important;
    }
`;
document.head.appendChild(style);
// Thêm sự kiện cho 2 nút mới
document.getElementById('prev-btn').addEventListener('click', () => navigate(-1));
document.getElementById('next-btn').addEventListener('click', () => navigate(1));
document.getElementById('close-float').addEventListener('click', () => {
    clearHighlights();
    document.getElementById('searchpage').value = '';
    resultInfo.textContent = '';

    const formEl = document.getElementById('form');
    formEl.classList.remove('float-search');
    formEl.classList.add('inline-search');

    document.getElementById('close-float').style.display = 'none';
});

// Create the button
const copyBtn = document.createElement("button");
copyBtn.id = "copySuttaBtn";
copyBtn.innerText = "📜";
copyBtn.title = "Chép Kinh";
copyBtn.type = "button";

// Minimal inline styling
copyBtn.style.position = "absolute";   // position relative to page
copyBtn.style.left = "20px";           // stick to left margin
copyBtn.style.padding = "2px 6px";     // smaller padding
copyBtn.style.border = "none";
copyBtn.style.borderRadius = "4px";
copyBtn.style.cursor = "pointer";
copyBtn.style.border = "1px solid currentColor";  // thin border in same color as text
copyBtn.style.borderRadius = "4px";              // rounded corners
// ✅ inherit background and text color from parent
copyBtn.style.background = "inherit";
copyBtn.style.color = "inherit";

// ✅ make font smaller
copyBtn.style.fontSize = "0.8em";

// Attach click handler
copyBtn.onclick = copySutta;

// Find the first <p lang="vi" class="vi"> and align button with it
const firstPara = document.querySelector("p.vi[lang='vi']");
if (firstPara) {
  const rect = firstPara.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const topPos = rect.top + scrollTop;

  copyBtn.style.top = topPos + "px";

  document.body.appendChild(copyBtn);
}

// Copy function
function copySutta() {
  const paragraphs = document.querySelectorAll("p.vi, p[lang='vi'], p[lang='pi']");
  let textToCopy = "";

  paragraphs.forEach(p => {
    if (p.style.textAlign === "right" && p.style.fontStyle === "italic") {
      return;
    }
    textToCopy += p.innerText.trim() + "\n\n";
  });

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Kinh đã được chép!");
  }).catch(err => {
    console.error("Copy failed:", err);
  });
}
