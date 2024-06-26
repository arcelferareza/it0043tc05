document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('flexContainer');
    const maxBoxes = 10; 

    const updateFlexContainer = () => {
        flexContainer.style.justifyContent = document.getElementById('justifyContent').value;
        flexContainer.style.flexWrap = document.getElementById('flexWrap').value;
        flexContainer.style.alignItems = document.getElementById('alignItems').value;
        flexContainer.style.flexDirection = document.getElementById('flexDirection').value;
        flexContainer.style.alignContent = document.getElementById('alignContent').value;

        const gapSize = document.getElementById('gapSizeInput').value + 'px';
        const flexItems = document.querySelectorAll('.flex-item');
        flexItems.forEach(item => {
            item.style.margin = gapSize;
        });

        const flexGrow1 = document.getElementById('flexGrowInput1').value;
        const flexGrow2 = document.getElementById('flexGrowInput2').value;
        const flexGrow3 = document.getElementById('flexGrowInput3').value;

        const box1 = document.querySelector('.flex-item:nth-child(1)');
        const box2 = document.querySelector('.flex-item:nth-child(2)');
        const box3 = document.querySelector('.flex-item:nth-child(3)');

        if (box1) box1.style.flexGrow = flexGrow1;
        if (box2) box2.style.flexGrow = flexGrow2;
        if (box3) box3.style.flexGrow = flexGrow3;
    };

    const resetControls = () => {
        document.getElementById('justifyContent').value = 'flex-start';
        document.getElementById('flexWrap').value = 'nowrap';
        document.getElementById('alignItems').value = 'stretch';
        document.getElementById('flexDirection').value = 'row';
        document.getElementById('alignContent').value = 'stretch';
        document.getElementById('gapSizeInput').value = '10'; 
        document.getElementById('flexGrowInput1').value = '1'; 
        document.getElementById('flexGrowInput2').value = '1'; 
        document.getElementById('flexGrowInput3').value = '1'; 
        updateFlexContainer();
    };

    document.getElementById('justifyContent').addEventListener('change', updateFlexContainer);
    document.getElementById('flexWrap').addEventListener('change', updateFlexContainer);
    document.getElementById('alignItems').addEventListener('change', updateFlexContainer);
    document.getElementById('flexDirection').addEventListener('change', updateFlexContainer);
    document.getElementById('alignContent').addEventListener('change', updateFlexContainer);
    document.getElementById('gapSizeInput').addEventListener('input', updateFlexContainer);
    document.getElementById('flexGrowInput1').addEventListener('input', updateFlexContainer);
    document.getElementById('flexGrowInput2').addEventListener('input', updateFlexContainer);
    document.getElementById('flexGrowInput3').addEventListener('input', updateFlexContainer);

    document.getElementById('addBox').addEventListener('click', () => {
        if (flexContainer.children.length < maxBoxes) {
            const newItem = document.createElement('div');
            newItem.classList.add('flex-item');
            newItem.textContent = flexContainer.children.length + 1;
            flexContainer.appendChild(newItem);
        } else {
            alert('Maximum number of boxes reached!');
        }
    });

    document.getElementById('removeBox').addEventListener('click', () => {
        if (flexContainer.children.length > 0) {
            flexContainer.removeChild(flexContainer.lastChild);
        }
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        while (flexContainer.firstChild) {
            flexContainer.removeChild(flexContainer.firstChild);
        }
        resetControls();
    });

    document.getElementById('growAllButton').addEventListener('click', () => {
        const allFlexItems = document.querySelectorAll('.flex-item');
        allFlexItems.forEach(item => {
            item.style.flexGrow = 1;
        });

        document.getElementById('flexGrowInput1').value = '1';
        document.getElementById('flexGrowInput2').value = '1';
        document.getElementById('flexGrowInput3').value = '1';

        updateFlexContainer();
    });

    resetControls();
});
