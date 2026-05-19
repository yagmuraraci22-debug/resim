// 👑 YENİ: İki farklı klasörü de destekleyen gelişmiş liste düzenleyici
function parseTextToList(rawText, folderName = "resimler") {
    return rawText.split(/\r?\n/).map(name => {
        let cleanName = name.trim();
        return cleanName ? `${folderName}/${cleanName}` : null;
    }).filter(Boolean);
}

// 1. ALBÜM VE FOTOĞRAF VERİLERİ
const albumData = [
    { 
        date: "24.04.2026", 
        photos: parseTextToList(`
            ANMP0931.jpg
            ANMP0930.jpg
            ANMP0929.jpg
            ANMP0928.jpg
            ANMP0927.jpg
            ANMP0926.jpg
            ANMP0925.jpg
        `,"resimler") 
    },
    { 
        date: "17.04.2026", 
        photos: parseTextToList(`
            ANMP0924.jpg
            ANMP0922.jpg
            ANMP0921.jpg
        `,"resimler") 
    },
    { 
        date: "01.04.2026", 
        photos: parseTextToList(`
            ANMP0855.jpg
            ANMP0854.jpg
            ANMP0853.jpg
            ANMP0852.jpg
            ANMP0851.jpg
            ANMP0850.jpg
            ANMP0849.jpg
            ANMP0848.jpg
            ANMP0847.jpg
            ANMP0846.jpg
            ANMP0845.jpg
            ANMP0843.jpg
            ANMP0841.jpg
            ANMP0839.jpg
            ANMP0838.jpg
            ANMP0837.jpg
            ANMP0832.jpg
            ANMP0828.jpg
            ANMP0827.jpg
            ANMP0826.jpg
            ANMP0825.jpg
            ANMP0824.jpg
            ANMP0823.jpg
            ANMP0822.jpg
            ANMP0821.jpg
            ANMP0820.jpg
            ANMP0819.jpg
            ANMP0818.jpg
            ANMP0817.jpg
            ANMP0816.jpg
            ANMP0812.jpg
            ANMP0811.jpg
            ANMP0810.jpg
        `,"resimler2") 
    },
    { 
        date: "25.03.2026", 
        photos: parseTextToList(`
            ANMP0687.jpg
            ANMP0688.jpg
           ANMP0689.jpg
           ANMP0691.jpg
           ANMP0692.jpg
           ANMP0694.jpg
           ANMP0696.jpg
           ANMP0697.jpg
           ANMP0698.jpg
           ANMP0699.jpg
           ANMP0700.jpg
           ANMP0701.jpg
           ANMP0702.jpg
           ANMP0703.jpg
           ANMP0704.jpg
           ANMP0706.jpg
           ANMP0707.jpg
           ANMP0708.jpg
           ANMP0709.jpg
           ANMP0710.jpg
           ANMP0711.jpg
           ANMP0712.jpg
           ANMP0715.jpg
           ANMP0718.jpg
           ANMP0719.jpg
           ANMP0721.jpg
           ANMP0722.jpg
           ANMP0723.jpg
           ANMP0724.jpg
           ANMP0725.jpg
            
        `,"resimler2")
    },
     { 
        date: "piknik", 
        photos: parseTextToList(`
           WhatsApp Image 2026-05-08 at 21.30.32 (1).jpeg
           WhatsApp Image 2026-05-08 at 21.30.32.jpeg
           WhatsApp Image 2026-05-08 at 21.33.08 (1).jpeg
           WhatsApp Image 2026-05-08 at 21.33.08.jpeg
           WhatsApp Image 2026-05-08 at 22.20.23.jpeg
           WhatsApp Image 2026-05-08 at 22.20.25.jpeg
           WhatsApp Image 2026-05-08 at 22.20.29.jpeg
           WhatsApp Image 2026-05-08 at 22.20.32.jpeg
           WhatsApp Image 2026-05-08 at 22.20.33.jpeg
           WhatsApp Image 2026-05-08 at 22.20.35.jpeg
           WhatsApp Image 2026-05-08 at 22.20.36 (1).jpeg
           WhatsApp Image 2026-05-08 at 22.20.36 (2).jpeg
           WhatsApp Image 2026-05-08 at 22.20.36 (3).jpeg
           WhatsApp Image 2026-05-08 at 22.20.36.jpeg
           WhatsApp Image 2026-05-08 at 22.20.37 (1).jpeg
           WhatsApp Image 2026-05-08 at 22.20.37 (2).jpeg
           WhatsApp Image 2026-05-08 at 22.20.37 (3).jpeg
           WhatsApp Image 2026-05-08 at 22.20.37.jpeg
           WhatsApp Image 2026-05-08 at 22.20.38 (1).jpeg
           WhatsApp Image 2026-05-08 at 22.20.38 (2).jpeg
           WhatsApp Image 2026-05-08 at 22.20.38 (3).jpeg
           WhatsApp Image 2026-05-08 at 22.20.38.jpeg

            
        `,"resimler") 
    },
     { 
        date: "ifşalar", 
        photos: parseTextToList(`
           WhatsApp Image 2026-05-19 at 19.29.37.jpeg
           WhatsApp Image 2026-05-19 at 19.29.38 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.29.38 (2).jpeg
           WhatsApp Image 2026-05-19 at 19.29.38 (3).jpeg
           WhatsApp Image 2026-05-19 at 19.29.38 (4).jpeg
           WhatsApp Image 2026-05-19 at 19.29.38.jpeg
           WhatsApp Image 2026-05-19 at 19.29.39 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.29.39 (2).jpeg
           WhatsApp Image 2026-05-19 at 19.29.39 (3).jpeg
           WhatsApp Image 2026-05-19 at 19.29.39.jpeg
           WhatsApp Image 2026-05-19 at 19.29.40 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.29.40 (2).jpeg
           WhatsApp Image 2026-05-19 at 19.29.40 (3).jpeg
           WhatsApp Image 2026-05-19 at 19.29.40.jpeg
           WhatsApp Image 2026-05-19 at 19.29.41 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.29.41 (2).jpeg
           WhatsApp Image 2026-05-19 at 19.29.41.jpeg
           WhatsApp Image 2026-05-19 at 19.37.05.jpeg
           WhatsApp Image 2026-05-19 at 19.37.06 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.37.06 (2).jpeg
           WhatsApp Image 2026-05-19 at 19.37.06 (3).jpeg
           WhatsApp Image 2026-05-19 at 19.37.06.jpeg
           WhatsApp Image 2026-05-19 at 19.37.07 (1).jpeg
           WhatsApp Image 2026-05-19 at 19.37.07.jpeg

            
        `,"resimler") 
    }
];

// YENİ: VİDEO VERİLERİ (Videoların adını buraya ekle)
const videoData = [
    "resimler/ANMR0803.mp4",
    "resimler/ANMR0766.mp4",
    "resimler/ANMR0763.mp4",
    "resimler/ANMR0762.mp4",
    "resimler/ANMR0744.mp4"
];"resimler"

let characterData = [
    { 
        name: "YAĞMUR", class: "İç Mimarlık", skill: "Alakasız konu açmak ", quote: "Bir birdir iki ikidir,bir iki değildir ikide bir değildir.", avatar: "avatar1.jpeg", animal: "panda", animalImg: "hayvan1.png",
        bgColor: "#ff8a80", 
        stats: { sinirli: 0, mutlu: 0, komik: 0, yaratici: 0,lider:0,üzgün:0,sosyal:0,konuşkan:0 }
    },
    { 
        name: "BEYZA", class:"İç Mimarlık", skill: "her kediyi sevmek / çok kötü espiri  yapmak/ çok film izlemek", quote: ".", avatar: "avatar2.jpeg", animal: "kedi", animalImg: "hayvan2.png",
        bgColor: "#eed5d2 ", // 
        stats: { sinirli: 0, mutlu: 0, komik: 0, yaratici: 0,lider:0,üzgün:0,sosyal:0,konuşkan:0 }
    },
    { 
        name: "HİRANUR", class: "İç Mimarlık", skill: "mükemmel kombin yapabilmek/ bütün konserlere gitmek ", quote: "jj", avatar: "avatar3.png", animal: "tavşan", animalImg: "hayvan3.png",
        bgColor: "#6495ED", 
        stats: {sinirli: 0, mutlu: 0, komik: 0, yaratici: 0,lider:0,üzgün:0,sosyal:0,konuşkan:0 }
    },
    { 
        name: "SUDENUR", class: "İç Mimarlık", skill: "stalklamak / Doğruluğu şüpheki bilgi vermek ", quote: "kot kafali", avatar: "avatar4.jpeg", animal: "yavru köpek", animalImg: "hayvan4.png",
        bgColor: "#bf9bde", 
        stats: { sinirli: 0, mutlu: 0, komik: 0, yaratici: 0,lider:0,üzgün:0,sosyal:0,konuşkan:0} 
    }
];
// Sayfa yüklendiğinde daha önce kaydedilmiş puanlar varsa onları yükle, yoksa ilk değerleri kullan
const savedData = localStorage.getItem('characterDataSave');
if (savedData) {
    characterData = JSON.parse(savedData);
}

let activeChestIndex = 0;
let currentIndex = 0;
let currentMode = "photo"; // "photo", "character", "video"
let currentPage = 0;
const itemsPerPage = 12;

// 👑 YERİNE BU TEMİZ SATIRI YAPIŞTIRIN
localStorage.setItem('characterDataSave', JSON.stringify(characterData));

// --- BU FONKSİYONU characterDataSave KONTROLÜNÜN HEMEN ALTINA EKLEYİN ---
function openChest(chestIndex) {
    currentMode = "photo";
    activeChestIndex = chestIndex;
    currentPage = 0;
    
    document.getElementById('chestScreen').classList.add('hidden');
    document.getElementById('menuScreen').classList.remove('hidden');
    document.getElementById('menuTitle').innerText = `${albumData[chestIndex].date} Anıları`;
    
    displayPhotos();
}

// 3. FOTOĞRAF SANDIĞI AÇMA FONKSİYONU
// SADECE BU FONKSİYONU DEĞİŞTİRİN (Orijinal stil korundu, sadece fotoğraf uçtu!)
function openCharacterMenu() {
    currentMode = "character";
    document.getElementById('chestScreen').classList.add('hidden');
    document.getElementById('menuScreen').classList.remove('hidden');
    document.getElementById('menuTitle').innerText = "Karakter Seçimi";
    
    document.getElementById('btnPrevPage').classList.add('hidden');
    document.getElementById('btnNextPage').classList.add('hidden');
    document.getElementById('pageInfo').classList.add('hidden');
    
    const eggGrid = document.getElementById('eggGrid');
    eggGrid.innerHTML = "";
     characterData.forEach((char, index) => {
    eggGrid.innerHTML += `
        <div class="mini-egg" onclick="openCharacterCard(${index})" style="display: flex; flex-direction: column; min-height: 110px; justify-content: space-between; box-sizing: border-box;">
            <div class="mini-header">LVL_99</div>
            <div class="mini-content" style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px; gap: 8px;">
                <span style="width: 14px; height: 14px; background: ${char.bgColor} !important; border: 2px solid #333; border-radius: 50%; display: inline-block; flex-shrink: 0; box-shadow: inset 1px 1px 0px rgba(255,255,255,0.5);"></span>
                <div style="font-weight: bold; font-size: 22px; color: #333; line-height: 1; padding-top: 2px; text-shadow: none;">${char.name}</div>
            </div>
        </div>
    `;
});
}
// YENİ: VİDEO SANDIĞINI AÇAN FONKSİYON
function openVideoChest() {
    currentMode = "video";
    currentPage = 0;
    
    document.getElementById('chestScreen').classList.add('hidden');
    document.getElementById('menuScreen').classList.remove('hidden');
    document.getElementById('menuTitle').innerText = "Özel Video Anıları";
    
    displayVideos();
}

// VİDEOLARI SEÇİM EKRANINA DİZEN FONKSİYON
function displayVideos() {
    const eggGrid = document.getElementById('eggGrid');
    eggGrid.innerHTML = "";
    
    videoData.forEach((video, index) => {
        eggGrid.innerHTML += `
            <div class="mini-egg" onclick="openVideoWindow(${index})">
                <div class="mini-header">VIDEO</div>
                <div class="mini-content">
                    <div class="pixel-star-icon" style="color: #ff5252;">▶</div>
                    <div>Video #${index + 1}</div>
                </div>
            </div>
        `;
    });
    
    // Videolar az olduğu için sayfalama butonlarını gizle
    document.getElementById('btnPrevPage').classList.add('hidden');
    document.getElementById('btnNextPage').classList.add('hidden');
    document.getElementById('pageInfo').classList.add('hidden');
}

function displayPhotos() {
    const eggGrid = document.getElementById('eggGrid');
    eggGrid.innerHTML = ""; 
    const currentPhotos = albumData[activeChestIndex].photos;
    
    const start = currentPage * itemsPerPage;
    const end = Math.min(start + itemsPerPage, currentPhotos.length);
    
    for (let index = start; index < end; index++) {
        eggGrid.innerHTML += `
            <div class="mini-egg" onclick="openPhoto(${index})">
                <div class="mini-header">Star_${index + 1}</div>
                <div class="mini-content">
                    <div class="pixel-star-icon">★</div>
                    <div>Anı #${index + 1}</div>
                </div>
            </div>
        `;
    }
    updatePageButtons(currentPhotos.length);
}

function updatePageButtons(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    document.getElementById('pageInfo').innerText = `${currentPage + 1}/${totalPages}`;
    document.getElementById('btnPrevPage').disabled = currentPage === 0;
    document.getElementById('btnPrevPage').style.opacity = currentPage === 0 ? "0.5" : "1";
    document.getElementById('btnNextPage').disabled = currentPage >= totalPages - 1;
    document.getElementById('btnNextPage').style.opacity = currentPage >= totalPages - 1 ? "0.5" : "1";
    
    if (totalPages <= 1) {
        document.getElementById('btnPrevPage').classList.add('hidden');
        document.getElementById('btnNextPage').classList.add('hidden');
        document.getElementById('pageInfo').classList.add('hidden');
    } else {
        document.getElementById('btnPrevPage').classList.remove('hidden');
        document.getElementById('btnNextPage').classList.remove('hidden');
        document.getElementById('pageInfo').classList.remove('hidden');
    }
}

function nextPage() { currentPage++; displayPhotos(); }
function prevPage() { currentPage--; displayPhotos(); }

// 4. KARAKTER MENÜSÜ AÇMA FONKSİYONU


// 5. DETAYLI KARAKTER KARTI
function openCharacterCard(index) {
    currentIndex = index;
    document.getElementById('menuScreen').classList.add('hidden');
    document.getElementById('charCardScreen').classList.remove('hidden');
    
    const char = characterData[index];
    document.getElementById('charCardTitle').innerText = `${char.name} Bilgileri`;
    document.getElementById('charBigImg').src = char.avatar;
    document.getElementById('charName').innerText = char.name;
    document.getElementById('charClass').innerText = char.class;
    document.getElementById('charSkill').innerText = char.skill;
    document.getElementById('charQuote').innerText = char.quote;
    document.getElementById('charAnimalName').innerText = char.animal;
    document.getElementById('charAnimalImg').src = char.animalImg;
    
// JavaScript dosyasında openCharacterCard fonksiyonun içindeki bu kısmı güncelle:
buildInteractiveBar('barSinirli', char.stats.sinirli, 'sinirli');
buildInteractiveBar('barMutlu', char.stats.mutlu, 'mutlu');
buildInteractiveBar('barKomik', char.stats.komik, 'komik');
buildInteractiveBar('barYaratici', char.stats.yaratici, 'yaratici');

// Doğru verilerle güncellenmiş yeni barlar:
buildInteractiveBar('barlider', char.stats.lider, 'lider');
buildInteractiveBar('baruzgun', char.stats.uzgun, 'uzgun');
buildInteractiveBar('barsosyal', char.stats.sosyal, 'sosyal');
buildInteractiveBar('barkonuskan', char.stats.konuskan, 'konuskan');
    
    const savedHearts = localStorage.getItem(`hearts_char_${index}`) || 0;
    loadSavedHearts('charHearts', parseInt(savedHearts));
}

function buildInteractiveBar(containerId, currentScore, statName) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 
    for (let i = 1; i <= 10; i++) {
        const activeClass = i <= currentScore ? "active" : "";
        container.innerHTML += `<div class="stat-cube ${activeClass}" onclick="changeStatScore(${i}, '${statName}', '${containerId}')"></div>`;
    }
}

function changeStatScore(newScore, statName, containerId) {
    // Aktif karakterin ilgili özelliğini güncelle
    characterData[currentIndex].stats[statName] = newScore;
    
    // Güncel tüm karakter verilerini tarayıcı hafızasına kaydet
    localStorage.setItem('characterDataSave', JSON.stringify(characterData));
    
    // Ekrandaki kutucukların rengini anlık olarak güncelle
    const container = document.getElementById(containerId);
    const cubes = container.querySelectorAll('.stat-cube');
    cubes.forEach((cube, index) => {
        if (index < newScore) cube.classList.add('active');
        else cube.classList.remove('active');
    });
}

// 6. NAVİGASYON FONKSİYONLARI
// ESKİ openPhoto FONKSİYONUNU BUNUNLA DEĞİŞTİRİN
function openPhoto(index) {
    currentIndex = index;
    document.getElementById('menuScreen').classList.add('hidden');
    document.getElementById('windowScreen').classList.remove('hidden');
    
    // Videoyu gizle ve durdur, resmi göster
    document.getElementById('galleryVideo').style.display = "none";
    document.getElementById('galleryVideo').pause();
    document.getElementById('galleryImage').style.display = "block";
    
    loadImage();
}

// YENİ: VİDEO PENCERESİNİ AÇAN FONKSİYON
// ESKİ openVideoWindow FONKSİYONUNU BUNUNLA DEĞİŞTİRİN
function openVideoWindow(index) {
    currentIndex = index;
    document.getElementById('menuScreen').classList.add('hidden');
    document.getElementById('windowScreen').classList.remove('hidden');
    
    // Resmi gizle, videoyu göster
    document.getElementById('galleryImage').style.display = "none";
    document.getElementById('galleryVideo').style.display = "block";
    
    loadVideo();
}

function backToChests() {
    document.getElementById('menuScreen').classList.add('hidden');
    document.getElementById('chestScreen').classList.remove('hidden');
}

function backToMenu() {
    // Kapatıldığında videoyu durdur ki arkadan ses gelmeye devam etmesin
    document.getElementById('galleryVideo').pause();
    
    document.getElementById('windowScreen').classList.add('hidden');
    document.getElementById('charCardScreen').classList.add('hidden');
    document.getElementById('menuScreen').classList.remove('hidden');
}

// ESKİ loadImage FONKSİYONUNU BUNUNLA DEĞİŞTİRİN
function loadImage() {
    const currentPhotos = albumData[activeChestIndex].photos;
    document.getElementById('galleryImage').src = currentPhotos[currentIndex];
    document.getElementById('windowTitle').innerText = `Anı #${currentIndex + 1}`;
    
    const savedHearts = localStorage.getItem(`hearts_photo_${activeChestIndex}_${currentIndex}`) || 0;
    loadSavedHearts('photoHearts', parseInt(savedHearts));
}

// YENİ: VİDEOYU YÜKLEYEN FONKSİYON
function loadVideo() {
    const videoPlayer = document.getElementById('galleryVideo');
    videoPlayer.src = videoData[currentIndex];
    document.getElementById('windowTitle').innerText = `Video Anı #${currentIndex + 1}`;
    videoPlayer.load(); // Videoyu hazırla
    
    // Video için de hafızalı puanlama çalışsın
    const savedHearts = localStorage.getItem(`hearts_video_${currentIndex}`) || 0;
    loadSavedHearts('photoHearts', parseInt(savedHearts));
}

function nextPhoto() {
    if (currentMode === "video") {
        currentIndex = (currentIndex + 1) % videoData.length;
        loadVideo();
    } else {
        const currentPhotos = albumData[activeChestIndex].photos;
        currentIndex = (currentIndex + 1) % currentPhotos.length;
        loadImage();
    }
}

function prevPhoto() {
    if (currentMode === "video") {
        currentIndex = (currentIndex - 1 + videoData.length) % videoData.length;
        loadVideo();
    } else {
        const currentPhotos = albumData[activeChestIndex].photos;
        currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
        loadImage();
    }
}

function rate(stars, targetContainerId) {
    if (targetContainerId === 'charHearts') {
        localStorage.setItem(`hearts_char_${currentIndex}`, stars);
    } else if (targetContainerId === 'photoHearts') {
        if (currentMode === "video") {
            localStorage.setItem(`hearts_video_${currentIndex}`, stars);
        } else {
            localStorage.setItem(`hearts_photo_${activeChestIndex}_${currentIndex}`, stars);
        }
    }
    loadSavedHearts(targetContainerId, stars);
}

function loadSavedHearts(targetContainerId, stars) {
    const container = document.getElementById(targetContainerId);
    if (!container) return;
    const hearts = container.querySelectorAll('.pixel-heart');
    hearts.forEach((heart, index) => {
        if (index < stars) heart.classList.add('active');
        else heart.classList.remove('active');
    });
}

