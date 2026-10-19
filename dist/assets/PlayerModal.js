var R=Object.defineProperty,F=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var B=(h,e,t)=>e in h?R(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t,b=(h,e)=>{for(var t in e||(e={}))V.call(e,t)&&B(h,t,e[t]);if(H)for(var t of H(e))K.call(e,t)&&B(h,t,e[t]);return h},E=(h,e)=>F(h,U(e));var w=(h,e,t)=>new Promise((s,r)=>{var i=c=>{try{n(t.next(c))}catch(l){r(l)}},a=c=>{try{n(t.throw(c))}catch(l){r(l)}},n=c=>c.done?s(c.value):Promise.resolve(c.value).then(i,a);n((t=t.apply(h,e)).next())});import{g as x,l as j,i as d,n as o,t as T,o as W,T as v,s as f,a as k,b as A,r as O,c as Y,d as X,e as q,f as z}from"./index.js";import{H as S}from"./hls.js";const L=25;class _{constructor({media:e,providerId:t="",currentSeason:s=1,currentEpisode:r=1,onSelectEpisode:i,onClose:a}){this.media=e,this.providerId=t,this.currentSeason=s,this.currentEpisode=r,this.selectedSeason=s,this.onSelectEpisode=i,this.onClose=a,this.drawerEl=null,this.episodes=[],this.ranges=null,this.selectedRangeStart=1,this.details=null,this.backHandler=this.close.bind(this),this.availableEpisodes=null,this.availabilityProviderId=null}loadAvailability(){return w(this,null,function*(){if(!this.providerId)return;const e=x().find(s=>s.id===this.providerId);if(!e||!e.supportsAvailability)return;const t=yield j(this.providerId,this.media.id,this.currentSeason);t&&(this.availableEpisodes=new Set(t),this.availabilityProviderId=this.providerId,this.drawerEl&&document.body.contains(this.drawerEl)&&this.renderEpisodeCards())})}render(){return w(this,null,function*(){this.drawerEl=document.createElement("div"),this.drawerEl.className="in-player-episode-drawer";const e=this.media.name||this.media.title||"TV Series";return this.drawerEl.innerHTML=`
      <div class="drawer-backdrop" id="drawer-backdrop"></div>
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="drawer-header-left">
            <h3 class="drawer-title">Episodes â€” ${e}</h3>
            <div class="drawer-season-tabs" id="drawer-season-tabs">
              <span style="color:#71717a; font-size:14px;">Loading seasons...</span>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm focusable" id="btn-close-drawer">
            ${d("x")} Close
          </button>
        </div>

        <button class="range-picker-btn focusable" id="drawer-range-btn" hidden></button>

        <div class="drawer-episodes-carousel" id="drawer-episodes-list">
          <div style="padding: 40px; color: #a1a1aa; font-size: 16px;">Loading episodes...</div>
        </div>
      </div>
    `,document.body.appendChild(this.drawerEl),o.setScope(this.drawerEl),o.pushBackHandler(this.backHandler),this.drawerEl.querySelector("#btn-close-drawer").addEventListener("click",()=>this.close()),this.drawerEl.querySelector("#drawer-backdrop").addEventListener("click",()=>this.close()),this.drawerEl.querySelector("#drawer-range-btn").addEventListener("click",()=>this.openRangePicker()),yield this.loadSeasonsAndEpisodes(),this.loadAvailability(),this.drawerEl})}loadSeasonsAndEpisodes(){return w(this,null,function*(){try{this.details=yield T.getDetails("tv",this.media.id);const e=(this.details.seasons||[]).filter(s=>s.season_number>0),t=this.drawerEl.querySelector("#drawer-season-tabs");if(!t)return;e.length>0?(t.innerHTML=e.map(r=>`
          <button class="season-tab-btn focusable ${r.season_number===this.selectedSeason?"active":""}" data-season="${r.season_number}">
            ${r.name||`Season ${r.season_number}`}${r.episode_count?` <span class="season-ep-count">(${r.episode_count})</span>`:""}
          </button>
        `).join(""),t.querySelectorAll(".season-tab-btn").forEach(r=>{r.addEventListener("click",i=>{const a=parseInt(i.currentTarget.dataset.season,10);this.loadEpisodes(a)})})):t.innerHTML=`<span style="color:#a1a1aa;">Season ${this.selectedSeason}</span>`,yield this.loadEpisodes(this.selectedSeason,this.currentEpisode)}catch(e){console.error("Failed to load TV details for drawer:",e);const t=this.drawerEl.querySelector("#drawer-episodes-list");t&&(t.innerHTML=`<div style="padding: 30px; color: #e50914;">Failed to load seasons: ${e.message}</div>`)}})}computeRanges(e){if(e.length<=L)return null;const t=e.map(a=>a.episode_number),s=Math.min(...t),r=Math.max(...t),i=[];for(let a=s;a<=r;a+=L)i.push({start:a,end:Math.min(a+L-1,r)});return i}rangeContaining(e){return this.ranges?this.ranges.find(t=>e>=t.start&&e<=t.end)||this.ranges[0]:null}loadEpisodes(e,t=null){return w(this,null,function*(){this.selectedSeason=e,this.drawerEl.querySelectorAll(".season-tab-btn").forEach(i=>{i.classList.toggle("active",parseInt(i.dataset.season,10)===e)});const r=this.drawerEl.querySelector("#drawer-episodes-list");if(r){r.innerHTML='<div style="padding: 40px; color: #a1a1aa;">Loading Season '+e+" episodes...</div>";try{if(this.episodes=yield T.getSeasonDetails(this.media.id,e),this.episodes.length===0){r.innerHTML='<div style="padding: 40px; color: #a1a1aa;">No episodes found for Season '+e+".</div>";return}this.ranges=this.computeRanges(this.episodes);const i=t!==null?t:e===this.currentSeason?this.currentEpisode:this.episodes[0].episode_number,a=this.rangeContaining(i);this.selectedRangeStart=a?a.start:this.episodes[0].episode_number,this.updateRangeButton(),this.renderEpisodeCards(t)}catch(i){console.error("Failed to load season episodes:",i),r.innerHTML=`<div style="padding: 40px; color: #e50914;">Error loading episodes: ${i.message}</div>`}}})}updateRangeButton(){const e=this.drawerEl.querySelector("#drawer-range-btn");if(!e)return;if(!this.ranges){e.hidden=!0;return}const t=this.rangeContaining(this.selectedRangeStart);e.hidden=!1,e.innerHTML=`Episodes ${t.start}â€“${t.end} ${d("chevron-down",{size:14})}`}openRangePicker(){this.ranges&&W({ranges:this.ranges,currentStart:this.selectedRangeStart,onSelect:e=>{this.selectedRangeStart=e,this.updateRangeButton(),this.renderEpisodeCards()}})}renderEpisodeCards(e=null){const t=this.drawerEl.querySelector("#drawer-episodes-list");if(!t)return;const s=this.rangeContaining(this.selectedRangeStart),r=s?this.episodes.filter(i=>i.episode_number>=s.start&&i.episode_number<=s.end):this.episodes;t.innerHTML="",r.forEach(i=>{var m;const a=this.selectedSeason===this.currentSeason&&i.episode_number===this.currentEpisode,n=document.createElement("div");n.className=`drawer-ep-card focusable ${a?"current-playing":""}`,n.setAttribute("tabindex","0"),n.dataset.episodeNumber=i.episode_number,n.dataset.navUp=this.ranges?"#drawer-range-btn":".season-tab-btn.active";const c=i.still_path?T.getImageUrl(i.still_path,"w342"):T.getImageUrl((m=this.details)==null?void 0:m.backdrop_path,"w342"),l=this.availableEpisodes&&!this.availableEpisodes.has(i.episode_number);l&&n.classList.add("episode-unavailable");const p=l?(x().find(u=>u.id===this.availabilityProviderId)||{}).name||this.availabilityProviderId:"";n.innerHTML=`
        <div class="drawer-ep-thumb-wrap">
          <img src="${c}" alt="Episode ${i.episode_number}" class="drawer-ep-thumb" loading="lazy" />
          <div class="drawer-ep-num-badge">EP ${i.episode_number}</div>
          ${a?`<div class="drawer-now-playing-badge">${d("play",{size:12})} Playing</div>`:""}
          ${l?`<div class="episode-unavailable-badge" title="Not found on ${p}">${d("flag",{size:12})} Not on ${p}</div>`:""}
        </div>
        <div class="drawer-ep-info">
          <div class="drawer-ep-title">${i.name||`Episode ${i.episode_number}`}</div>
          <div class="drawer-ep-overview">${i.overview||"No episode description."}</div>
        </div>
      `,n.addEventListener("click",()=>{const u=this.selectedSeason;this.currentSeason=u,this.currentEpisode=i.episode_number,this.close(),this.onSelectEpisode&&this.onSelectEpisode(E(b({},this.media),{season:u,episode:i.episode_number,title:`${this.media.name||this.media.title} - S${u}E${i.episode_number}`,name:this.media.name||this.media.title}))}),t.appendChild(n)}),setTimeout(()=>{let i=null;e!==null&&(i=t.querySelector(`.drawer-ep-card[data-episode-number="${e}"]`)),i=i||t.querySelector(".current-playing")||t.querySelector(".drawer-ep-card"),i&&o.setFocus(i)},50)}close(){o.popBackHandler(this.backHandler),o.clearScope(this.drawerEl),this.drawerEl&&this.drawerEl.parentNode&&this.drawerEl.parentNode.removeChild(this.drawerEl),this.onClose&&this.onClose()}}function D({providers:h,currentId:e,onSelect:t}){const s=document.createElement("div");s.className="modal-overlay server-menu-overlay",s.innerHTML=`
    <div class="modal-container server-menu">
      <h3 class="server-menu-title">Choose Server</h3>
      <div class="server-menu-list">
        ${h.map(a=>`
          <button class="server-menu-item focusable ${a.id===e?"active":""}" data-provider="${a.id}">
            <span class="server-menu-item-name">${a.name}</span>
            <span class="hud-badge-tag" style="font-size: 9px; background: ${a.type==="direct"?"#16a34a":"#3f3f46"}; display:inline-flex; align-items:center; gap:3px;">
              ${a.type==="direct"?`${d("zap",{size:10})} NATIVE HLS`:`${d("tv",{size:10})} EMBED`}
            </span>
          </button>
        `).join("")}
      </div>
      <button class="btn btn-secondary focusable" id="server-menu-cancel">${d("x")} Cancel</button>
    </div>
  `,document.body.appendChild(s);const r=()=>(i(),!0);o.setScope(s),o.pushBackHandler(r);function i(){o.popBackHandler(r),o.clearScope(s),s.parentNode&&s.parentNode.removeChild(s)}return s.querySelectorAll(".server-menu-item").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.provider;i(),t(n)})}),s.querySelector("#server-menu-cancel").addEventListener("click",i),i}class G{constructor({media:e,streamUrl:t,providerId:s,subtitles:r=[],nativeMode:i=!1,onNextEpisode:a,onClose:n,onSwitchToEmbed:c,onSwitchProvider:l,onFallback:p,onWrongMatch:m}){this.media=e,this.streamUrl=t,this.providerId=s||"",this.subtitles=r,this.nativeMode=i,this.onNextEpisode=a,this.onClose=n,this.onSwitchToEmbed=c,this.onSwitchProvider=l,this.onFallback=p,this.onWrongMatch=m,this.providers=x().filter(u=>u.catalogMode!=="native"),this.containerEl=null,this.videoEl=null,this.hls=null,this.hudEl=null,this.hudTimer=null,this.activeDrawer=null,this.progressSaveInterval=null,this.nextEpCountdownTimer=null,this.streamTimeoutTimer=null,this.hasLoadedMetadata=!1,this.isFallingBack=!1,this.networkRetryCount=0,this.mediaRetryCount=0,this.isScrubbing=!1,this.scrubTime=0,this.backHandler=this.handleBack.bind(this),this.mediaKeyHandler=this.handleMediaKey.bind(this),this.activityHandler=this.wakeHud.bind(this),this.keyHandler=this.handleGeneralKey.bind(this)}render(){const e=this.media.media_type==="tv"||this.media.mediaType==="tv",t=this.media.season||1,s=this.media.episode||1,r=this.media.title||this.media.name||"Playing Media";this.containerEl=document.createElement("div"),this.containerEl.className="native-player-screen",this.containerEl.innerHTML=`
      <video id="native-video-elem" class="native-video" playsinline preload="auto"></video>

      <!-- Center Feedback Badge (Play/Pause/Seek/Volume Icon) -->
      <div class="player-center-badge" id="player-center-badge">
        <div class="badge-icon" id="center-badge-icon">${d("play",{size:28})}</div>
        <div class="badge-text" id="center-badge-text">Playing</div>
      </div>

      <!-- Toast Notification (Resume / Track Changed) -->
      <div class="player-toast" id="player-toast"></div>

      <!-- Full TV On-Screen Display (OSD HUD) -->
      <div class="native-player-hud" id="native-player-hud">
        
        <!-- Top Title Bar -->
        <div class="hud-top-bar">
          <div class="hud-title-info">
            <h2 class="hud-main-title">${r}</h2>
            <p class="hud-sub-title">
              ${e?`Season ${t} â€¢ Episode ${s}`:"Movie"} 
              <span class="hud-badge-tag">NATIVE TV PLAYER</span>
            </p>
          </div>
          <div class="hud-top-actions">
            ${this.nativeMode?"":`
              <button class="btn btn-secondary btn-sm focusable" id="btn-native-server-select" title="Change Server">
                ${d("server",{size:16})}
              </button>
            `}
            ${e&&!this.nativeMode?`
              <button class="btn btn-secondary btn-sm focusable" id="btn-tv-next-ep" title="Next Episode">
                ${d("skip-forward",{size:16})}
              </button>
              <button class="btn btn-secondary btn-sm focusable" id="btn-tv-episodes-drawer" title="Browse Episodes">
                ${d("list-video",{size:16})}
              </button>
            `:""}
            <button class="btn btn-secondary btn-sm focusable" id="btn-hud-close" title="Exit Player">
              ${d("x",{size:16})}
            </button>
          </div>
        </div>

        <!-- Bottom Controls & Timeline Bar -->
        <div class="hud-bottom-bar">

          <!-- Timeline Scrubber -->
          <div class="timeline-wrapper">
            <span class="time-label" id="time-current">00:00:00</span>
            <div class="timeline-track focusable" id="player-timeline" tabindex="0" role="slider" aria-label="Seek Bar" data-lock-horizontal="1" data-manual-enter="1">
              <div class="timeline-buffered" id="timeline-buffered"></div>
              <div class="timeline-progress" id="timeline-progress"></div>
              <div class="timeline-thumb" id="timeline-thumb"></div>
            </div>
            <span class="time-label" id="time-duration">00:00:00</span>
          </div>

          <!-- Bottom Button Row -->
          <div class="hud-buttons-row">
            <div class="hud-button-group">
              <button class="btn btn-secondary focusable" id="btn-tv-rewind" title="Rewind 10 Seconds">
                <span>${d("rewind",{size:16})}</span> -10s
              </button>
              <button class="btn btn-primary focusable primary-focus" id="btn-tv-playpause" title="Play / Pause">
                <span id="playpause-icon">${d("pause",{size:20})}</span>
              </button>
              <button class="btn btn-secondary focusable" id="btn-tv-fastforward" title="Fast Forward 10 Seconds">
                <span>${d("fast-forward",{size:16})}</span> +10s
              </button>
            </div>

            <div class="hud-button-group">
              <button class="btn btn-secondary focusable" id="btn-tv-subtitles" title="Subtitles & Audio">
                ${d("captions",{size:16})} Subtitles
              </button>
              ${!this.nativeMode&&this.currentProviderSupportsFuzzyMatch()?`
                <button class="btn btn-secondary focusable" id="btn-wrong-match" title="Wrong show or movie? Fix it">
                  ${d("flag",{size:16})}
                </button>
              `:""}
            </div>
          </div>
        </div>
      </div>

      <!-- TV Subtitles & Audio Modal -->
      <div class="player-modal-dialog hidden" id="subtitles-dialog">
        <div class="dialog-card">
          <div class="dialog-header">
            <h3>Subtitles & Audio</h3>
            <button class="btn btn-secondary btn-sm focusable" id="btn-close-subtitles-dialog">${d("x",{size:16})}</button>
          </div>
          <div class="dialog-section">
            <div class="dialog-label">Subtitles Track</div>
            <div class="dialog-options-list" id="subtitles-track-list">
              <button class="dialog-opt-btn focusable active" data-track="-1">Off</button>
            </div>
          </div>
          <div class="dialog-section">
            <div class="dialog-label">Audio Track</div>
            <div class="dialog-options-list" id="audio-track-list">
              <button class="dialog-opt-btn focusable active" data-audio="-1">Default Audio</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Episode Auto-Countdown Card -->
      <div class="next-ep-card hidden" id="next-ep-countdown-card">
        <div class="next-ep-info">
          <div class="next-ep-tag">UP NEXT</div>
          <div class="next-ep-title" id="next-ep-title-text">Playing next episode...</div>
          <div class="next-ep-timer-text" id="next-ep-timer-text">Starting in 5 seconds</div>
        </div>
        <div class="next-ep-actions">
          <button class="btn btn-primary focusable" id="btn-next-ep-now">Play Now</button>
          <button class="btn btn-secondary focusable" id="btn-next-ep-cancel">Cancel</button>
        </div>
      </div>
    `,document.body.appendChild(this.containerEl),this.videoEl=this.containerEl.querySelector("#native-video-elem"),this.hudEl=this.containerEl.querySelector("#native-player-hud"),this.videoEl.volume=1,this.videoEl.muted=!1,this.setupVideoEvents(),this.setupHudButtons(),this.setupTimelineScrubber(),this.loadStreamSource(this.streamUrl),o.setScope(this.containerEl),o.pushBackHandler(this.backHandler),o.pushMediaKeyHandler(this.mediaKeyHandler),window.addEventListener("keydown",this.activityHandler,{capture:!0}),window.addEventListener("keydown",this.keyHandler),window.addEventListener("mousemove",this.activityHandler);const i=this.containerEl.querySelector("#btn-tv-playpause");return i&&o.setFocus(i),this.progressSaveInterval=setInterval(()=>{this.saveCurrentProgress()},3e3),this.resetHudTimer(2500),this.containerEl}getProviderName(){const e=(this.providers||[]).find(t=>t.id===this.providerId);return e?e.name:this.providerId||"Direct Stream"}currentProviderSupportsFuzzyMatch(){const e=(this.providers||[]).find(t=>t.id===this.providerId);return!!(e&&e.fuzzyMatch)}triggerFallback(e="Stream offline"){if(this.isFallingBack)return;this.isFallingBack=!0,clearTimeout(this.streamTimeoutTimer);const t=this.getProviderName();console.warn(`[VideoPlayer] Triggering fallback for ${t}. Reason: ${e}`),this.showToast(this.nativeMode?`${t} unavailable (${e}).`:`${t} unavailable (${e}). Auto-switching server...`,3e3),setTimeout(()=>{this.onFallback?this.onFallback(this.providerId,e):this.onSwitchToEmbed&&this.onSwitchToEmbed()},800)}loadStreamSource(e){if(!e)return;this.hasLoadedMetadata=!1,this.isFallingBack=!1,this.networkRetryCount=0,this.mediaRetryCount=0,clearTimeout(this.streamTimeoutTimer);const t=15e3;this.streamTimeoutTimer=setTimeout(()=>{!this.hasLoadedMetadata&&!this.isFallingBack&&(console.warn(`[VideoPlayer] Direct stream took too long (>15s) on provider: ${this.providerId}`),this.triggerFallback("Timeout (Server slow/offline)"))},t),this.videoEl&&Array.isArray(this.subtitles)&&this.subtitles.length>0&&(this.videoEl.querySelectorAll("track").forEach(i=>i.remove()),this.subtitles.forEach((i,a)=>{const n=document.createElement("track");n.kind="subtitles",n.label=i.label||`Subtitle ${a+1}`,n.srclang=i.lang||"en",n.src=i.src,this.videoEl.appendChild(n)})),(e.includes(".m3u8")||e.includes("application/x-mpegURL")||e.includes("/pl/")||e.includes("master")||!e.includes("."))&&S.isSupported()?(this.hls&&this.hls.destroy(),this.hls=new S({capLevelToPlayerSize:!0,autoStartLoad:!0,maxBufferLength:30,maxMaxBufferLength:60,xhrSetup:r=>{r.withCredentials=!1}}),this.hls.loadSource(e),this.hls.attachMedia(this.videoEl),this.hls.on(S.Events.MANIFEST_PARSED,()=>{this.hasLoadedMetadata=!0,clearTimeout(this.streamTimeoutTimer),this.populateAudioAndSubtitlesTracks(),this.checkAndResumeProgress(),this.videoEl.play().catch(r=>console.warn("Autoplay prevented:",r))}),this.hls.on(S.Events.ERROR,(r,i)=>{var a;if(i.fatal)switch(i.type){case S.ErrorTypes.NETWORK_ERROR:this.networkRetryCount++;const n=i.response&&(i.response.code>=400||i.response.code===0);this.networkRetryCount>1||n?(console.error("Fatal unrecoverable network error:",i),this.triggerFallback((a=i.response)!=null&&a.code?`HTTP ${i.response.code}`:"Network error")):(console.warn("Fatal network error encountered, attempting recovery once...",i),this.hls.startLoad());break;case S.ErrorTypes.MEDIA_ERROR:this.mediaRetryCount++,this.mediaRetryCount>1?this.triggerFallback("Media format decoding error"):(console.warn("Fatal media error encountered, recovering...",i),this.hls.recoverMediaError());break;default:console.error("Fatal unrecoverable HLS error:",i),this.triggerFallback(i.details||"Player error");break}})):(this.videoEl.src=e,this.videoEl.addEventListener("loadedmetadata",()=>{this.hasLoadedMetadata=!0,clearTimeout(this.streamTimeoutTimer),this.populateAudioAndSubtitlesTracks(),this.checkAndResumeProgress(),this.videoEl.play().catch(r=>console.warn("Autoplay prevented:",r))},{once:!0}))}setupVideoEvents(){this.videoEl.addEventListener("error",()=>{if(!this.hasLoadedMetadata&&!this.isFallingBack){const e=this.videoEl.error?this.videoEl.error.code:"unknown";console.error("HTML5 video error encountered:",e),this.triggerFallback(`HTML5 Error (Code ${e})`)}}),this.videoEl.addEventListener("playing",()=>{this.hasLoadedMetadata=!0,clearTimeout(this.streamTimeoutTimer)}),this.videoEl.addEventListener("timeupdate",()=>{this.isScrubbing||this.updateTimelineProgress(this.videoEl.currentTime,this.videoEl.duration)}),this.videoEl.addEventListener("progress",()=>{this.updateBufferedBar()}),this.videoEl.addEventListener("play",()=>{this.updatePlayPauseButton(!0)}),this.videoEl.addEventListener("pause",()=>{this.updatePlayPauseButton(!1)}),this.videoEl.addEventListener("ended",()=>{this.handlePlaybackEnded()})}setupHudButtons(){this.containerEl.querySelector("#btn-tv-playpause").addEventListener("click",()=>this.togglePlayPause()),this.containerEl.querySelector("#btn-tv-rewind").addEventListener("click",()=>this.seekBy(-10)),this.containerEl.querySelector("#btn-tv-fastforward").addEventListener("click",()=>this.seekBy(10)),this.containerEl.querySelector("#btn-tv-subtitles").addEventListener("click",()=>this.toggleSubtitlesDialog());const i=this.containerEl.querySelector("#btn-close-subtitles-dialog");i&&i.addEventListener("click",()=>this.toggleSubtitlesDialog(!1));const a=this.containerEl.querySelector("#btn-tv-episodes-drawer");a&&a.addEventListener("click",()=>{this.openEpisodeDrawer()});const n=this.containerEl.querySelector("#btn-tv-next-ep");n&&n.addEventListener("click",()=>this.triggerNextEpisode());const c=this.containerEl.querySelector("#btn-native-server-select");c&&c.addEventListener("click",()=>{D({providers:this.providers||[],currentId:this.providerId,onSelect:g=>{this.saveCurrentProgress(),this.onSwitchProvider?this.onSwitchProvider(g):k(g)?(this.showToast(`Switched to ${g}`,2500),this.loadStreamSource(this.streamUrl)):this.onSwitchToEmbed&&this.onSwitchToEmbed(g),this.containerEl&&o.setScope(this.containerEl)}})});const l=this.containerEl.querySelector("#btn-wrong-match");l&&l.addEventListener("click",()=>{this.onWrongMatch&&this.onWrongMatch()}),this.containerEl.querySelector("#btn-hud-close").addEventListener("click",()=>this.close());const m=this.containerEl.querySelector("#btn-next-ep-now");m&&m.addEventListener("click",()=>this.triggerNextEpisode());const u=this.containerEl.querySelector("#btn-next-ep-cancel");u&&u.addEventListener("click",()=>this.cancelNextEpCountdown())}setupTimelineScrubber(){const e=this.containerEl.querySelector("#player-timeline");e&&(e.addEventListener("keydown",t=>{t.keyCode===v.LEFT||t.key==="ArrowLeft"?(t.preventDefault(),t.stopPropagation(),this.scrubBy(-10)):t.keyCode===v.RIGHT||t.key==="ArrowRight"?(t.preventDefault(),t.stopPropagation(),this.scrubBy(10)):(t.keyCode===v.ENTER||t.key==="Enter")&&(t.preventDefault(),t.stopPropagation(),this.commitScrub())}),e.addEventListener("blur",()=>this.cancelScrub()),e.addEventListener("click",t=>{const s=e.getBoundingClientRect(),r=Math.max(0,Math.min(1,(t.clientX-s.left)/s.width));this.videoEl&&this.videoEl.duration&&(this.isScrubbing=!1,e.classList.remove("scrubbing-pending"),this.videoEl.currentTime=r*this.videoEl.duration)}))}scrubBy(e){if(!this.videoEl||isNaN(this.videoEl.duration))return;this.isScrubbing||(this.isScrubbing=!0,this.scrubTime=this.videoEl.currentTime),this.scrubTime=Math.max(0,Math.min(this.videoEl.duration,this.scrubTime+e)),this.updateTimelineProgress(this.scrubTime,this.videoEl.duration);const t=this.containerEl.querySelector("#player-timeline");t&&t.classList.add("scrubbing-pending");const s=this.containerEl.querySelector("#time-current");s&&s.classList.add("scrub-pending"),this.wakeHud()}commitScrub(){if(!this.isScrubbing){this.togglePlayPause();return}this.videoEl.currentTime=this.scrubTime,this.isScrubbing=!1;const e=this.containerEl.querySelector("#player-timeline");e&&e.classList.remove("scrubbing-pending");const t=this.containerEl.querySelector("#time-current");t&&t.classList.remove("scrub-pending"),this.wakeHud()}cancelScrub(){if(!this.isScrubbing)return;this.isScrubbing=!1,this.videoEl&&this.updateTimelineProgress(this.videoEl.currentTime,this.videoEl.duration);const e=this.containerEl.querySelector("#player-timeline");e&&e.classList.remove("scrubbing-pending");const t=this.containerEl.querySelector("#time-current");t&&t.classList.remove("scrub-pending")}handleGeneralKey(){}updateTimelineProgress(e,t){const s=this.containerEl.querySelector("#time-current"),r=this.containerEl.querySelector("#time-duration"),i=this.containerEl.querySelector("#timeline-progress"),a=this.containerEl.querySelector("#timeline-thumb");if(!s||!r||!i||!a)return;const n=typeof e=="number"&&!isNaN(e)?e:0,c=typeof t=="number"&&!isNaN(t)&&t>0?t:0;s.textContent=this.formatTime(n),r.textContent=this.formatTime(c);const l=c>0?Math.min(100,Math.max(0,n/c*100)):0;i.style.width=`${l}%`,a.style.left=`${l}%`}updateBufferedBar(){const e=this.containerEl.querySelector("#timeline-buffered");if(!e||!this.videoEl||!this.videoEl.duration)return;const t=this.videoEl.duration,s=this.videoEl.buffered;if(s.length>0){const r=s.end(s.length-1),i=Math.min(100,r/t*100);e.style.width=`${i}%`}}togglePlayPause(){this.videoEl&&(this.videoEl.paused||this.videoEl.ended?(this.videoEl.play(),this.showCenterBadge("play","Play")):(this.videoEl.pause(),this.showCenterBadge("pause","Pause")),this.wakeHud())}seekBy(e){if(!this.videoEl||isNaN(this.videoEl.duration))return;const t=Math.max(0,Math.min(this.videoEl.duration||1/0,this.videoEl.currentTime+e));this.videoEl.currentTime=t,e>0?this.showCenterBadge("fast-forward",`+${e}s`):this.showCenterBadge("rewind",`${e}s`),this.wakeHud()}updatePlayPauseButton(e){const t=this.containerEl.querySelector("#playpause-icon");t&&(t.innerHTML=d(e?"pause":"play",{size:20}));const s=this.containerEl.querySelector("#btn-tv-playpause");s&&(s.title=e?"Pause":"Play")}showCenterBadge(e,t){const s=this.containerEl.querySelector("#player-center-badge"),r=this.containerEl.querySelector("#center-badge-icon"),i=this.containerEl.querySelector("#center-badge-text");!s||!r||!i||(r.innerHTML=d(e,{size:28}),i.textContent=t,s.classList.remove("active"),s.offsetWidth,s.classList.add("active"),setTimeout(()=>{s.classList.remove("active")},900))}showToast(e,t=3e3){const s=this.containerEl.querySelector("#player-toast");s&&(s.textContent=e,s.classList.add("active"),setTimeout(()=>{s.classList.remove("active")},t))}getStorageId(){return this.nativeMode&&this.media.nativeShowId?this.media.nativeShowId:this.media.id}checkAndResumeProgress(){this.media.media_type==="tv"||this.media.mediaType;const e=this.media.season||1,t=this.media.episode||1,s=f.getProgress(this.media.source||"tmdb",this.getStorageId(),e,t);s&&s.currentTime>15&&(!s.duration||s.currentTime<s.duration*.92)&&(this.videoEl.currentTime=s.currentTime,this.showToast(`Resumed playback at ${this.formatTime(s.currentTime)}`,3500))}saveCurrentProgress(){if(!this.videoEl||!this.media||!this.media.id)return;const e=this.videoEl.currentTime,t=this.videoEl.duration;if(e>5&&t>0){this.media.media_type==="tv"||this.media.mediaType;const s=this.media.season||1,r=this.media.episode||1;f.updateProgress(this.media.source||"tmdb",this.getStorageId(),s,r,e,t)}}handlePlaybackEnded(){this.saveCurrentProgress(),(this.media.media_type==="tv"||this.media.mediaType==="tv")&&this.onNextEpisode&&!this.nativeMode&&this.startNextEpCountdown()}startNextEpCountdown(){const e=this.containerEl.querySelector("#next-ep-countdown-card"),t=this.containerEl.querySelector("#next-ep-timer-text"),s=this.containerEl.querySelector("#next-ep-title-text");if(!e||!t)return;const r=(this.media.episode||1)+1;s&&(s.textContent=`Season ${this.media.season||1} â€¢ Episode ${r}`),e.classList.remove("hidden"),o.setScope(e);let i=5;t.textContent=`Starting in ${i}s...`,clearInterval(this.nextEpCountdownTimer),this.nextEpCountdownTimer=setInterval(()=>{i-=1,i<=0?(clearInterval(this.nextEpCountdownTimer),this.triggerNextEpisode()):t.textContent=`Starting in ${i}s...`},1e3)}cancelNextEpCountdown(){clearInterval(this.nextEpCountdownTimer);const e=this.containerEl.querySelector("#next-ep-countdown-card");e&&e.classList.add("hidden"),o.setScope(this.containerEl)}triggerNextEpisode(){if(clearInterval(this.nextEpCountdownTimer),this.onNextEpisode){const e=E(b({},this.media),{episode:(this.media.episode||1)+1});this.close(),this.onNextEpisode(e)}}populateAudioAndSubtitlesTracks(){const e=this.containerEl.querySelector("#subtitles-track-list"),t=this.containerEl.querySelector("#audio-track-list");if(e){e.innerHTML='<button class="dialog-opt-btn focusable active" data-track="-1">Off</button>';const s=e.querySelector('button[data-track="-1"]');s.addEventListener("click",()=>{if(this.hls&&(this.hls.subtitleTrack=-1),this.videoEl&&this.videoEl.textTracks)for(let r=0;r<this.videoEl.textTracks.length;r++)this.videoEl.textTracks[r].mode="disabled";e.querySelectorAll(".dialog-opt-btn").forEach(r=>r.classList.remove("active")),s.classList.add("active"),this.showToast("Subtitles Off",2e3),this.toggleSubtitlesDialog(!1)}),this.hls&&(this.hls.subtitleTracks||[]).forEach((i,a)=>{const n=document.createElement("button");n.className="dialog-opt-btn focusable",n.dataset.track=String(a),n.textContent=i.name||i.lang||`Track ${a+1}`,n.addEventListener("click",()=>{if(this.hls.subtitleTrack=a,this.videoEl&&this.videoEl.textTracks)for(let c=0;c<this.videoEl.textTracks.length;c++)this.videoEl.textTracks[c].mode="disabled";e.querySelectorAll(".dialog-opt-btn").forEach(c=>c.classList.remove("active")),n.classList.add("active"),this.showToast(`Subtitles: ${n.textContent}`,2e3),this.toggleSubtitlesDialog(!1)}),e.appendChild(n)}),Array.isArray(this.subtitles)&&this.subtitles.length>0&&this.subtitles.forEach((r,i)=>{const a=document.createElement("button");a.className="dialog-opt-btn focusable",a.dataset.extTrack=String(i),a.textContent=r.label||`Subtitle ${i+1}`,a.addEventListener("click",()=>{if(this.hls&&(this.hls.subtitleTrack=-1),this.videoEl&&this.videoEl.textTracks)for(let n=0;n<this.videoEl.textTracks.length;n++)this.videoEl.textTracks[n].mode=n===i?"showing":"disabled";e.querySelectorAll(".dialog-opt-btn").forEach(n=>n.classList.remove("active")),a.classList.add("active"),this.showToast(`Subtitles: ${a.textContent}`,2e3),this.toggleSubtitlesDialog(!1)}),e.appendChild(a)})}if(this.hls&&t){const s=this.hls.audioTracks||[];s.length>0&&(t.innerHTML="",s.forEach((r,i)=>{const a=document.createElement("button");a.className=`dialog-opt-btn focusable ${this.hls.audioTrack===i?"active":""}`,a.dataset.audio=String(i),a.textContent=r.name||r.lang||`Audio Track ${i+1}`,a.addEventListener("click",()=>{this.hls.audioTrack=i,t.querySelectorAll(".dialog-opt-btn").forEach(n=>n.classList.remove("active")),a.classList.add("active"),this.showToast(`Audio: ${a.textContent}`,2e3),this.toggleSubtitlesDialog(!1)}),t.appendChild(a)}))}}toggleSubtitlesDialog(e){const t=this.containerEl.querySelector("#subtitles-dialog");if(!t)return;(typeof e=="boolean"?e:t.classList.contains("hidden"))?(t.classList.remove("hidden"),o.setScope(t)):(t.classList.add("hidden"),o.clearScope(t),o.setScope(this.containerEl))}wakeHud(){if(!this.hudEl||!this.containerEl||!document.body.contains(this.containerEl)||o.activeScope&&o.activeScope!==this.containerEl)return;const e=this.hudEl.classList.contains("hidden");if(this.hudEl.classList.remove("hidden"),this.resetHudTimer(4e3),e||!o.currentFocusedElement||!this.containerEl.contains(o.currentFocusedElement)){const t=this.containerEl.querySelector("#btn-tv-playpause");t?o.setFocus(t):o.focusFirstAvailable()}}resetHudTimer(e=4e3){clearTimeout(this.hudTimer),this.hudTimer=setTimeout(()=>{if(this.hudEl&&this.containerEl&&document.body.contains(this.containerEl)){const t=this.containerEl.querySelector("#subtitles-dialog"),s=this.containerEl.querySelector("#next-ep-countdown-card"),r=t&&!t.classList.contains("hidden")||s&&!s.classList.contains("hidden")||this.isScrubbing;!this.videoEl.paused&&!r&&(this.hudEl.classList.add("hidden"),this.containerEl.contains(document.activeElement)&&document.activeElement.blur())}},e)}handleMediaKey(e,t){if(this.wakeHud(),e===v.MEDIA_STOP){this.close();return}if(e===v.MEDIA_PLAY_PAUSE||e===v.MEDIA_PLAY||e===v.MEDIA_PAUSE||t==="MediaPlayPause"){this.togglePlayPause();return}if(e===v.MEDIA_FAST_FORWARD){this.seekBy(10);return}if(e===v.MEDIA_REWIND){this.seekBy(-10);return}const s=this.media.media_type==="tv"||this.media.mediaType==="tv";if(e===v.MEDIA_TRACK_NEXT&&s&&!this.nativeMode){this.triggerNextEpisode();return}}openEpisodeDrawer(){this.activeDrawer||(this.activeDrawer=new _({media:this.media,providerId:this.providerId,currentSeason:this.media.season||1,currentEpisode:this.media.episode||1,onSelectEpisode:e=>{this.activeDrawer=null,this.switchEpisode(e)},onClose:()=>{this.activeDrawer=null,this.containerEl&&o.setScope(this.containerEl)}}),this.activeDrawer.render())}switchEpisode(e){this.saveCurrentProgress(),this.close(),this.onNextEpisode&&this.onNextEpisode(E(b({},this.media),{season:e.season,episode:e.episode,title:e.title}))}handleBack(){if(this.activeDrawer)return this.activeDrawer.close(),this.activeDrawer=null,!0;const e=this.containerEl?this.containerEl.querySelector("#subtitles-dialog"):null;if(e&&!e.classList.contains("hidden"))return this.toggleSubtitlesDialog(!1),!0;const t=this.containerEl?this.containerEl.querySelector("#next-ep-countdown-card"):null;return t&&!t.classList.contains("hidden")?(this.cancelNextEpCountdown(),!0):(this.close(),!0)}formatTime(e){if(isNaN(e)||e<0)return"00:00";const t=Math.floor(e),s=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=n=>String(n).padStart(2,"0");return s>0?`${a(s)}:${a(r)}:${a(i)}`:`${a(r)}:${a(i)}`}close(){this.saveCurrentProgress(),clearTimeout(this.hudTimer),clearTimeout(this.streamTimeoutTimer),clearInterval(this.progressSaveInterval),clearInterval(this.nextEpCountdownTimer),this.activeDrawer&&(this.activeDrawer.close(),this.activeDrawer=null),window.removeEventListener("keydown",this.activityHandler,{capture:!0}),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("mousemove",this.activityHandler),o.popBackHandler(this.backHandler),o.popMediaKeyHandler(this.mediaKeyHandler),o.clearScope(this.containerEl),this.hls&&(this.hls.destroy(),this.hls=null),this.videoEl&&(this.videoEl.pause(),this.videoEl.removeAttribute("src"),this.videoEl.load()),this.containerEl&&this.containerEl.parentNode&&this.containerEl.parentNode.removeChild(this.containerEl),this.onClose&&this.onClose()}}class te{constructor({media:e,onClose:t,onNextEpisode:s,nativeMode:r=!1}){this.media=e,this.onClose=t,this.onNextEpisode=s,this.nativeMode=r,this.currentProviderId=r?e.source||"":f.getDefaultProvider(),this.activePlayerInstance=null,this.activeDrawer=null,this.playerEl=null,this.hudEl=null,this.hudTimer=null,this.embedTimeoutTimer=null,this.postMessageListener=null,this.attemptedProviders=new Set,this.hasPlaybackStarted=!1,this.lastEmbedProgressSaveAt=0,this.backHandler=this.close.bind(this),this.mediaKeyHandler=this.handleMediaKey.bind(this),this.activityHandler=this.wakeHud.bind(this)}render(){if(this.nativeMode)return this.renderNativePlayer(),this.activePlayerInstance?this.activePlayerInstance.containerEl:null;const e=A(this.currentProviderId);return e.length===0?(this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.renderNoProvidersView(),this.playerEl):((!this.currentProviderId||!e.some(t=>t.id===this.currentProviderId))&&(this.currentProviderId=e[0].id),k(this.currentProviderId)?(this.renderNativePlayer(),this.activePlayerInstance?this.activePlayerInstance.containerEl:null):(this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.renderActiveEmbedPlayer(),this.playerEl))}renderNativePlayer(e,t=!1){return w(this,null,function*(){const s=this.media.media_type==="tv"||this.media.mediaType==="tv",r=this.media.season||1,i=this.media.episode||1,a=this.getProviderName(this.currentProviderId);this.attemptedProviders.add(this.currentProviderId),this.recordInitialHistory(),this.renderLoadingView(`Connecting to ${a}...`,"Resolving verified direct HLS master playlist");try{let n=e,c=[];if(!n){const l=this.nativeMode?yield O(this.currentProviderId,this.media.id,s,r,i):yield Y(this.currentProviderId,this.media,r,i,null,t);if(!this.nativeMode&&l&&l.needsConfirmation){this.renderConfirmMatchView(l.candidates,l.providerName);return}if(l&&l.embedUrl){this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.renderActiveEmbedPlayer("",l.embedUrl,l.sandbox!==!1);return}if(l&&l.streamUrl)n=l.streamUrl,c=l.subtitles||[];else throw new Error("No stream URL returned by direct resolver")}this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.activePlayerInstance=new G({media:this.media,streamUrl:n,providerId:this.currentProviderId,subtitles:c,nativeMode:this.nativeMode,onNextEpisode:l=>{this.onNextEpisode&&this.onNextEpisode(l)},onClose:()=>{this.onClose&&this.onClose()},onSwitchToEmbed:l=>{this.nativeMode||this.handleFallback(this.currentProviderId,"Stream error")},onSwitchProvider:l=>{this.nativeMode||this.switchServer(l)},onFallback:(l,p)=>{this.nativeMode?this.renderNativePlaybackFailedView(p):this.handleFallback(l,p)},onWrongMatch:()=>{this.nativeMode||this.reconfirmMatch()}}),this.activePlayerInstance.render()}catch(n){console.warn(`[PlayerModal] Native stream resolution error on ${this.currentProviderId}:`,n),this.nativeMode?this.renderNativePlaybackFailedView(n.message||"Stream resolution failed"):this.handleFallback(this.currentProviderId,n.message||"Stream resolution failed")}})}renderNativePlaybackFailedView(e=""){this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl)),this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.playerEl.innerHTML=`
      <div class="player-hud" style="opacity: 1; pointer-events: all; transform: none; background: rgba(10,10,15,0.97); position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;">
        <div style="max-width: 600px; text-align: center; padding: 40px; background: #181824; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.9);">
          <div style="margin-bottom: 16px; color: #ef4444; display: flex; justify-content: center;">${d("triangle-alert",{size:50})}</div>
          <h2 style="color: #fff; font-size: 24px; font-weight: 800; margin-bottom: 12px;">Playback Failed</h2>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.5; margin-bottom: 8px;">
            ${this.getProviderName(this.currentProviderId)} couldn't play this title.
          </p>
          ${e?`<div style="color: #f87171; font-size: 13px; font-family: monospace; margin-bottom: 24px;">${e}</div>`:'<div style="margin-bottom: 24px;"></div>'}
          <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary focusable primary-focus" id="btn-retry-native" style="padding: 12px 24px; font-size: 15px;">
              ${d("rotate-ccw")} Retry
            </button>
            <button class="btn btn-secondary focusable" id="btn-native-failed-exit" style="padding: 12px 20px; font-size: 15px;">
              ${d("x")} Exit Player
            </button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.playerEl),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler),this.playerEl.querySelector("#btn-retry-native").addEventListener("click",()=>{o.clearScope(this.playerEl),this.playerEl.parentNode&&(this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.renderNativePlayer()}),this.playerEl.querySelector("#btn-native-failed-exit").addEventListener("click",()=>this.close())}renderLoadingView(e="Connecting to Stream...",t="Resolving media sources"){this.playerEl&&this.playerEl.parentNode&&this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.playerEl.innerHTML=`
      <div class="player-hud" style="opacity: 1; pointer-events: all; transform: none; background: rgba(10,10,15,0.96); position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;">
        <div style="max-width: 580px; text-align: center; padding: 40px; background: #181824; border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.9);">
          <div style="margin-bottom: 16px; color: #e50914; display: flex; justify-content: center;">${d("zap",{size:48})}</div>
          <h2 style="color: #fff; font-size: 22px; font-weight: 800; margin-bottom: 8px;">${e}</h2>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.5; margin-bottom: 24px;">${t}</p>
          <div style="display: flex; gap: 14px; justify-content: center;">
            <button class="btn btn-secondary focusable primary-focus" id="btn-cancel-connecting" style="padding: 10px 24px; font-size: 14px;">
              ${d("x")} Cancel
            </button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.playerEl),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler);const s=this.playerEl.querySelector("#btn-cancel-connecting");s&&s.addEventListener("click",()=>this.close())}renderConfirmMatchView(e=[],t=""){this.playerEl&&this.playerEl.parentNode&&this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=document.createElement("div"),this.playerEl.className="player-screen";const s=e.slice(0,8).map((i,a)=>`
      <button class="btn btn-secondary focusable${a===0?" primary-focus":""}" data-candidate-id="${i.id}"
        style="display:block; width:100%; text-align:right; padding:14px 18px; font-size:15px; margin-bottom:10px;">
        ${i.label||i.title||i.id}${i.year?` <span style="color:#a1a1aa;">(${i.year})</span>`:""}
      </button>
    `).join("");this.playerEl.innerHTML=`
      <div class="player-hud" style="opacity: 1; pointer-events: all; transform: none; background: rgba(10,10,15,0.97); position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;">
        <div style="max-width: 560px; width: 90%; text-align: center; padding: 40px; background: #181824; border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.9);">
          <h2 style="color: #fff; font-size: 20px; font-weight: 800; margin-bottom: 8px;">Confirm the match on ${t||"this server"}</h2>
          <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
            Couldn't confidently match this title automatically. Pick the right one below â€” you'll only be asked once for this show.
          </p>
          <div style="text-align: right; margin-bottom: 8px;">
            ${s||'<p style="color:#a1a1aa;">No matches found.</p>'}
          </div>
          <button class="btn btn-secondary focusable" id="btn-confirm-skip" style="padding: 10px 24px; font-size: 14px; margin-top: 8px;">
            ${d("x")} None of these â€” try next server
          </button>
        </div>
      </div>
    `,document.body.appendChild(this.playerEl),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler),this.playerEl.querySelectorAll("[data-candidate-id]").forEach(i=>{i.addEventListener("click",()=>{const a=i.getAttribute("data-candidate-id"),n=this.media.media_type==="tv"||this.media.mediaType==="tv";f.setConfirmedShowId(this.currentProviderId,String(this.media.id),a,n?this.media.season||1:null),this.renderNativePlayer()})});const r=this.playerEl.querySelector("#btn-confirm-skip");r&&r.addEventListener("click",()=>this.handleFallback(this.currentProviderId,"No confirmed match"))}handleFallback(e,t="Offline or timeout"){this.attemptedProviders.add(e),console.warn(`[PlayerModal] Provider ${e} failed (${t}). Finding fallback...`);const s=X(e,this.attemptedProviders);if(!s){console.error("[PlayerModal] All configured providers have failed."),this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.renderAllServersFailedView(t);return}console.log(`[PlayerModal] Auto-falling back to next provider: ${s.name} (${s.id})`),this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.currentProviderId=s.id,k(s.id)?this.renderNativePlayer():(this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.renderActiveEmbedPlayer(t))}skipToNextServer(){clearTimeout(this.embedTimeoutTimer);const e=x().filter(i=>i.catalogMode!=="native"),s=(e.findIndex(i=>i.id===this.currentProviderId)+1)%e.length,r=e[s];r&&this.switchServer(r.id)}renderAllServersFailedView(e=""){this.playerEl&&this.playerEl.parentNode&&this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.playerEl.innerHTML=`
      <div class="player-hud" style="opacity: 1; pointer-events: all; transform: none; background: rgba(10,10,15,0.97); position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;">
        <div style="max-width: 600px; text-align: center; padding: 40px; background: #181824; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.9);">
          <div style="margin-bottom: 16px; color: #ef4444; display: flex; justify-content: center;">${d("triangle-alert",{size:50})}</div>
          <h2 style="color: #fff; font-size: 24px; font-weight: 800; margin-bottom: 12px;">All Stream Servers Unavailable</h2>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.5; margin-bottom: 8px;">
            TFlix attempted all configured stream providers (${this.attemptedProviders.size} servers), but none responded successfully.
          </p>
          ${e?`<div style="color: #f87171; font-size: 13px; font-family: monospace; margin-bottom: 24px;">Last error: ${e}</div>`:'<div style="margin-bottom: 24px;"></div>'}
          <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary focusable primary-focus" id="btn-retry-all-providers" style="padding: 12px 24px; font-size: 15px;">
              ${d("rotate-ccw")} Retry All Servers
            </button>
            <button class="btn btn-secondary focusable" id="btn-player-failed-exit" style="padding: 12px 20px; font-size: 15px;">
              ${d("x")} Exit Player
            </button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.playerEl),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler);const t=this.playerEl.querySelector("#btn-retry-all-providers"),s=this.playerEl.querySelector("#btn-player-failed-exit");t.addEventListener("click",()=>{this.attemptedProviders.clear();const r=A();r.length>0&&(this.currentProviderId=r[0].id,o.clearScope(this.playerEl),this.playerEl.parentNode&&(this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.render())}),s.addEventListener("click",()=>this.close())}renderNoProvidersView(){this.playerEl.innerHTML=`
      <div class="player-hud" style="opacity: 1; pointer-events: all; transform: none; background: rgba(10,10,15,0.96); position: fixed; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;">
        <div style="max-width: 580px; text-align: center; padding: 40px; background: #181824; border: 1px solid rgba(255,255,255,0.15); border-radius: 16px;">
          <div style="margin-bottom: 16px; color: #a1a1aa; display: flex; justify-content: center;">${d("plug-zap",{size:48})}</div>
          <h2 style="color: #fff; font-size: 24px; font-weight: 800; margin-bottom: 12px;">Connect Stream Provider</h2>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.5; margin-bottom: 24px;">
            TFlix is a clean open-source player with no bundled sources. Add a native HLS provider pack or your own
            embed repository URL from <strong style="color: #e50914;">Settings â†’ Streaming Providers</strong>.
          </p>
          <div style="display: flex; gap: 14px; justify-content: center;">
            <button class="btn btn-secondary focusable primary-focus" id="btn-player-cancel" style="padding: 12px 20px; font-size: 15px;">
              ${d("x")} Close
            </button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.playerEl),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler),this.playerEl.querySelector("#btn-player-cancel").addEventListener("click",()=>this.close())}getStorageId(){return this.nativeMode&&this.media.nativeShowId?this.media.nativeShowId:this.media.id}recordInitialHistory(){const e=this.media.media_type==="tv"||this.media.mediaType==="tv",t=this.media.season||1,s=this.media.episode||1,r=this.media.title||this.media.name||"Playing Media";f.saveHistory({id:this.getStorageId(),source:this.media.source||"tmdb",media_type:e?"tv":"movie",mediaType:e?"tv":"movie",title:r,name:this.media.name||this.media.title,poster_path:this.media.poster_path,backdrop_path:this.media.backdrop_path,vote_average:this.media.vote_average,release_date:this.media.release_date||this.media.first_air_date,first_air_date:this.media.first_air_date||this.media.release_date,season:t,episode:s})}renderActiveEmbedPlayer(e="",t=null,s=null){const r=this.media.media_type==="tv"||this.media.mediaType==="tv",i=this.media.season||1,a=this.media.episode||1,n=this.media.title||this.media.name||"Playing Media";this.attemptedProviders.add(this.currentProviderId),this.recordInitialHistory();const c=x().filter(y=>y.catalogMode!=="native");!this.nativeMode&&(!this.currentProviderId||!c.some(y=>y.id===this.currentProviderId))&&(this.currentProviderId=f.getDefaultProvider()||(c[0]?c[0].id:""));const l=f.getProgress(this.media.source||"tmdb",this.getStorageId(),i,a),p=l&&l.currentTime>15?l.currentTime:0,m=t||q(this.currentProviderId,r?"tv":"movie",this.media.id,i,a,p),u=z(this.currentProviderId),g=s===null?!(u&&u.sandbox===!1):s;this.hasPlaybackStarted=!1,clearTimeout(this.embedTimeoutTimer),this.playerEl.innerHTML=`
      <div class="player-hud" id="player-hud">
        <div class="player-info">
          <h2 id="current-player-title">${n}</h2>
          <p id="current-player-meta">
            ${r?`Season ${i} â€¢ Episode ${a}`:"Movie"} 
            | Server: <span id="current-server-name">${this.getProviderName(this.currentProviderId)}</span>
            ${e?`<span class="player-fallback-tag">Auto-switched: ${e}</span>`:""}
            ${p>0?`<span style="color:#fbbf24; margin-left:8px;">(Resumed at ${this.formatTime(p)})</span>`:""}
          </p>
        </div>
        <div class="player-controls">
          <button class="btn btn-primary focusable primary-focus" id="player-focus-iframe-btn" style="padding: 8px 16px; font-size: 14px;" title="Move remote control into the player">
            ${d("play",{size:16})} Focus Player
          </button>
          ${this.nativeMode?"":`
            <button class="btn btn-secondary focusable primary-focus" id="player-skip-server-btn" style="padding: 8px 16px; font-size: 14px;" title="Skip to Next Working Server">
              ${d("zap",{size:16})} Next Server
            </button>
            <button class="btn btn-secondary focusable" id="player-server-select" style="padding: 8px 16px; font-size: 14px;" title="Change Server">
              ${d("server",{size:16})}
            </button>
          `}
          ${r&&!this.nativeMode?`
            <button class="btn btn-secondary focusable" id="player-episodes-drawer-btn" style="padding: 8px 18px; font-size: 14px;" title="Browse Episodes">
              ${d("list-video",{size:16})}
            </button>
            <button class="btn btn-secondary focusable" id="player-next-ep-btn" style="padding: 8px 18px; font-size: 14px;" title="Next Episode">
              ${d("skip-forward",{size:16})}
            </button>
          `:""}
          <button class="btn btn-secondary focusable ${this.nativeMode?"primary-focus":""}" id="player-close-btn" style="padding: 8px 18px; font-size: 14px;" title="Exit Player">
            ${d("x",{size:16})}
          </button>
        </div>
      </div>
      <iframe 
        id="player-iframe"
        class="player-iframe focusable"
        referrerpolicy="origin"
        ${g?'sandbox="allow-scripts allow-same-origin allow-forms allow-presentation"':""}
        src="${m}"
        tabindex="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allow="autoplay *; encrypted-media *; picture-in-picture *; fullscreen *; web-share *"
      ></iframe>
    `,this.playerEl.parentNode||document.body.appendChild(this.playerEl),this.hudEl=this.playerEl.querySelector("#player-hud");const P=this.playerEl.querySelector("#player-iframe"),$=this.playerEl.querySelector("#player-focus-iframe-btn");$&&P&&$.addEventListener("click",()=>{const y=this.playerEl&&this.playerEl.querySelector("#player-iframe");if(y){y.focus();try{y.contentWindow.focus()}catch(Z){}}}),P&&P.addEventListener("error",()=>{console.warn(`[PlayerModal] Iframe failed to load on server: ${this.currentProviderId}`),this.handleFallback(this.currentProviderId,"Iframe connection error")});const N=this.playerEl.querySelector("#player-skip-server-btn");N&&N.addEventListener("click",()=>{this.skipToNextServer()});const I=this.playerEl.querySelector("#player-server-select");I&&I.addEventListener("click",()=>{D({providers:c,currentId:this.currentProviderId,onSelect:y=>{this.switchServer(y),this.playerEl&&o.setScope(this.playerEl)}})});const M=this.playerEl.querySelector("#player-episodes-drawer-btn");M&&M.addEventListener("click",()=>{this.openEpisodeDrawer()});const C=this.playerEl.querySelector("#player-next-ep-btn");C&&C.addEventListener("click",()=>{this.onNextEpisode&&(this.close(),this.onNextEpisode(E(b({},this.media),{episode:(this.media.episode||1)+1})))}),this.playerEl.querySelector("#player-close-btn").addEventListener("click",()=>this.close()),this.setupPostMessageListener(),o.setScope(this.playerEl),o.pushBackHandler(this.backHandler),o.pushMediaKeyHandler(this.mediaKeyHandler),window.addEventListener("keydown",this.activityHandler,{capture:!0}),window.addEventListener("mousemove",this.activityHandler),this.resetHudTimer()}openEpisodeDrawer(){this.activeDrawer||(this.activeDrawer=new _({media:this.media,currentSeason:this.media.season||1,currentEpisode:this.media.episode||1,onSelectEpisode:e=>{this.activeDrawer=null,this.media=E(b({},this.media),{season:e.season,episode:e.episode,title:e.title}),this.switchEpisode(e.season,e.episode)},onClose:()=>{this.activeDrawer=null,this.playerEl&&o.setScope(this.playerEl)}}),this.activeDrawer.render())}switchEpisode(e,t){this.media.season=e,this.media.episode=t,this.recordInitialHistory(),this.media.name||this.media.title;const s=this.playerEl?this.playerEl.querySelector("#current-player-meta"):null;s&&(s.innerHTML=`Season ${e} â€¢ Episode ${t} | Server: <span>${this.getProviderName(this.currentProviderId)}</span>`);const r=q(this.currentProviderId,"tv",this.media.id,e,t),i=this.playerEl?this.playerEl.querySelector("#player-iframe"):null;if(i){const a=i.cloneNode(!1);a.addEventListener("error",()=>{console.warn(`[PlayerModal] Iframe failed to load on server: ${this.currentProviderId}`),this.handleFallback(this.currentProviderId,"Iframe connection error")}),a.src=r,i.replaceWith(a)}this.wakeHud()}setupPostMessageListener(){this.postMessageListener=e=>{try{const t=this.media.media_type==="tv"||this.media.mediaType==="tv",s=this.media.season||1,r=this.media.episode||1;if(e.origin&&e.origin.includes("vidlink.pro")){const i=e.data;if(i){if(this.hasPlaybackStarted=!0,clearTimeout(this.embedTimeoutTimer),i.type==="PLAYER_EVENT"||i.event==="timeupdate"||typeof i.currentTime=="number"){const a=i.currentTime||i.data&&i.data.currentTime,n=i.duration||i.data&&i.data.duration,c=Date.now();typeof a=="number"&&a>5&&c-this.lastEmbedProgressSaveAt>=3e3&&(this.lastEmbedProgressSaveAt=c,f.updateProgress(this.media.source||"tmdb",this.getStorageId(),s,r,a,n))}i.event==="ended"&&t&&this.onNextEpisode&&(this.close(),this.onNextEpisode(E(b({},this.media),{episode:r+1})))}}}catch(t){}},window.addEventListener("message",this.postMessageListener)}getProviderName(e){const t=z(e);return t?t.name:e||"None"}switchServer(e){if(clearTimeout(this.embedTimeoutTimer),this.currentProviderId=e,this.attemptedProviders.add(e),this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),k(e)){this.renderNativePlayer();return}this.media.media_type==="tv"||this.media.mediaType,this.media.season,this.media.episode,this.playerEl=document.createElement("div"),this.playerEl.className="player-screen",this.renderActiveEmbedPlayer()}reconfirmMatch(){this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.playerEl&&this.playerEl.parentNode&&(o.clearScope(this.playerEl),this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.renderNativePlayer(null,!0)}wakeHud(){if(!this.hudEl||!this.playerEl||!document.body.contains(this.playerEl)||o.activeScope&&o.activeScope!==this.playerEl)return;const e=this.hudEl.classList.contains("hidden");this.hudEl.classList.remove("hidden"),this.resetHudTimer(),(e||!o.currentFocusedElement||!this.playerEl.contains(o.currentFocusedElement))&&o.focusFirstAvailable()}resetHudTimer(){clearTimeout(this.hudTimer),this.hudTimer=setTimeout(()=>{this.activeDrawer||this.hudEl&&this.playerEl&&document.body.contains(this.playerEl)&&(this.hudEl.classList.add("hidden"),this.hudEl.contains(document.activeElement)&&document.activeElement.blur())},4500)}handleMediaKey(e,t){if(this.wakeHud(),e===v.MEDIA_STOP){this.close();return}const s=this.media.media_type==="tv"||this.media.mediaType==="tv";if(e===v.MEDIA_TRACK_NEXT&&s){const i=this.media.episode||1;this.onNextEpisode&&(this.close(),this.onNextEpisode(E(b({},this.media),{episode:i+1})));return}const r=this.playerEl?this.playerEl.querySelector("#player-iframe"):null;if(r&&r.contentWindow)try{r.contentWindow.postMessage({type:"tizen:mediaKey",keyCode:e,key:t},"*")}catch(i){}}formatTime(e){if(isNaN(e)||e<0)return"00:00";const t=Math.floor(e),s=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=n=>String(n).padStart(2,"0");return s>0?`${a(s)}:${a(r)}:${a(i)}`:`${a(r)}:${a(i)}`}close(){clearTimeout(this.hudTimer),clearTimeout(this.embedTimeoutTimer),this.activeDrawer&&(this.activeDrawer.close(),this.activeDrawer=null),this.postMessageListener&&(window.removeEventListener("message",this.postMessageListener),this.postMessageListener=null),window.removeEventListener("keydown",this.activityHandler,{capture:!0}),window.removeEventListener("mousemove",this.activityHandler),o.popBackHandler(this.backHandler),o.popMediaKeyHandler(this.mediaKeyHandler),this.activePlayerInstance&&(this.activePlayerInstance.close(),this.activePlayerInstance=null),this.playerEl&&(o.clearScope(this.playerEl),this.playerEl.parentNode&&this.playerEl.parentNode.removeChild(this.playerEl),this.playerEl=null),this.onClose&&this.onClose()}}export{te as PlayerModal};

