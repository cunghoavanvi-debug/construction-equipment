// 多语言支持
const translations = {
    zh: {
        selectProductType: "选择产品类型",
        wheelLoader: "装载机",
        excavator: "挖掘机",
        productMatrix: "产品矩阵",
        selected: "已选择: {count} 款产品",
        compare: "对标",
        tonnage: "吨位",
        brand: "品牌",
        model: "型号",
        specs: {
            tonnage: "吨位",
            horsepower: "马力",
            engine: "发动机品牌",
            price: "价格",
            bucketCapacity: "铲斗容量",
            operatingWeight: "工作重量",
            digDepth: "挖掘深度",
            maxReach: "最大挖掘半径"
        },
        noProducts: "暂无产品",
        compareTitle: "产品对标",
        specifications: "规格参数",
        close: "关闭",
        back: "返回",
        backToMatrix: "返回矩阵",
        remove: "删除",
        excavatorSpecs: "挖掘机参数"
    },
    en: {
        selectProductType: "Select Product Type",
        wheelLoader: "Wheel Loader",
        excavator: "Excavator",
        productMatrix: "Product Matrix",
        selected: "Selected: {count} products",
        compare: "Compare",
        tonnage: "Tonnage",
        brand: "Brand",
        model: "Model",
        specs: {
            tonnage: "Tonnage",
            horsepower: "Horsepower",
            engine: "Engine Brand",
            price: "Price",
            bucketCapacity: "Bucket Capacity",
            operatingWeight: "Operating Weight",
            digDepth: "Dig Depth",
            maxReach: "Max Reach"
        },
        noProducts: "No products",
        compareTitle: "Product Comparison",
        specifications: "Specifications",
        close: "Close"
    },
    hi: {
        selectProductType: "उत्पाद प्रकार चुनें",
        wheelLoader: "व्हील लोडर",
        excavator: "एक्स्केवेटर",
        productMatrix: "उत्पाद मैट्रिक्स",
        selected: "चयनित: {count} उत्पाद",
        compare: "तुलना करें",
        tonnage: "टन",
        brand: "ब्रांड",
        model: "मॉडल",
        specs: {
            tonnage: "टन",
            horsepower: "अश्वशक्ति",
            engine: "इंजन ब्रांड",
            price: "कीमत",
            bucketCapacity: "बकेट क्षमता",
            operatingWeight: "परिचालन वजन",
            digDepth: "खुदाई गहराई",
            maxReach: "अधिकतम पहुंच"
        },
        noProducts: "कोई उत्पाद नहीं",
        compareTitle: "उत्पाद तुलना",
        specifications: "विशेष विवरण",
        close: "बंद करें"
    }
};

// 当前语言
let currentLang = 'zh';

// 获取翻译
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// 翻译页面内容
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        if (text) {
            el.textContent = text;
        }
    });

    // 翻译占位符
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}

// 初始化语言切换
function initLangSwitch() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;
            
            currentLang = lang;
            
            // 更新按钮状态
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 翻译页面
            translatePage();
            
            // 重新渲染矩阵
            if (typeof renderMatrix === 'function') {
                renderMatrix();
            }
            
            // 更新选中计数
            if (typeof updateSelectedCount === 'function') {
                updateSelectedCount();
            }
        });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLangSwitch();
    translatePage();
});
