$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true, // 2. Random başlangıç
        moveSlides: 1, // 3. Her seferinde bir slayt kaydırma
        minSlides: 1, // 4. Yalnızca bir resmin görüntülenmesi
        maxSlides: 1,
        auto: true, // 5. Otomatik geçişler
        pause: 3000, // 5. 3 saniye bekleme
	captions: true,
	pagerCustom: '#pager',
	pagerType: "short",
	slideWidth: 250,
	slideMargin: 10,
});
});
