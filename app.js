// 全局状态
let currentType = 'loader'; // 'loader' 或 'excavator'
let selectedProducts = []; // 已选中的产品

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTypeSwitch();
    renderMatrix();
    initCompareButton();
    initTooltip();
});

// 产品类型切换
function initTypeSwitch() {
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type === currentType) return;
            
            currentType = type;
            
            // 更新按钮状态
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 清空选择
            selectedProducts = [];
            updateSelectedCount();
            
            // 重新渲染矩阵
            renderMatrix();
        });
    });
}

// 渲染产品矩阵
function renderMatrix() {
    const tbody = document.getElementById('matrixBody');
    const groups = tonnageGroups[currentType];
    
    tbody.innerHTML = '';
    
    groups.forEach(group => {
        const row = document.createElement('tr');
        
        // 吨位列
        const tonnageCell = document.createElement('td');
        tonnageCell.textContent = group;
        row.appendChild(tonnageCell);
        
        // 各品牌列
        brands.forEach(brand => {
            const cell = document.createElement('td');
            cell.className = 'product-cell';
            
            const products = productData[currentType][group]?.[brand] || [];
            
            if (products.length === 0) {
                cell.innerHTML = '<span class="empty-cell">-</span>';
            } else {
                products.forEach((product, index) => {
                    const isSelected = selectedProducts.some(
                        p => p.brand === brand && p.model === product.model && p.type === currentType
                    );
                    
                    const item = document.createElement('div');
                    item.className = `product-item${isSelected ? ' selected' : ''}`;
                    item.dataset.brand = brand;
                    item.dataset.model = product.model;
                    item.dataset.type = currentType;
                    item.dataset.index = index;
                    
                    item.innerHTML = `
                        <div class="model-name">${product.model}</div>
                        <div class="brand-tag">${brand}</div>
                    `;
                    
                    // 点击事件 - 切换选择
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        toggleProductSelection(brand, product, currentType);
                    });
                    
                    // 悬停事件 - 显示详情
                    item.addEventListener('mouseenter', (e) => {
                        showTooltip(product, e);
                    });
                    
                    item.addEventListener('mouseleave', hideTooltip);
                    
                    cell.appendChild(item);
                });
            }
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    });
}

// 切换产品选择
function toggleProductSelection(brand, product, type) {
    const key = `${type}-${brand}-${product.model}`;
    const existingIndex = selectedProducts.findIndex(
        p => p.type === type && p.brand === brand && p.model === product.model
    );
    
    if (existingIndex >= 0) {
        selectedProducts.splice(existingIndex, 1);
    } else {
        selectedProducts.push({
            type,
            brand,
            model: product.model,
            ...product
        });
    }
    
    // 更新UI
    renderMatrix();
    updateSelectedCount();
}

// 更新选中数量显示
function updateSelectedCount() {
    const countEl = document.querySelector('.selected-count');
    const btn = document.querySelector('.compare-btn');
    
    const text = t('selected').replace('{count}', selectedProducts.length);
    countEl.textContent = text;
    
    btn.disabled = selectedProducts.length < 2;
}

// 初始化对比按钮
function initCompareButton() {
    const btn = document.querySelector('.compare-btn');
    btn.addEventListener('click', () => {
        if (selectedProducts.length < 2) return;
        openComparePage();
    });
}

// 打开对比页面
function openComparePage() {
    // 将选中产品存入 localStorage
    localStorage.setItem('compareProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('compareLang', currentLang);
    
    // 跳转到对比页面
    window.location.href = 'compare.html';
}

// 提示框
function initTooltip() {
    const tooltip = document.getElementById('tooltip');
    const nameEl = document.getElementById('tooltipName');
    const specsEl = document.getElementById('tooltipSpecs');
    
    window.showTooltip = function(product, event) {
        nameEl.textContent = product.model;
        
        let specsHTML = '';
        
        // 通用字段
        const specFields = ['tonnage', 'horsepower', 'engine', 'price'];
        
        // 挖掘机额外字段
        if (currentType === 'excavator') {
            specFields.push('bucketCapacity', 'operatingWeight', 'digDepth', 'maxReach');
        }
        
        specFields.forEach(field => {
            if (product[field]) {
                const label = t(`specs.${field}`);
                specsHTML += `<li><span class="label">${label}</span><span class="value">${product[field]}</span></li>`;
            }
        });
        
        specsEl.innerHTML = specsHTML;
        
        // 计算位置
        const rect = event.target.getBoundingClientRect();
        let left = rect.right + 10;
        let top = rect.top;
        
        // 防止溢出
        if (left + 280 > window.innerWidth) {
            left = rect.left - 290;
        }
        
        if (top + 300 > window.innerHeight) {
            top = window.innerHeight - 320;
        }
        
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.classList.add('visible');
    };
    
    window.hideTooltip = function() {
        tooltip.classList.remove('visible');
    };
}
