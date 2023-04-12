// ==UserScript==
// @name           为b站 (bilibili) 添加更多倍速
// @namespace  /DBI/bili-more-rates
// @version        1.1.0
// @description  为b站(bilibili)添加更多倍速: 0.1X; 0.2X; 2.5X; 3X; 4X; 5X; 10x.
// @author         DuckBurnIncense
// @match          https://www.bilibili.com/video/*
// @icon             https://www.bilibili.com/favicon.ico
// @supportURL https://greasyfork.org/zh-CN/scripts/462473/
// @grant            GM_addStyle
// @grant            GM_registerMenuCommand
// @grant            GM_setValue
// @grant            GM_getValue
// @run-at          document-end
// @license          MIT
// ==/UserScript==


// 等待直到播放器被加载出来
(function (callback) {
	const wait = () => setTimeout(() => {
		if (document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu').length != 0) {
			callback();
			console.log('[为b站 (bilibili) 添加更多倍速] 已添加更多倍速');
		} else {
			wait();
		}
	}, 1000);
	wait();
})( () => {
    // 需要添加的自定义速度
    const myRates = [0.1, 0.2, 2.5, 3, 4, 5, 10];
    // 已添加的速度
    let addedRates = [2, 1.5, 1.25, 1, 0.75, 0.5];
    // dom上的速度目录
    const domRateMenu = document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu')[0];
    // video元素
    const domVideoElement = document.querySelector('.bpx-player-video-wrap>video');
    // 添加自定义速度到dom上的速度目录
    myRates.forEach(rate => {
        // 和addedRates比较大小, 确定插入的位置
        let addedRatesLength = addedRates.length;
		// 插入的位置
		let i = 0;
        for (i = 0; i < addedRatesLength; i ++) {
            // 如果 已添加的速度 比 要添加的速度 小 则就应该在这个下标处增加
            if (addedRates[i] < rate) break;
        }
        addedRates.splice(i, 0, rate);
		// 创建一个li
		let newRateNode = document.createElement('li');
		// 添加文字, 整数倍手动添加 ".0"
		newRateNode.innerText = (rate % 1 == 0 ? (rate + '.0') : rate) + 'x';
		// 添加class
		newRateNode.classList.add('bpx-player-ctrl-playbackrate-menu-item');
		// 按照b站格式添加 data-value 属性
		newRateNode.dataset.value = rate;
		// 绑定点击事件
		newRateNode.addEventListener('click', () => {
			// 修改倍数
			domVideoElement.playbackRate = rate;
			// 剩下的添加 "bpx-state-active" class, 改变 "倍数" 处的文本b站好像已经帮我做了, 我就懒得重新写了
		});
		// 添加到dom速度列表
		domRateMenu.insertBefore(newRateNode, domRateMenu.children[i]);
    });
    // 是否分栏显示
    const twoCols = GM_getValue('twoCols', 0);
    GM_registerMenuCommand((twoCols ? '[✔️已启用]' : '[❌已禁用]') + " 将倍数列表分为两栏显示", function() {
        GM_setValue('twoCols', !twoCols);
        alert((!twoCols ? '已启用' : '已禁用') + ', 刷新页面后生效!');
    });
    if (twoCols) {
        // 根据倍数选项的个数确定分栏高度
        // 倍数选项的个数
        let addedRatesLength = addedRates.length;
        // 分栏高度
        // 如果倍数选项的个数是奇数则加一把它变成偶数
        // 36 为每个倍数选项的高度
        let height = ((addedRatesLength % 2 == 0) ? addedRatesLength : addedRatesLength + 1) * 36 / 2;
        // 添加 css
        GM_addStyle(`
            .bpx-player-ctrl-playbackrate.bpx-state-show .bpx-player-ctrl-playbackrate-menu {
                display: flex!important;
            }
            .bpx-player-ctrl-playbackrate-menu {
                display: none;
                flex-direction: column;
                flex-wrap: wrap;
                width: 140px;
                height: ${height}px;
            }
            .bpx-player-ctrl-playbackrate-menu-item {
                width: 70px;
                height: 36px;
            }
        `);
    }
});


/*
b站倍数列表处dom结构:

<div class="bpx-player-ctrl-btn bpx-player-ctrl-playbackrate" role="button" aria-label="倍速" tabindex="0">
	<div class="bpx-player-ctrl-playbackrate-result">倍速</div>
	<ul class="bpx-player-ctrl-playbackrate-menu">
		<li class="bpx-player-ctrl-playbackrate-menu-item " data-value="2">2.0x</li>
		<li class="bpx-player-ctrl-playbackrate-menu-item " data-value="1.5">1.5x</li>
		<li class="bpx-player-ctrl-playbackrate-menu-item " data-value="1.25">1.25x</li>
		<li class="bpx-player-ctrl-playbackrate-menu-item bpx-state-active" data-value="1">1.0x</li>
		<li class="bpx-player-ctrl-playbackrate-menu-item " data-value="0.75">0.75x</li>
		<li class="bpx-player-ctrl-playbackrate-menu-item " data-value="0.5">0.5x</li>
	</ul>
</div>
*/