document.write(`
<div class="controlpanel" id="controlpanel">
    <ul>
        <li>
            <ul class="inner">
                <li><a href="#"; title="Đầu Trang">▲</a></li>
                <li class="nextprev">
                    <button class="palitoggle" id="pali" onclick="openRandomSutta2()" type="button" title="Chuyển Bánh Xe Pháp" style="width:2.5em;height:2.3em;">
                        <svg viewBox="0 0 100 100" style="width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 4.5; display: block;">
  <!-- Vòng ngoài -->
  <circle cx="50" cy="50" r="40"/>
  
  <!-- Vòng trong -->
  <circle cx="50" cy="50" r="12"/>
  
  <!-- 8 nan hoa chòi ra ngoài -->
  <line x1="50" y1="10" x2="50" y2="90"/>
  <line x1="10" y1="50" x2="90" y2="50"/>
  <line x1="22" y1="22" x2="78" y2="78"/>
  <line x1="22" y1="78" x2="78" y2="22"/>
  
  <!-- Chốt nan ngoài -->
  <circle cx="50" cy="5" r="3" fill="currentColor"/>
  <circle cx="50" cy="95" r="3" fill="currentColor"/>
  <circle cx="5" cy="50" r="3" fill="currentColor"/>
  <circle cx="95" cy="50" r="3" fill="currentColor"/>
  <circle cx="18" cy="18" r="3" fill="currentColor"/>
  <circle cx="82" cy="18" r="3" fill="currentColor"/>
  <circle cx="18" cy="82" r="3" fill="currentColor"/>
  <circle cx="82" cy="82" r="3" fill="currentColor"/>
</svg>

                    </button>
                </li>
                <li><a href="javascript:document.body.scrollIntoView(false);" title="Cuối Trang">▼</a></li>
            </ul>
        </li>
    </ul>
</div>
`);
