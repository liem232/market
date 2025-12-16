import styles from "./Filter.module.css"; // Исправлен импорт
import { useState } from "react";

function Filter() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => { setIsChecked(!isChecked); };
    const [price, setPrice] = useState(0);
    const handleChange = (newValue) => {
        setPrice(newValue);
    };
    const colors = [
        { name: 'blue', hex: '#0056b3' },
        { name: 'orange', hex: '#ff9500' },
        { name: 'black', hex: '#000000' },
        { name: 'darkGreen', hex: '#006400' },
        { name: 'grayDark', hex: '#333333' },
        { name: 'red', hex: '#ff4500' },
        { name: 'lightGray', hex: '#d3d3d3' },
        { name: 'blueGray', hex: '#666699' },
        { name: 'brown', hex: '#a52a2a' },
        { name: 'tan', hex: '#d2b48c' },
    ];
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelect = (colorName) => {
        setSelectedColor(colorName);
    };

    return (
        <div className={styles.filter}>
            <h1>Filters</h1>
            <div className={styles.refine}>
                <h2>REFINE BY</h2>
                <div className={styles.refinebut}>
                    <div className={styles.button}>Mens</div>
                    <div className={styles.button}>Casual</div>
                </div>
            </div>
            <div className={styles.size}>
                <h2>SIZE</h2>
                <nav>
                    <ul>
                        <li>38</li>
                        <li>39</li>
                        <li>40</li>
                        <li>41</li>
                        <li>42</li>
                        <li>43</li>
                        <li>44</li>
                        <li>45</li>
                        <li>46</li>
                        <li>47</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.color}>
                <h2>COLOR</h2>
                <nav>
                    <ul className={styles.colorList}>
                        {colors.map((color, index) => (
                            <li 
                                key={index} 
                                className={`${styles.colorSquare} ${selectedColor === color.name ? styles.selected : ''}`}
                                style={{ backgroundColor: color.hex }} 
                                onClick={() => handleColorSelect(color.name)}
                                title={color.name}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={styles.type}>
                <h2>TYPE</h2>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Casual shoes</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Runners</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Hiking</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Sneaker</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Basketball</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Golf</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Outdoor</label>
                </div>
            </div>
            <div className={styles.gender}>
                <h2>GENDER</h2>
                <div className={styles.genderf}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Men</label>
                </div>
                <div className={styles.genderf}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <label>Women</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;