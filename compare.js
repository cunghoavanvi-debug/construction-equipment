// 对比页面逻辑

// 参数分类
const paramCategories = {
    basic: {
        label: '基本参数',
        params: ['model', 'brand', 'tonnage', 'horsepower', 'engine', 'price']
    }
};

// 挖掘机额外参数
const excavatorParams = ['bucketCapacity', 'operatingWeight', 'digDepth', 'maxReach'];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 恢复语言设置
    const savedLang = localStorage.getItem('compareLang') || 'zh';
    currentLang = savedLang;
    initLangSwitch();
    translatePage();
    
    // 加载对比产品
    loadCompareProducts();
});

// 加载对比产品
function loadCompareProducts() {
    const container = document.getElementById('compareContainer');
    
    try {
        const products = JSON.parse(localStorage.getItem('compareProducts') || '[]');
        
        if (products.length === 0) {
            container.innerHTML = `
                <div class="no-data" style="text-align: center; padding: 3rem;">
                    <p data-i18n="noProducts">没有选择任何产品</p>
                    <a href="index.html" class="action-btn primary" style="margin-top: 1rem; display: inline-flex;">
                        <span data-i18n="back">返回选择产品</span>
                    </a>
                </div>
            `;
            return;
        }
        
        // 确定产品类型
        const productType = products[0].type;
        
        // 构建参数列表
        const allParams = ['model', 'brand', 'tonnage', 'horsepower', 'engine', 'price'];
        if (productType === 'excavator') {
            allParams.push(...excavatorParams);
        }
        
        // 生成表格HTML
        let html = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th></th>
                        ${products.map((p, i) => `
                            <th class="product-header">
                                <span class="product-name">${p.model}</span>
                                <span class="product-brand">${p.brand}</span>
                                <button class="remove-btn" onclick="removeProduct(${i})">${t('remove') || '删除'}</button>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
        `;
        
        // 基本参数
        html += `
            <tr class="category-row">
                <td colspan="${products.length + 1}">${t('basic.label') || '基本参数'}</td>
            </tr>
        `;
        
        const basicParams = ['tonnage', 'horsepower', 'engine', 'price'];
        basicParams.forEach(param => {
            html += `
                <tr>
                    <td>${t(`specs.${param}`) || param}</td>
                    ${products.map(p => `<td>${p[param] || '-'}</td>`).join('')}
                </tr>
            `;
        });
        
        // 挖掘机特有参数
        if (productType === 'excavator') {
            const excavatorCategory = {
                label: '挖掘机参数',
                params: excavatorParams
            };
            
            html += `
                <tr class="category-row">
                    <td colspan="${products.length + 1}">${t('excavatorSpecs') || '挖掘机参数'}</td>
                </tr>
            `;
            
            excavatorParams.forEach(param => {
                html += `
                    <tr>
                        <td>${t(`specs.${param}`) || param}</td>
                        ${products.map(p => `<td>${p[param] || '-'}</td>`).join('')}
                    </tr>
                `;
            });
        }
        
        html += `
                </tbody>
            </table>
            
            <div class="actions">
                <a href="index.html" class="action-btn secondary">
                    ← <span data-i18n="backToMatrix">返回矩阵</span>
                </a>
            </div>
        `;
        
        container.innerHTML = html;
        
    } catch (e) {
        console.error('Error loading products:', e);
        container.innerHTML = `
            <div class="no-data" style="text-align: center; padding: 3rem;">
                <p>加载数据失败</p>
                <a href="index.html" class="action-btn primary" style="margin-top: 1rem; display: inline-flex;">
                    返回首页
                </a>
            </div>
        `;
    }
}

// 删除产品
function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem('compareProducts') || '[]');
    products.splice(index, 1);
    localStorage.setItem('compareProducts', JSON.stringify(products));
    loadCompareProducts();
}

// 添加多语言翻译
const originalT = window.t;
window.t = function(key) {
    // 处理特殊键
    if (key === 'basic.label') return window.t('specifications');
    if (key === 'excavatorSpecs') return window.t('excavatorSpecs') || '挖掘机参数';
    return originalT(key);
};
