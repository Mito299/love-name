let currentLanguage = 'th'; // เริ่มต้นด้วยภาษาไทย

const translations = {
    th: {
        title: "สุ่มคำบอกรัก",
        inputPlaceholder: "ใส่ชื่อคนที่คุณรัก",
        generateButton: "สุ่มคำบอกรัก",
        popupTitle: "คำบอกรัก",
        closeButton: "ปิด",
        messages: [
            "{name} คุณคือทุกสิ่งทุกอย่างสำหรับฉัน 💖",
            "ทุกช่วงเวลาที่อยู่กับคุณมีค่ามากสำหรับฉัน, {name} 🌟",
            "ฉันรักคุณมากกว่าที่จะบรรยายออกมาเป็นคำพูด, {name} 💌",
            "คุณคือแสงสว่างในชีวิตฉัน, {name} ☀️",
            "หัวใจฉันเต้นเพื่อคุณ, {name} 💓",
            "ฉันโชคดีมากที่มีคุณในชีวิต, {name} 🍀",
            "คุณคือทุกสิ่งสำหรับฉัน, {name} 💞",
            "ฉันไม่สามารถจินตนาการชีวิตที่ขาดคุณได้, {name} 🌹",
            "คุณทำให้โลกของฉันสวยงามขึ้น, {name} 🌍",
            "ฉันรักคุณมากกว่าที่จะวัดได้, {name} 🌙"
        ]
    },
    lo: {
        title: "ສຸ່ມຄຳບອກຮັກ",
        inputPlaceholder: "ປ້ອນຊື່ຄົນທີ່ທ່ານຮັກ",
        generateButton: "ສຸ່ມຄຳບອກຮັກ",
        popupTitle: "ຄຳບອກຮັກ",
        closeButton: "ປິດ",
        messages: [
            "{name} ເຈົ້າຄືທຸກສິ່ງທຸກຢ່າງຂອງຂ້ອຍ 💖",
            "ທຸກເວລາທີ່ຢູ່ກັບເຈົ້າມີຄ່າຫຼາຍສຳລັບຂ້ອຍ, {name} 🌟",
            "ຂ້ອຍຮັກເຈົ້າຫຼາຍກວ່າທີ່ຈະບອກເປັນຄຳພີ, {name} 💌",
            "ເຈົ້າຄືແສງສະຫວ່າງໃນຊີວິດຂອງຂ້ອຍ, {name} ☀️",
            "ຫົວໃຈຂອງຂ້ອຍເຕັ້ນເພື່ອເຈົ້າ, {name} 💓",
            "ຂ້ອຍໂຊກດີຫຼາຍທີ່ມີເຈົ້າໃນຊີວິດ, {name} 🍀",
            "ເຈົ້າຄືທຸກສິ່ງສຳລັບຂ້ອຍ, {name} 💞",
            "ຂ້ອຍບໍ່ສາມາດຈິນຕະນາການຊີວິດໂດຍບໍ່ມີເຈົ້າ, {name} 🌹",
            "ເຈົ້າເຮັດໃຫ້ໂລກຂອງຂ້ອຍສວຍງາມຂຶ້ນ, {name} 🌍",
            "ຂ້ອຍຮັກເຈົ້າຫຼາຍກວ່າທີ່ຈະວັດແທກໄດ້, {name} 🌙"
        ]
    }
};

// ฟังก์ชันเลือกภาษา
function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('languagePage').style.display = 'none'; // ซ่อนหน้าเลือกภาษา
    document.getElementById('mainPage').style.display = 'block'; // แสดงหน้าเว็บหลัก
    updateLanguage();
}

// อัปเดตข้อความตามภาษาที่เลือก
function updateLanguage() {
    const lang = translations[currentLanguage];
    document.getElementById('title').textContent = lang.title;
    document.getElementById('nameInput').placeholder = lang.inputPlaceholder;
    document.getElementById('generateButton').textContent = lang.generateButton;
    document.getElementById('popupTitle').textContent = lang.popupTitle;
    document.getElementById('closeButton').textContent = lang.closeButton;
}

// ฟังก์ชันสุ่มคำบอกรัก
function generateMessage() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert(currentLanguage === 'th' ? "กรุณาใส่ชื่อคนที่คุณรัก!" : "ກະລຸນາປ້ອນຊື່ຄົນທີ່ທ່ານຮັກ!");
        return;
    }
    const lang = translations[currentLanguage];
    const randomMessage = lang.messages[Math.floor(Math.random() * lang.messages.length)];
    const finalMessage = randomMessage.replace('{name}', name);

    // แสดงป็อปอัพ
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupMessage = document.getElementById('popupMessage');

    popupMessage.textContent = finalMessage;
    popup.classList.add('show');
    overlay.classList.add('show');
}

// ฟังก์ชันปิดป็อปอัพ
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.classList.remove('show');
    overlay.classList.remove('show');
}